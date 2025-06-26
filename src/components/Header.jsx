import React from "react";

const Header = ({ handleSubmit, handleInputChange, userInput }) => {
  return (
    <header className="w-full flex flex-col justify-center gap-7 max-sm: items-center  pb-20 h-[35vh] bg-[url(/assets/images/pattern-bg-desktop.png)] max-md:bg-[url(/assets/images/pattern-bg-mobile.png)] max-md:h-[40vh] bg-cover bg-no-repeat ">
      <h1 className="text-2xl font-bold sm:text-3xl text-white text-center">
        IP Address Tracker
      </h1>
      <form
        id="input-search"
        onSubmit={handleSubmit}
        className="w-4/5 md:w-2/5 lg:w-1/3 h-12 mx-auto flex max-sm:mb-7"
      >
        <input
          type="search"
          name="ipAddress"
          value={userInput}
          className="w-full rounded-l-xl px-4 bg-white cursor-pointer outline-0 focus:ring-0"
          placeholder="Search for any IP address or domain"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-veryDark px-5 cursor-pointer rounded-r-xl"
        >
          <span>
            <img
              src="assets/images/icon-arrow.svg"
              alt="Icon arrow submit button"
            />
          </span>
        </button>
      </form>
    </header>
  );
};

export default Header;
