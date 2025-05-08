import GitHubCalendar from "react-github-calendar";
import SectionHeading from "../common/SectionHeading";

const Github = () => {
  return (
    <section id="github" className="w-full pb-6 md:pb-18 bg-[var(--bgColor)] text-[var(--secondaryColor)]">
      <SectionHeading title="Git" highlight="Stats" />
      <div className="flex flex-col justify-center items-center gap-5 px-2 2xl:px-64">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=ajayahara&show_icons=true&locale=en&layout=compact"
            alt="Top Languages"
            className="w-full"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=ajayahara"
            alt="GitHub Streak"
            className="w-full"
          />
          <img
            src="https://github-readme-stats.vercel.app/api?username=ajayahara&show_icons=true&locale=en"
            alt="GitHub Stats"
            className="w-full"
          />
        </div>

        <div className="w-full mt-8 flex justify-center">
          <GitHubCalendar
            username="ajayahara"
            className="react-activity-calendar"
          />
        </div>
      </div>
    </section>
  );
};

export default Github;
