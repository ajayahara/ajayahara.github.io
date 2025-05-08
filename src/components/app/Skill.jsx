import { SkillsInfo } from "@/constants";
import CustomButton from "../common/CustomButton";
import { Card } from "../ui/card";
import SectionHeading from "../common/SectionHeading";

const Skill = () => (
  <section id="skill" className="w-full pb-6 md:pb-18 bg-[var(--bgColor)] text-[var(--secondaryColor)]">
    <SectionHeading title="My" highlight="Skills"/>
    <div className="grid lg:grid-cols-2 gap-4 lg:gap-5 mx-auto px-2 md:px-4 lg:px-4 2xl:px-64">
      {SkillsInfo.map((category) => (
        <Card key={category.title} className="p-2 gap-2 md:gap-4 lg:gap-6 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] rounded-2xl text-[18px] bg-[var(--bgColor)] text-[var(--secondaryColor)]">
          <h3 className="text-2xl sm:text-3xl font-semibold md:mb-2 text-center text-[var(--secondaryColor)]">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
            {category.skills.map((skill) => (
              <CustomButton key={skill.name}>
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span>{skill.name}</span>
              </CustomButton>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </section>
);

export default Skill;
