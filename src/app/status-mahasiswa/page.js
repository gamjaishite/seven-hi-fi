"use client"

import PageTemplate from "@/components/PageTemplate";
import { useState } from "react";
import { FaMale,FaEye,FaEyeSlash } from "react-icons/fa";

export default function StatusMahasiswa() {
  
  const [isIpIpk,setIsIpIpk] = useState(false)
  const [isIpTPB,setIsIpTPB] = useState(false)
  const [isNR,setIsNR] = useState(false)

  return (
    <>

    <PageTemplate breadCrumbs={[{href:null,label:'Status Mahasiswa'}]} pageTitle='Status Mahasiswa'>

      <div className="flex flex-1 flex-col xl:px-0 py-5 max-w-[1140px] mx-auto w-full h-full">
        <div className="h-[70vh] w-[100%] flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-2/6 flex flex-col px-2 items-center">
            <div className="border rounded bg-[#EDEDED] rounded-[5px] w-full border-[#3277B2]">
              <div className="div-auto flex flex-col bg-[#EDEDED] w-full h-1/3 rounded-[5px] border-[#3277B2]">
                <div className="p-[4px] h-full bg-[#3277B2] text-white rounded-t-[5px] flex items-center">
                  <p className="px-2 --sevent-font-size-table-heading">Data Mahasiswa</p>
                </div>

                <div className="text-sm my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold">NIM</div>
                  <div className="w-2/3 text-left"><span className="text-sm font-normal">
                    13521000
                  </span>
                  </div>
                </div>

                <div className="text-sm my-[2px] flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold">Nama</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm font-normal">
                    Sepuh puh puh
                  </span>
                  <FaMale className="mr-1"></FaMale>
                  </div>
                </div>

                <div className="text-sm my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold">Fakultas</div>
                  <div className="w-2/3 text-left"><span className="text-sm font-normal">
                    STEI
                  </span>
                  </div>
                </div>

                <div className="text-sm my-[2px] flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold">Program Studi</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm font-normal">
                    135 / Teknik Informatika
                  </span>
                  </div>
                </div>
                
                <div className="text-sm my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold">Kelas</div>
                  <div className="w-2/3 text-left"><span className="text-sm font-normal">
                    Ganesha
                  </span>
                  </div>
                </div>

                <div className="text-sm my-[2px] flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold">Tahun Masuk</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm font-normal">
                    2021 semester 1
                  </span>
                  </div>
                </div>

                <div className="text-sm my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold">Dosen Wali</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm font-normal">
                    Sepuhnya Sepuh, S.T, M.A., Ph.D.
                  </span>
                  </div>
                </div>

                <div className="text-sm my-[2px] flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold">IP & IPK</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm font-normal">
                    {isIpIpk?'4.00 / 4.00':null}
                  </span>
                  {isIpIpk?<FaEye className="mr-1 my-auto" onClick={()=>{setIsIpIpk(false)}}></FaEye> : <FaEyeSlash className="mr-1 my-auto" onClick={()=>{setIsIpIpk(divue)}}></FaEyeSlash>}
                  </div>
                </div>

                <div className="text-sm my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold">SKS</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm font-normal">
                    Lulus 144 SKS / Nilai T 0 SKS
                  </span>
                  </div>
                </div>

                <div className="text-sm my-[2px] flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold">IP TPB</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm font-normal">
                    {isIpTPB?'4.00 / Lulus 36 SKS':null}
                  </span>
                  {isIpTPB?<FaEye className="mr-1 my-auto" onClick={()=>{setIsIpTPB(false)}}></FaEye> : <FaEyeSlash className="mr-1 my-auto" onClick={()=>{setIsIpTPB(divue)}}></FaEyeSlash>}
                  </div>
                </div>

                <div className="text-sm my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold">NR (2-2023-2025)</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-sm font-normal">
                    {isNR?'4.00 / 24 SKS':null}
                  </span>
                  {isNR?<FaEye className="mr-1 my-auto" onClick={()=>{setIsNR(false)}}></FaEye> : <FaEyeSlash className="mr-1 my-auto" onClick={()=>{setIsNR(divue)}}></FaEyeSlash>}
                  </div>
                </div>
              </div>
            </div>
            <div className="border w-full rounded bg-[#EDEDED] rounded-[5px] border-[#3277B2] my-[22px]">
              <div className="div-auto flex flex-col bg-[#EDEDED] w-full h-1/3 rounded-[5px] border-[#3277B2]">
                <div className="p-[4px] h-full bg-[#3277B2] text-white rounded-t-[5px] flex items-center">
                  <p className="px-2 text-xl">Links</p>
                </div>
                <div className="text-center h-full w-full flex flex-col justify-center items-center ">
                  <div className="w-4/5 py-2 text-left h-full">
                        <ul className="list-disc">
                          <li>
                            <a href="/jadwal" className="underline-offset-2">Jadwal Perkuliahan</a>
                          </li>
                          <li>
                            <a className="underline-offset-2">Pengkinian Data Induk Mahasiswa</a>
                          </li>
                          <li>
                            <a className="underline-offset-2">Status Keuangan & Beasiswa</a>
                          </li>
                          <li>
                            <a className="underline-offset-2">Transkrip Posisi Kurikulum</a>
                          </li>
                          <li>
                            <a className="underline-offset-2">Transkrip Historis</a>
                          </li>
                          <li>
                            <a className="underline-offset-2">Kartu Tanda Mahasiswa (KTM)</a>
                          </li>
                          <li>
                            <a>PDDikti</a>
                          </li>
                        </ul>
                  </div>
                </div>

              </div>
            </div>

            <img src="./qr.png" className="w-[140px] h-[140px]"/>
          </div>

          <div className="bg-blue-500 w-full lg:w-4/6 px-2">
            <div className="h-1/4 bg-black mb-2">
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
    </PageTemplate>
    </>
  );
}
