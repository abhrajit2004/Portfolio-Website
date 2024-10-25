import Image from "next/image";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import TechStacks from "./components/TechStacks";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CursorAnimation from "./components/CursorAnimation";

export default function Home() {
  return (
    <>
     <Navbar />
     <Intro />
     <TechStacks />
     <Projects />
     <Footer />
    </>
  );
}
