import Link from "next/link";

export default function Home() {
  const links = [
    "/status-mahasiswa",
    "/kalender",
    "/daftar-mata-kuliah",
  ];
  return (
    <main className="mx-auto flex w-full max-w-[1140px] flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold uppercase">Seven</h1>
      <div className="flex flex-wrap items-center gap-4">
        {links.map((link, index) => (
          <Link
            href={link}
            className="rounded-xl bg-zinc-100 px-3 py-1 text-sm text-zinc-600 hover:bg-zinc-200"
            key={link}
          >
            {link}
          </Link>
        ))}
      </div>
    </main>
  );
}
