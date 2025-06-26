const IpResult = ({ data }) => {
  const DataPiece = ({ label, data, pre }) => {
    const hasBorder = ["isp", "location", "timezone"].includes(label);
    const obj = typeof data === "object";
    return (
      <div className="sm:flex items-start h-full">
        {hasBorder ? (
          <span className="max-lg:hidden lg:mr-10 h-5 w-[1px] bg-justDark self-center"></span>
        ) : null}
        <div id={label} className={`text-center sm:text-left px-2.5 `}>
          <h2 className="font-medium text-justDark uppercase max-xs:text-[0.7em] text-[0.8em] ">
            {label}
          </h2>
          <p className="font-medium text-veryDark lg:text-2xl md:max-lg:text-xl text-lg ">
            {pre ? `${pre} ` : null}
            {obj ? `${data?.city}, ${data?.region}` : data}
          </p>
          {obj ? <p>{data?.postalCode}</p> : null}
        </div>
      </div>
    );
  };

  return (
    <div
      id="ip-result"
      className={`bg-white shadow-2xl rounded-2xl w-4/5  py-8 sm:py-10 absolute md:max-[850px]:top-[23%] sm:max-md:top-[25%] top-[23%] z-[999] `}
    >
      <div
        id="results-wrapper"
        className="sm:px-10 grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-4 gap-4 place-items-start max-sm:place-items-center sm:place-content-evenly max-sm:gap-y-4"
      >
        <DataPiece label="ip address" data={data.ip} />
        <DataPiece label="location" data={data.location} />
        <DataPiece label="timezone" data={data?.location?.timezone} pre="UTC" />
        <DataPiece label="isp" data={data.isp} />
      </div>
    </div>
  );
};

export default IpResult;
