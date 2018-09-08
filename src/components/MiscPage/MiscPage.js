import React from 'react';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import projectInfo from '../../constants/projectInfo';
import MiscHero from '../../assets/Miscellaneous/MiscellaneousHome.jpg';

class MiscPage extends React.Component {
  renderHero() {
    return (
      <Hero
        background="#CDEFE9"
        image={MiscHero}
        imageAlt="Miscellaneous Projects"
      />
    );
  }

  renderProjectInfo() {
    return (
      <ProjectInfo
        title="Miscellaneous"
        subtitle="Other Design Projects"
        summaryInfo={projectInfo.miscProjectInfo}
      />
    );
  }

  render() {
    return (
      <div className="miscellaneous-wrapper">
        {this.renderHero()}
        <div className="miscellaneous page">
          {this.renderProjectInfo()}
        </div>
      </div>
    );
  }
}

export default MiscPage;
