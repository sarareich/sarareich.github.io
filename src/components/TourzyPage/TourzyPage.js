import React from 'react';
import ScrollUp from '../common/ScrollUp/ScrollUp';
import LightBox from '../common/Lightbox/Lightbox';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import Title from '../common/ProjectAssets/Title';
import projectInfo from '../../constants/projectInfo';
import TourzyHero from '../../assets/Tourzy/tourzyHero.jpg';

class TourzyPage extends React.Component {
  renderHero() {
    return (
      <Hero
        background="#D7263D"
        image={TourzyHero}
        imageAlt="Tourzy"
      />
    );
  }

  renderProjectInfo() {
    return (
      <ProjectInfo
        title="Tourzy"
        subtitle="Interaction Design 2: Mobile"
        summaryInfo={projectInfo.tourzyProjectInfo}
      />
    );
  }

  render() {
    return (
      <div className="tourzy-wrapper">
        {this.renderHero()}
        <div className="tourzy page">
          <ScrollUp />
          {this.renderProjectInfo()}
        </div>
      </div>
    );
  }
}

export default TourzyPage;
