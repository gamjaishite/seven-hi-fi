import Breadcrumb from "@/components/Breadcrumb";
import SecondaryNavbar from "@/components/SecondNavBar";
import Footer from "./Footer";

const PageTemplate = ({
  children,
  pageTitle,
  breadCrumbs,
  secondarynavbars,
  pageSubTitle
}) => {
  return (

    <div className="mx-auto flex w-full max-w-[1140px] flex-1 flex-col gap-4 px-4 py-5 xl:px-0">
      <div className="hidden lg:block">
        <Breadcrumb breadCrumbs={breadCrumbs} />
      </div>
      {secondarynavbars ? <SecondaryNavbar secNav={secondarynavbars} /> : null}
      <span>
        <h2 className="text-seven-font-size-page-title font-light text-seven-page-heading inline-block mr-2">
          {pageTitle}
        </h2>
        {pageSubTitle &&
          <span className="text-seven-font-size-page-subtitle text-seven-page-subheading">{pageSubTitle}</span>
        }
      </span>
      {children}
    </div>
  );
};

export default PageTemplate;
