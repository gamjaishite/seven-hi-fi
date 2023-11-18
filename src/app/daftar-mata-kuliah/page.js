import SecondaryNavbar from "@/components/SecondNavBar";

const { default: PageTemplate } = require("@/components/PageTemplate")

const DaftarMataKuliah = () => {
    return ( 
        <PageTemplate pageTitle='Status Mahasiswa' breadCrumbs={[{href: '/daftar-mata-kuliah', label: 'Daftar Mata Kuliah'}]}>
        </PageTemplate>
    );
}
 
export default DaftarMataKuliah;