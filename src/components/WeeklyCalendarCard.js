import DialogPresensi from "@/app/kalender/DialogPresensi";
import { useState } from "react";

export function WeeklyCalendarCard(props) {
  const item = props.item;
  const idx = props.idx;

  const [status, setStatus] = useState(item.status);

  const statusConf = {
    empty: {
      bgColor: "bg-seven-bg-table",
      textColor: "text-seven-hyperlink",
    },
    open: {
      bgColor: "bg-seven-bg-presensi-exist",
      textColor: "text-seven-foreground-dark",
    },
    filled: {
      bgColor: "bg-seven-bg-presensi-done",
      textColor: "text-seven-foreground-dark",
    },
    skipped: {
      bgColor: "bg-seven-bg-presensi-skip",
      textColor: "text-seven-foreground-dark",
    },
  };

  let statusPresensi;
  switch (status) {
    case "empty":
      statusPresensi = null;
      break;
    case "open":
      statusPresensi = "ACTIVE";
      break;
    case "filled":
      statusPresensi = "ATTEND";
      break;
    case "skipped":
      statusPresensi = "NOT ATTEND";
      break;
  }

  let cardClassName = `border-seven-border-gray absolute top-[5px] z-10 flex w-[calc(100%-10px)] flex-col rounded-lg border px-2.5 py-[5px] ${
    statusConf[status].bgColor
  } text-[12px] font-bold h-[${60 + 70 * (item.duration - 1)}px]`;

  return (
    <div
      key={idx}
      className={cardClassName}
    >
      <DialogPresensi
        cls={item}
        date={props.date}
        presensi={props.presensi}
        setPresensi={props.setPresensi}
        setStatus={setStatus}
        trigger={
          <>
            <div className="flex w-full flex-row items-center">
              <p className={`w-full truncate ${statusConf[status].textColor}`}>
                {item.start} - {item.end}
              </p>

              {statusPresensi &&
                props.presensiAttributes[statusPresensi] &&
                props.presensiAttributes[statusPresensi].icon}
            </div>
            <p className={`w-full truncate ${statusConf[status].textColor}`}>
              {item.matkulCode}{" "}
              <span className="font-normal">{item.matkulName}</span>
            </p>
            <p className={`w-full truncate ${statusConf[status].textColor} font-normal`}>
              {item.location}{" "}
            </p>
          </>
        }
      />
    </div>
  );
}
