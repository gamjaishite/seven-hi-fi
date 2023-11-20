"use client";
import PageTemplate from "@/components/PageTemplate";
import { useState } from "react";
import {
  FaMale,
  FaEye,
  FaEyeSlash,
  FaCalendarAlt,
  FaClipboardList,
  FaUser,
  FaHistory,
} from "react-icons/fa";

const statusPendaftaran = [
  {
    Tahun: 2023,
    Semester: "1 - Ganjil",
    Status: "Sudah Daftar",
    "#MK": 8,
    SKS: 24,
  },
  {
    Tahun: 2022,
    Semester: "3 - Pendek",
    Status: "Belum Daftar",
    "#MK": "-",
    SKS: "-",
  },
  {
    Tahun: 2022,
    Semester: "2 - Genap",
    Status: "Sudah Daftar",
    "#MK": 8,
    SKS: 24,
  },
  {
    Tahun: 2022,
    Semester: "1 - Ganjil",
    Status: "Sudah Daftar",
    "#MK": 8,
    SKS: 24,
  },
  {
    Tahun: 2022,
    Semester: "3 - Pendek",
    Status: "Belum Daftar",
    "#MK": "-",
    SKS: "-",
  },
  {
    Tahun: 2022,
    Semester: "2 - Genap",
    Status: "Sudah Daftar",
    "#MK": 8,
    SKS: 24,
  },
  {
    Tahun: 2022,
    Semester: "1 - Ganjil",
    Status: "Sudah Daftar",
    "#MK": 8,
    SKS: 24,
  },
];

