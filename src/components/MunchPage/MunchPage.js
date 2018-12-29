import React from 'react';
import ScrollUp from '../common/ScrollUp/ScrollUp';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import LightBox from '../common/Lightbox/Lightbox';
import { Carousel } from 'react-responsive-carousel';
import projectInfo from '../../constants/projectInfo';
import Title from '../common/ProjectAssets/Title';
import Subtitle from '../common/ProjectAssets/Subtitle';
import Image from '../common/ProjectAssets/Image';
import MunchHero from '../../assets/Munch/MunchHome.jpg';
import MunchHomeLoggedOut from '../../assets/Munch/Marketing_HomePage.jpg';
import Newsfeed from '../../assets/Munch/Newsfeed.png';
import Profile from '../../assets/Munch/Profile.png';
import RestaurantDetail from '../../assets/Munch/RestaurantDetail.png';
import PhotoUpload from '../../assets/Munch/UploadPhoto.png';
import munchImages from '../../constants/munchImages';

class MunchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      personaLightboxIsOpen: false,
      storyboardsLightboxIsOpen: false,
      searchLightboxIsOpen: false,
      friendsLightboxIsOpen: false,
      uploadLightboxIsOpen: false,
      artboardsLightboxIsOpen: false,
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

  renderCarouselImages(image, index, altText) {
    return (
      <div key={index}>
        <img src={image} alt={altText}/>
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

  renderBackground() {
    return (
      <div className="portfolio-content description">
        <Title
          title="Background"
        />
        <div className="two-thirds text">
          <p className="description-text">
            In my Interaction Design 1 – Responsive course, we were tasked with creating a website that
            could be used to keep track of something. After a few rounds of ideation, I decided that I wanted
            to make a website that could be used to keep track of restaurants that users had been to or wanted
            to go to, and to find new restaurants. I named my project <strong>Munch</strong>.
          </p>
          <p className="description-text">
            For foodies who want to consolidate the restaurant-searching process, Munch is a social media
            website that provides users with everything they need to find and choose restaurants: search
            features, personalized recommendations, lists to keep track of restaurants of interest, and
            updates on friends{`'`} restaurant activities.
          </p>
        </div>
      </div>
    );
  }

  renderUserResearch() {
    const { photoIndex, personaLightboxIsOpen } = this.state;
    return (
      <div className="user-research">
        <div className="portfolio-content description">
          <Title
            title="User Research"
          />
          <div className="two-thirds text">
            <p className="description-text">
              I interviewed 3 potential users of my website idea to understand their <strong>interest in
              keeping track of restaurants</strong>, their <strong>current process for finding and choosing
              restaurants</strong>, and <strong>discover their pain points</strong>. I focused especially on
              which factors impact a user{`'`}s decision to try a restaurant and the effectiveness of
              currently available restaurant search websites.
            </p>
            <p className="description-text">
              I utilized the user interviews to create user personas and guide the website{`'`}s features.
            </p>
          </div>
        </div>
        <div className="personas">
          <div className="full-width">
            <Subtitle
              subtitle="Personas"
            />
          </div>
          <div className="portfolio-content three-columns">
            {
              munchImages.personaImages.map((image, index) => this.renderImageRow(image, index, "Persona", "personaLightboxIsOpen", "one-third column"))
            }
          </div>
          {this.renderLightbox(munchImages.personaImages, personaLightboxIsOpen, "personaLightboxIsOpen", photoIndex)}
        </div>
        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Takeaways"
            />
          </div>
          <div className="two-thirds text">
            <ul>
              <li className="bullet-list">People have <strong>the most trust in their friends{`'`} opinions </strong>
                and consider them heavily when choosing a restaurant.
              </li>
              <li className="bullet-list">One pain point is the <strong>lack of integration in the restaurant-searching process</strong>.
                There are multiple places to look for searching, finding menus, looking at photos,
                seeing previous restaurants you{`'`}ve been to, etc.
              </li>
              <li className="bullet-list"> There isn{`'`}t an easy way to <strong>keep track of restaurants </strong>
                you{`'`}ve been to and restaurants you want to try.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  renderSketches() {
    return (
      <div className="sketches">
        <div className="portfolio-content description">
          <Title
            title="Sketches & Ideation"
          />
          <div className="two-thirds text">
            <p className="description-text">
              With my user research guiding the features I wanted to include in the website,
              I began to sketch wireframes for some of the site{`'`}s main pages.
            </p>
            <p className="description-text">
              I knew that I wanted to make a <strong>social media site</strong> to meet users{`'`} desire to get
              restaurant recommendations from friends. I also wanted to include <strong>automated recommendations</strong> and
              <strong> search features</strong> to make it easy for users to find new restaurants.
            </p>
          </div>
          <div className="two-thirds__center shadow">
            <Carousel dynamicHeight={true}>
              {munchImages.sketches.map((image, index) => this.renderCarouselImages(image, index, "Munch Sketch"))}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }

  renderStoryboards() {
    const { photoIndex, storyboardsLightboxIsOpen } = this.state;
    return (
      <div className="sketches">
        <div className="portfolio-content description">
          <Title
            title="Storyboards"
          />
          <div className="two-thirds text">
            <p className="description-text">
              After defining the key features of the website, I focused on potential users
              and the workflows that would enable them to accomplish their goals.
            </p>
          </div>
        </div>
        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="The Users"
            />
          </div>
          <div className="two-thirds text">
            <ul>
              <li className="bullet-list"><strong>The Foodie: </strong>Someone who goes out to eat frequently
              and wants to find new and exciting restaurants to try.
              </li>
              <li className="bullet-list"><strong>The Socialite: </strong>Someone who plans restaurant outings
              with friends and wants to ensure that everyone will enjoy the food.
              </li>
              <li className="bullet-list"><strong>The List-Maker: </strong>Someone who likes to keep track of
              everything, including the restaurants they{`'`}re interested in trying.
              </li>
              <li className="bullet-list"><strong>The Regular Restaurant-Goer: </strong>Someone who eats out on
              a regular basis and wants an easy way to find food they will enjoy.
              </li>
            </ul>
          </div>
        </div>
        <div className="storyboards">
          <Subtitle
            subtitle="Narratives"
          />
          <div className="portfolio-content">
          {
            munchImages.storyboards.map((image, index) =>
              this.renderImageRow(image, index, "Storyboard", "storyboardsLightboxIsOpen", "one-half column"))
          }
          </div>
        </div>
        {this.renderLightbox(munchImages.storyboards, storyboardsLightboxIsOpen, "storyboardsLightboxIsOpen", photoIndex)}
      </div>
    );
  }

  renderWireframes() {
    const { photoIndex, searchLightboxIsOpen, friendsLightboxIsOpen, uploadLightboxIsOpen } = this.state;
    return (
      <div className="wireframes">
        <div className="portfolio-content description">
          <Title
            title="Wireframes"
          />
          <div className="two-thirds text">
            <p className="description-text">
              My storyboards led me to three main workflows for my project. I created wireframes for each workflow
              and used them for user testing:
            </p>
            <ol>
              <li className="bullet-list">Searching for restaurants</li>
              <li className="bullet-list">Seeing friends{`'`} restaurant lists</li>
              <li className="bullet-list">Sharing food photos</li>
            </ol>
          </div>
        </div>
        <div className="wireframes">
          <Subtitle
            subtitle="Searching for Restaurants"
          />
          <div className="portfolio-content">
          {
            munchImages.searchWireframes.map((image, index) =>
              this.renderImageRow(image, index, "Search Wireframes", "searchLightboxIsOpen", "one-half column"))
          }
          </div>
        {this.renderLightbox(munchImages.searchWireframes, searchLightboxIsOpen, "searchLightboxIsOpen", photoIndex)}
      </div>
      <div className="wireframes">
        <Subtitle
          subtitle="Seeing Friends' Restaurants"
        />
        <div className="portfolio-content">
        {
          munchImages.friendsWireframes.map((image, index) =>
            this.renderImageRow(image, index, "Friends Wireframes", "friendsLightboxIsOpen", "one-half column"))
        }
        </div>
        {this.renderLightbox(munchImages.friendsWireframes, friendsLightboxIsOpen, "friendsLightboxIsOpen", photoIndex)}
      </div>
      <div className="wireframes">
        <Subtitle
          subtitle="Sharing Photos"
        />
        <div className="portfolio-content">
        {
          munchImages.uploadWireframes.map((image, index) =>
            this.renderImageRow(image, index, "Upload Wireframes", "uploadLightboxIsOpen", "one-half column"))
        }
        </div>
        {this.renderLightbox(munchImages.uploadWireframes, uploadLightboxIsOpen, "uploadLightboxIsOpen", photoIndex)}
      </div>
    </div>
    );
  }

  renderUI() {
    const { photoIndex, artboardsLightboxIsOpen } = this.state;
    return (
      <div className="ui">
        <div className="portfolio-content description">
          <Title
            title="User Interface Design"
          />
          <div className="two-thirds text">
            <p className="description-text">
              I tested my wireframes with real users and used my branding explorations to create
              the final user interface design for each of my workflows in Sketch.
            </p>
          </div>
        </div>
        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Marketing Site"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              While Munch is intended to be used as a logged-in experience, many of the features can be
              used by non-registered users. This marketing site represents the initial experience for
              these users.
            </p>
          </div>
          <div className="two-thirds__center shadow text">
            <img src={MunchHomeLoggedOut} alt="Munch Home Page – Logged Out" className="project-image__small"/>
          </div>
        </div>
        <div className="portfolio-content description">
          <div className="one-third text">
            <Subtitle
              subtitle="Newsfeed"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              The home page for logged in users is a newsfeed including <strong>food photos posted by friends </strong>
              and <strong>restaurant recommendations</strong> generated based on the user{`'`}s activity. Recommendations were
              moved to the newsfeed after my usability testing, when I found that having the recommendations
              live on the user{`'`}s profile was not intuitive.
            </p>
          </div>
          <div className="full-width">
            <Image
              image={Newsfeed}
              alt="Munch Newsfeed - Desktop and Mobile"
              color="#B7345E"
            />
          </div>
          <div className="one-third text">
            <Subtitle
              subtitle="Profile"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              The profile page contains a <strong>history of photos</strong> posted by that user, as well as a
              <strong> list of restaurants</strong> they{`'`}ve been to and a list of restaurants they would
              like to try. Users can keep track of their own restaurants and see what their friends enjoy/are
              interested in.
            </p>
          </div>
          <div className="full-width">
            <Image
              image={Profile}
              alt="Munch Profile - Desktop and Mobile"
              color="#B7345E"
            />
          </div>
          <div className="one-third text">
            <Subtitle
              subtitle="Restaurant Detail"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              The restaurant detail page contains all the information you would expect to see on a
              restaurant searching website, such as reviews, photos, hours, website, etc. Notable features
              include <strong>separate ratings for the total Munch community vs. your friends</strong>,
              based on my research findings that people trust their friends{`'`} opinions more.
            </p>
          </div>
          <div className="full-width">
            <Image
              image={RestaurantDetail}
              alt="Munch Restaurant Page - Desktop and Mobile"
              color="#B7345E"
            />
          </div>
          <div className="one-third text">
            <Subtitle
              subtitle="Photo Upload"
            />
          </div>
          <div className="two-thirds text">
            <p className="description-text">
              When uploading a photo, users are guided through steps to find the restaurant where they ate,
              the dish they are posting a photo of, and their ratings/review. Photos are displayed in
              the newsfeed and on the user{`'`}s profile, and restaurants are automatically added to the
              "restaurant history" list when a photo is uploaded.
            </p>
          </div>
          <div className="full-width">
            <Image
              image={PhotoUpload}
              alt="Munch Photo Upload - Desktop and Mobile"
              color="#B7345E"
            />
          </div>
          <div className="one-third">
            <Subtitle
              subtitle="Sketch Artboards"
            />
          </div>
          {
            munchImages.artboards.map((image, index) =>
              this.renderImageRow(image, index, "Artboards", "artboardsLightboxIsOpen", "full-width column"))
          }
          </div>
          {this.renderLightbox(munchImages.artboards, artboardsLightboxIsOpen, "artboardsLightboxIsOpen", photoIndex)}
      </div>
    );
  }

  renderPrototypes() {
    return (
      <div className="prototypes">
        <div className="portfolio-content description">
          <Title
            title="Prototypes"
          />
          <div className="two-thirds text">
            <p className="description-text">
              Here are demos of the prototypes I made for the mobile and desktop versions of the
              Munch website.
            </p>
          </div>
          <div className="two-thirds__center iframe-container column">
            <iframe
              src="https://player.vimeo.com/video/287102292"
              className="iframe"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen="true"
              title="Desktop Prototype"
            />
          </div>
          <div className="two-thirds__center iframe-container column">
            <iframe
              src="https://player.vimeo.com/video/290289266"
              className="iframe"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen="true"
              title="Mobile Prototype"
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="munch-wrapper">
        {this.renderHero()}
        <div className="munch page">
          <ScrollUp />
          {this.renderProjectInfo()}
          {this.renderBackground()}
          {this.renderUserResearch()}
          {this.renderSketches()}
          {this.renderStoryboards()}
          {this.renderWireframes()}
          {this.renderUI()}
          {this.renderPrototypes()}
        </div>
      </div>
    );
  }
}


export default MunchPage;
