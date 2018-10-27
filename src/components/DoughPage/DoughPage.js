import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ScrollUp from '../common/ScrollUp/ScrollUp';
import LightBox from '../common/Lightbox/Lightbox';
import doughImages from '../../constants/doughImages';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import Title from '../common/ProjectAssets/Title';
import Subtitle from '../common/ProjectAssets/Subtitle';
import Image from '../common/ProjectAssets/Image';
import LongImage from '../common/ProjectAssets/LongImage';
import projectInfo from '../../constants/projectInfo';
import DoughHero from '../../assets/Dough/hero.jpg';

class DoughPage extends React.Component {
  constructor() {
    super();
    this.state = {
      workflowLightboxIsOpen: false,
      uiLightboxIsOpen: false,
      prototypeLightboxIsOpen: false,
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
        background="#84afd2"
        image={DoughHero}
        imageAlt="Dough"
      />
    );
  }

  renderProjectInfo() {
    return (
      <ProjectInfo
        title="Dough"
        subtitle="Interaction Design 2: Mobile"
        summaryInfo={projectInfo.doughProjectInfo}
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
            In my Interaction Design 2 – Mobile course, our first project was to find a mobile app we didn{`'`} like
            and reinvent it. I decided to redesign an app for bread recipes. After defining the workflow of the
            "bad" app, I put my own spin on the original app and created Dough.
          </p>
        </div>
      </div>
    );
  }

  renderWorkflow() {
    const { photoIndex, workflowLightboxIsOpen } = this.state;
    return (
      <div className="dough-workflow">
        <div className="portfolio-content description">
          <Title
            title="Original Workflow"
          />
          <div className="two-thirds text">
            <p className="description-text">
              I created this interaction flowchart based on the app to be redesigned. Areas of the app I found
              problematic are marked in red.
            </p>
          </div>
          {
            doughImages.interactionFlow.map((image, index) => this.renderImageRow(image, index, "Interaction Flow", "workflowLightboxIsOpen", "one-half__center"))
          }
        </div>
        {this.renderLightbox(doughImages.interactionFlow, workflowLightboxIsOpen, "workflowLightboxIsOpen", photoIndex)}
      </div>
    );
  }

  renderUISpec() {
    const { photoIndex, uiLightboxIsOpen } = this.state;
    return (
      <div className="UI-spec">
        <div className="portfolio-content description">
          <Title
            title="User Interface Spec"
          />
          <div className="two-thirds text">
            <p className="description-text">
              I created a new workflow for my app and made initial wireframes for the screens. I used the wireframes to
              create user interface specifications which detail interactions and navigation between screens.
            </p>
            <p className="description-text">
              The main functions of the app are finding recipes, a step-by-step recipe mode with troubleshooting and
              additional details about each step, and a bread basics section so users can learn more about the bread-making
              process outside of individual recipes.
            </p>
          </div>
          {
            doughImages.uiSpec.map((image, index) => this.renderImageRow(image, index, "Interaction Flow", "uiLightboxIsOpen", "full-width"))
          }
        </div>
        {this.renderLightbox(doughImages.uiSpec, uiLightboxIsOpen, "uiLightboxIsOpen", photoIndex)}
      </div>
    );
  }

  renderPaperPrototype() {
    const { photoIndex, prototypeLightboxIsOpen } = this.state;
    return (
      <div className="paper-prototype">
      <div className="portfolio-content description">
        <Title
          title="Paper Prototype"
        />
        <div className="two-thirds text">
          <p className="description-text">
            I used the wireframes as a paper prototype for usability testing. Testing led me to add new features
            to the app, such as the ability to look for more recipes while the timer counts down without having
            to exit the recipe.
          </p>
        </div>
        {
          doughImages.paperPrototype.map((image, index) => this.renderImageRow(image, index, "Paper Prototype", "prototypeLightboxIsOpen", "one-half__center"))
        }
      </div>
      {this.renderLightbox(doughImages.paperPrototype, prototypeLightboxIsOpen, "prototypeLightboxIsOpen", photoIndex)}
      </div>
    );
  }

  renderUI() {
    const { photoIndex, uiLightboxIsOpen } = this.state;
    return (
      <div className="user-interface">
        <div className="portfolio-content description">
          <Title
            title="User Interface"
          />
          <div className="two-thirds text">
            <p className="description-text">
              Here are all of the screens I created for the final Dough user interface.
            </p>
          </div>
          {
            doughImages.interface.map((image, index) => this.renderImageRow(image, index, "User Interface", "uiLightboxIsOpen", "full-width column"))
          }
        </div>
        {this.renderLightbox(doughImages.interface, uiLightboxIsOpen, "uiLightboxIsOpen", photoIndex)}
      </div>
    );
  }

  render() {
    return (
      <div className="dough-wrapper">
        {this.renderHero()}
        <div className="dough page">
          <ScrollUp />
          {this.renderProjectInfo()}
          {this.renderBackground()}
          {this.renderWorkflow()}
          {this.renderUISpec()}
          {this.renderPaperPrototype()}
          {this.renderUI()}
        </div>
      </div>
    );
  }
}

export default DoughPage;
