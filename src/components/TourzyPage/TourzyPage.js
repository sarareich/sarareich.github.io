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
import TourzyHero from '../../assets/Tourzy/tourzyHero.jpg';
import UISpec from '../../assets/Tourzy/UISpec.pdf';
import Artboards from '../../assets/Tourzy/artboards.pdf';
import AlertVideo from '../../assets/Tourzy/Videos/alert.mp4';
import EditTripVideo from '../../assets/Tourzy/Videos/editTrip.mp4';
import ItineraryVideo from '../../assets/Tourzy/Videos/itinerary.mp4';
import NewTripVideo from '../../assets/Tourzy/Videos/newTrip.mp4';
import PreferencesVideo from '../../assets/Tourzy/Videos/preferences.mp4';

class TourzyPage extends React.Component {
  constructor() {
    super();
    this.state = {
      taskLightboxIsOpen: false,
      ideationLightboxIsOpen: false,
      heroLightboxIsOpen: false,
      storyLightboxIsOpen: false,
      uiSpecLightboxIsOpen: false,
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

  renderVideo(videoSource) {
    return (
      <VisibilitySensor minTopValue="200" partialVisibility={true}>
       {
         ({isVisible}) =>
            <div className="one-third__center video-container">
              <Video active={isVisible} source={videoSource} />
            </div>
       }
      </VisibilitySensor>
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
            tourzyImages.taskAnalysis.map((image, index) => this.renderImageRow(image, index, "Task Analysis", "taskLightboxIsOpen", "two-thirds__center shadow", ""))
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
            tourzyImages.brainstorming.map((image, index) => this.renderImageRow(image, index, "Brainstorming", "ideationLightboxIsOpen", "one-half__center", "shadow"))
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
            tourzyImages.heroJourney.map((image, index) => this.renderImageRow(image, index, "Hero's Journey", "heroLightboxIsOpen", "two-thirds shadow text", ""))
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
            tourzyImages.storyboard.map((image, index) => this.renderImageRow(image, index, "Storyboard", "storyLightboxIsOpen", "two-thirds shadow text", ""))
          }
        </div>
        {this.renderLightbox(tourzyImages.storyboard, storyLightboxIsOpen, "storyLightboxIsOpen", photoIndex)}
      </div>
    );
  }

  renderUISpec() {
    const { photoIndex, uiSpecLightboxIsOpen } = this.state;
    return (
      <div className="UI-spec">
        <div className="portfolio-content description">
          <Title
            title="User Interface Spec"
          />
          <div className="two-thirds text">
            <p className="description-text">
              I then moved on to creating the workflows and wireframes for my app. I used the wireframes for
              user interface specifications which detail interactions and navigation between screens. You can
              view the full-sized version of the file <a href={UISpec} target="blank" className="link">here</a>.
            </p>
            <p className="description-text">
              The main functions of the app are choosing your preferred activities and additional needs,
              creating trips and itineraries, and editing your itinerary either in response to in-the-moment
              events or to better suit your preferences.
            </p>
          </div>
          {
            tourzyImages.uiSpec.map((image, index) => this.renderImageRow(image, index, "Interaction Flow", "uiSpecLightboxIsOpen", "full-width", ""))
          }
        </div>
        {this.renderLightbox(tourzyImages.uiSpec, uiSpecLightboxIsOpen, "uiSpecLightboxIsOpen", photoIndex)}
      </div>
    );
  }

  renderPrototypes() {
    return (
      <div className="prototypes">
        <div className="portfolio-content description">
          <Title
            title="UI & Prototypes"
          />
          <div className="two-thirds text">
            <p className="description-text">
              After conducting user tests with the wireframes I created, I moved on to visual design in Sketch and developing
              prototypes for the main workflows of the app in InVision. You can view all of the Sketch
              artboards <a href={Artboards} target="blank" className="link">here</a>.
            </p>
          </div>
        </div>
        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Onboarding"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              During their first time using the app, users are asked to input their preferred travel activities
              and any additional needs they have.
            </p>
          </div>
          {this.renderVideo(PreferencesVideo)}
        </div>
        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Create Itinerary"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              Users can add trips to the app, including the locations, dates, and where they are staying.
              Adding a trip allows them to generate a personalized itinerary based on the preferences they
              entered during onboarding.
            </p>
          </div>
          {this.renderVideo(NewTripVideo)}
        </div>
        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Edit Itinerary"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              Itineraries can easily be edited in the app. Users can reorder, delete, or reschedule activities.
              Below, you can see the workflow for rescheduling activities. Users can either choose a new date and
              time themselves or have the app suggest a new date and time.
            </p>
          </div>
          {this.renderVideo(EditTripVideo)}
        </div>
        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Alerts"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              Tourzy will alert the user if one of the activities in their itinerary may need to change,
              such as in the case of inclement weather. The app enables users to search for activities
              on their own or use a suggested activity.
            </p>
          </div>
          {this.renderVideo(AlertVideo)}
        </div>
        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Itinerary Views"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              Users can choose from three different itinerary views: list, map, and schedule. The schedule view
              was added after user testing, when one of the participants noted that being able to scroll through
              all of the activities on one page would be useful when deciding on a date and time to reschedule
              activities in the itinerary.
            </p>
          </div>
          {this.renderVideo(ItineraryVideo)}
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
          {this.renderUserResearch()}
          {this.renderIdeation()}
          {this.renderStories()}
          {this.renderUISpec()}
          {this.renderPrototypes()}
        </div>
      </div>
    );
  }
}

export default TourzyPage;
