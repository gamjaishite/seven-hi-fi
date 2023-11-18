import { ChevronsRight } from "lucide-react";
import React from "react";
/**
 * @param {{breadCrumbs: {href: (string|null); label: string;}[]}} props
 */
export default function Breadcrumb({ breadCrumbs }) {
  return (
    <>
      <div className="w-full px-4 py-2 rounded-md flex gap-2 bg-[#f5f5f5] items-center text-sm">
        <a href="/">SIX</a>
        {breadCrumbs.map((elmt, index) => (
          <React.Fragment key={index}>
            <span>
              <ChevronsRight className="text-[#ccc]" size={10} />
            </span>
            {elmt.href ? (
              <a href={elmt.href}>{elmt.label}</a>
            ) : (
              <span>{elmt.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
