"use client";

import jadwal from "./jadwal.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import DialogPresensi from "./DialogPresensi";

function getMonthAndYears(semester) {
  const months = [];
  const yearFirstSem = parseInt(semester.split("-")[1].split("/")[0]);
  const yearSecSem = parseInt(semester.split("/")[1]);

  const semesters = {
    1: { start: 7, duration: 5, year: yearFirstSem },
    2: { start: 0, duration: 5, year: yearSecSem },
    3: { start: 5, duration: 3, year: yearSecSem },
  };
  for (
    let i = semesters[semester[0]].start;
    i <= semesters[semester[0]].duration + semesters[semester[0]].start;
    i++
  ) {
    const date = new Date();
    date.setMonth(i);
    date.setFullYear(semesters[semester[0]].year + (i > 11 ? 1 : 0));
    months.push({
      month: i,
      year: semesters[semester[0]].year,
      label: date.toLocaleDateString("id-ID", {
        year: "numeric",
        month: "short",
      }),
    });
  }

  return months;
}

function Calendar({
  selectedMonth,
  presensi,
  presensiAttributes,
  setPresensi,
}) {
  const date = new Date(selectedMonth.year, selectedMonth.month);
  date.setDate(date.getDate() - date.getDay());

  return (
    <Table>
      <TableHeader>
        <TableRow className="border border-seven-border-grey">
          {Array.from(Array(5), (_, idx) => {
            const date = new Date();
            date.setDate(idx - 1);
            const day = date.toLocaleDateString("id-ID", { weekday: "long" });
            return (
              <TableHead
                key={`${idx}-thead`}
                className="border border-seven-border-grey text-center font-bold text-seven-foreground-light"
              >
                {day}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from(Array(5), (_, i) => {
          return (
            <TableRow
              className="border border-seven-border-grey"
              key={`${i}trow`}
            >
              {jadwal.map((item, idx) => {
                date.setDate(date.getDate() + 1);
                if (date.getDay() === 6) {
                  date.setDate(date.getDate() + 2);
                }
                return (
                  <TableCell
                    className="h-full min-h-[107px] border border-seven-border-grey p-2 align-top"
                    key={`j ${idx}`}
                  >
                    <div className="flex w-full min-w-[180px] flex-col gap-1 ">
                      <span
                        className={`${
                          date.getMonth() !== selectedMonth.month &&
                          selectedMonth.month < 12
                            ? "text-zinc-400"
                            : ""
                        } text-seven-font-size-default`}
                      >
                        {date.getDate()}{" "}
                        {date.getMonth() !== selectedMonth.month &&
                          selectedMonth.month < 12 &&
                          date.toLocaleDateString("id-ID", { month: "long" })}
                      </span>
                      <div className="flex flex-col [&>*:not(:last-child)]:border-b">
                        {item.classes.map((cls, idx) => (
                          <div
                            key={`${idx} - item`}
                            className={`
                           flex items-start gap-1 py-2 text-xs`}
                          >
                            <span className="p-1">
                              {(presensi[
                                date.toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "numeric",
                                  day: "numeric",
                                })
                              ] &&
                                presensi[
                                  date.toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric",
                                  })
                                ][cls.matkulCode] &&
                                presensiAttributes[
                                  presensi[
                                    date.toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "numeric",
                                      day: "numeric",
                                    })
                                  ][cls.matkulCode]
                                ] &&
                                presensiAttributes[
                                  presensi[
                                    date.toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "numeric",
                                      day: "numeric",
                                    })
                                  ][cls.matkulCode]
                                ].icon) ?? (
                                <FaRegCircle className="text-seven-foreground-dark" />
                              )}
                            </span>
                            <div className="flex flex-col gap-2">
                              <DialogPresensi
                                cls={cls}
                                date={new Date(date.toLocaleDateString())}
                                presensi={presensi}
                                setPresensi={setPresensi}
                                trigger={
                                  <>
                                    <div
                                      className={`${
                                        (presensi[
                                          date.toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "numeric",
                                            day: "numeric",
                                          })
                                        ] &&
                                          presensi[
                                            date.toLocaleDateString("en-US", {
                                              year: "numeric",
                                              month: "numeric",
                                              day: "numeric",
                                            })
                                          ][cls.matkulCode] &&
                                          presensiAttributes[
                                            presensi[
                                              date.toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "numeric",
                                                day: "numeric",
                                              })
                                            ][cls.matkulCode]
                                          ] &&
                                          presensiAttributes[
                                            presensi[
                                              date.toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "numeric",
                                                day: "numeric",
                                              })
                                            ][cls.matkulCode]
                                          ].class) ??
                                        "hover:text-seven-hyperlink-hover text-seven-hyperlink"
                                      } flex cursor-pointer flex-col gap-1 rounded-md px-1 hover:underline`}
                                    >
                                      <span className="line-clamp-2 ">
                                        {cls.start}-{cls.end}{" "}
                                        <span className="font-bold">
                                          {cls.matkulCode}
                                        </span>{" "}
                                        {cls.matkulName}
                                      </span>
                                      <span>{cls.location}</span>
                                    </div>
                                  </>
                                }
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default function MonthlyCalendar({
  semester,
  presensiAttributes,
  presensi,
  setPresensi,
}) {
  const monthAndYears = getMonthAndYears(semester);
  const [selectedMonth, setSelectedMonth] = useState(monthAndYears[0]);

  useEffect(() => {
    setSelectedMonth(monthAndYears[0]);
  }, [semester]);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-1">
          {monthAndYears.map((item, idx) => (
            <Button
              key={`${idx} - my`}
              className={`${
                selectedMonth.label === item.label
                  ? "rounded-b-none rounded-t-sm border border-b-0 border-seven-border-grey text-seven-foreground-light"
                  : "rounded-none text-seven-hyperlink"
              } max-h-max font-normal`}
              variant="ghost"
              onClick={() => setSelectedMonth(item)}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <Calendar
          selectedMonth={selectedMonth}
          presensi={presensi}
          presensiAttributes={presensiAttributes}
          setPresensi={setPresensi}
        />
      </div>
    </>
  );
}
