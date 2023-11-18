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
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export default function Navbar() {
  const [isID, setIsID] = useState(true);
  return (
    <>
      <nav className="w-full py-1 px-4 xl:px-0 sticky top-0 bg-seven-bg-navbar">
        <div className="w-full flex items-center justify-between text-seven-foreground-dark max-w-[1140px] mx-auto">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1 text-seven-navbar-brand hover:text-seven-foreground-dark"
            >
              <h1 className="text-seven-font-size-navbar-brand">SIX </h1>
              <FaHome className="" size={18} />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-transparent flex items-center gap-1.5 text-seven-foreground-dark py-0 hover:bg-seven-selected-item-dark">
                  <span>Aplikasi</span>
                  <FaCaretDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2"
                  >
                    <FaFileAlt size={16} />
                    <span>Kurikulum</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2"
                  >
                    <FaRegUserCircle size={16} />
                    <span>Status Mahasiswa</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2"
                  >
                    <FaMoneyBill1Wave size={16} />
                    <span>Keuangan & Beasiswa</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/jadwal"
                    className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2"
                  >
                    <FaUsers size={16} />
                    <span>Kelas</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2"
                  >
                    <FaColumns size={16} />
                    <span>Rencana Studi & Perwalian</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2"
                  >
                    <FaSitemap size={16} />
                    <span>Penjurusan TPB</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2"
                  >
                    <FaTasks size={16} />
                    <span>Evaluasi Perkuliahan & Portofolio</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2"
                  >
                    <FaGraduationCap size={16} />
                    <span>Wisuda</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2 "
                  >
                    <FaCogs size={16} />
                    <span>Control Panel</span>
                  </Link>
                </DropdownMenuItem>
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
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2"
                  >
                    <FaUser size={16} />
                    <span>Profil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2"
                  >
                    <FaSignOutAlt size={16} />
                    <span>Logout</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
}
