import { FaInstagram,FaTwitter } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { TbMessageCircle2Filled } from "react-icons/tb";
export default function Footer() {
    return (
      <>
        <div className="w-full h-[110px] flex px-4 bg-[#f5f5f5] justify-center items-center">
            <div className="max-w-[1140px] w-full flex-col">
                <span className="text-4xl text-seven-page-heading font-light py-1" >Institut Teknologi Bandung</span>
                <div className="flex items-center gap-1">
                    Direktorat Pendidikan
                    <FaCircleInfo className="text-[#003366]"></FaCircleInfo>
                    <FaInstagram className="text-[#003366]"></FaInstagram>
                    <FaTwitter className="text-[#003366]"></FaTwitter>
                    <TbMessageCircle2Filled className="text-[#003366]"></TbMessageCircle2Filled>
                </div>
            </div>
        </div>
      </>
    );
  }