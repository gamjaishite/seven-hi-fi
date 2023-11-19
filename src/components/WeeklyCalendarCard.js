export function WeeklyCalendarCard(props) {
  const item = props.item;
  const idx = props.idx;

  console.log(item);

  return (
    <div
      key={idx}
      className={`flex flex-col border-seven-border-gray absolute top-[5px] z-10 flex w-[calc(100%-10px)] rounded-lg border bg-[#F8F8F8] px-2.5 py-[5px] text-[12px] font-bold h-[${
        50 + 60 * (item.duration - 1)
      }px]`}
    >
      <p className="text-ellipsis overflow-hidden whitespace-nowrap">{item.start} - {item.end}</p>
      <p className="text-ellipsis overflow-hidden whitespace-nowrap">{item.matkulCode} <span className="font-normal">{item.matkulName}</span></p>
    </div>
  );
}
