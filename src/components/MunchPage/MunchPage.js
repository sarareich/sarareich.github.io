import React from 'react';
// import Lightbox from 'react-image-lightbox';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import LightBox from '../common/Lightbox/Lightbox';
import projectInfo from '../../constants/projectInfo';
import Title from '../common/ProjectAssets/Title';
import Subtitle from '../common/ProjectAssets/Subtitle';
import Image from '../common/ProjectAssets/Image';
import LongImage from '../common/ProjectAssets/LongImage';
import MunchHero from '../../assets/Munch/Munch_Overview.png';
import Persona1 from '../../assets/Munch/Persona1.png';
import Persona2 from '../../assets/Munch/Persona2.png';
import Persona3 from '../../assets/Munch/Persona3.png';

const personaImages = [
  Persona1,
  Persona2,
  Persona3
];

class MunchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      lightboxIsOpen: false,
      photoIndex: 0
    };

    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      lightboxIsOpen: true,
      photoIndex: index
    });
  }

  closeLightbox() {
    this.setState({
      lightboxIsOpen: false,
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

  renderImageRow(image, index, altText) {
    return (
      <div className="one-third" key={index}>
        <img
          src={image}
          className="project-image__small zoom"
          alt={altText}
          onClick={(event) => this.openLightbox(index, event)}
        />
      </div>
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
        <div className="two-thirds">
          <p className="description-text">
            In my Interaction Design 1 – Responsive course, we were tasked with creating a website that
            could be used to keep track of something. After a few rounds of ideation, I decided that I wanted
            to make a website that could be used to keep track of restaurants that users had been to or wanted
            to go to, and to find new restaurants.
          </p>
        </div>
      </div>
    );
  }

  renderUserResearch() {
    const { photoIndex, lightboxIsOpen } = this.state;
    return (
      <div className="user-research">
        <div className="portfolio-content description">
          <Title
            title="User Research"
          />
          <div className="two-thirds">
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
              personaImages.map((image, index) => this.renderImageRow(image, index, "Persona"))
            }
          </div>
          <LightBox
            images={personaImages}
            isOpen={lightboxIsOpen}
            onClose={this.closeLightbox.bind(this)}
            nextImage={this.nextLightboxImage.bind(this, personaImages)}
            prevImage={this.prevLightboxImage.bind(this, personaImages)}
            photoIndex={photoIndex}
          />
        </div>
        <div className="portfolio-content description">
          <div className="one-third">
            <Subtitle
              subtitle="Takeaways"
            />
          </div>
          <div className="two-thirds">
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
            title="Sketches"
          />
          <div className="two-thirds">
            <p className="description-text">
              With my user research guiding the features I wanted to include in the website,
              I began to sketch wireframes for some of the site{`'`}s main pages.
            </p>
          </div>
        </div>
        <div className="portfolio-content">
        </div>
      </div>
    );
  }

  renderWireframes() {
    return (
      <div className="portfolio-content description">
        <Title
          title="Wireframes"
        />
        <div className="two-thirds">
          <p className="description-text">
          </p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="munch-wrapper">
        {this.renderHero()}
        <div className="munch page">
          {this.renderProjectInfo()}
          {this.renderBackground()}
          {this.renderUserResearch()}
          {this.renderSketches()}
        </div>
      </div>
    );
  }
}


export default MunchPage;
