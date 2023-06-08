import { useEffect, useState } from "react";
import DotGroup from "./scenes/DotGroup"
import LineGradient from "./components/LineGradient"
import Landing from "./scenes/Landing"
import MySkills from "./scenes/MySkills"
import Projects from "./scenes/Projects"
import Contact from "./scenes/Contact"
import Footer from "./scenes/Footer"
// import Testimonials from "./scenes/Testimonials"
import useMediaQuery from "./hooks/useMediaQuery.jsx"
import Navbar from "./scenes/Navbar.jsx"

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediaScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing selectedPage={selectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      {/* <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonials />
      </div> */}
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
        <Footer />
    </div>
  );
}

export default App;




