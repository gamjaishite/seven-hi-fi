import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 flex-1 items-center justify-center max-w-[1140px] mx-auto w-full">
      <h1 className="text-6xl font-bold uppercase">Seven</h1>
      <Link
        href="/jadwal"
        className="py-1 px-3 rounded-xl bg-zinc-100 text-zinc-600 text-sm hover:bg-zinc-200"
      >
        /jadwal
      </Link>
    </main>
  );
}
