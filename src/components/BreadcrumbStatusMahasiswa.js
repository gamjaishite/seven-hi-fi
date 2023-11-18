import { ChevronsRight } from "lucide-react";

export default function BreadcrumbStatusMahasiswa() {
  return (
    <>
      <div className="w-full px-4 py-2 rounded-md flex gap-2 bg-[#f5f5f5] items-center text-sm">
        <a href="/">SIX</a>
        <span>
          <ChevronsRight className="text-[#ccc]" size={10} />
        </span>
        <span>Jadwal Perkuliahan Mahasiswa</span>
      </div>
    </>
  );
}