const DaftarKuliah = [
  {
    Kode: "IF3110",
    MataKuliah: "Pengembangan Aplikasi Berbasis Web",
    Kelas: "02",
    SKS: 4,
    Kehadiran: "100%",
    Nilai: null,
  },
  {
    Kode: "IF3110",
    MataKuliah: "Pengembangan Aplikasi Berbasis Web",
    Kelas: "02",
    SKS: 4,
    Kehadiran: "100%",
    Nilai: null,
  },
  {
    Kode: "IF3110",
    MataKuliah: "Pengembangan Aplikasi Berbasis Web",
    Kelas: "02",
    SKS: 4,
    Kehadiran: "100%",
    Nilai: null,
  },
  {
    Kode: "IF3110",
    MataKuliah: "Pengembangan Aplikasi Berbasis Web",
    Kelas: "02",
    SKS: 4,
    Kehadiran: "100%",
    Nilai: null,
  },
  {
    Kode: "IF3110",
    MataKuliah: "Pengembangan Aplikasi Berbasis Web",
    Kelas: "02",
    SKS: 4,
    Kehadiran: "100%",
    Nilai: null,
  },
  {
    Kode: "IF3110",
    MataKuliah: "Pengembangan Aplikasi Berbasis Web",
    Kelas: "02",
    SKS: 4,
    Kehadiran: "100%",
    Nilai: null,
  },
];
export default function StatusMahasiswa() {
  const [isIpIpk, setIsIpIpk] = useState(false);
  const [isIpTPB, setIsIpTPB] = useState(false);
  const [isNR, setIsNR] = useState(false);
  const [isIMG, setIsIMG] = useState(false);
  const secNav = {
    "/status-mahasiswa": [
      <FaUser key={"hover"} className="text-seven-hyperlink" />,
      <FaUser key={"default"} />,
      "Status Mahasiswa",
    ],
    "/": [
      <FaHistory key={"hover"} className="text-seven-hyperlink" />,
      <FaHistory key={"default"} />,
      "Transkrip Historis",
    ],
  };

  return (
    <>
      <PageTemplate
        breadCrumbs={[{ href: null, label: "Status Mahasiswa" }]}
        pageTitle="Status Mahasiswa"
        secondarynavbars={secNav}
      >
        <div className="flex h-full w-[100%] flex-col gap-2 lg:flex-row">
          <div className="flex w-full flex-col items-center lg:w-2/6">
            <div className="w-full rounded rounded-[5px] border border-[#3277B2] bg-[#f9f9f9]">
              <div className="div-auto border-[#3277B2 text-seven-font-size-table-content] flex h-1/3 h-full w-full flex-col rounded-[5px] bg-[#f9f9f9]">
                <div className="flex items-center rounded-t-[5px] bg-seven-bg-table-heading px-[15px] py-[10px] text-white">
                  <p className="text-seven-font-size-table-heading">
                    Data Mahasiswa
                  </p>
                </div>

                <div className="my-[2px] flex place-content-between text-seven-font-size-table-content ">
                  <div className="mx-[1px] w-1/3 text-left text-seven-font-size-table-content font-bold">
                    NIM
                  </div>
                  <div className="w-2/3 text-left">
                    <span className="text-seven-font-size-table-content">
                      13521000
                    </span>
                  </div>
                </div>

                <div className="flex place-content-between border bg-white py-[2px] text-seven-font-size-table-content">
                  <div className="mx-[1px] w-1/3 text-left text-seven-font-size-table-content font-bold">
                    Nama
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                      Sepuh puh puh
                    </span>
                    <FaMale className="mr-1"></FaMale>
                  </div>
                </div>

                <div className="my-[2px] flex place-content-between text-seven-font-size-table-content">
                  <div className="mx-[1px] w-1/3 text-left text-seven-font-size-table-content font-bold">
                    Fakultas
                  </div>
                  <div className="w-2/3 text-left">
                    <span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                      STEI
                    </span>
                  </div>
                </div>

                <div className="flex place-content-between border bg-white py-[2px] text-seven-font-size-table-content">
                  <div className="mx-[1px] w-1/3 text-left text-seven-font-size-table-content font-bold">
                    Program Studi
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                      135 / Teknik Informatika
                    </span>
                  </div>
                </div>

                <div className="my-[2px] flex place-content-between text-seven-font-size-table-content">
                  <div className="mx-[1px] w-1/3 text-left text-seven-font-size-table-content font-bold">
                    Kelas
                  </div>
                  <div className="w-2/3 text-left">
                    <span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                      Ganesha
                    </span>
                  </div>
                </div>

                <div className="flex place-content-between border bg-white py-[2px] text-seven-font-size-table-content">
                  <div className="mx-[1px] w-1/3 text-left text-seven-font-size-table-content font-bold">
                    Tahun Masuk
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                      2021 semester 1
                    </span>
                  </div>
                </div>

                <div className="my-[2px] flex place-content-between text-seven-font-size-table-content">
                  <div className="mx-[1px] w-1/3 text-left text-seven-font-size-table-content font-bold">
                    Dosen Wali
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                      Sepuhnya Sepuh, S.T, M.A., Ph.D.
                    </span>
                  </div>
                </div>

                <div className="flex place-content-between border bg-white py-[2px] text-seven-font-size-table-content">
                  <div className="mx-[1px] w-1/3 text-left text-seven-font-size-table-content font-bold">
                    IP & IPK
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                      {isIpIpk ? "4.00 / 4.00" : null}
                    </span>
                    {isIpIpk ? (
                      <FaEye
                        className="my-auto mr-1"
                        onClick={() => {
                          setIsIpIpk(false);
                        }}
                      ></FaEye>
                    ) : (
                      <FaEyeSlash
                        className="my-auto mr-1"
                        onClick={() => {
                          setIsIpIpk(true);
                        }}
                      ></FaEyeSlash>
                    )}
                  </div>
                </div>

                <div className="my-[2px] flex place-content-between text-seven-font-size-table-content">
                  <div className="mx-[1px] w-1/3 text-left text-seven-font-size-table-content font-bold">
                    SKS
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                      Lulus 144 SKS / Nilai T 0 SKS
                    </span>
                  </div>
                </div>

                <div className="flex place-content-between border bg-white py-[2px] text-seven-font-size-table-content">
                  <div className="mx-[1px] w-1/3 text-left text-seven-font-size-table-content font-bold">
                    IP TPB
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                      {isIpTPB ? "4.00 / Lulus 36 SKS" : null}
                    </span>
                    {isIpTPB ? (
                      <FaEye
                        className="my-auto mr-1"
                        onClick={() => {
                          setIsIpTPB(false);
                        }}
                      ></FaEye>
                    ) : (
                      <FaEyeSlash
                        className="my-auto mr-1"
                        onClick={() => {
                          setIsIpTPB(true);
                        }}
                      ></FaEyeSlash>
                    )}
                  </div>
                </div>

                <div className="my-[2px] flex place-content-between text-seven-font-size-table-content">
                  <div className="mx-[1px] w-1/3 text-left text-seven-font-size-table-content font-bold">
                    NR (2-2023-2025)
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="text-seven-font-size-table-content text-seven-font-size-table-content">
                      {isNR ? "4.00 / 24 SKS" : null}
                    </span>
                    {isNR ? (
                      <FaEye
                        className="my-auto mr-1"
                        onClick={() => {
                          setIsNR(false);
                        }}
                      ></FaEye>
                    ) : (
                      <FaEyeSlash
                        className="my-auto mr-1"
                        onClick={() => {
                          setIsNR(true);
                        }}
                      ></FaEyeSlash>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="my-[16px] w-full rounded rounded-[5px] border border-[#3277B2]">
              <div className="div-auto flex h-1/3 h-full w-full flex-col rounded-[5px] border-[#3277B2]">
                <div className="flex h-full items-center rounded-t-[5px] bg-seven-bg-table-heading px-[15px] py-[10px] text-white">
                  <p className="text-seven-font-size-table-heading">Links</p>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center text-center ">
                  <div className="h-full w-full px-14 pb-6 pt-5 text-left text-[15px]">
                    <ul className="list-disc">
                      <li className="cursor-pointer">
                        <a
                          href="/jadwal"
                          className="hover:text-seven-hyperlink hover:underline"
                        >
                          Jadwal Perkuliahan
                        </a>
                      </li>
                      <li className="cursor-pointer hover:underline">
                        <a className="cursor-pointer">
                          Pengkinian Data Induk Mahasiswa
                        </a>
                      </li>
                      <li className="cursor-pointer hover:underline">
                        <a className="cursor-pointer">
                          Status Keuangan & Beasiswa
                        </a>
                      </li>
                      <li className="cursor-pointer hover:underline">
                        <a className="cursor-pointer">
                          Transkrip Posisi Kurikulum
                        </a>
                      </li>
                      <li className="cursor-pointer hover:underline">
                        <a className="cursor-pointert">Transkrip Historis</a>
                      </li>
                      <li className="cursor-pointer hover:underline">
                        <a className="cursor-pointer">
                          Kartu Tanda Mahasiswa (KTM)
                        </a>
                      </li>
                      <li className="cursor-pointer hover:underline">
                        <a className="cursor-pointer">PDDikti</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <img src="./qr.png" className="h-[140px] w-[140px]" />
          </div>

          <div className="mb-10 flex w-full flex-col lg:w-4/6">
            <div className="mb-5 flex flex-col md:mb-0 md:flex-row">
              <div className="mb-5 flex w-full flex-col rounded rounded-[5px] border border-[#3277B2] bg-[#f9f9f9] md:w-10/12">
                <div className="flex w-full items-center rounded-t-[5px] bg-seven-bg-table-heading px-[15px] py-[10px] text-white">
                  <p className="text-seven-font-size-table-heading">
                    Daftar Kuliah Semester 1-2023/2024
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <div className="div-auto flex h-full w-full min-w-[450px] flex-col rounded-[5px] border-[#3277B2] bg-[#f9f9f9]">
                    <div className="my-[2px] flex w-full text-seven-font-size-table-content">
                      <div className="w-[15px]"></div>
                      <div className="w-1/12 font-bold ">Kode</div>
                      <div className="ml-2 w-7/12 font-bold">Mata Kuliah</div>
                      <div className="w-1/12 text-center font-bold">Kelas</div>
                      <div className="w-1/12 text-center font-bold">SKS</div>
                      <div className="w-2/12 text-right font-bold">
                        Kehadiran
                      </div>
                      <div className="w-1/12 text-center font-bold">Nilai</div>
                    </div>

                    {DaftarKuliah.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            index % 2 === 0
                              ? "flex w-full border bg-white py-[2px] text-left text-seven-font-size-table-content"
                              : "flex w-full border bg-white py-[2px] text-seven-font-size-table-content"
                          }
                        >
                          <div className="w-[15px] text-center font-bold">
                            {index + 1}
                          </div>
                          <div className="w-1/12">{data.Kode}</div>
                          <div className="ml-2 w-7/12">{data.MataKuliah}</div>
                          <div className="w-1/12 text-center">{data.Kelas}</div>
                          <div className="w-1/12 text-center">{data.SKS}</div>
                          <div className="w-2/12 text-right">
                            {data.Kehadiran}
                          </div>
                          <div className="w-1/12 text-center"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="md:w-2/12 md:pl-5">
                <div className="rounded-[5px] border p-1">
                  <img src="./miku.jpg" className="rounded-[3px]"></img>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:flex-row">
              <div className="h-fit w-full rounded rounded-[5px] border border-[#3277B2] bg-[#f9f9f9]">
                <div className="flex w-full place-content-between items-center rounded-t-[5px] bg-seven-bg-table-heading px-[15px] py-[10px] text-white">
                  <p className=" text-seven-font-size-table-heading">
                    Perkembangan Hasil Studi
                  </p>
                  {isIMG ? (
                    <FaEye
                      className=""
                      onClick={() => {
                        setIsIMG(false);
                      }}
                    ></FaEye>
                  ) : (
                    <FaEyeSlash
                      onClick={() => {
                        setIsIMG(true);
                      }}
                      className=""
                    ></FaEyeSlash>
                  )}
                </div>
                <div className="overflow-x-auto">
                  <div className="div-auto flex w-full flex-col rounded-[5px] border-[#3277B2] bg-[#f9f9f9]">
                    <div className="flex w-full min-w-[300px] border bg-white py-[2px] text-seven-font-size-table-content">
                      {isIMG && (
                        <img className="w-full" src="./Screenshot_93.jpg"></img>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-fit w-full flex-col rounded rounded-[5px] border border-[#3277B2]  bg-[#f9f9f9]">
                <div className="flex w-full items-center rounded-t-[5px] bg-seven-bg-table-heading px-[15px] py-[10px] text-white">
                  <p className="text-seven-font-size-table-heading">
                    Status Pendaftaran
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <div className="div-auto flex w-full min-w-[300px] flex-col rounded-[5px] border-[#3277B2] bg-[#f9f9f9]">
                    <div className="my-[2px] flex w-full px-1 text-left text-seven-font-size-table-content">
                      <div className="w-1/6 font-bold">Tahun</div>
                      <div className="w-2/6 font-bold">Semester</div>
                      <div className="w-2/6 font-bold">Status</div>
                      <div className="w-1/6 font-bold">#MK</div>
                      <div className="w-1/6 font-bold">SKS</div>
                    </div>

                    {statusPendaftaran.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            index % 2 === 0
                              ? "flex w-full border bg-white px-1 py-[2px] text-left text-seven-font-size-table-content"
                              : "my-[2px] flex w-full px-1 text-left text-seven-font-size-table-content"
                          }
                        >
                          <div className="w-1/6">{data.Tahun}</div>
                          <div className="w-2/6">{data.Semester}</div>
                          <div className="w-2/6">{data.Status}</div>
                          <div className="w-1/6">{data["#MK"]}</div>
                          <div className="w-1/6">{data.SKS}</div>
                        </div>
                      );
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
