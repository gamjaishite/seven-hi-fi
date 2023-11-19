import PageTemplate from "@/components/PageTemplate";
import SecondaryNavbar from "@/components/SecondNavBar";
import { FaCalendarAlt, FaClipboardList } from "react-icons/fa";

export default function Jadwal() {
  const secNav = {
    "/kalender": [
      <FaCalendarAlt className="text-seven-hyperlink hover:text-seven-hyperlink-hover" />,
      <FaCalendarAlt />,
      "Kalender",
    ],
    "/jadwal": [
      <FaClipboardList className="text-seven-hyperlink hover:text-seven-hyperlink-hover" />,
      <FaClipboardList className="" />,
      "Jadwal Kuliah",
    ],
  };
  return (
    <>
      <PageTemplate
        pageTitle="Jadwal Kuliah"
        breadCrumbs={[
          { href: "/", label: "Kelas" },
          { href: null, label: "Jadwal Kuliah" },
        ]}
        secondarynavbars={secNav}
      />
    </>
  );
}
