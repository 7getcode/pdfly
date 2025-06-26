import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  CompressIcon,
  ExcelToPdfIcon,
  HtmlToPdfIcon,
  JpgToPdfIcon,
  LockIcon,
  MergeIcon,
  OcrIcon,
  OrganizeIcon,
  PageNumbersIcon,
  PdfToExcelIcon,
  PdfToJpgIcon,
  PdfToPptIcon,
  PdfToWordIcon,
  PptToPdfIcon,
  RemoveIcon,
  RotateIcon,
  SignIcon,
  SplitIcon,
  UnlockIcon,
  WaterMarkIcon,
  WordToPdfIcon,
} from "./icons";
import { SparklesText } from "./SparklesText";
import ThemeToggle from "./theme-toggle";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";

import VariableProximity from "./VariableProximity";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (path: string) => {
    setIsMenuOpen(false);
    navigate({ to: path });
  };

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setShowNav(true);
      } else if (currentY > lastScrollY.current) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = {
    organize: {
      "merge-pdf": {
        icon: <MergeIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "Merge PDFs",
      },
      "split-pdf": {
        icon: <SplitIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "Split PDF",
      },
      "remove-pages": {
        icon: <RemoveIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "Remove Pages",
      },
      "organize-pdf": {
        icon: <OrganizeIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "Organize PDF",
      },
    },
    optimize: {
      "compress-pdf": {
        icon: <CompressIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "Compress PDF",
      },
      "ocr-pdf": {
        icon: <OcrIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "OCR PDF",
      },
    },
    convert: {
      "jpg-to-pdf": {
        icon: <JpgToPdfIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "JPG to PDF",
      },
      "word-to-pdf": {
        icon: <WordToPdfIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "Word to PDF",
      },
      "ppt-to-pdf": {
        icon: <PptToPdfIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "PPT to PDF",
      },
      "excel-to-pdf": {
        icon: <ExcelToPdfIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "Excel to PDF",
      },
      "html-to-pdf": {
        icon: <HtmlToPdfIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "HTML to PDF",
      },
      "pdf-to-jpg": {
        icon: <PdfToJpgIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "PDF to JPG",
      },
      "pdf-to-word": {
        icon: <PdfToWordIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "PDF to Word",
      },
      "pdf-to-ppt": {
        icon: <PdfToPptIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "PDF to PPT",
      },
      "pdf-to-excel": {
        icon: <PdfToExcelIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "PDF to Excel",
      },
    },
    edit: {
      "add-watermark-pdf": {
        icon: <WaterMarkIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "Add Watermark",
      },
      "rotate-pdf": {
        icon: <RotateIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "Rotate PDF",
      },
      "add-pgnos-pdf": {
        icon: <PageNumbersIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "Add Page Numbers",
      },
    },
    security: {
      "lock-pdf": {
        icon: <LockIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "Lock PDF",
      },
      "unlock-pdf": {
        icon: <UnlockIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "Unlock PDF",
      },
      "sign-pdf": {
        icon: <SignIcon className="w-7 h-7 md:w-8! md:h-8!" />,
        label: "Sign PDF",
      },
    },
  };

  return (
    <div>
      <nav
        className={`w-full px-4 py-2 flex items-center justify-between bg-white/10 dark:bg-black/10 backdrop-blur-xl backdrop-saturate-150 fixed top-0 left-0 z-20  transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >

        <Link to="/" className="font-bold text-gray-950 dark:text-white">
          <SparklesText sparklesCount={3} className="text-4xl md:text-6xl p-1">
            PDFly
          </SparklesText>
        </Link>

        {/* Desktop links */}
        <div
          className="hidden md:flex gap-6 items-center
        ml-auto
        "
        >
          <NavigationMenu
            viewport={false}
            className="
          dark:text-white
          
          "
          >
            {Object.entries(menu).map(([category, items]) => (
              <NavigationMenuList key={category}>
                <NavigationMenuItem key={category}>
                  <NavigationMenuTrigger className="flex items-center gap-2
                  ">
                    <div
                      ref={containerRef}
                      style={{ position: "relative" }}
                      className="text-lg font-bold"
                    >
                      <VariableProximity
                        label={category.toUpperCase()}
                        className={"variable-proximity-demo"}
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={150}
                        falloff="linear"
                      />
                    </div>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    key={category}
                    className="
                  border rounded-lg shadow-lg p-0
                  min-w-fit
                  bg-white border-gray-200
                  dark:bg-zinc-900 dark:border-zinc-700
                  "
                  >
                    <ul className="grid">
                      <li>
                        {Object.entries(items).map(([key, { icon, label }]) => (
                          <NavigationMenuLink asChild key={key}>
                            <Link
                              to={`/${key}`}
                              className="flex flex-row items-center gap-4 p-4
                              hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors duration-200
                              
                              "
                            >
                              {icon}
                              <span
                                className="
                          text-lg
                          text=bold 
                          whitespace-nowrap
                          "
                              >
                                {label}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            ))}
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center px-2 py-1 rounded text-gray-700 dark:text-gray-200 bg-white/10 dark:bg-black/10 backdrop-blur-lg focus:outline-none"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span className="relative w-6 h-6 block">
              <svg
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? "rotate-90 opacity-100" : "rotate-0 opacity-0"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <svg
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen ? "rotate-0 opacity-0" : "rotate-0 opacity-100"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                style={{ pointerEvents: !isMenuOpen ? "auto" : "none" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-lg z-10 md:hidden flex flex-col transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex-1 flex flex-col gap-8 p-5 pt-20 overflow-y-auto">
          {Object.entries(menu).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              {Object.entries(items).map(([key, { icon, label }]) => (
                <div
                  key={key}
                  className="flex items-center gap-3 mt-5 cursor-pointer"
                  onClick={() => handleLinkClick(`/${key}`)}
                >
                  {icon}
                  <span className="text-lg text-gray-700 dark:text-gray-200">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
