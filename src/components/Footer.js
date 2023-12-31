import {
  FaComment,
  FaInfoCircle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="w-full h-[110px] flex px-4 bg-seven-bg-bread justify-center items-center">
        <div className="max-w-[1140px] w-full flex-col">
          <span className="text-seven-font-size-footer-title text-seven-page-heading font-light py-1">
            Institut Teknologi Bandung
          </span>
          <div className="flex items-center gap-1 text-seven-font-size-footer-icons py-1">
            <span className="text-seven-font-size-footer-body">Direktorat Pendidikan</span>
            <FaInfoCircle className="text-seven-hyperlink hover:text-seven-hyperlink-hover" />
            <FaInstagram className="text-seven-hyperlink hover:text-seven-hyperlink-hover" />
            <FaTwitter className="text-seven-hyperlink hover:text-seven-hyperlink-hover" />
            <FaComment className="text-seven-hyperlink hover:text-seven-hyperlink-hover" />
          </div>
        </div>
      </div>
    </>
  );
}
