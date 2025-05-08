const baseStyles = `
relative inline-flex gap-1 justify-center items-center 
md:w-48 w-42 h-full rounded-lg text-md md:text-lg font-semibold 
overflow-hidden z-[1] transition-all duration-500
border-3 p-1
`;

const anchorBaseStyles = `
relative inline-flex gap-1 justify-center items-center 
md:w-12 h-full rounded-lg text-md md:text-lg font-semibold 
overflow-hidden z-[1] transition-all duration-500
border-3 p-1
`;
const filled = `
bg-[var(--primaryColor)] border-[var(--primaryColor)] text-[var(--secondaryColor)]
hover:text-[var(--primaryColor)]
`;

const outlined = `
bg-transparent border-[var(--primaryColor)] text-[var(--primaryColor)]
hover:text-[var(--secondaryColor)]
`;
const CustomButton = ({ children, variant = "filled", type, onClick }) => {
  return (
    <button
      className={`${baseStyles} ${
        variant === "outlined" ? outlined : filled
      } group`}
      type={type}
      onClick={onClick}
    >
      <span
        className={`
          absolute top-0 left-0 w-0 h-full z-[-1]
          transition-all duration-500
          ${
            variant === "outlined"
              ? "bg-[var(--primaryColor)]"
              : "bg-[var(--secondaryColor)]"
          }
          group-hover:w-full
        `}
      ></span>
      {children}
    </button>
  );
};
const CustomLinkButton = ({ children, variant = "filled", href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${anchorBaseStyles} ${
        variant === "outlined" ? outlined : filled
      } group`}
    >
      <span
        className={`
          absolute top-0 left-0 w-0 h-full z-[-1]
          transition-all duration-500
          ${
            variant === "outlined"
              ? "bg-[var(--primaryColor)]"
              : "bg-[var(--secondaryColor)]"
          }
          group-hover:w-full
        `}
      ></span>
      {children}
    </a>
  );
};
export default CustomButton;
export { CustomLinkButton };
