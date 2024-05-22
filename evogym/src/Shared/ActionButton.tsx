import React from "react";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {

    const handleClick = (e:React.MouseEvent<HTMLAnchorElement,MouseEvent>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href")?.substring(1);
        if (!targetId) return;
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
          setSelectedPage(SelectedPage.ContactUs);
        }
    }

  return (
    <a
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={handleClick}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </a>
  );
};

export default ActionButton;