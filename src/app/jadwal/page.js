import Breadcrumb from "@/components/Breadcrumb";
import PageTemplate from "@/components/PageTemplate";

export default function Jadwal() {
  const breadCrumbItems = [
    { href: "/", label: "Kelas" },
    { href: null, label: "Jadwal Perkuliahan Mahasiswa" },
  ];
  return (
    <PageTemplate
      breadCrumbs={breadCrumbItems}
      pageTitle="Jadwal Perkuliahan Mahasiswa"
    ></PageTemplate>
  );
}
