import Breadcrumb from "@/components/Breadcrumb";

export default function Jadwal() {
  return (
    <>
      <div className="flex flex-1 flex-col px-4 gap-4 xl:px-0 py-5 max-w-[1140px] mx-auto w-full">
        <Breadcrumb />
        <h2 className="text-4xl text-[#003366] font-light py-1">
          Jadwal Perkuliahan Mahasiswa
        </h2>
      </div>
    </>
  );
}
