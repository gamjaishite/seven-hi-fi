"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  FaCaretDown,
  FaCogs,
  FaColumns,
  FaFileAlt,
  FaGraduationCap,
  FaHome,
  FaRegUserCircle,
  FaSignOutAlt,
  FaSitemap,
  FaTasks,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export default function Navbar() {
  const [isID, setIsID] = useState(true);
  const aplikasiItems = [
    { icon: <FaFileAlt size={16} />, name: "Kurikulum" },
    { icon: <FaRegUserCircle size={16} />, name: "Status Mahasiswa" },
    { icon: <FaMoneyBill1Wave size={16} />, name: "Keuangan & Beasiswa" },
    { icon: <FaUsers size={16} />, name: "Kelas", href: "/jadwal" },
    { icon: <FaColumns size={16} />, name: "Rencana Studi & Perwalian" },
    { icon: <FaSitemap size={16} />, name: "Penjurusan TPB" },
    { icon: <FaTasks size={16} />, name: "Evaluasi Perkuliahan & Portofolio" },
    { icon: <FaGraduationCap size={16} />, name: "Wisuda" },
    { icon: <FaCogs size={16} />, name: "Control Panel" },
  ];
  const profileItems = [
    { icon: <FaUser size={16} />, name: "Profil" },
    { icon: <FaSignOutAlt size={16} />, name: "Logout" },
  ];
  return (
    <>
      <nav className="w-full py-1 px-4 xl:px-0 sticky top-0 bg-seven-bg-navbar">
        <div className="w-full flex items-center justify-between text-seven-foreground-dark max-w-[1140px] mx-auto">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-seven-foreground-dark"
            >
              <h1 className="text-lg text-seven-navbar-brand">SIX </h1>
              <FaHome className="text-seven-navbar-brand" size={18} />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-transparent flex items-center gap-1.5 text-seven-foreground-dark py-0 hover:bg-seven-selected-item-dark">
                  <span>Aplikasi</span>
                  <FaCaretDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {aplikasiItems.map((item, index) => (
                  <DropdownMenuItem className="p-0" key={index}>
                    <Link
                      href={item.href ?? "/"}
                      className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex gap-2 items-center">
            <Button
              className={`${
                isID
                  ? "bg-seven-selected-item-dark text-seven-foreground-dark"
                  : "bg-transparent"
              } hover:bg-seven-selected-item-dark`}
              onClick={() => {
                !isID && setIsID(true);
              }}
            >
              ID
            </Button>
            <Button
              className={`${
                isID
                  ? "bg-transparent"
                  : "bg-seven-selected-item-dark text-seven-foreground-dark"
              } hover:bg-seven-selected-item-dark`}
              onClick={() => {
                isID && setIsID(false);
              }}
            >
              EN
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-transparent flex items-center gap-1.5 text-seven-foreground-dark py-0 hover:bg-seven-selected-item-dark">
                  <FaRegUserCircle size={16} />
                  <span>Sepuh Puh Sepuh</span>
                  <FaCaretDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {profileItems.map((item, index) => (
                  <DropdownMenuItem className="p-0" key={index}>
                    <Link
                      href="/"
                      className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
}
