"use client"
import PageTemplate from "@/components/PageTemplate";
import { useState } from "react";
import { FaMale,FaEye,FaEyeSlash, FaCalendarAlt, FaClipboardList, FaUser, FaHistory } from "react-icons/fa";

export default function StatusMahasiswa() {
  
  const [isIpIpk,setIsIpIpk] = useState(false)
  const [isIpTPB,setIsIpTPB] = useState(false)
  const [isNR,setIsNR] = useState(false)
  const secNav = {
    "/status-mahasiswa": [
      <FaUser className="text-seven-hyperlink" />,
      <FaUser />,
      "Status Mahasiswa",
    ],
    "/": [
      <FaHistory className="text-seven-hyperlink" />,
      <FaHistory />,
      "Transkrip Historis",
    ],
  };
  return (
    <>

    <PageTemplate breadCrumbs={[{href:null,label:'Status Mahasiswa'}]} pageTitle='Status Mahasiswa' secondarynavbars={secNav}>

      <div className="flex flex-1 flex-col xl:px-0 py-4 max-w-[1140px] mx-auto w-full h-full">
        <div className="h-[70vh] w-[100%] flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-2/6 flex flex-col items-center">
            <div className="border rounded bg-[#f9f9f9] rounded-[5px] w-full border-[#3277B2]">
              <div className="div-auto flex flex-col h-full bg-[#f9f9f9] w-full h-1/3 rounded-[5px] border-[#3277B2]">
                <div className="p-[4px] bg-[#3277B2] text-white rounded-t-[5px] flex items-center">
                  <p className="px-2 --seven-font-size-table-heading">Data Mahasiswa</p>
                </div>

                <div className="text-sm my-[2px] flex place-content-between ">
                  <div className="mx-[1px] w-1/3 text-left font-bold --seven-font-size-table-content">NIM</div>
                  <div className="w-2/3 text-left"><span className="text-sm --seven-font-size-table-content">
                    13521000
                  </span>
                  </div>
                </div>

                <div className="text-sm py-[2px] border flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold --seven-font-size-table-content">Nama</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm --seven-font-size-table-content">
                    Sepuh puh puh
                  </span>
                  <FaMale className="mr-1"></FaMale>
                  </div>
                </div>

                <div className="text-sm my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold --seven-font-size-table-content">Fakultas</div>
                  <div className="w-2/3 text-left"><span className="text-sm --seven-font-size-table-content">
                    STEI
                  </span>
                  </div>
                </div>

                <div className="text-sm py-[2px] border flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold --seven-font-size-table-content">Program Studi</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm --seven-font-size-table-content">
                    135 / Teknik Informatika
                  </span>
                  </div>
                </div>
                
                <div className="text-sm my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold --seven-font-size-table-content">Kelas</div>
                  <div className="w-2/3 text-left"><span className="text-sm --seven-font-size-table-content">
                    Ganesha
                  </span>
                  </div>
                </div>

                <div className="text-sm py-[2px] border flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold --seven-font-size-table-content">Tahun Masuk</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm --seven-font-size-table-content">
                    2021 semester 1
                  </span>
                  </div>
                </div>

                <div className="text-sm my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold --seven-font-size-table-content">Dosen Wali</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm --seven-font-size-table-content">
                    Sepuhnya Sepuh, S.T, M.A., Ph.D.
                  </span>
                  </div>
                </div>

                <div className="text-sm py-[2px] border flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold --seven-font-size-table-content">IP & IPK</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm --seven-font-size-table-content">
                    {isIpIpk?'4.00 / 4.00':null}
                  </span>
                  {isIpIpk?<FaEye className="mr-1 my-auto" onClick={()=>{setIsIpIpk(false)}}></FaEye> : <FaEyeSlash className="mr-1 my-auto" onClick={()=>{setIsIpIpk(divue)}}></FaEyeSlash>}
                  </div>
                </div>

                <div className="text-sm my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold --seven-font-size-table-content">SKS</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm --seven-font-size-table-content">
                    Lulus 144 SKS / Nilai T 0 SKS
                  </span>
                  </div>
                </div>

                <div className="text-sm py-[2px] border flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold --seven-font-size-table-content">IP TPB</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm --seven-font-size-table-content">
                    {isIpTPB?'4.00 / Lulus 36 SKS':null}
                  </span>
                  {isIpTPB?<FaEye className="mr-1 my-auto" onClick={()=>{setIsIpTPB(false)}}></FaEye> : <FaEyeSlash className="mr-1 my-auto" onClick={()=>{setIsIpTPB(divue)}}></FaEyeSlash>}
                  </div>
                </div>

                <div className="text-sm my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold --seven-font-size-table-content">NR (2-2023-2025)</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm --seven-font-size-table-content">
                    {isNR?'4.00 / 24 SKS':null}
                  </span>
                  {isNR?<FaEye className="mr-1 my-auto" onClick={()=>{setIsNR(false)}}></FaEye> : <FaEyeSlash className="mr-1 my-auto" onClick={()=>{setIsNR(divue)}}></FaEyeSlash>}
                  </div>
                </div>
              </div>
            </div>
            <div className="border w-full rounded rounded-[5px] border-[#3277B2] my-[16px]">
              <div className="div-auto flex flex-col h-full w-full h-1/3 rounded-[5px] border-[#3277B2]">
                <div className="p-[4px] h-full bg-[#3277B2] text-white rounded-t-[5px] flex items-center">
                  <p className="px-2 --seven-font-size-table-heading">Links</p>
                </div>
                <div className="text-center h-full w-full flex flex-col justify-center items-center ">
                  <div className="w-4/5 py-2 text-left h-full --seven-font-size-table-content">
                        <ul className="list-disc --seven-font-size-table-content">
                          <li className="underline-offset-2 --seven-font-size-table-content">
                            <a href="/jadwal" className="underline-offset-2 --seven-font-size-table-content">Jadwal Perkuliahan</a>
                          </li>
                          <li className="underline-offset-2 --seven-font-size-table-content">
                            <a className="underline-offset-2 --seven-font-size-table-content">Pengkinian Data Induk Mahasiswa</a>
                          </li>
                          <li className="underline-offset-2 --seven-font-size-table-content">
                            <a className="underline-offset-2 --seven-font-size-table-content">Status Keuangan & Beasiswa</a>
                          </li>
                          <li className="underline-offset-2 --seven-font-size-table-content">
                            <a className="underline-offset-2 --seven-font-size-table-content">Transkrip Posisi Kurikulum</a>
                          </li>
                          <li className="underline-offset-2 --seven-font-size-table-content">
                            <a className="underline-offset-2 --seven-font-size-table-content">Transkrip Historis</a>
                          </li>
                          <li className="underline-offset-2 --seven-font-size-table-content">
                            <a className="underline-offset-2 --seven-font-size-table-content">Kartu Tanda Mahasiswa (KTM)</a>
                          </li>
                          <li className="underline-offset-2 --seven-font-size-table-content">
                            <a className="underline-offset-2 --seven-font-size-table-content">PDDikti</a>
                          </li>
                        </ul>
                  </div>
                </div>

              </div>
            </div>

            <img src="./qr.png" className="w-[140px] h-[140px]"/>
          </div>

          <div className="mb-10 w-full lg:w-4/6 px-2 flex flex-col">
          <div className="border rounded bg-[#f9f9f9] rounded-[5px] w-full border-[#3277B2]">
              <div className="div-auto flex flex-col h-full bg-[#f9f9f9] w-full h-1/3 rounded-[5px] border-[#3277B2]">
                <div className="p-[4px] bg-[#3277B2] text-white rounded-t-[5px] flex items-center">
                  <p className="px-2 --seven-font-size-table-heading">Daftar Kuliah Semester 1-2023/2024</p>
                </div>

                <div className="text-sm my-[2px] flex w-full">
                  <div className="w-[15px]">
                  </div>
                  <div className="w-2/24 font-bold">
                    Kode
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
    </>
  );
}
