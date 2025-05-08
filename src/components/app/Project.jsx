import { projects } from "@/constants";
import SectionHeading from "../common/SectionHeading";
import { CodeIcon, Github } from "lucide-react";
import { Card } from "../ui/card";
import { CustomLinkButton } from "../common/CustomButton";

const Project = () => {
  return (
    <section
      id="project"
      className="w-full pb-6 md:pb-10 text-[var(--secondaryColor)]"
    >
      <SectionHeading title="Projects" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 2xl:px-64 px-2">
        {projects.map((el, i) => (
          <Card
            key={i}
            className="flex flex-col gap-4 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] rounded-2xl p-5 text-[18px] bg-[var(--bgColor)] text-[var(--secondaryColor)]"
          >
            {/* Left side - Image */}
            <div className="flex-1">
              <img
                src={el.path}
                alt={el.path}
                className="w-full h-64 rounded-md opacity-80 object-cover"
              />
            </div>

            {/* Right side - Content */}
            <div className="flex-1 flex flex-col justify-between gap-3">
              <div className="text-center text-[25px] font-bold">{el.name}</div>
              <ul className="list-disc pl-5">
                <li><span className="line-clamp-2">{el.des1}</span></li>
                <li><span className="line-clamp-2">{el.des2}</span></li>
                <li><span className="line-clamp-2"> Responsibility: {el.resp}</span></li>
              </ul>
              {/* Tech stack icons */}
              <div className="flex items-center gap-3 flex-wrap mt-2">
                <span className="font-semibold">Tech Stacks:</span>
                <div className="flex gap-2 items-center">
                  {el.tech.map((url, j) => (
                    <img src={url} key={j} alt={url} className="w-8 h-8"/>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-6 mt-4">
                <CustomLinkButton href={el.url2} variant="outlined">
                  <Github className="w-4 h-4 text-[var(--primaryColor)] hover:text-[var(--secondaryColor)]" />
                </CustomLinkButton>
                <CustomLinkButton href={el.url1} variant="outlined">
                  <CodeIcon className="w-4 h-4 text-[var(--primaryColor)] hover:text-[var(--secondaryColor)]" />
                </CustomLinkButton>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Project;
