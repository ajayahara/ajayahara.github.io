import { ArrowBigUp, Facebook, GithubIcon, Linkedin } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import SocialIconLink from "../common/SocialLinkIcon";
import CustomButton from "../common/CustomButton";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full pb-6 md:pb-10 text-[var(--secondaryColor)]"
    >
      <SectionHeading title="Contacts" />
      <div className="px-2 mt-3 md:mt-0">
        <div className="w-full flex justify-center gap-2 mb-4">
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

        {/* Contact Form */}
        <form action="#" className="w-full mx-auto text-center 2xl:px-64">
          {/* Input Row 1 */}
          <div className="flex flex-wrap justify-between">
            <div className="relative w-full sm:w-[49%] my-2 z-[1]">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 text-lg text-[var(--text-color)] border-3 border-[var(--primaryColor)] rounded-md bg-transparent placeholder-[var(--text-color)]"
              />
              <span className="absolute top-0 left-0 h-full w-0 bg-[var(--second-bg-color)] rounded-md transition-all duration-500 -z-10 peer-focus:w-full peer-valid:w-full"></span>
            </div>
            <div className="relative w-full sm:w-[49%] my-2 z-[1]">
              <input
                type="text"
                placeholder="Email Address"
                required
                className="w-full p-3 text-lg text-[var(--text-color)] border-3 border-[var(--primaryColor)] rounded-md bg-transparent placeholder-[var(--text-color)]"
              />
              <span className="absolute top-0 left-0 h-full w-0 bg-[var(--second-bg-color)] rounded-md transition-all duration-500 -z-10 peer-focus:w-full peer-valid:w-full"></span>
            </div>
          </div>

          {/* Input Row 2 */}
          <div className="flex flex-wrap justify-between">
            <div className="relative w-full sm:w-[49%] my-2 z-[1]">
              <input
                type="number"
                placeholder="Mobile Number"
                required
                className="w-full p-3 text-lg text-[var(--text-color)] border-3 border-[var(--primaryColor)] rounded-md bg-transparent placeholder-[var(--text-color)]"
              />
            </div>
            <div className="relative w-full sm:w-[49%] my-2 z-[1]">
              <input
                type="text"
                placeholder="Email Subject"
                required
                className="w-full p-3 text-lg text-[var(--text-color)] border-3 border-[var(--primaryColor)] rounded-md bg-transparent placeholder-[var(--text-color)]"
              />
            </div>
          </div>

          {/* Textarea */}
          <div className="relative my-4 z-[1]">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 text-lg text-[var(--text-color)] border-3 border-[var(--primaryColor)] rounded-md bg-transparent placeholder-[var(--text-color)] resize-none"
              rows="8"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <CustomButton>Submit</CustomButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
