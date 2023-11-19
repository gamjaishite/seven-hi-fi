"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import React, { useState } from "react";
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
  FaUniversity,
} from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

const Menu = ({ href, label, Icon }) => {
  return (
    <DropdownMenuItem className="p-0">
      <Link
        href={href}
        className="flex items-center space-x-2 text-seven-foreground-light hover:bg-seven-hover-light w-full px-4 py-2"
      >
        <Icon size={16} />
        <span>{label}</span>
      </Link>
    </DropdownMenuItem>
  );
};

function MobileNavbar() {
  return (
    <div className="flex lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-transparent flex items-center gap-1.5 text-seven-foreground-dark py-0 hover:bg-seven-selected-item-dark">
            <FaCaretDown size={14} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default function Navbar() {
  const [isID, setIsID] = useState(true);
  const aplikasiItems = [
    { icon: FaFileAlt, name: "Kurikulum" },
    { icon: FaRegUserCircle, name: "Status Mahasiswa" },
    { icon: FaMoneyBill1Wave, name: "Keuangan & Beasiswa" },
    { icon: FaUsers, name: "Kelas", href: "/kalender" },
    {
      icon: FaUniversity,
      name: "Daftar Mata Kuliah",
      href: "/daftar-mata-kuliah",
    },
    { icon: FaColumns, name: "Rencana Studi & Perwalian" },
    { icon: FaSitemap, name: "Penjurusan TPB" },
    { icon: FaTasks, name: "Evaluasi Perkuliahan & Portofolio" },
    { icon: FaGraduationCap, name: "Wisuda" },
    { icon: FaCogs, name: "Control Panel" },
  ];
  const profileItems = [
    { icon: FaUser, name: "Profil" },
    { icon: FaSignOutAlt, name: "Logout" },
  ];
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
            <div className="hidden lg:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-transparent flex items-center gap-1.5 text-seven-foreground-dark py-0 hover:bg-seven-selected-item-dark">
                    <span>Aplikasi</span>
                    <FaCaretDown size={14} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {aplikasiItems.map((elmt, idx) => (
                    <Menu
                      key={idx}
                      href={elmt.href ?? "/"}
                      label={elmt.name}
                      Icon={elmt.icon}
                    />
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Button
              className={`${
                isID
                  ? "bg-seven-selected-item-dark text-seven-foreground-dark"
                  : "bg-transparent"
              } hover:bg-seven-selected-item-dark hidden lg:flex`}
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
              } hover:bg-seven-selected-item-dark hidden lg:flex`}
              onClick={() => {
                isID && setIsID(false);
              }}
            >
              EN
            </Button>
            <div className="hidden lg:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-transparent flex items-center gap-1.5 text-seven-foreground-dark py-0 hover:bg-seven-selected-item-dark">
                    <FaRegUserCircle size={16} />
                    <span>Sepuh Puh Sepuh</span>
                    <FaCaretDown size={14} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {profileItems.map((elmt, idx) => (
                    <Menu
                      key={idx}
                      href={elmt.href ?? "/"}
                      label={elmt.name}
                      Icon={elmt.icon}
                    />
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <MobileNavbar />
          </div>
        </div>
      </nav>
    </>
  );
}
