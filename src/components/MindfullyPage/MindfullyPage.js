import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollUp from '../common/ScrollUp/ScrollUp';
import LightBox from '../common/Lightbox/Lightbox';
import Video from '../common/Video/Video';
import mindfullyImages from '../../constants/mindfullyImages';
import { Carousel } from 'react-responsive-carousel';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import Title from '../common/ProjectAssets/Title';
import Subtitle from '../common/ProjectAssets/Subtitle';
import projectInfo from '../../constants/projectInfo';
import MindfullyHero from '../../assets/Mindfully/hero.jpg';

class MindfullyPage extends React.Component {
  constructor() {
    super();
    this.state = {
      researchLightboxIsOpen: false
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

  renderImageRow(image, index, altText, lightbox, desiredClass, imageClass) {
    return (
      <div className={desiredClass} key={index}>
        <img
          src={image}
          className={`project-image__small zoom ${imageClass}`}
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

  renderCarouselImages(image, index, altText) {
    return (
      <div key={index}>
        <img src={image} alt={altText}/>
      </div>
    );
  }

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
              those emotions. This project seeks to enable students to be more successful as individuals by
              <strong> making complex information about emotional literacy accessible and fun.</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  renderResearch() {
    const { photoIndex, researchLightboxIsOpen } = this.state;
    return (
      <div className="user-research">
        <div className="portfolio-content description">
          <Title
            title="Research"
          />
          <div className="two-thirds text">
            <p className="description-text">
              My team conducted expert interviews and secondary research to learn more about the issues faced
              by low-income elementary school students. We interviewed teachers and mental health professionals,
              and read literature on topics ranging from parent participation in their children's education to
              the impact of mindfulness in the classroom.
            </p>
          </div>
          <div className="two-thirds__center shadow">
            <Carousel dynamicHeight={false}>
              {mindfullyImages.research.map((image, index) => this.renderCarouselImages(image, index, "Research"))}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }

  renderIdeation() {
    const { photoIndex, researchLightboxIsOpen } = this.state;
    return (
      <div className="user-research">
        <div className="portfolio-content description">
          <Title
            title="Ideation"
          />
          <div className="two-thirds text">
            <p className="description-text">
              Based on our research, we came up with ideas for three areas where we saw a need for intervention in
              low income elementary schools: <strong>parent involvement, curriculum buildling, and
              mental health. </strong> We created simple paper prototypes for each of these ideas.
            </p>
          </div>
        </div>
        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Parent Involvement"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              A network for parents to communicate with each other and get involved in school events.
            </p>
            <div className="shadow">
              <Carousel dynamicHeight={false}>
                {mindfullyImages.parentNetwork.map((image, index) => this.renderCarouselImages(image, index, "Parent Network"))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Curriculum Buildling"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              A tool for teachers to create curriculums based on grade level and state standards, and get advice
              from other teachers.
            </p>
            <div className="shadow">
              <Carousel dynamicHeight={false}>
                {mindfullyImages.curriculum.map((image, index) => this.renderCarouselImages(image, index, "Curriculum Builder"))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Mental Health"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              A tablet app that encourages students to meditate and reflect on their feelings.
            </p>
            <div className="shadow">
              <Carousel dynamicHeight={false}>
                {mindfullyImages.meditation.map((image, index) => this.renderCarouselImages(image, index, "Meditation"))}
              </Carousel>
            </div>
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
          {this.renderResearch()}
          {this.renderIdeation()}
        </div>
      </div>
    );
  }
}

export default MindfullyPage;
