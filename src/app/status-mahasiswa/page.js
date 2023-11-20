"use client";
import Footer from "@/components/Footer";
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
              <div className="div-auto border-[#3277B2 text-[13px]] flex h-1/3 h-full w-full flex-col rounded-[5px] bg-[#f9f9f9]">
                <div className="flex items-center rounded-t-[5px] bg-[#3277B2] p-[4px] text-white">
                  <p className="--seven-font-size-table-heading px-2">
                    Data Mahasiswa
                  </p>
                </div>

                <div className="my-[2px] flex place-content-between text-[13px] ">
                  <div className="--seven-font-size-table-content mx-[1px] w-1/3 text-left font-bold">
                    NIM
                  </div>
                  <div className="w-2/3 text-left">
                    <span className="--seven-font-size-table-content">
                      13521000
                    </span>
                  </div>
                </div>

                <div className="flex place-content-between border bg-white py-[2px] text-[13px]">
                  <div className="--seven-font-size-table-content mx-[1px] w-1/3 text-left font-bold">
                    Nama
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="--seven-font-size-table-content text-[13px]">
                      Sepuh puh puh
                    </span>
                    <FaMale className="mr-1"></FaMale>
                  </div>
                </div>

                <div className="my-[2px] flex place-content-between text-[13px]">
                  <div className="--seven-font-size-table-content mx-[1px] w-1/3 text-left font-bold">
                    Fakultas
                  </div>
                  <div className="w-2/3 text-left">
                    <span className="--seven-font-size-table-content text-[13px]">
                      STEI
                    </span>
                  </div>
                </div>

                <div className="flex place-content-between border bg-white py-[2px] text-[13px]">
                  <div className="--seven-font-size-table-content mx-[1px] w-1/3 text-left font-bold">
                    Program Studi
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="--seven-font-size-table-content text-[13px]">
                      135 / Teknik Informatika
                    </span>
                  </div>
                </div>

                <div className="my-[2px] flex place-content-between text-[13px]">
                  <div className="--seven-font-size-table-content mx-[1px] w-1/3 text-left font-bold">
                    Kelas
                  </div>
                  <div className="w-2/3 text-left">
                    <span className="--seven-font-size-table-content text-[13px]">
                      Ganesha
                    </span>
                  </div>
                </div>

                <div className="flex place-content-between border bg-white py-[2px] text-[13px]">
                  <div className="--seven-font-size-table-content mx-[1px] w-1/3 text-left font-bold">
                    Tahun Masuk
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="--seven-font-size-table-content text-[13px]">
                      2021 semester 1
                    </span>
                  </div>
                </div>

                <div className="my-[2px] flex place-content-between text-[13px]">
                  <div className="--seven-font-size-table-content mx-[1px] w-1/3 text-left font-bold">
                    Dosen Wali
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="--seven-font-size-table-content text-[13px]">
                      Sepuhnya Sepuh, S.T, M.A., Ph.D.
                    </span>
                  </div>
                </div>

                <div className="flex place-content-between border bg-white py-[2px] text-[13px]">
                  <div className="--seven-font-size-table-content mx-[1px] w-1/3 text-left font-bold">
                    IP & IPK
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="--seven-font-size-table-content text-[13px]">
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

                <div className="my-[2px] flex place-content-between text-[13px]">
                  <div className="--seven-font-size-table-content mx-[1px] w-1/3 text-left font-bold">
                    SKS
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="--seven-font-size-table-content text-[13px]">
                      Lulus 144 SKS / Nilai T 0 SKS
                    </span>
                  </div>
                </div>

                <div className="flex place-content-between border bg-white py-[2px] text-[13px]">
                  <div className="--seven-font-size-table-content mx-[1px] w-1/3 text-left font-bold">
                    IP TPB
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="--seven-font-size-table-content text-[13px]">
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

                <div className="my-[2px] flex place-content-between text-[13px]">
                  <div className="--seven-font-size-table-content mx-[1px] w-1/3 text-left font-bold">
                    NR (2-2023-2025)
                  </div>
                  <div className="flex w-2/3 place-content-between text-left">
                    <span className="--seven-font-size-table-content text-[13px]">
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
            <div className="my-[16px] w-full rounded-[5px] border border-[#3277B2]">
              <div className="div-auto flex h-full w-full flex-col rounded-[5px] border-[#3277B2]">
                <div className="flex h-full items-center rounded-t-[5px] bg-[#3277B2] p-[4px] text-white">
                  <p className="seven-font-size-table-heading px-2">Links</p>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center text-center ">
                  <div className="h-full w-4/5 pb-7 pt-5 text-left text-seven-font-size-default">
                    <ul className="list-disc">
                      <li className="underline-offset-2">
                        <a href="/jadwal" className="underline-offset-2">
                          Jadwal Perkuliahan
                        </a>
                      </li>
                      <li className="underline-offset-2">
                        <a className="underline-offset-2">
                          Pengkinian Data Induk Mahasiswa
                        </a>
                      </li>
                      <li className="underline-offset-2">
                        <a className="underline-offset-2">
                          Status Keuangan & Beasiswa
                        </a>
                      </li>
                      <li className="underline-offset-2">
                        <a className="underline-offset-2">
                          Transkrip Posisi Kurikulum
                        </a>
                      </li>
                      <li className="underline-offset-2">
                        <a className="underline-offset-2t">
                          Transkrip Historis
                        </a>
                      </li>
                      <li className="underline-offset-2">
                        <a className="underline-offset-2">
                          Kartu Tanda Mahasiswa (KTM)
                        </a>
                      </li>
                      <li className="underline-offset-2">
                        <a className="underline-offset-2">PDDikti</a>
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
              <div className="mb-5 w-full overflow-x-auto rounded-[5px] border border-[#3277B2] bg-[#f9f9f9] md:w-10/12">
                <div className="div-auto flex h-full w-full min-w-[450px] flex-col rounded-[5px] border-[#3277B2] bg-[#f9f9f9]">
                  <div className="flex items-center rounded-t-[5px] bg-[#3277B2] p-[4px] text-white">
                    <p className="--seven-font-size-table-heading px-2">
                      Daftar Kuliah Semester 1-2023/2024
                    </p>
                  </div>

                  <div className="my-[2px] flex w-full text-[13px]">
                    <div className="w-[15px]"></div>
                    <div className="w-1/12 font-bold ">Kode</div>
                    <div className="ml-2 w-7/12 font-bold">Mata Kuliah</div>
                    <div className="w-1/12 text-center font-bold">Kelas</div>
                    <div className="w-1/12 text-center font-bold">SKS</div>
                    <div className="w-2/12 font-bold">Kehadiran</div>
                    <div className="w-1/12 font-bold">Nilai</div>
                  </div>

                  <div className="flex w-full border bg-white py-[2px] text-[13px]">
                    <div className="w-[15px] text-center font-bold">1</div>
                    <div className="w-1/12">IF3110</div>
                    <div className="ml-2 w-7/12">
                      Pengembangan Aplikasi Berbasis Web
                    </div>
                    <div className="w-1/12 text-center">02</div>
                    <div className="w-1/12 text-center">2</div>
                    <div className="w-2/12 text-center">100%</div>
                    <div className="w-1/12"></div>
                  </div>

                  <div className="flex w-full border bg-white py-[2px] text-[13px]">
                    <div className="w-[15px] text-center font-bold">2</div>
                    <div className="w-1/12">IF3130</div>
                    <div className="ml-2 w-7/12">
                      Jaringan Komputer
                    </div>
                    <div className="w-1/12 text-center">02</div>
                    <div className="w-1/12 text-center">3</div>
                    <div className="w-2/12 text-center">100%</div>
                    <div className="w-1/12"></div>
                  </div>

                  <div className="flex w-full border bg-white py-[2px] text-[13px]">
                    <div className="w-[15px] text-center font-bold">3</div>
                    <div className="w-1/12">IF3140</div>
                    <div className="ml-2 w-7/12">
                      Manajemen Basis Data
                    </div>
                    <div className="w-1/12 text-center">02</div>
                    <div className="w-1/12 text-center">2</div>
                    <div className="w-2/12 text-center">100%</div>
                    <div className="w-1/12"></div>
                  </div>

                  <div className="flex w-full border bg-white py-[2px] text-[13px]">
                    <div className="w-[15px] text-center font-bold">4</div>
                    <div className="w-1/12">IF3141</div>
                    <div className="ml-2 w-7/12">
                      Sistem Informasi
                    </div>
                    <div className="w-1/12 text-center">02</div>
                    <div className="w-1/12 text-center">3</div>
                    <div className="w-2/12 text-center">100%</div>
                    <div className="w-1/12"></div>
                  </div>

                  <div className="flex w-full border bg-white py-[2px] text-[13px]">
                    <div className="w-[15px] text-center font-bold">5</div>
                    <div className="w-1/12">IF3150</div>
                    <div className="ml-2 w-7/12">
                      Manajemen Proyek Perangkat Lunak
                    </div>
                    <div className="w-1/12 text-center">02</div>
                    <div className="w-1/12 text-center">2</div>
                    <div className="w-2/12 text-center">100%</div>
                    <div className="w-1/12"></div>
                  </div>

                  <div className="flex w-full border bg-white py-[2px] text-[13px]">
                    <div className="w-[15px] text-center font-bold">6</div>
                    <div className="w-1/12">IF3151</div>
                    <div className="ml-2 w-7/12">
                      Interaksi Manusia Komputer
                    </div>
                    <div className="w-1/12 text-center">02</div>
                    <div className="w-1/12 text-center">2</div>
                    <div className="w-2/12 text-center">100%</div>
                    <div className="w-1/12"></div>
                  </div>

                  <div className="flex w-full border bg-white py-[2px] text-[13px]">
                    <div className="w-[15px] text-center font-bold">7</div>
                    <div className="w-1/12">IF3170</div>
                    <div className="ml-2 w-7/12">
                      Inteligensi Buatan
                    </div>
                    <div className="w-1/12 text-center">02</div>
                    <div className="w-1/12 text-center">2</div>
                    <div className="w-2/12 text-center">100%</div>
                    <div className="w-1/12"></div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/12 md:px-5">
                <div className="rounded-[5px] border p-1">
                  <img src="./pasfoto.png" className="rounded-[3px]"></img>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:flex-row">
              <div className="w-full overflow-x-auto rounded-[5px] border border-[#3277B2] bg-[#f9f9f9]">
                <div className="div-auto flex h-1/3 w-full min-w-[450px] flex-col rounded-[5px] border-[#3277B2] bg-[#f9f9f9]">
                  <div className="flex items-center rounded-t-[5px] bg-[#3277B2] p-[4px] text-white">
                    <p className="--seven-font-size-table-heading px-2">
                      Perkembangan Hasil Studi
                    </p>
                  </div>

                  <div className="flex w-full border bg-white py-[2px] text-[13px]">
                    <img className="w-full" src="./Screenshot_93.jpg"></img>
                  </div>
                </div>
              </div>
              <div className="flex h-fit w-full flex-col overflow-x-auto rounded-[5px] border border-[#3277B2] bg-[#f9f9f9]">
                <div className="flex w-full min-w-[300px] items-center rounded-t-[5px] bg-[#3277B2] p-[4px] text-white">
                  <p className="--seven-font-size-table-heading px-2">
                    Status Pendaftaran
                  </p>
                </div>
                <div className="div-auto flex w-full min-w-[300px] flex-col rounded-[5px] border-[#3277B2] bg-[#f9f9f9]">
                  <div className="my-[2px] flex w-full px-1 text-left text-[13px]">
                    <div className="w-1/6 font-bold">Tahun</div>
                    <div className="w-1/6 font-bold">Semester</div>
                    <div className="w-2/6 font-bold">Status</div>
                    <div className="w-1/6 font-bold">#MK</div>
                    <div className="w-1/6 font-bold">SKS</div>
                  </div>

                  <div className="flex w-full border bg-white px-1 py-[2px] text-left text-[13px]">
                    <div className="w-1/6">2023</div>
                    <div className="w-1/6">1 - Ganjil</div>
                    <div className="w-2/6">Sudah daftar</div>
                    <div className="w-1/6">8</div>
                    <div className="w-1/6">24</div>
                  </div>

                  <div className="my-[2px] flex w-full px-1 text-left text-[13px]">
                    <div className="w-1/6">2022</div>
                    <div className="w-1/6">3 - Pendek</div>
                    <div className="w-2/6">Belum daftar</div>
                    <div className="w-1/6">-</div>
                    <div className="w-1/6">-</div>
                  </div>

                  <div className="flex w-full border bg-white px-1 py-[2px] text-left text-[13px]">
                    <div className="w-1/6">2022</div>
                    <div className="w-1/6">2 - Genap</div>
                    <div className="w-2/6">Sudah daftar</div>
                    <div className="w-1/6">8</div>
                    <div className="w-1/6">24</div>
                  </div>

                  <div className="my-[2px] flex w-full px-1 text-left text-[13px]">
                    <div className="w-1/6">2022</div>
                    <div className="w-1/6">1 - Ganjil</div>
                    <div className="w-2/6">Sudah daftar</div>
                    <div className="w-1/6">8</div>
                    <div className="w-1/6">24</div>
                  </div>

                  <div className="flex w-full border bg-white px-1 py-[2px] text-left text-[13px]">
                    <div className="w-1/6">2022</div>
                    <div className="w-1/6">3 - Pendek</div>
                    <div className="w-2/6">Belum daftar</div>
                    <div className="w-1/6">-</div>
                    <div className="w-1/6">-</div>
                  </div>

                  <div className="my-[2px] flex w-full px-1 text-left text-[13px]">
                    <div className="w-1/6">2022</div>
                    <div className="w-1/6">2 - Genap</div>
                    <div className="w-2/6">Belum daftar</div>
                    <div className="w-1/6">8</div>
                    <div className="w-1/6">24</div>
                  </div>

                  <div className="flex w-full border bg-white px-1 py-[2px] text-left text-[13px]">
                    <div className="w-1/6">2022</div>
                    <div className="w-1/6">1 - Ganjil</div>
                    <div className="w-2/6">Belum daftar</div>
                    <div className="w-1/6">8</div>
                    <div className="w-1/6">24</div>
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
