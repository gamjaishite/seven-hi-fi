"use client";

import PageTemplate from "@/components/PageTemplate";
import JadwalConf from "./JadwalConf";
import { useState } from "react";
import MonthlyCalendar from "./MonthlyCalendar";
import WeeklyCalendar from "./WeeklyCalendar";
import {
  FaCalendarAlt,
  FaClipboardList,
  FaRegCheckCircle,
  FaRegCircle,
} from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

// Status Enum: "NONE", "ACTIVE", "ATTEND", "NOT ATTEND"
export default function Jadwal() {
  const [bulan, setBulan] = useState(8);
  const [semester, setSemester] = useState("1-2023/2024");
  const [mode, setMode] = useState("month");
  const [presensi, setPresensi] = useState({
    "8/1/2023": { IF3151: "ATTEND" },
    "8/2/2023": {
      IF4031: "NOT ATTEND",
      IF3141: "ACTIVE",
      IF3170: "WILL ACTIVE",
    },
  });

  const presensiAttributes = {
    "NOT ATTEND": {
      class: "bg-seven-bg-presensi-skip text-seven-foreground-dark",
      icon: <FaRegCircleXmark />,
    },
    ATTEND: {
      class: "bg-seven-bg-presensi-done text-seven-foreground-dark",
      icon: <FaRegCheckCircle />,
    },
    ACTIVE: {
      class: "bg-seven-bg-presensi-exist text-seven-foreground-dark",
      icon: <FaRegCircle />,
    },
    "WILL ACTIVE": {
      class: "bg-seven-bg-presensi-exist text-seven-foreground-dark",
      icon: <FaRegCircle />,
    },
  };

  const breadCrumbItems = [
    { href: "/", label: "Kelas" },
    { href: null, label: "Jadwal Perkuliahan Mahasiswa" },
  ];

  const secNav = {
    "/kalender": [
      <FaCalendarAlt
        key={"hover"}
        className="hover:text-seven-hyperlink-hover text-seven-hyperlink"
      />,
      <FaCalendarAlt key={"default"} />,
      "Kalender",
    ],
    "/jadwal": [
      <FaClipboardList
        key={"hover"}
        className="hover:text-seven-hyperlink-hover text-seven-hyperlink"
      />,
      <FaClipboardList key={"default"} className="" />,
      "Jadwal Kuliah",
    ],
  };

  return (
    <PageTemplate
      breadCrumbs={breadCrumbItems}
      pageTitle="Jadwal Perkuliahan Mahasiswa"
      secondarynavbars={secNav}
    >
      <JadwalConf
        semester={semester}
        setSemester={setSemester}
        mode={mode}
        setMode={setMode}
        bulan={bulan}
        setBulan={setBulan}
      />
      {mode === "month" && (
        <MonthlyCalendar
          semester={semester}
          presensi={presensi}
          setPresensi={setPresensi}
          presensiAttributes={presensiAttributes}
        />
      )}
      {mode === "week" && (
        <WeeklyCalendar
          semester={semester}
          presensi={presensi}
          setPresensi={setPresensi}
          bulan={bulan}
        />
      )}
    </PageTemplate>
  );
}
