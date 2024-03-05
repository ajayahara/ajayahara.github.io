const images = [
  {
    name: "Html",
    path: "/icons/html.png",
  },
  {
    name: "Css",
    path: "/icons/css.png",
  },
  {
    name: "Javascript",
    path: "/icons/javascript.png",
  },
  {
    name: "Node Js",
    path: "/icons/node.png",
  },
  {
    name: "React Js",
    path: "/icons/react.png",
  },
  {
    name: "Express Js",
    path: "/icons/express.png",
  },
  {
    name: "Mongo DB",
    path: "/icons/mongo.png",
  },
  {
    name: "Typescript",
    path: "/icons/typescript.png",
  },
  {
    name: "Redux",
    path: "/icons/redux.png",
  },
  {
    name: "Tailwind",
    path: "/icons/tailwind.png",
  },
  {
    name: "Bootstrap",
    path: "/icons/bootstrap.png",
  },
];
export const MyImageScroll = () => {
  return (
    <div className="scroll">
      <div className="m-scroll">
        {images.map((item, i) => {
          return (
            <div key={i}>
              <img src={item.path} alt={item.name} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
