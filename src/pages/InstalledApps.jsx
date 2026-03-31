import { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

export default function InstalledApps() {
  const [apps, setApps] = useState([]);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(stored);
  }, []);

  // uninstall
  const handleUninstall = (id) => {
    const updated = apps.filter((app) => app.id !== id);
    setApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));

    toast.success("App Uninstalled!");
  };

  // sorting
  const sortedApps = [...apps].sort((a, b) => {
    if (sort === "size") return a.size - b.size;
    if (sort === "rating") return b.ratingAvg - a.ratingAvg;
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <p className="font-medium">{apps.length} Apps Found</p>

        <select
          className="select select-bordered"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort By</option>
          <option value="size">Size</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* List */}
      <div className="space-y-4">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between p-4 bg-base-100 rounded-xl shadow-sm"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 rounded-lg"
              />

              <div>
                <h2 className="font-semibold">{app.title}</h2>

                <div className="text-sm text-gray-500 flex gap-3 mt-1">
                  <span className="text-green-500 flex items-center justify-center gap-1">
                    <FaDownload className="mx-auto text-green-500" />
                    {(app.downloads / 1000).toFixed(0)}K
                  </span>
                  <span className="text-yellow-500 flex items-center justify-center gap-1">
                    {" "}
                    <FaStar className="mx-auto text-orange-500" />{" "}
                    {app.ratingAvg}
                  </span>
                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <button
              onClick={() => handleUninstall(app.id)}
              className="btn btn-success btn-sm"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {apps.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No installed apps found 😢
        </div>
      )}
    </div>
  );
}
