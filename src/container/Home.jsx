import Bottom from "../layout/Bottom"
import Introduction from "./Introduction"
import Project from "./Project"
import SkillList from "./SkillList"

const Home = () => {
    return (
      <>
        <section id="about">
          <Introduction />
        </section>
        <section id="skills">
          <SkillList />
        </section>
        <section id="projects">
          <Project />
        </section>
      </>
    );
  };
  

export default Home