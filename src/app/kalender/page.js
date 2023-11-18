"use client";

import PageTemplate from "@/components/PageTemplate";
import JadwalConf from "./JadwalConf";
import { useState } from "react";
import MonthlyCalendar from "./MonthlyCalendar";
import WeeklyCalendar from "./WeeklyCalendar";
import SecondaryNavbar from "@/components/SecondNavBar";
import {
  FaCalendarAlt,
  FaClipboardList,
  FaInfoCircle,
  FaInstagram,
  FaTable,
} from "react-icons/fa";

// Status Enum: "NONE", "ACTIVE", "ATTEND", "NOT ATTEND"
export default function Jadwal() {
  const [bulan, setBulan] = useState(8);
  const [semester, setSemester] = useState("1-2023/2024");
  const [mode, setMode] = useState("month");

  const breadCrumbItems = [
    { href: "/", label: "Kelas" },
    { href: null, label: "Jadwal Perkuliahan Mahasiswa" },
  ];

  const secNav = {
    "/kalender": [
      <FaCalendarAlt className="text-seven-hyperlink" />,
      <FaCalendarAlt />,
      "Kalender",
    ],
    "/jadwal": [
      <FaClipboardList className="text-seven-hyperlink" />,
      <FaClipboardList className="" />,
      "Jadwal Kuliah",
    ],
  };

  return (
    <PageTemplate
      breadCrumbs={breadCrumbItems}
      pageTitle="Jadwal Perkuliahan Mahasiswa"
    >
      <SecondaryNavbar secNav={secNav} />
      <JadwalConf
        semester={semester}
        setSemester={setSemester}
        mode={mode}
        setMode={setMode}
        bulan={bulan}
        setBulan={setBulan}
      />
      {mode === "month" && <MonthlyCalendar />}
      {mode === "week" && <WeeklyCalendar />}
    </PageTemplate>
  );
}
