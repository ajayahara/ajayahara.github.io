import { useState } from "react";
import { toast } from "react-toastify";
import {
  GithubIcon,
  Linkedin,
  MailIcon,
  PhoneCallIcon,
  Twitter,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import SocialIconLink from "../common/SocialLinkIcon";
import CustomButton from "../common/CustomButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Hi ${formData.name},Your message sent to Ajaya!`);
    // Optionally reset the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  const handleCopyPhone = () => {
    const phoneNumber = "+91 6370014498";
    navigator.clipboard.writeText(phoneNumber).then(() => {
      toast.success("Phone number copied to clipboard!");
    });
  };
  return (
    <section
      id="contact"
      className="w-full pb-6 md:pb-18 text-[var(--secondaryColor)]"
    >
      <SectionHeading title="Contacts" />
      <div className="px-2 mt-3 md:mt-0">
        <div className="w-full flex justify-center gap-2 mb-4">
          <SocialIconLink href="https://x.com/AJAYAKU66754183">
            <Twitter className="text-[var(--primaryColor)] hover:text-[var(--secondaryColor)]" />
          </SocialIconLink>
          <SocialIconLink href="https://www.linkedin.com/in/ajaya-kumar-behera-a56549237/">
            <Linkedin className="text-[var(--primaryColor)] hover:text-[var(--secondaryColor)]" />
          </SocialIconLink>
          <SocialIconLink href="https://github.com/ajayahara">
            <GithubIcon className="text-[var(--primaryColor)] hover:text-[var(--secondaryColor)]" />
          </SocialIconLink>
          <SocialIconLink href="mailto:abak00350@gmail.com">
            <MailIcon className="text-[var(--primaryColor)] hover:text-[var(--secondaryColor)]" />
          </SocialIconLink>
          <SocialIconLink onClick={handleCopyPhone}>
            <PhoneCallIcon className="text-[var(--primaryColor)] hover:text-[var(--secondaryColor)]" />
          </SocialIconLink>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto text-center 2xl:px-64"
        >
          {/* Input Row 1 */}
          <div className="flex flex-wrap justify-between">
            <div className="relative w-full sm:w-[49%] my-2 z-[1]">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 text-lg text-[var(--text-color)] border-3 border-[var(--primaryColor)] rounded-md bg-transparent placeholder-[var(--text-color)]"
              />
            </div>
            <div className="relative w-full sm:w-[49%] my-2 z-[1]">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 text-lg text-[var(--text-color)] border-3 border-[var(--primaryColor)] rounded-md bg-transparent placeholder-[var(--text-color)]"
              />
            </div>
          </div>

          {/* Input Row 2 */}
          <div className="flex flex-wrap justify-between">
            <div className="relative w-full sm:w-[49%] my-2 z-[1]">
              <input
                type="number"
                name="phone"
                placeholder="Mobile Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 text-lg text-[var(--text-color)] border-3 border-[var(--primaryColor)] rounded-md bg-transparent placeholder-[var(--text-color)]"
              />
            </div>
            <div className="relative w-full sm:w-[49%] my-2 z-[1]">
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                required
                value={formData.subject}
                onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 text-lg text-[var(--text-color)] border-3 border-[var(--primaryColor)] rounded-md bg-transparent placeholder-[var(--text-color)] resize-none"
              rows="8"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <CustomButton type="submit">Submit</CustomButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
