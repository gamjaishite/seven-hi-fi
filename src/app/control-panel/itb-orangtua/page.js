"use client";
import PageTemplate from "@/components/PageTemplate";
import { FaUser } from "react-icons/fa";

export default function ITBOrangtua() {
  /* eslint-disable react/jsx-key */
  const secNav = {
    "/control-panel/itb-account": [
      <FaUser className="text-seven-hyperlink" />,
      <FaUser className="" />,
      "ITB Account",
    ],
    "/control-panel/itb-orangtua": [
      <FaUser className="text-seven-hyperlink" />,
      <FaUser className="" />,
      "Account Orang Tua",
    ],
  };
  return (
    <PageTemplate
      pageTitle={"Account Orang Tua"}
      breadCrumbs={[
        { href: "/control-panel/itb-account", label: "Control Panel" },
        { href: "/control-panel/itb-orangtua", label: "Account Orang Tua" },
      ]}
      secondarynavbars={secNav}
    />
  );
}
