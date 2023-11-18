import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const links = ["/status-mahasiswa", "/jadwal"];
  return (
    <main className="flex flex-col gap-4 flex-1 items-center justify-center max-w-[1140px] mx-auto w-full">
      <h1 className="text-6xl font-bold uppercase">Seven</h1>
      <div className="flex items-center gap-4 flex-wrap">
        {links.map((link, index) => (
          <Link
            href={link}
            className="py-1 px-3 rounded-xl bg-zinc-100 text-zinc-600 text-sm hover:bg-zinc-200"
            key={index}
          >
            {link}
          </Link>
        ))}
      </div>
    </main>
  );
}
