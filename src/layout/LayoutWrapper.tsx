import { FC, ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Newsletter } from "../components/NewsLetter";
import useElementSize from "../hooks/useElementSize";
import useWindowSize from "../hooks/useWindowSize";
import { Footer } from "../pages/Footer";
import { NavBar } from "../pages/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const BaseLayout: FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { width, height } = useWindowSize();
  const [headerRef, { height: headerHeight }] = useElementSize();

  useEffect(() => {
    const windowheight = `${height}px`;
    const header__Height = `${headerHeight}px`;
    document.documentElement.style.setProperty("--window-height", windowheight);
    document.documentElement.style.setProperty(
      "--header-height",
      header__Height
    );
  }, [width, height, headerHeight]);

  useEffect(() => {
    const transparentValue = location.pathname === "/" ? "0" : "1";
    document.documentElement.style.setProperty(
      "--header-is-not-transparent",
      transparentValue
    );
  }, [location]);

  return (
    <>
      <NavBar ref={headerRef} />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
};

export default BaseLayout;
