"use client";

import PageTemplate from "@/components/PageTemplate";
import JadwalConf from "./JadwalConf";
import { useState } from "react";
import MonthlyCalendar from "./MonthlyCalendar";
import WeeklyCalendar from "./WeeklyCalendar";

// Status Enum: "NONE", "ACTIVE", "ATTEND", "NOT ATTEND"
export default function Jadwal() {
  const [semester, setSemester] = useState("1-2023/2024");
  const [mode, setMode] = useState("month");

  const breadCrumbItems = [
    { href: "/", label: "Kelas" },
    { href: null, label: "Jadwal Perkuliahan Mahasiswa" },
  ];
  return (
    <PageTemplate
      breadCrumbs={breadCrumbItems}
      pageTitle="Jadwal Perkuliahan Mahasiswa"
    >
      <JadwalConf
        semester={semester}
        setSemester={setSemester}
        mode={mode}
        setMode={setMode}
      />
      {mode === "month" && <MonthlyCalendar />}
      {mode === "week" && <WeeklyCalendar />}
    </PageTemplate>
  );
}
