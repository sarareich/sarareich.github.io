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

  renderBackground() {
    return (
      <div className="portfolio-content description">
        <Title
          title="Background"
        />
        <div className="two-thirds text">
          <p className="description-text">
            In my Interaction Design 2 – Mobile course, our second project was to create a mobile app for an
            elderly audience. I decided to design a travel app, keeping in mind that older travelers may have
            additional needs that younger travelers do not have to consider.
          </p>
          <p className="description-text">
            <strong>Tourzy</strong> is a “virtual tour guide” who helps you plan activities for your travels based on  
            personal preferences and needs. The app responds to in-the-moment needs and makes suggestions
            during your travels.
          </p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="tourzy-wrapper">
        {this.renderHero()}
        <div className="tourzy page">
          <ScrollUp />
          {this.renderProjectInfo()}
          {this.renderBackground()}
        </div>
      </div>
    );
  }
}

export default TourzyPage;
