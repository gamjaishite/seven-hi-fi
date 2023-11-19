import { WeeklyCalendarCard } from "@/components/WeeklyCalendarCard";
import { useState } from "react";

const daysName = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

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

function getFirstDate(month, year) {
  const date = new Date(year, month - 1, 1);

  if (date.getDay() === 0) {
    date.setDate(2);
  } else if (date.getDay() === 6) {
    date.setDate(3);
  } else {
    while (date.getDay() !== 1) {
      date.setDate(date.getDate() - 1);
    }
  }

  return date;
}

function getLastDate(month, year) {
  const date = new Date(year, month, 0);

  if (date.getDay() === 0) {
    date.setDate(date.getDate() - 2);
  } else if (date.getDay() === 6) {
    date.setDate(date.getDate() - 1);
  } else {
    while (date.getDay() !== 5) {
      date.setDate(date.getDate() + 1);
    }
  }

  return date;
}

export default function WeeklyCalendar({ semester, bulan }) {
  let tahun;
  if (semester.startsWith("1")) {
    tahun = parseInt(semester.split("-")[1].split("/")[0]);
  } else {
    tahun = parseInt(semester.split("-")[1].split("/")[1]);
  }

  const weekCount = Math.ceil(
    (getLastDate(bulan, tahun).getTime() -
      getFirstDate(bulan, tahun).getTime()) /
      (1000 * 3600 * 24 * 7),
  );

  const pilihanMinggu = [];
  for (let i = 1; i <= weekCount; i++) {
    pilihanMinggu.push(i);
  }

  const [minggu, setMinggu] = useState(1);

  const tanggal = [];
  for (let i = 0; i < 5; i++) {
    const date = new Date(getFirstDate(bulan, tahun));
    date.setDate(date.getDate() + 7 * (minggu - 1) + i);
    tanggal.push(date);
  }

  const jam = [];
  for (let i = 7; i <= 17; i++) {
    jam.push(`${i.toString().padStart(2, "0")}:00`);
  }

  const jadwal = require("./jadwal.json");
  console.log(jadwal);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-start">
        {pilihanMinggu.map((item, idx) => {
          return (
            <button
              type="button"
              key={item}
              className={`${
                minggu === item
                  ? "border-seven-border-gray border"
                  : "border border-transparent"
              } px-2.5 py-1 text-[12px] font-bold`}
              onClick={() => setMinggu(item)}
            >
              Minggu {item}
            </button>
          );
        })}
      </div>
      <div className="flex flex-row items-center justify-start">
        {tanggal.map((item, idx) => {
          return (
            <div
              key={item}
              className="border-seven-border-gray flex flex-1 flex-col items-center justify-center gap-[5px] border py-2.5"
            >
              <span className="text-[14px] font-bold">
                {daysName[item.getDay() - 1]}
              </span>
              <span className="text-[16px] font-bold">{`${item.getDate()} ${
                monthsName[item.getMonth()]
              }`}</span>
            </div>
          );
        })}
      </div>

      {jam.map((jamItem, jamIdx) => {
        return (
          <div
            key={jamItem}
            className="relative flex flex-row items-center justify-start"
          >
            <span className="absolute -left-10 -top-2.5 text-[14px]">
              {jamItem}
            </span>
            {tanggal.map((tanggalItem, tanggalIdx) => {
              const classes = jadwal[tanggalItem.getDay() - 1].classes;
              return (
                <div
                  key={tanggalItem}
                  className="border-seven-border-gray relative flex  h-[60px] flex-1 flex-col items-center justify-center border p-[5px]"
                >
                  {classes.map((classItem, classIdx) => {
                    if (classItem.start === jamItem) {
                      return WeeklyCalendarCard({
                        item: classItem,
                        idx: classIdx,
                      });
                    }
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
