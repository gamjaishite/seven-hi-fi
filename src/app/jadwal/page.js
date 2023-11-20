import PageTemplate from "@/components/PageTemplate";
import SecondaryNavbar from "@/components/SecondNavBar";
import { FaCalendarAlt, FaClipboardList } from "react-icons/fa";

export default function Jadwal() {
  const secNav = {
    "/kalender": [
      <FaCalendarAlt
        key={"hover"}
        className="hover:text-seven-hyperlink-hover text-seven-hyperlink"
      />,
      <FaCalendarAlt key={"default"} />,
      "Kalender Perkuliahan",
    ],
    "/jadwal": [
      <FaClipboardList
        key={"hover"}
        className="hover:text-seven-hyperlink-hover text-seven-hyperlink"
      />,
      <FaClipboardList key={"default"} />,
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
