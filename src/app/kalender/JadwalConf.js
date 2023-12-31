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
      <SelectTrigger className="min-w-max space-x-2 border border-seven-border-filter !text-seven-font-size-filter">
        <SelectValue placeholder="Semester" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="!text-seven-font-size-filter">
            2023/2024
          </SelectLabel>
          <SelectItem
            value="1-2023/2024"
            className="!text-seven-font-size-filter"
          >
            Semester 1 - 2023/2024
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel className="!text-seven-font-size-filter">
            2022/2023
          </SelectLabel>
          <SelectItem
            className="!text-seven-font-size-filter"
            value="3-2022/2023"
          >
            Semester 3 - 2022/2023
          </SelectItem>
          <SelectItem
            className="!text-seven-font-size-filter"
            value="2-2022/2023"
          >
            Semester 2 - 2022/2023
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function SelectMode({ mode, setMode }) {
  return (
    <Select defaultValue={mode} onValueChange={setMode}>
      <SelectTrigger className="space-x-2 border border-seven-border-filter !text-seven-font-size-filter">
        <SelectValue placeholder="Mode" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="month" className="!text-seven-font-size-filter">
          Bulan
        </SelectItem>
        <SelectItem value="week" className="!text-seven-font-size-filter">
          Minggu
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default function JadwalConf({
  semester,
  setSemester,
  mode,
  setMode,
  bulan,
  setBulan,
}) {
  return (
    <>
      <div className="flex w-full flex-row-reverse items-center justify-between">
        <div className="flex items-center gap-2">
          <SelectSemester semester={semester} setSemester={setSemester} />
          <SelectMode mode={mode} setMode={setMode} />
        </div>

        {mode === "week" && (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="px-1"
              onClick={() => setBulan(((bulan + 10) % 12) + 1)}
            >
              <FaCaretLeft />
            </Button>
            <span className="w-[125px] text-center">
              Bulan {monthsName[bulan - 1]}
            </span>
            <Button
              variant="ghost"
              className="px-1"
              onClick={() => setBulan((bulan % 12) + 1)}
            >
              <FaCaretRight />
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
