"use client";
import {
  ChevronDown,
  GraduationCap,
  Home,
  ListTodo,
  LogOut,
  Newspaper,
  Receipt,
  Settings,
  Split,
  TableProperties,
  User,
  UserCircle,
  Users,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isID, setIsID] = useState(true);
  return (
    <>
      <nav className="w-full py-1 px-4 xl:px-0 sticky top-0 bg-[#2c2c2c]">
        <div className="w-full flex items-center justify-between text-[#9D9D9D] max-w-[1140px] mx-auto">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-1 hover:text-white">
              <h1 className="text-lg text-[#ccc] hover:text-white">SIX </h1>
              <Home className="text-[#ccc]" size={20} />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-transparent flex items-center gap-1.5 text-white py-0 hover:bg-zinc-900">
                  <span>Aplikasi</span>
                  <ChevronDown size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg">
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-[#333] hover:bg-zinc-100 w-full px-4 py-2 rounded-md"
                  >
                    <Newspaper size={16} />
                    <span>Kurikulum</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-[#333] hover:bg-zinc-100 w-full px-4 py-2 rounded-md"
                  >
                    <UserCircle size={16} />
                    <span>Status Mahasiswa</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-[#333] hover:bg-zinc-100 w-full px-4 py-2 rounded-md"
                  >
                    <Receipt size={16} />
                    <span>Keuangan & Beasiswa</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/jadwal"
                    className="flex items-center space-x-2 text-seven-foreground-light hover:bg-zinc-100 w-full px-4 py-2 rounded-md"
                  >
                    <Users size={16} />
                    <span>Kelas</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-[#333] hover:bg-zinc-100 w-full px-4 py-2 rounded-md"
                  >
                    <TableProperties size={16} />
                    <span>Rencana Studi & Perwalian</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-[#333] hover:bg-zinc-100 w-full px-4 py-2 rounded-md"
                  >
                    <Split size={16} />
                    <span>Penjurusan TPB</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-[#333] hover:bg-zinc-100 w-full px-4 py-2 rounded-md"
                  >
                    <ListTodo size={16} />
                    <span>Evaluasi Perkuliahan & Portofolio</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-[#333] hover:bg-zinc-100 w-full px-4 py-2 rounded-md"
                  >
                    <GraduationCap size={16} />
                    <span>Wisuda</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-[#333] hover:bg-zinc-100 w-full px-4 py-2 rounded-md"
                  >
                    <Settings size={16} />
                    <span>Control Panel</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex gap-2 items-center">
            <Button
              className={`${
                isID ? "bg-zinc-900 text-white" : "bg-transparent"
              } hover:bg-zinc-900`}
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
                  : "bg-zinc-900 text-seven-foreground-dark"
              } hover:bg-zinc-900`}
              onClick={() => {
                isID && setIsID(false);
              }}
            >
              EN
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-transparent flex items-center gap-1.5 text-white py-0 hover:bg-zinc-900">
                  <UserCircle size={20} />
                  <span>Sepuh Puh Sepuh</span>
                  <ChevronDown size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg">
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-[#333] hover:bg-zinc-100 w-full px-4 py-2 rounded-md"
                  >
                    <User size={16} />
                    <span>Profil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 text-[#333] hover:bg-zinc-100 w-full px-4 py-2 rounded-md"
                  >
                    <LogOut size={16} />
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
