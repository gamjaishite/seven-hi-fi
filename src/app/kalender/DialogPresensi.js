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

  var presensiStatus;

  let presensiDisplay;
  if (presensiState) {
    presensiStatus = presensiState[cls.matkulCode];
    if (presensiStatus) {
      switch (presensiStatus) {
        case "ATTEND":
          presensiDisplay = (
            <p className="py-4 text-center text-seven-foreground-light">
              Sudah Tandai Hadir
            </p>
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
              className="border border-seven-border-button-dark mx-auto my-4 max-w-max font-light text-seven-foreground-dark hover:from-seven-bg-button-dark-hover hover:to-seven-bg-button-dark-hover !text-seven-font-size-filter px-[10px] py-[5px] w-fit h-fit bg-gradient-to-b from-seven-bg-button-dark to-seven-bg-button-dark-hover"
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
              <p className="text-center text-seven-font-size-default font-bold text-seven-foreground-light">
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
        <DialogTrigger className="flex h-full flex-col text-left">
          {trigger}
        </DialogTrigger>
        <DialogContent className="max-w-sm pb-7 text-seven-font-size-default">
          <DialogHeader>
            <DialogTitle className="text-seven max-w-xs text-left text-seven-font-size-modal-title font-normal pb-[9px]">
              {cls.matkulCode} - {cls.matkulName}
            </DialogTitle>
            <div className="flex flex-col gap-2">
              <div className={`flex flex-col gap-4 ${presensiStatus !== 'ACTIVE' && presensiDisplay ? 'border-b-[1px] pb-6' : ''}`}>
                <div className="text-left">
                  <p className="font-bold text-seven-font-size-default">Kuliah - Tatap Muka</p>
                  <div className="flex items-center gap-2 text-seven-font-size-modal-content">
                    <span className="text-left">
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
                </div>
                <div className="text-left">
                  <p className="font-bold text-seven-font-size-default">Dosen</p>
                  <p className="text-seven-font-size-modal-content">{cls.lecturer}</p>
                </div>

                <div className="text-left">
                  <p className="font-bold text-seven-font-size-default">Ruang</p>
                  <p className="text-seven-font-size-modal-content">{cls.location}</p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-seven-font-size-default">Topik</p>
                  <p className="text-seven-font-size-modal-content">Topik Perkuliahan</p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-seven-font-size-default">Catatan</p>
                  <p className="text-seven-font-size-modal-content">Catatan Perkuliahan</p>
                </div>
              </div>
              {presensiDisplay}
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
