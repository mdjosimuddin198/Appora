import { useState } from "react";
import { Link, useLocation } from "react-router";
import appsData from "../../public/app.json";
import AppCard from "../components/AppCard";
import appError from "../assets/App-Error.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Apps = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const isHome = location.pathname === "/";

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase()),
  );

  const displayApps = isHome ? appsData.slice(0, 8) : filteredApps;
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {isHome ? (
        <>
          <h1 className="text-3xl font-bold text-center">Trending Apps</h1>
          <p className="text-center text-gray-500 mt-2">
            Explore all trending apps on the market
          </p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center">
            Our All Applications
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
          <div className="flex items-center justify-between my-6">
            <p>{filteredApps.length} Apps Found</p>
            <label className="input">
              <FaMagnifyingGlass />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
                placeholder="Search"
              />
            </label>
          </div>
        </>
      )}

      {filteredApps.length === 0 && (
        <>
          <div className="flex items-center flex-col space-y-1  justify-center">
            <img src={appError} alt="" />
            <h2 className="text-3xl font-bold">OPPS!! APP NOT FOUND!</h2>
            <p className="text-[#627382]">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
            <Link
              to="/"
              className=" btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90  rounded-md transition"
            >
              Go Back !
            </Link>
          </div>
        </>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {displayApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      {isHome && (
        <div className="flex items-center justify-center">
          <Link
            to="/apps"
            className="mt-6 btn   text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90  rounded-md transition"
          >
            View All
          </Link>
        </div>
      )}
    </div>
  );
};

export default Apps;
