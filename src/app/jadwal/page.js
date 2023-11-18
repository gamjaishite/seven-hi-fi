import Breadcrumb from "@/components/Breadcrumb";
import { FaYinYang } from "react-icons/fa";

export default function Jadwal() {
  return (
      <div className="flex flex-1 flex-col px-4 gap-4 xl:px-0 py-5 max-w-[1140px] mx-auto w-full">
        <Breadcrumb />
        <h2 className="text-seven-font-size-page-title text-seven-page-heading font-light py-1">
          Jadwal Perkuliahan Mahasiswa
        </h2>
      </div>
  );
}