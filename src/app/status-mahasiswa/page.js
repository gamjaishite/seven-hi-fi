import BreadcrumbStatusMahasiswa from "@/components/BreadcrumbStatusMahasiswa";
import Footer from "@/components/Footer";

export default function StatusMahasiswa() {
  return (
    <>
      <div className="flex flex-1 flex-col px-4 gap-4 xl:px-0 py-5 max-w-[1140px] mx-auto w-full">
        <BreadcrumbStatusMahasiswa />
        <h2 className="text-4xl text-seven-page-heading font-light py-1">
          Status Mahasiswa
        </h2>
      </div>
      
      <Footer></Footer>
    </>
  );
}
