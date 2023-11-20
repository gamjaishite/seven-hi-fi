"use client"
import PageTemplate from "@/components/PageTemplate";
import { useState } from "react";
import { FaMale,FaEye,FaEyeSlash, FaCalendarAlt, FaClipboardList, FaUser, FaHistory } from "react-icons/fa";

const statusPendaftaran = [
  {Tahun:2023, Semester:'1 - Ganjil', Status:'Sudah Daftar', '#MK':8, SKS:24},
  {Tahun:2022, Semester:'3 - Pendek', Status:'Belum Daftar', '#MK':'-', SKS:'-'},
  {Tahun:2022, Semester:'2 - Genap', Status:'Sudah Daftar', '#MK':8, SKS:24},
  {Tahun:2022, Semester:'1 - Ganjil', Status:'Sudah Daftar', '#MK':8, SKS:24},
  {Tahun:2022, Semester:'3 - Pendek', Status:'Belum Daftar', '#MK':'-', SKS:'-'},
  {Tahun:2022, Semester:'2 - Genap', Status:'Sudah Daftar', '#MK':8, SKS:24},
  {Tahun:2022, Semester:'1 - Ganjil', Status:'Sudah Daftar', '#MK':8, SKS:24},
]

const DaftarKuliah = [
  {Kode:'IF3110', MataKuliah:'Pengembangan Aplikasi Berbasis Web', Kelas:'02', SKS:4, Kehadiran:'100%', Nilai:null},
  {Kode:'IF3110', MataKuliah:'Pengembangan Aplikasi Berbasis Web', Kelas:'02', SKS:4, Kehadiran:'100%', Nilai:null},
  {Kode:'IF3110', MataKuliah:'Pengembangan Aplikasi Berbasis Web', Kelas:'02', SKS:4, Kehadiran:'100%', Nilai:null},
  {Kode:'IF3110', MataKuliah:'Pengembangan Aplikasi Berbasis Web', Kelas:'02', SKS:4, Kehadiran:'100%', Nilai:null},
  {Kode:'IF3110', MataKuliah:'Pengembangan Aplikasi Berbasis Web', Kelas:'02', SKS:4, Kehadiran:'100%', Nilai:null},
  {Kode:'IF3110', MataKuliah:'Pengembangan Aplikasi Berbasis Web', Kelas:'02', SKS:4, Kehadiran:'100%', Nilai:null},
]
export default function StatusMahasiswa() {
  
  const [isIpIpk,setIsIpIpk] = useState(false)
  const [isIpTPB,setIsIpTPB] = useState(false)
  const [isNR,setIsNR] = useState(false)
  const [isIMG,setIsIMG] = useState(false)
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
        <div className="h-full w-[100%] flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-2/6 flex flex-col items-center">
            <div className="border rounded bg-[#f9f9f9] rounded-[5px] w-full border-[#3277B2]">
              <div className="div-auto flex flex-col h-full bg-[#f9f9f9] w-full h-1/3 rounded-[5px] border-[#3277B2 text-seven-font-size-table-content]">
                <div className="py-[10px] px-[15px] bg-seven-bg-table-heading text-white rounded-t-[5px] flex items-center">
                  <p className="text-seven-font-size-table-heading">Data Mahasiswa</p>
                </div>

                <div className="text-seven-font-size-table-content my-[2px] flex place-content-between ">
                  <div className="mx-[1px] w-1/3 text-left font-bold text-seven-font-size-table-content">NIM</div>
                  <div className="w-2/3 text-left"><span className="text-seven-font-size-table-content">
                    13521000
                  </span>
                  </div>
                </div>

                <div className="text-seven-font-size-table-content py-[2px] border flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold text-seven-font-size-table-content">Nama</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                    Sepuh puh puh
                  </span>
                  <FaMale className="mr-1"></FaMale>
                  </div>
                </div>

                <div className="text-seven-font-size-table-content my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold text-seven-font-size-table-content">Fakultas</div>
                  <div className="w-2/3 text-left"><span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                    STEI
                  </span>
                  </div>
                </div>

                <div className="text-seven-font-size-table-content py-[2px] border flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold text-seven-font-size-table-content">Program Studi</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                    135 / Teknik Informatika
                  </span>
                  </div>
                </div>
                
                <div className="text-seven-font-size-table-content my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold text-seven-font-size-table-content">Kelas</div>
                  <div className="w-2/3 text-left"><span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                    Ganesha
                  </span>
                  </div>
                </div>

                <div className="text-seven-font-size-table-content py-[2px] border flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold text-seven-font-size-table-content">Tahun Masuk</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                    2021 semester 1
                  </span>
                  </div>
                </div>

                <div className="text-seven-font-size-table-content my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold text-seven-font-size-table-content">Dosen Wali</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                    Sepuhnya Sepuh, S.T, M.A., Ph.D.
                  </span>
                  </div>
                </div>

                <div className="text-seven-font-size-table-content py-[2px] border flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold text-seven-font-size-table-content">IP & IPK</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                    {isIpIpk?'4.00 / 4.00':null}
                  </span>
                  {isIpIpk?<FaEye className="mr-1 my-auto" onClick={()=>{setIsIpIpk(false)}}></FaEye> : <FaEyeSlash className="mr-1 my-auto" onClick={()=>{setIsIpIpk(true)}}></FaEyeSlash>}
                  </div>
                </div>

                <div className="text-seven-font-size-table-content my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold text-seven-font-size-table-content">SKS</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                    Lulus 144 SKS / Nilai T 0 SKS
                  </span>
                  </div>
                </div>

                <div className="text-seven-font-size-table-content py-[2px] border flex place-content-between bg-white">
                  <div className="mx-[1px] w-1/3 text-left font-bold text-seven-font-size-table-content">IP TPB</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                    {isIpTPB?'4.00 / Lulus 36 SKS':null}
                  </span>
                  {isIpTPB?<FaEye className="mr-1 my-auto" onClick={()=>{setIsIpTPB(false)}}></FaEye> : <FaEyeSlash className="mr-1 my-auto" onClick={()=>{setIsIpTPB(true)}}></FaEyeSlash>}
                  </div>
                </div>

                <div className="text-seven-font-size-table-content my-[2px] flex place-content-between">
                  <div className="mx-[1px] w-1/3 text-left font-bold text-seven-font-size-table-content">NR (2-2023-2025)</div>
                  <div className="w-2/3 text-left flex place-content-between"><span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                    {isNR?'4.00 / 24 SKS':null}
                  </span>
                  {isNR?<FaEye className="mr-1 my-auto" onClick={()=>{setIsNR(false)}}></FaEye> : <FaEyeSlash className="mr-1 my-auto" onClick={()=>{setIsNR(true)}}></FaEyeSlash>}
                  </div>
                </div>
              </div>
            </div>
            <div className="border w-full rounded rounded-[5px] border-[#3277B2] my-[16px]">
              <div className="div-auto flex flex-col h-full w-full h-1/3 rounded-[5px] border-[#3277B2]">
                <div className="py-[10px] px-[15px] h-full bg-seven-bg-table-heading text-white rounded-t-[5px] flex items-center">
                  <p className="text-seven-font-size-table-heading">Links</p>
                </div>
                <div className="text-center h-full w-full flex flex-col justify-center items-center ">
                  <div className="px-14 w-full pt-5 pb-6 text-left h-full text-[15px]">
                        <ul className="list-disc">
                          <li className="cursor-pointer">
                            <a href="/jadwal" className="hover:underline hover:text-seven-hyperlink">Jadwal Perkuliahan</a>
                          </li>
                          <li className="hover:underline cursor-pointer">
                            <a className="cursor-pointer">Pengkinian Data Induk Mahasiswa</a>
                          </li>
                          <li className="hover:underline cursor-pointer">
                            <a className="cursor-pointer">Status Keuangan & Beasiswa</a>
                          </li>
                          <li className="hover:underline cursor-pointer">
                            <a className="cursor-pointer">Transkrip Posisi Kurikulum</a>
                          </li>
                          <li className="hover:underline cursor-pointer">
                            <a className="cursor-pointert">Transkrip Historis</a>
                          </li>
                          <li className="hover:underline cursor-pointer">
                            <a className="cursor-pointer">Kartu Tanda Mahasiswa (KTM)</a>
                          </li>
                          <li className="hover:underline cursor-pointer">
                            <a className="cursor-pointer">PDDikti</a>
                          </li>
                        </ul>
                  </div>
                </div>

              </div>
            </div>

            <img src="./qr.png" className="w-[140px] h-[140px]"/>
          </div>

          <div className="mb-10 w-full lg:w-4/6 flex flex-col">
            <div className="flex flex-col md:flex-row mb-5 md:mb-0">
              <div className="border flex-col flex rounded bg-[#f9f9f9] rounded-[5px] w-full md:w-10/12 border-[#3277B2] mb-5">
                  <div className="py-[10px] px-[15px] bg-seven-bg-table-heading text-white w-full rounded-t-[5px] flex items-center">
                    <p className="text-seven-font-size-table-heading">Daftar Kuliah Semester 1-2023/2024</p>
                  </div>
                <div className="overflow-x-auto">

                <div className="div-auto flex flex-col h-full bg-[#f9f9f9] min-w-[450px] w-full h-1/3 rounded-[5px] border-[#3277B2]">
          
                  <div className="text-seven-font-size-table-content my-[2px] flex w-full text-seven-font-size-table-content">
                    <div className="w-[15px]">
                    </div>
                    <div className="w-1/12 font-bold ">
                      Kode
                    </div>
                    <div className="w-7/12 font-bold ml-2">
                      Mata Kuliah
                    </div>
                    <div className="w-1/12 font-bold text-center">
                      Kelas
                    </div>
                    <div className="w-1/12 font-bold text-center">
                      SKS
                    </div>
                    <div className="w-2/12 font-bold text-right">
                      Kehadiran
                    </div>
                    <div className="w-1/12 font-bold text-center">
                      Nilai
                    </div>
                  </div>

                  {DaftarKuliah.map((data,index)=>{
                    return(
                      <div key={index} className={((index % 2) === 0)? "text-seven-font-size-table-content py-[2px] flex w-full text-left bg-white border" : "text-seven-font-size-table-content py-[2px] flex w-full bg-white border"}>
                        <div className="w-[15px] font-bold text-center">
                          {index+1}
                        </div>
                        <div className="w-1/12">
                          {data.Kode}
                        </div>
                        <div className="w-7/12 ml-2">
                          {data.MataKuliah}
                        </div>
                        <div className="w-1/12 text-center">
                          {data.Kelas}
                        </div>
                        <div className="w-1/12 text-center">
                          {data.SKS}
                        </div>
                        <div className="w-2/12 text-right">
                          {data.Kehadiran}
                        </div>
                        <div className="w-1/12 text-center">
                          
                        </div>
                      </div>
                    )
                  })}




                </div>
                </div>
              </div>
              <div className="md:w-2/12 md:pl-5">
                <div className="border rounded-[5px] p-1">
                    <img src="./pasfoto.png" className="rounded-[3px]"></img>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="border rounded bg-[#f9f9f9] rounded-[5px] w-full border-[#3277B2] h-fit">
                  <div className="py-[10px] px-[15px] bg-seven-bg-table-heading text-white rounded-t-[5px] flex items-center w-full place-content-between">
                    <p className=" text-seven-font-size-table-heading">Perkembangan Hasil Studi</p>
                    {isIMG?<FaEye className="" onClick={()=>{setIsIMG(false)}}></FaEye> : <FaEyeSlash onClick={()=>{setIsIMG(true)}} className=""></FaEyeSlash>}
                  </div>
                  <div className="overflow-x-auto">

                <div className="div-auto flex flex-col bg-[#f9f9f9] w-full rounded-[5px] border-[#3277B2]">

                  <div className="text-seven-font-size-table-content py-[2px] flex w-full bg-white border min-w-[300px]">
                    {isIMG && <img className="w-full" src="./Screenshot_93.jpg"></img>}
                  </div>
                  </div>
                </div>
              </div>
              <div className="border flex flex-col rounded bg-[#f9f9f9] rounded-[5px] w-full border-[#3277B2]  h-fit">
                  <div className="py-[10px] px-[15px] bg-seven-bg-table-heading text-white rounded-t-[5px] flex items-center w-full">
                    <p className="text-seven-font-size-table-heading">Status Pendaftaran</p>
                  </div>
                  <div className="overflow-x-auto">

                <div className="div-auto flex flex-col bg-[#f9f9f9] w-full rounded-[5px] border-[#3277B2] min-w-[300px]">

                  <div className="text-seven-font-size-table-content my-[2px] flex w-full text-left px-1">
                    <div className="w-1/6 font-bold">
                      Tahun
                    </div>
                    <div className="w-2/6 font-bold">
                      Semester
                    </div>
                    <div className="w-2/6 font-bold">
                      Status
                    </div>
                    <div className="w-1/6 font-bold">
                      #MK
                    </div>
                    <div className="w-1/6 font-bold">
                      SKS
                    </div>
                  </div>
                  
                  {statusPendaftaran.map((data,index)=>{
                    return(
                    <div key={index} className={((index % 2) === 0)? "text-seven-font-size-table-content py-[2px] flex w-full text-left px-1 bg-white border" : "text-seven-font-size-table-content my-[2px] flex w-full text-left px-1"}>
                      <div className="w-1/6">
                        {data.Tahun}
                      </div>
                      <div className="w-2/6">
                        {data.Semester}
                      </div>
                      <div className="w-2/6">
                        {data.Status}
                      </div>
                      <div className="w-1/6">
                        {data["#MK"]}
                      </div>
                      <div className="w-1/6">
                        {data.SKS}
                      </div>
                    </div>
                    )
                  })}


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
