import { Typewriter } from "react-simple-typewriter";
import { DownloadIcon, Facebook, GithubIcon, Linkedin } from "lucide-react";
import SocialIconLink from "../common/SocialLinkIcon";
import CustomButton from "../common/CustomButton";
const Home = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-between w-full h-[100vh] text-white"
    >
      <div className="absolute inset-0 bg-[url('/logo.png')] bg-cover bg-center opacity-10 z-0" />
      <div className="lg:w-1/2  z-1 2xl:ml-32 md:ml-4 px-2 lg:px-0">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2">
          Hi, I &apos;m <span>Ajaya Kumar</span>
        </h1>
        <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-600 mb-4 lg:mb-8">
          <Typewriter
            words={["A Fullstack Web Developer"]}
            cursor
            cursorStyle="|"
            loop={0}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <p className="md:text-xl font-semibold md:font-medium w-10/12 mb-4">
          A Fullstack Web Developer with 1200+ hour coding experience working
          with Javascript, Html, CSS & Rect to deliver exceptional customer
          experinces. Adept at contributing to a highly collaborative work
          environment, finding solutions and determining customer satisfaction.
        </p>
        <div className="flex gap-3 mb-6">
          <SocialIconLink>
            <Facebook className="text-[var(--primaryColor)] hover:text-[var(--secondaryColor)]" />
          </SocialIconLink>
          <SocialIconLink>
            <Linkedin className="text-[var(--primaryColor)] hover:text-[var(--secondaryColor)]" />
          </SocialIconLink>
          <SocialIconLink>
            <GithubIcon className="text-[var(--primaryColor)] hover:text-[var(--secondaryColor)]" />
          </SocialIconLink>
        </div>
        <div className=" flex gap-4">
          <CustomButton>
            Download CV <DownloadIcon />
          </CustomButton>
          <CustomButton variant="outlined">Let's Talk</CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Home;
