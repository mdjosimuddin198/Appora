import { FaStar, FaDownload } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`}>
      <div className="card bg-base-100 shadow hover:shadow-lg transition">
        <figure className="p-4">
          <img
            src={app.image}
            alt={app.title}
            className="rounded-xl h-40 w-full object-cover"
          />
        </figure>
        <div className="px-4 pb-4">
          <h2 className="font-semibold text-sm">{app.title}</h2>

          <div className="flex justify-between items-center mt-2 text-xs">
            <span className="badge badge-success gap-1">
              <FaDownload /> {(app.downloads / 1000).toFixed(0)}k
            </span>

            <span className="badge badge-warning gap-1">
              <FaStar /> {app.ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
