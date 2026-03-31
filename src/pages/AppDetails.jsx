import { useParams } from "react-router";
import appsData from "../../public/app.json";
import { FaStar, FaDownload } from "react-icons/fa";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find((a) => a.id === parseInt(id));

  if (!app) {
    return (
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
    );
  }

  const handleInstall = () => {
    const existing = JSON.parse(localStorage.getItem("installedApps")) || [];

    // duplicate avoid
    const alreadyInstalled = existing.find((item) => item.id === app.id);

    if (alreadyInstalled) {
      toast.warn("Already Installed!");
      return;
    }

    const updatedApps = [...existing, app];

    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    toast.success("App Installed Successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-6">
        <img src={app.image} className="w-40 h-40 object-cover rounded-xl" />

        <div>
          <h1 className="text-2xl font-bold">{app.title}</h1>
          <p className="text-gray-500">
            Developed by{" "}
            <span className="text-blue-500">{app.companyName}</span>
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-4">
            <div className="text-center">
              <FaDownload className="mx-auto text-green-500" />
              <p className="text-sm">Downloads</p>
              <h2 className="font-bold">
                {(app.downloads / 1000).toFixed(0)}K
              </h2>
            </div>

            <div className="text-center">
              <FaStar className="mx-auto text-orange-500" />
              <p className="text-sm">Rating</p>
              <h2 className="font-bold">{app.ratingAvg}</h2>
            </div>

            <div className="text-center">
              <FaStar className="mx-auto text-purple-500" />
              <p className="text-sm">Reviews</p>
              <h2 className="font-bold">{(app.reviews / 1000).toFixed(0)}K</h2>
            </div>
          </div>

          <button onClick={handleInstall} className="btn btn-success mt-4">
            Install Now ({app.size}MB)
          </button>
        </div>
      </div>

      {/* Ratings */}
      <div className="mt-10">
        <h2 className="font-semibold mb-4">Ratings</h2>

        {[5, 4, 3, 2, 1].map((star, i) => (
          <div key={i} className="flex items-center gap-4 mb-2">
            <span className="w-12 text-sm">{star} star</span>
            <progress
              className="progress progress-warning w-full h-5"
              value={app.ratings?.[4 - i]?.count || 0}
              max={2000}
            ></progress>
          </div>
        ))}
      </div>

      {/* Static Description */}
      <div className="mt-10">
        <h2 className="font-semibold mb-4">Description</h2>

        <p className="text-[#627382] mb-4">
          This focus app takes the proven Pomodoro technique and makes it even
          more practical for modern lifestyles. Instead of just setting a timer,
          it builds a complete environment for deep work, minimizing
          distractions and maximizing concentration. Users can create custom
          work and break intervals, track how many sessions they complete each
          day, and review detailed statistics about their focus habits over
          time. The design is minimal and calming, reducing cognitive load so
          you can focus entirely on the task at hand. Notifications gently let
          you know when to pause and when to resume, helping you maintain a
          healthy rhythm between work and rest.
        </p>

        <p className="text-[#627382] mb-4">
          A unique feature of this app is the integration of task lists with
          timers. You can assign each task to a specific Pomodoro session,
          making your schedule more structured. The built-in analytics show not
          only how much time you’ve worked but also which tasks consumed the
          most energy. This allows you to reflect on your efficiency and adjust
          your workflow accordingly. The app also includes optional background
          sounds such as white noise, nature sounds, or instrumental music to
          create a distraction-free atmosphere.
        </p>

        <p className="text-[#627382]">
          For people who struggle with procrastination, the app provides
          motivational streaks and achievements. Completing multiple Pomodoro
          sessions unlocks milestones, giving a sense of accomplishment. This
          gamified approach makes focusing more engaging and less like a chore.
          Whether you’re studying for exams, coding, writing, or handling office
          work, the app adapts to your routine. By combining focus tracking,
          task management, and motivational tools, this Pomodoro app ensures
          that you not only work harder but also smarter. It is a personal
          trainer for your brain, keeping you disciplined, refreshed, and
          productive throughout the day.
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
