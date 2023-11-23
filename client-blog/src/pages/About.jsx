import MainContent from "../components/MainContent";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const theme = useContext(ThemeContext);

  return <MainContent title={"About"}></MainContent>;
};

export default About;
