import Breadcrumb from "@/components/Breadcrumb";
import SecondaryNavbar from "@/components/SecondNavBar";

const PageTemplate = ({
  children,
  pageTitle,
  breadCrumbs,
  secondarynavbars,
}) => {
  return (
    <div className="mx-auto flex w-full max-w-[1140px] flex-1 flex-col gap-4 px-4 py-5 xl:px-0">
      <div className="hidden lg:block">
        <Breadcrumb breadCrumbs={breadCrumbs} />
      </div>
      {secondarynavbars ? <SecondaryNavbar secNav={secondarynavbars} /> : null}
      <h2 className="text-seven-font-size-page-title font-light text-seven-page-heading">
        {pageTitle}
      </h2>
      {children}
    </div>
  );
};

export default PageTemplate;
