import BreadcrumbStatusMahasiswa from "@/components/BreadcrumbStatusMahasiswa";
import Footer from "@/components/Footer";
import { FaMale } from "react-icons/fa";

export default function StatusMahasiswa() {
  return (
    <>
      <div className="flex flex-1 flex-col px-4 gap-4 xl:px-0 py-5 max-w-[1140px] mx-auto w-full h-full">
        <BreadcrumbStatusMahasiswa />
        <h2 className="text-4xl text-seven-page-heading font-light py-1">
          Status Mahasiswa
        </h2>
        <div className="h-[60vh] w-[100%] flex flex-col lg:flex-row  gap-2">
          <div className="bg-gray-300 w-full lg:w-2/6 flex flex-col p-2">
            <table className="table-auto h-1/3 ">
            <div className="border rounded bg-[#EDEDED] rounded-[5px] border-[#3277B2]">
              <div className="h-[38.58px] h-full bg-[#3277B2] text-white rounded-t-[5px] flex items-center">
                <p className="px-2 text-xl">Data Mahasiswa</p>
              </div>

              <tr className="flex place-content-between">
                <th className="w-full text-left">NIM</th>
                <th className="w-full text-left"><span className="text-sm font-normal">
                  13521000
                </span>
                </th>
              </tr>

              <tr className="flex place-content-between bg-white">
                <th className="w-full text-left">Nama</th>
                <th className="w-full text-left flex place-content-between"><span className="text-sm font-normal">
                  Sepuh puh puh
                </span>
                <FaMale></FaMale>
                </th>
              </tr>

              <tr className="flex place-content-between">
                <th className="w-full text-left">Fakultas</th>
                <th className="w-full text-left"><span className="text-sm font-normal">
                  STEI
                </span>
                </th>
              </tr>

              <tr className="flex place-content-between bg-white">
                <th className="w-full text-left">Program Studi</th>
                <th className="w-full text-left flex place-content-between"><span className="text-sm font-normal">
                  135 / Teknik Informatika
                </span>
                </th>
              </tr>
              
              <tr className="flex place-content-between">
                <th className="w-full text-left">Kelas</th>
                <th className="w-full text-left"><span className="text-sm font-normal">
                  Ganehsa
                </span>
                </th>
              </tr>
            </div>
            </table>
            <div>
              dwadwa
            </div>
          </div>
          <div className="bg-blue-500 w-full lg:w-4/6 px-2">
            <div className="h-1/4 bg-black my-2">
              dwadwa
            </div>
            <div className="h-1/4 bg-black my-2">
              dwad
            </div>
            <div className="h-1/4 bg-black my-2">
              dawd
            </div>
          </div>
        </div>
      </div>
      
      <Footer></Footer>
    </>
  );
}
