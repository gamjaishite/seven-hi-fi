import { useState } from "react";

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

  return (
    <>
      <div className="flex flex-row items-center justify-start">
        {pilihanMinggu.map((item) => {
          return (
            <button
              className={`${
                minggu === item ? "border-2 border-seven-border-gray" : "border-2 border-transparent"
              } py-1 px-2.5 text-[12px]`}
              onClick={() => setMinggu(item)}
            >
              Minggu {item}
            </button>
          );
        })}
      </div>
    </>
  );
}
