import { useEffect, useState } from "react";
import MyMap from "./components/MyMap";
import Header from "./components/Header";
const apiKey = import.meta.env.VITE_IPIFY_API_KEY;
import { ipAddressRegex, domainNameRegex, getData } from "./utils";
import IpResult from "./components/IpResult";

function App() {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState({});

  useEffect(() => console.log(data), [data]);
  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

  useEffect(() => {
    const fetchUserIp = async () => {
      const storedData = localStorage.getItem("data");
      if (!storedData) {
        const data = await getData(url);
        console.log("foreign data");
        localStorage.setItem("data", JSON.stringify(data));
        return setData({ ...data });
      }
      setData(JSON.parse(storedData));
      console.log("local data");
    };
    fetchUserIp();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const str = userInput.trim();
    if (str) {
      if (ipAddressRegex.test(str)) {
        url = `${url}&ipAddress=${str}`;
      } else if (domainNameRegex.test(str)) {
        url = `${url}&domain=${str}`;
      } else return;
      const dat = await getData(url);
      if (dat.ip) {
        console.log("from user input: ", dat);
        localStorage.setItem("data", JSON.stringify(dat));
        setData({ ...dat });
        setUserInput("");
      }
    }
  };
  const handleInputChange = (e) => setUserInput(e.target.value);

  const DataPiece = ({ label, data, pre }) => {
    const hasBorder = ["isp", "location", "timezone"].includes(label);
    const obj = typeof data === "object";
    return (
      <div className="self-start sm:flex sm:gap-10">
        {hasBorder ? (
          <span className="max-md:hidden h-5 w-[1px] bg-justDark"></span>
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
    <div className=" min-h-[100vh] flex flex-col justify-start items-center w-full relative ">
      <Header
        handleInputChange={handleInputChange}
        userInput={userInput}
        handleSubmit={handleSubmit}
      />
      <IpResult data={data} />
      <MyMap
        marker={[data?.location?.lat, data?.location?.lng]}
        loc={data?.location}
      />
    </div>
  );
}

export default App;
