import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Projects", href: "#project" },
    { name: "Github", href: "#github" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "Ajaya-Kumar-Behera-Resume.pdf" },
  ];

  return (
    <header className="sticky top-0 z-30 w-full text-white">
      <div className="absolute top-0 left-0 w-full h-14 px-4 flex items-center justify-between z-50">
        <a href="#home" className="text-lg font-bold">
          {"<Ajaya Kumar/>"}
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-md font-medium transition-colors hover:text-[var(--primaryColor)]"
              onClick={() => {
                if (link === "Resume") {
                  window.open(
                    "https://drive.google.com/file/d/1zTgZBMP6AiSJeX31mpRlHNI_RgJSNO3o/view?usp=sharing",
                    "_blank"
                  );
                }
                setOpen(false);
              }}
              download={link === "Resume"}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="button" size="icon" className="cursor-pointer">
              <Menu className="h-8 w-8" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="bg-[#121e2a] opacity-85 [&>button]:text-white [&>button]:cursor-pointer"
          >
            <div className="flex flex-col gap-3 pb-4 pt-8 justify-center items-center text-white">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-md font-medium transition-colors hover:text-primary"
                  onClick={() => {
                    if (link === "Resume") {
                      window.open(
                        "https://drive.google.com/file/d/1zTgZBMP6AiSJeX31mpRlHNI_RgJSNO3o/view?usp=sharing",
                        "_blank"
                      );
                    }
                    setOpen(false);
                  }}
                  download={link === "Resume"}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="absolute top-0 left-0 bg-[#121e2a] opacity-65 w-full z-40 h-14" />
    </header>
  );
};

export default Navbar;
