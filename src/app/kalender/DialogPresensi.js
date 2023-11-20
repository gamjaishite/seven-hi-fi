import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DialogPresensi({
  trigger,
  cls,
  date,
  presensi,
  setPresensi,
  setStatus,
}) {
  const presensiState =
    presensi[
      date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })
    ];

  let presensiDisplay;
  if (presensiState) {
    const presensiStatus = presensiState[cls.matkulCode];
    if (presensiStatus) {
      switch (presensiStatus) {
        case "ATTEND":
          presensiDisplay = (
            <p className="py-4 text-center text-seven-foreground-light">Sudah Tandai Hadir</p>
          );
          break;
        case "NOT ATTEND":
          presensiDisplay = (
            <p className="py-4 text-center text-seven-foreground-light">
              Anda tidak mengisi presensi
            </p>
          );
          break;
        case "ACTIVE":
          presensiDisplay = (
            <Button
              className="hover:bg-seven-hyperlink-hover mx-auto my-4 max-w-max bg-seven-hyperlink font-light"
              onClick={() => {
                presensi[
                  date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })
                ][cls.matkulCode] = "ATTEND";
                setPresensi({ ...presensi });
                if (setStatus) {
                  setStatus("filled");
                }
              }}
            >
              Tandai Hadir
            </Button>
          );
          break;
        case "WILL ACTIVE":
          presensiDisplay = (
            <div className="flex flex-col items-center py-4">
              <p className="text-center text-seven-font-size-default text-seven-foreground-light">
                Presensi mandiri dapat dilakukan pada
              </p>
              <p className="text-center text-seven-font-size-default text-seven-foreground-light font-bold">
                {date.toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                - {cls.start}
              </p>
            </div>
          );
          break;
        default:
          presensiDisplay = "";
          break;
      }
    }
  }
  return (
    <>
      <Dialog>
        <DialogTrigger className="flex flex-col text-left h-full">{trigger}</DialogTrigger>
        <DialogContent className="text-seven-font-size-default">
          <DialogHeader>
            <DialogTitle className="text-seven max-w-md text-seven-font-size-modal-title font-normal">
              {cls.matkulCode} - {cls.matkulName}
            </DialogTitle>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-seven-font-size-modal-content">
                <span>
                  {cls.start} - {cls.end}
                </span>
                <span>|</span>
                <span>
                  {date.toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div>
                <p className="font-bold text-seven-font-size-default">{cls.lecturer}</p>
                <p className="text-seven-font-size-modal-content">{cls.location}</p>
              </div>
              <div>
                <p className="font-bold text-seven-font-size-default">Topik</p>
                <p className="text-seven-font-size-modal-content">Topik Perkuliahan</p>
              </div>
              <div>
                <p className="font-bold text-seven-font-size-default">Catatan</p>
                <p className="text-seven-font-size-modal-content">Catatan Perkuliahan</p>
              </div>
              {presensiDisplay}
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
