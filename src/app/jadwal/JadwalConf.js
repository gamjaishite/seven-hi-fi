import { Button } from "@/components/ui/button";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function JadwalConf() {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="px-1">
            <FaCaretLeft />
          </Button>
          <span>Minggu {"1 - 5"}</span>
          <Button variant="ghost" className="px-1">
            <FaCaretRight />
          </Button>
        </div>
        <div>Right</div>
      </div>
    </>
  );
}
