const SectionHeading = ({ title, highlight }) => {
  return (
    <h2 className="text-3xl md:text-4xl lg:text-5xl pt-2 pb-2 md:pt-6 md:pb-6 lg:pt-10 lg:mb-10 text-center font-bold leading-tight">
      {title}{" "}
      <span className="text-[var(--primaryColor)]">{highlight}</span>
    </h2>
  );
};

export default SectionHeading;
