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
  FaBars,
} from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Menu = ({ href, label, Icon }) => {
  return (
    <DropdownMenuItem className="p-0">
      <Link
        href={href}
        className="flex w-full items-center space-x-2 px-4 py-2 text-seven-foreground-light hover:bg-seven-hover-light"
      >
        <Icon size={16} />
        <span>{label}</span>
      </Link>
    </DropdownMenuItem>
  );
};

function MobileNavbar(props) {
  return (
    <div className="flex lg:hidden">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex items-center gap-1.5 bg-transparent py-0 text-seven-foreground-dark hover:bg-seven-selected-item-dark">
            <FaBars size={14} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="max-h-[400px] overflow-auto px-4 py-1">
          <div className="flex flex-col gap-2 lg:hidden">
            <Accordion type="single" collapsible>
              <AccordionItem value="aplikasi">
                <AccordionTrigger className="hover:no-underline">
                  Aplikasi
                </AccordionTrigger>
                <AccordionContent>
                  {props.aplikasiItems.map(({ name, href, icon }, index) => {
                    const Icon = icon;
                    return (
                      <Link
                        key={name + index}
                        href={href ?? "/"}
                        className="flex w-full items-center space-x-2 px-4 py-2 text-seven-foreground-light hover:bg-seven-hover-light"
                      >
                        <Icon size={16} />
                        <span>{name}</span>
                      </Link>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="profile" className="border-none">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <FaRegUserCircle size={16} />
                    <span>Sepuh Puh Sepuh</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {props.profileItems.map(({ name, href, icon }, index) => {
                    const Icon = icon;
                    return (
                      <Link
                        key={name + index}
                        href={href ?? "/"}
                        className="flex w-full items-center space-x-2 px-4 py-2 text-seven-foreground-light hover:bg-seven-hover-light"
                      >
                        <Icon size={16} />
                        <span>{name}</span>
                      </Link>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default function Navbar() {
  const [isID, setIsID] = useState(true);
  const aplikasiItems = [
    {
      icon: FaFileAlt,
      name: "Kurikulum",
      href: "/kurikulum/struktur-kurikulum",
    },
    { icon: FaRegUserCircle, name: "Status Mahasiswa" },
    {
      icon: FaMoneyBill1Wave,
      name: "Keuangan & Beasiswa",
      href: "/keuangan-beasiswa/status",
    },
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
    { icon: FaCogs, name: "Control Panel", href: "/control-panel/itb-account" },
  ];
  const profileItems = [
    { icon: FaUser, name: "Profil" },
    { icon: FaSignOutAlt, name: "Logout" },
  ];
  return (
    <>
      <nav className="sticky top-0 z-20 w-full bg-seven-bg-navbar px-4 py-1 xl:px-0">
        <div className="mx-auto flex w-full max-w-[1140px] items-center justify-between text-seven-foreground-dark">
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
                  <Button className="flex items-center gap-1.5 bg-transparent py-0 text-seven-foreground-dark hover:bg-seven-selected-item-dark">
                    <span>Aplikasi</span>
                    <FaCaretDown size={14} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {aplikasiItems.map((elmt, idx) => (
                    <Menu
                      key={elmt.name + idx}
                      href={elmt.href ?? "/"}
                      label={elmt.name}
                      Icon={elmt.icon}
                    />
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              className={`${
                isID
                  ? "bg-seven-selected-item-dark text-seven-foreground-dark"
                  : "bg-transparent"
              } hover:bg-seven-selected-item-dark lg:flex`}
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
              } hover:bg-seven-selected-item-dark lg:flex`}
              onClick={() => {
                isID && setIsID(false);
              }}
            >
              EN
            </Button>
            <div className="hidden lg:flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-1.5 bg-transparent py-0 text-seven-foreground-dark hover:bg-seven-selected-item-dark">
                    <FaRegUserCircle size={16} />
                    <span>Sepuh Puh Sepuh</span>
                    <FaCaretDown size={14} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {profileItems.map((elmt, idx) => (
                    <Menu
                      key={elmt.name + idx}
                      href={elmt.href ?? "/"}
                      label={elmt.name}
                      Icon={elmt.icon}
                    />
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <MobileNavbar
              aplikasiItems={aplikasiItems}
              profileItems={profileItems}
              isID={isID}
              setIsID={setIsID}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
