import React from 'react';
import ScrollUp from '../common/ScrollUp/ScrollUp';
import LightBox from '../common/Lightbox/Lightbox';
import tourzyImages from '../../constants/tourzyImages';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import Title from '../common/ProjectAssets/Title';
import Subtitle from '../common/ProjectAssets/Subtitle';
import projectInfo from '../../constants/projectInfo';
import TourzyHero from '../../assets/Tourzy/tourzyHero.jpg';

class TourzyPage extends React.Component {
  constructor() {
    super();
    this.state = {
      taskLightboxIsOpen: false,
      ideationLightboxIsOpen: false,
      heroLightboxIsOpen: false,
      storyLightboxIsOpen: false,
      photoIndex: 0
    };

    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index, event, lightbox) {
    event.preventDefault();
    this.setState({
      [lightbox]: true,
      photoIndex: index
    });
  }

  closeLightbox(lightbox) {
    this.setState({
      [lightbox]: false,
      photoIndex: 0
    });
  }

  nextLightboxImage(images) {
    this.setState({
      photoIndex: (this.state.photoIndex + 1) % images.length,
    });
  }

  prevLightboxImage(images) {
    this.setState({
      photoIndex: (this.state.photoIndex + images.length - 1) % images.length,
    });
  }

  renderImageRow(image, index, altText, lightbox, desiredClass) {
    return (
      <div className={desiredClass} key={index}>
        <img
          src={image}
          className="project-image__small zoom"
          alt={altText}
          onClick={(event) => this.openLightbox(index, event, lightbox)}
        />
      </div>
    );
  }

  renderLightbox(lightboxImages, lightbox, lightboxString, index) {
    return (
      <LightBox
        images={lightboxImages}
        isOpen={lightbox}
        onClose={this.closeLightbox.bind(this, lightboxString)}
        nextImage={this.nextLightboxImage.bind(this, lightboxImages)}
        prevImage={this.prevLightboxImage.bind(this, lightboxImages)}
        photoIndex={index}
      />
    );
  }

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

  renderUserResearch() {
    const { photoIndex, taskLightboxIsOpen } = this.state;
    return (
      <div className="user-research">
        <div className="portfolio-content description">
          <Title
            title="User Research"
          />
          <div className="two-thirds text">
            <p className="description-text">
              I interviewed a retired couple who travels frequently as the starting point for the creation of my
              app. I focused primarily on their <strong>current process</strong> for making travel plans in order
              to discover pain points and find places to intervene in the process.
            </p>
          </div>
        </div>
        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Task Analysis"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              Based on the interview, I created a task analysis chart including all of the tasks and subtasks
              the interview participants went through while planning and going on a trip.
            </p>
          </div>
          {
            tourzyImages.taskAnalysis.map((image, index) => this.renderImageRow(image, index, "Task Analysis", "taskLightboxIsOpen", "two-thirds__center shadow"))
          }
        </div>
        {this.renderLightbox(tourzyImages.taskAnalysis, taskLightboxIsOpen, "taskLightboxIsOpen", photoIndex)}
      </div>
    );
  }

  renderIdeation() {
    const { photoIndex, ideationLightboxIsOpen } = this.state;
    return (
      <div className="ideation">
        <div className="portfolio-content description">
          <Title
            title="Ideation"
          />
          <div className="two-thirds text">
            <p className="description-text">
              Using my task analysis chart, I began brainstorming service concepts and brand personalities. I identified
              steps in the travel process that were especially complex or time-consuming and considered
              what an elderly audience specifically would want from a travel app.
            </p>
            <p className="description-text">
              My brainstorming led me to the idea of a "tour guide" who helps the user plan activities.
              Given the additional needs of an elderly population, especially in terms of health and ability
              to be active for long periods of the day, I chose to include features that help users plan around
              and respond to their physical needs.
            </p>
          </div>
          {
            tourzyImages.brainstorming.map((image, index) => this.renderImageRow(image, index, "Brainstorming", "ideationLightboxIsOpen", "one-half__center"))
          }
        </div>
        {this.renderLightbox(tourzyImages.brainstorming, ideationLightboxIsOpen, "ideationLightboxIsOpen", photoIndex)}
      </div>
    );
  }

  renderStories() {
    const { photoIndex, heroLightboxIsOpen, storyLightboxIsOpen } = this.state;
    return (
      <div className="user-stories">
        <div className="portfolio-content description">
          <Title
            title="User Stories"
          />
          <div className="two-thirds text">
            <p className="description-text">
              Once I defined the app's service concept, I began thinking about use cases. I created a hero's journey
              and a storyboard based on two users — an elderly couple named Maggie and Joe — and how the app
              benefits them.
            </p>
          </div>
        </div>
        <div className="portfolio-content">
          <div className="one-third text">
            <Subtitle
              subtitle="Hero's Journey"
            />
          </div>
          {
            tourzyImages.heroJourney.map((image, index) => this.renderImageRow(image, index, "Hero's Journey", "heroLightboxIsOpen", "two-thirds shadow"))
          }
        </div>
        {this.renderLightbox(tourzyImages.heroJourney, heroLightboxIsOpen, "heroLightboxIsOpen", photoIndex)}
        <div className="portfolio-content">
          <div className="one-third text">
            <Subtitle
              subtitle="Storyboard"
            />
          </div>
          {
            tourzyImages.storyboard.map((image, index) => this.renderImageRow(image, index, "Storyboard", "storyLightboxIsOpen", "two-thirds shadow"))
          }
        </div>
        {this.renderLightbox(tourzyImages.storyboard, storyLightboxIsOpen, "storyLightboxIsOpen", photoIndex)}
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
          {this.renderUserResearch()}
          {this.renderIdeation()}
          {this.renderStories()}
        </div>
      </div>
    );
  }
}

export default TourzyPage;
