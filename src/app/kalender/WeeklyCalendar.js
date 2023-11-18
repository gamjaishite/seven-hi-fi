import { useState } from "react";

const daysName = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

const monthsName = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember",
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
      (1000 * 3600 * 24 * 7)
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

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-start">
        {pilihanMinggu.map((item, idx) => {
          return (
            <button
              key={idx}
              className={`${
                minggu === item ? "border border-seven-border-gray" : "border border-transparent"
              } py-1 px-2.5 text-[12px] font-bold`}
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
            <div key={idx} className="flex flex-col flex-1 items-center justify-center w-[100px] h-[100px] border border-seven-border-gray">
              <span className="text-[14px] font-bold">{daysName[item.getDay() - 1]}</span>
              <span className="text-[16px] font-bold">{`${item.getDate()} ${monthsName[item.getMonth()]}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
