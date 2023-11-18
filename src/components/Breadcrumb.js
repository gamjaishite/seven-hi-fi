import { ChevronsRight } from "lucide-react";

export default function Breadcrumb({breadCrumbs}) {
  return (
    <>
      <div className="w-full px-4 py-2 rounded-md flex gap-2 bg-seven-bg-bread items-center text-seven-font-size-default">
        <a href="/">SIX</a>
        {breadCrumbs.map((elmt) => (
          <>
            <span>
              <ChevronsRight className="text-[#ccc]" size={10} />
            </span>
            <a href={elmt.href ?? '/'}>{elmt.label}</a>
          </>
        ))}
      </div>
    </>
  );
}
