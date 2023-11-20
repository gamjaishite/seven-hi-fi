"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SecondaryNavbar = ({ secNav }) => {
  // FORMAT :

  // secNav: {
  //   url1: [
  //     activeIconElement1, 
  //     inActiveIconElement1,
  //     text1
  //   ],
  //   url2: [
  //     activeIconElement2,
  //     inActiveIconElement2,
  //     text2
  //   ],
  //   url3: [
  //     activeIconElement3,
  //     inActiveIconElement3,
  //     text3]
  //   , ...
  // }


  // EXAMPLE :
  

  // /* eslint-disable react/jsx-key */
  // const secNav = {
  //   "/status-mahasiswa": [
  //     <FaInfoCircle className="text-seven-hyperlink" />,
  //     <FaInfoCircle className="" />,
  //     "Struktur Kurikulum",
  //   ],
  //   "/tujuan-pendidikan": [
  //     <FaInstagram className="text-seven-hyperlink" />,
  //     <FaInstagram className="" />,
  //     "Tujuan Pendidikan & Capaian (Outcomes) Lulusan Program Studi",
  //   ],
  // };

  const currentUrl = usePathname();

  return (
    <ul className="w-full border-b border-solid border-seven-border-grey flex gap-1">
      {Object.entries(secNav).map(
        ([url, [nonActiveIcon, activeIcon, text]], index) => {
          const isActive = currentUrl === url;

          return (
            <Link href={url} key={index}>
              <li
                className={`p-2 text-seven-font-size-default cursor-default relative block ${
                  isActive
                    ? "border border-solid border-seven-border-grey rounded-t-lg text-seven-filter border-b-transparent"
                    : "border-transparent hover:bg-seven-hover-light cursor-pointer"
                } border-b-0 flex justify-center items-center gap-1`}
              >
                {isActive ? activeIcon : nonActiveIcon}
                {text}
              </li>
            </Link>
          );
        }
      )}
    </ul>
  );
};

export default SecondaryNavbar;
