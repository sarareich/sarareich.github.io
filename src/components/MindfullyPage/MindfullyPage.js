import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollUp from '../common/ScrollUp/ScrollUp';
import LightBox from '../common/Lightbox/Lightbox';
import Video from '../common/Video/Video';
import tourzyImages from '../../constants/tourzyImages';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import Title from '../common/ProjectAssets/Title';
import Subtitle from '../common/ProjectAssets/Subtitle';
import projectInfo from '../../constants/projectInfo';
import MindfullyHero from '../../assets/Mindfully/hero.jpg';

class MindfullyPage extends React.Component {
  renderHero() {
    return (
      <Hero
        background="#c3e4e6"
        image={MindfullyHero}
        imageAlt="Mindfully"
      />
    );
  }

  renderProjectInfo() {
    return (
      <ProjectInfo
        title="Mindfully"
        subtitle="Interaction Design Capstone"
        summaryInfo={projectInfo.mindfullyProjectInfo}
      />
    );
  }

  renderBackground() {
    return (
      <div className="background">
        <div className="portfolio-content description">
          <Title
            title="Background"
          />
          <div className="two-thirds text">
            <p className="description-text">
              In my interaction design capstone course, I worked with a team of other students over the course of two semesters
              to research, ideate, design, and develop an interactive project of our choosing. We explored the issues
              faced by elementary school students with low socioeconomic status and ultimately created <strong>Mindfully</strong>,
              a tablet application that teaches children to more accurately identify their emotions and use that
              information to guide their thinking and behavior.
            </p>
          </div>
        </div>
        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Problem"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              Low-income students are more likely than their higher-income peers to face stressors and challenges at home,
              which can result in issues such as <strong>long-term effects on mental health and disruptive behavior in school. </strong>
              These students have the greatest need for stress management and emotional intelligence skills — which have been
              linked to increased academic performance, productivity, and decreased anxiety and depression — but often, their
              teachers are unprepared to deal with students’ behavioral issues, and their parents are unavailable to provide emotional education.
            </p>
          </div>
        </div>
        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Solution"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              Mindfully seeks to address the <strong>deficit of emotional literacy</strong> during childhood
              through an app that provides a supplemental, individual classroom experience. The app
              teaches children to identify and define their emotions, and covers strategies to manage
              those emotions and reduce emotional distress. Ultimately, this project seeks to enable students
              to be more successful as individuals by <strong>making complex information about emotional literacy
              accessible and fun for children.</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="mindfully-wrapper">
        {this.renderHero()}
        <div className="mindfully page">
          <ScrollUp />
          {this.renderProjectInfo()}
          {this.renderBackground()}
        </div>
      </div>
    );
  }
}

export default MindfullyPage;
