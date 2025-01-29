import React from "react";
import styled from "styled-components";
import ProjectsData from "../data/projects";
import Project from "../components/Project";

import learnolotlImage from "../images/learnolotl.png";
import didiAndSmilingJohnsImage from "../images/didiAndSmilingJohns.png";
import codePenImage from "../images/codePen.png";

const StyleWrapper = styled.section`
  box-sizing: border-box;
  // background: #FE8A75;
  // background: linear-gradient(to bottom, #fe8a7540 0%, #B5CBED 100%);
  min-height: 100vh;

  // .projects-heading {
  //     height: 100vh;
  //     max-width: 100vw;
  // }

  .projects-heading {
    color: #98004b;
    font-size: 2em;
    filter: drop-shadow(5px 5px 2px pink);
  }
`;

class Projects extends React.Component {
  render() {
    const ProjectLearnolotl = this.buildLearnolotl(),
      ProjectDiDi = this.buildDiDi(),
      ProjectGuild = this.buildGuild(),
      ProjectCodePen = this.buildCodePen();

    return (
      <StyleWrapper>
        {/* <div className="projects-heading">
                    <h1>Success is not an accident</h1>

                    <div className="description">
                        Creating content and devouring the latest changes in technology and design are a must.  Much of my work is proprietary and can fall into periods of large-scale development repetition.  To combat stagnation, I expand my horizons through personal projects.
                    </div>
                </div> */}

        {/* <div className="projects-heading" data-aos="fade">Selected works~</div> */}

        {ProjectGuild}

        {ProjectLearnolotl}

        {ProjectDiDi}

        {ProjectCodePen}
      </StyleWrapper>
    );
  }

  buildLearnolotl() {
    const data = {
      ...ProjectsData["learnolotlData"],
      imageUrl: learnolotlImage,
    };

    return <Project {...data} />;
  }

  buildGuild() {
    const data = {
      ...ProjectsData["guildData"],
      imageUrl: "",
      config: "alternate",
    };

    return <Project {...data} />;
  }

  buildDiDi() {
    const data = {
      ...ProjectsData["didiAndSmilingJohnsData"],
      imageUrl: didiAndSmilingJohnsImage,
      config: "alternate",
    };

    return <Project {...data} />;
  }

  buildCodePen() {
    const data = {
      ...ProjectsData["codePenData"],
      imageUrl: codePenImage,
    };

    return <Project {...data} />;
  }
}

export default Projects;
