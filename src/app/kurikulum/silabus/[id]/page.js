"use client";
import PageTemplate from "@/components/PageTemplate";
import { FaCalendarAlt, FaTable } from "react-icons/fa";

const Silabus = ({params}) => {

    const { id } = params;

    const secNav = {
        "/kurikulum/struktur-kurikulum": [
          <FaCalendarAlt key={1} className="text-seven-hyperlink" />,
          <FaCalendarAlt key={2} className="" />,
          "Struktur Kurikulum",
        ],
        "/kurikulum/tujuan-pendidikan": [
          <FaTable key={1} className="text-seven-hyperlink" />,
          <FaTable key={2} className="" />,
          "Tujuan Pendidikan & Capaian (Outcomes) Lulusan Program Studi",
        ],
    };

    return (
        <PageTemplate
            pageTitle={"Silabus Mata Kuliah"}
            pageSubTitle={id + ' - 2019'}
            breadCrumbs={[
                { href: "/kurikulum/struktur-kurikulum", label: "Kurikulum" },
                { href: "/kurikulum/struktur-kurikulum", label: "Silabus Mata Kuliah" },
            ]}
            secondarynavbars={secNav}
        />
      );
}
 
export default Silabus;