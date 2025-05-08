import React from "react";

const anchorClass =
  "relative inline-flex justify-center items-center w-10 h-10 border-[0.2rem] rounded-full  text-[20px] overflow-hidden z-[1] transition-colors duration-300 group border-[var(--primaryColor)] text-[var(--secondaryColor)] cursor-pointer";
const spanClass =
  " absolute top-0 left-0 w-0 h-full transition-all duration-500 z-[-1] group-hover:w-full bg-[var(--primaryColor)]";
const SocialIconLink = ({ href, onClick, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={anchorClass}
      onClick={onClick}
    >
      <span className={spanClass}></span>
      {children}
    </a>
  );
};

const TopMoverLink = ({ href, children }) => {
  return (
    <a href={href} className={anchorClass}>
      <span className={spanClass}></span>
      {children}
    </a>
  );
};

export default SocialIconLink;
export { TopMoverLink };
