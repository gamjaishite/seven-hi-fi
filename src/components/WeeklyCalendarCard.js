export function WeeklyCalendarCard(props) {
  const item = props.item;
  const idx = props.idx;

  let bgColor, textColor;
  switch (item.status) {
    case "empty":
      bgColor = "bg-seven-bg-table";
      textColor = "text-seven-hyperlink";
      break;
    case "open":
      console.log(item.status);
      bgColor = "bg-seven-bg-presensi-exist";
      textColor = "text-seven-foreground-dark";
      break;
    case "filled":
      bgColor = "bg-seven-bg-presensi-done";
      textColor = "text-seven-foreground-dark";
      break;
    case "skipped":
      bgColor = "bg-seven-bg-presensi-skip";
      textColor = "text-seven-foreground-dark";
      break;
  }

  return (
    <div
      key={idx}
      className={`flex flex-col border-seven-border-gray absolute top-[5px] z-10 flex w-[calc(100%-10px)] rounded-lg border px-2.5 py-[5px] ${bgColor} text-[12px] font-bold h-[${
        50 + 60 * (item.duration - 1)
      }px]`}
    >
      <p className={`text-ellipsis overflow-hidden whitespace-nowrap ${textColor}`}>{item.start} - {item.end}</p>
      <p className={`text-ellipsis overflow-hidden whitespace-nowrap ${textColor}`}>{item.matkulCode} <span className="font-normal">{item.matkulName}</span></p>
    </div>
  );
}
