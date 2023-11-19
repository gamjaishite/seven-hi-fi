"use client";
import PageTemplate from "@/components/PageTemplate";
import { FaUser } from "react-icons/fa";

export default function ITBAccount() {
  /* eslint-disable react/jsx-key */
  const secNav = {
    "/control-panel/itb-account": [
      <FaUser className="text-seven-hyperlink hover:text-seven-hyperlink-hover" />,
      <FaUser className="" />,
      "ITB Account",
    ],
    "/control-panel/itb-orangtua": [
      <FaUser className="text-seven-hyperlink hover:text-seven-hyperlink-hover" />,
      <FaUser className="" />,
      "Account Orang Tua",
    ],
  };
  return (
    <PageTemplate
      pageTitle={"ITB Account"}
      breadCrumbs={[
        { href: "/control-panel/itb-account", label: "Control Panel" },
        { href: "/control-panel/itb-account", label: "ITB Account" },
      ]}
      secondarynavbars={secNav}
    />
  );
}
