import BreadcrumbStatusMahasiswa from "@/components/BreadcrumbStatusMahasiswa";
import Footer from "@/components/Footer";
import PageTemplate from "@/components/PageTemplate";

export default function StatusMahasiswa() {
  return (
    <>
      <PageTemplate pageTitle='Status Mahasiswa' breadCrumbs={[{href: '/', label: 'Jadwal Perkuliahan Mahasiswa'}]}>
      </PageTemplate>
    </>
  );
}
