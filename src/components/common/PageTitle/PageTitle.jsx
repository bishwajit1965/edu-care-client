const PageTitle = ({ pageTitle, description }) => {
  return (
    <div className="lg:space-y-4 space-y-2">
      <h1 className="lg:text-4xl text-center font-bold">{pageTitle}</h1>
      <p className=" ">{description}</p>
    </div>
  );
};

export default PageTitle;
