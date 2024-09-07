export default function Home() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Default Text Color</h2>
        <h2 className="text-2xl font-bold text-gray">Light Text Color</h2>
        <h2 className="text-2xl font-bold text-primary">Primary Color</h2>
        <h2 className="text-2xl font-bold text-accent">Accent Color</h2>
        <h2 className="text-2xl font-bold text-success">Success Color</h2>
        <h2 className="text-2xl font-bold text-error">Error Color</h2>
      </div>
    </div>
  );
}
