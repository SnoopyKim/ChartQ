"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@utils/supabase/client";
import { type User } from "@supabase/supabase-js";
import Avatar from "./avatar";
import { PrimaryButton } from "@components/button";
import { TextField } from "@components/input";

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        console.log(error);
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      console.error(error);
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string | null;
    website: string | null;
    avatar_url: string | null;
  }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col w-80 gap-4 items-stretch">
      <div className="flex justify-center">
        <Avatar
          uid={user?.id ?? null}
          url={avatar_url}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url);
            updateProfile({ username, website, avatar_url: url });
          }}
        />
      </div>
      <TextField
        label="Email"
        id="email"
        type="email"
        value={user?.email}
        disabled
      />
      <TextField
        label="Username"
        id="username"
        type="text"
        value={username || ""}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Website"
        id="website"
        type="url"
        value={website || ""}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <PrimaryButton
        onClick={() => updateProfile({ username, website, avatar_url })}
        disabled={loading}
      >
        {loading ? "Loading ..." : "Update"}
      </PrimaryButton>
      <form action="/auth/signout" method="post">
        <PrimaryButton type="submit" className="w-full">
          Sign out
        </PrimaryButton>
      </form>
    </div>
  );
}
