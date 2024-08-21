"use client";
import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../icons/arrow_icon";

const DropdownButtonComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // handler for mouse event
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownOptions = [
    {
      name: "Novidades",
      href: "https://www.google.com/",
    },
    {
      name: "Preço: Maior - menor",
      href: "https://www.google.com/",
    },
    {
      name: "Preço: Menor - maior",
      href: "https://www.google.com/",
    },
    {
      name: "Mais vendidos",
      href: "https://www.google.com/",
    },
  ];

  return (
    <div className="relative flex justify-end text-left text-sm" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="border border-[#D9D9D9] lg:border-0 ps-5 pe-3 py-2 rounded-full  flex items-center justify-between gap-2"
      >
        Ordenar por
        <ArrowIcon />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-8 w-48 mt-2 bg-white border rounded-lg shadow-lg z-10 overflow-hidden">
          {dropdownOptions.map((option, index) => (
            <div className="block px-4 py-2 hover:bg-gray-100" key={index}>
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButtonComponent;
