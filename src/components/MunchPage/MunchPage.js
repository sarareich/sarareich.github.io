import React from 'react';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import ProjectDescription from '../common/ProjectDescription/ProjectDescription'
import projectInfo from '../../constants/projectInfo';
import MunchHero from '../../assets/Munch/Munch_Overview.png';

class MunchPage extends React.Component {
  renderHero() {
    return (
      <Hero
        background="#AF1E4C"
        image={MunchHero}
        imageAlt="Munch"
      />
    );
  }

  renderProjectInfo() {
    return (
      <ProjectInfo
        title="Munch"
        subtitle="Interaction Design 1 Project"
        summaryInfo={projectInfo.munchProjectInfo}
      />
    );
  }

  render() {
    return (
      <div className="munch-wrapper">
        {this.renderHero()}
        <div className="munch page">
          {this.renderProjectInfo()}
        </div>
      </div>
    );
  }
}


export default MunchPage;