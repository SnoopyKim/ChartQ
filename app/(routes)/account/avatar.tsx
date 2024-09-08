"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@utils/supabase/client";
import Image from "next/image";

export default function Avatar({
  uid,
  url,
  size,
  onUpload,
}: {
  uid: string | null;
  url: string | null;
  size: number;
  onUpload: (url: string) => void;
}) {
  const supabase = createClient();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(url);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path);
        if (error) {
          throw error;
        }

        const url = URL.createObjectURL(data);
        setAvatarUrl(url);
      } catch (error) {
        console.log("Error downloading image: ", error);
      }
    }

    if (url) downloadImage(url);
  }, [url, supabase]);

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${uid}-${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert("Error uploading avatar!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {avatarUrl ? (
        <Image
          width={size}
          height={size}
          src={avatarUrl}
          alt="Avatar"
          className="rounded-full"
          style={{ height: size, width: size }}
        />
      ) : (
        <svg
          viewBox="0 0 37 37"
          width={size}
          height={size}
          className="fill-gray"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.6475 3.29688C10.3675 3.29688 3.64746 10.0169 3.64746 18.2969C3.64746 26.5769 10.3675 33.2969 18.6475 33.2969C26.9275 33.2969 33.6475 26.5769 33.6475 18.2969C33.6475 10.0169 26.9275 3.29688 18.6475 3.29688ZM28.1875 25.5419C26.0425 22.9319 20.8375 22.0469 18.6475 22.0469C16.4575 22.0469 11.2525 22.9319 9.10746 25.5419C7.57746 23.5319 6.64746 21.0269 6.64746 18.2969C6.64746 11.6819 12.0325 6.29688 18.6475 6.29688C25.2625 6.29688 30.6475 11.6819 30.6475 18.2969C30.6475 21.0269 29.7175 23.5319 28.1875 25.5419ZM13.3975 14.5469C13.3975 11.6369 15.7375 9.29688 18.6475 9.29688C21.5575 9.29688 23.8975 11.6369 23.8975 14.5469C23.8975 17.4569 21.5575 19.7969 18.6475 19.7969C15.7375 19.7969 13.3975 17.4569 13.3975 14.5469Z"
          />
        </svg>
      )}
      <div style={{ width: size }} className="flex justify-center mt-2">
        <label
          className="rounded px-2 py-1 bg-primary cursor-pointer"
          htmlFor="avatar-upload"
        >
          {uploading ? "Uploading ..." : "Upload"}
        </label>
        <input
          type="file"
          id="avatar-upload"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
          className="hidden absolute"
        />
      </div>
    </div>
  );
}
