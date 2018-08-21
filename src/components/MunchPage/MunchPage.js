import React from 'react';
import Lightbox from 'react-image-lightbox';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
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
      personaLightboxIsOpen: false,
      personaPhotoIndex: 0
    };

    this.openPersonaLightbox = this.openPersonaLightbox.bind(this);
    this.closePersonaLightbox = this.closePersonaLightbox.bind(this);
  }

  openPersonaLightbox(index, event) {
    event.preventDefault();
    this.setState({
      personaLightboxIsOpen: true,
      personaPhotoIndex: index
    });
  }

  closePersonaLightbox() {
    this.setState({
      personaLightboxIsOpen: false,
      personaPhotoIndex: 0
    });
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
            to make a website that could be used to keep track of restaurants. I named my project Munch.
          </p>
          <p className="description-text">
            For foodies who want to consolidate the restaurant-searching process, Munch is a social
            media website that provides users with everything they need to find and choose restaurants:
            search features, personalized recommendations, lists to keep track of restaurants of interest,
            and updates on friends’ restaurant activities.
          </p>
        </div>
      </div>
    );
  }

  renderUserResearch() {
    const { personaPhotoIndex, personaLightboxIsOpen } = this.state;
    return (
      <div className="user-research">
        <div className="portfolio-content description">
          <Title
            title="User Research"
          />
          <div className="two-thirds">
            <p className="description-text">
              I interviewed 3 potential users of Munch to understand their <strong>current process for
              finding and choosing restaurants</strong> and discover their pain points. I focused especially on
              which factors impact a user{`'`}s decision to try a restaurant and the effectiveness of
              currently available restaurant search websites.
            </p>
            <p className="description-text">
              I utilized the user interview to create user personas and guide the website{`'`}s features.
            </p>
          </div>
        </div>
        <div className="personas portfolio-content">
          <div className="full-width">
            <Subtitle
              subtitle="Personas"
            />
          </div>
          {
            personaImages.map((image, index) => {
              return (
                <div className="one-third" key={index}>
                  <img
                    src={image}
                    className="project-image__small zoom"
                    alt="Persona"
                    onClick={(event) => this.openPersonaLightbox(index, event)}
                  />
                </div>
              );
            })
          }
          {personaLightboxIsOpen && (
            <Lightbox
              mainSrc={personaImages[personaPhotoIndex]}
              nextSrc={personaImages[(personaPhotoIndex + 1) % personaImages.length]}
              prevSrc={personaImages[(personaPhotoIndex + personaImages.length - 1) % personaImages.length]}
              onCloseRequest={this.closePersonaLightbox}
              onMovePrevRequest={() =>
                this.setState({
                  personaPhotoIndex: (personaPhotoIndex + personaImages.length - 1) % personaImages.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  personaPhotoIndex: (personaPhotoIndex + 1) % personaImages.length,
                })
              }
            />
          )}
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
        </div>
      </div>
    );
  }
}


export default MunchPage;
