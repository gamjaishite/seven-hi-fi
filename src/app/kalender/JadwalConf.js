import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const monthsName = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

function SelectSemester({ semester, setSemester }) {
  return (
    <Select defaultValue={semester} onValueChange={setSemester}>
      <SelectTrigger className="space-x-2 border border-seven-border-filter min-w-max">
        <SelectValue placeholder="Semester" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>2023/2024</SelectLabel>
          <SelectItem value="1-2023/2024">Semester 1 - 2023/2024</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>2022/2023</SelectLabel>
          <SelectItem value="3-2022/2023">Semester 3 - 2022/2023</SelectItem>
          <SelectItem value="2-2022/2023">Semester 2 - 2022/2023</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function SelectMode({ mode, setMode }) {
  return (
    <Select defaultValue={mode} onValueChange={setMode}>
      <SelectTrigger className="space-x-2 border border-seven-border-filter">
        <SelectValue placeholder="Mode" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="month">Bulan</SelectItem>
        <SelectItem value="week">Minggu</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default function JadwalConf({ semester, setSemester, mode, setMode, bulan, setBulan }) {
  return (
    <>
      <div className="flex-row-reverse w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SelectSemester semester={semester} setSemester={setSemester} />
          <SelectMode mode={mode} setMode={setMode} />
        </div>

        {mode == "week" && (
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="px-1" onClick={() => setBulan((bulan + 10) % 12 + 1)}>
              <FaCaretLeft />
            </Button>
            <span className="w-[125px] text-center">Bulan {monthsName[bulan - 1]}</span>
            <Button variant="ghost" className="px-1" onClick={() => setBulan(bulan % 12 + 1)}>
              <FaCaretRight />
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
