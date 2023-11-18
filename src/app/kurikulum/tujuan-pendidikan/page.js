"use client";
import PageTemplate from "@/components/PageTemplate";
import { FaCalendarAlt, FaTable } from "react-icons/fa";

export default function Kurikulum() {
  /* eslint-disable react/jsx-key */
  const secNav = {
    "/kurikulum/struktur-kurikulum": [
      <FaCalendarAlt className="text-seven-hyperlink" />,
      <FaCalendarAlt className="" />,
      "Struktur Kurikulum",
    ],
    "/kurikulum/tujuan-pendidikan": [
      <FaTable className="text-seven-hyperlink" />,
      <FaTable className="" />,
      "Tujuan Pendidikan & Capaian (Outcomes) Lulusan Program Studi",
    ],
  };
  return (
    <PageTemplate
      pageTitle={"Tujuan Pendidikan"}
      breadCrumbs={[
        { href: "/kurikulum/struktur-kurikulum", label: "Kurikulum" },
        {
          href: "/kurikulum/tujuan-pendidikan",
          label: "Tujuan Pendidikan & Capaian (Outcomes) Lulusan Program Studi",
        },
      ]}
      secondarynavbars={secNav}
    />
  );
}
