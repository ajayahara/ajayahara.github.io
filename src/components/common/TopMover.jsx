import { ArrowBigUp } from "lucide-react";
import { TopMoverLink } from "./SocialLinkIcon";

const TopMover = () => {
  return (
    <div className="absolute right-4 bottom-4">
      <TopMoverLink href="#home">
        <ArrowBigUp className="text-[var(--primaryColor)] hover:text-[var(--secondaryColor)]" />
      </TopMoverLink>
    </div>
  );
};

export default TopMover;
