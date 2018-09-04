import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import LightBox from '../common/Lightbox/Lightbox';
import ffImages from '../../constants/ffImages';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import Title from '../common/ProjectAssets/Title';
import Subtitle from '../common/ProjectAssets/Subtitle';
import Image from '../common/ProjectAssets/Image';
import LongImage from '../common/ProjectAssets/LongImage';
import projectInfo from '../../constants/projectInfo';
import FFHero from '../../assets/ForwardFinancing/FF_Hero.png';
import MPDesktop from '../../assets/ForwardFinancing/Desktop_Statements.jpg';
import MPTabletMobile from '../../assets/ForwardFinancing/MP_Tablet_Mobile_Statements.jpg';
import AdvancesDesktop from '../../assets/ForwardFinancing/Desktop_AdvancePage.png';
import AdvancesTablet from '../../assets/ForwardFinancing/Tablet_AdvancePage.jpg';
import AdvancesMobile from '../../assets/ForwardFinancing/Mobile_AdvancePage.jpg';

class ForwardFinancingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      originalSearchLightboxIsOpen: false,
      newSearchLightboxIsOpen: false,
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

  renderCarouselImages(image, index) {
    return (
      <div key={index}>
        <img src={image}/>
      </div>
    );
  }

  renderHero() {
    return (
      <Hero
        background="#52995c"
        image={FFHero}
        imageAlt="Forward Financing"
      />
    );
  }

  renderProjectInfo() {
    return (
      <ProjectInfo
        title="Forward Financing"
        subtitle="UX/UI and Web Development Intern"
        summaryInfo={projectInfo.ffProjectInfo}
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
          I spent 7 months as an intern at Forward Financing working on both
          front end development and design. I had the opportunity to see many
          projects through from start to finish, from initial wireframes to writing the final code.
          As the only designer on the team, I designed and implemented a variety of new features that matched the
          company’s existing UI while improving design consistency across multiple internal- and external-facing
          web applications. I also created design tools such as a Sketch style guide and a live documentation of
          the company{`'`}s shared component library.
          </p>
        </div>
      </div>
    );
  }

  renderMerchantPortalStatements() {
    return (
      <div className="merchant-portal-statements">
        <div className="portfolio-content description">
          <Title
            title="Merchant Portal Statements"
          />
          <div className="two-thirds">
            <p className="description-text">
              The merchant portal{`'`}s users are business owners who have been funded by Forward Financing.
              At the time that this page was designed, merchants could only access information about how much
              money they had repaid toward their current advances.
            </p>
            <p className="description-text">
              <strong>Business Goal:</strong> Free up staff time spent answering merchants{`'`} questions
              about their payment history by providing access to this information in an online portal.
            </p>
            <p className="description-text">
              <strong>User Goal:</strong> Quickly and easily find information about current and past advances,
              including the amount to be repaid, the total amount collected thus far, and a detailed history of
              previous payments and fees.
            </p>
          </div>
        </div>
        <div className="portfolio-content description">
          <div className="one-third">
            <Subtitle
              subtitle="Sketches & Ideation"
            />
          </div>
          <div className="two-thirds">
            <p className="description-text">
              Given a list of information that needed to be included on the statements page, I began
              by sketching out ideas for the best ways to organize the page. Merchants needed to be able
              to switch between different advances, view upfront fees, and see a history of payments.
            </p>
          </div>
          <div className="one-half__center shadow">
            <Carousel showThumbs={false} dynamicHeight={true}>
              {ffImages.mpIdeation.map((image, index) => this.renderCarouselImages(image, index))}
            </Carousel>
          </div>
        </div>
        <div className="portfolio-content description no-margin">
          <div className="one-third">
            <Subtitle
              subtitle="Desktop UI"
            />
          </div>
          <div className="two-thirds">
            <p className="description-text">
              For the final UI, I decided to use "card" components to highlight the information that would
              be most important to users, and to utilize a dropdown component for switching between advances.
            </p>
          </div>
          <div className="full-width">
            <LongImage
              image={MPDesktop}
              alt="Merchant Portal Desktop UI"
              color="#52995c"
            />
          </div>
        </div>
        <div className="mobile-tablet">
          <Subtitle
            subtitle="Mobile/Tablet UI"
          />
          <Image
            image={MPTabletMobile}
            alt="Merchant Portal Mobile/Tablet UI"
            color="#52995c"
          />
        </div>
      </div>
    );
  }

  renderPartnerPortalAdvances() {
    return (
      <div className="partner-portal-advances">
        <div className="portfolio-content description">
          <Title
            title="Partner Portal Advances"
          />
          <div className="two-thirds">
            <p className="description-text">
              The partner portal{`'`}s users are Forward Financing{`'`}s referral partners, who work with
              the company to fund business owners. Partners bring in a majority of the deals that are funded
              and are primarily responsible for maintaining relationships with merchants.
            </p>
            <p className="description-text">
              <strong>Business Goal:</strong> Enable partners to more effectively keep track of merchant
              data and activity in order to help them fund more deals, and attract new partners by offering
              best-in-class features.
            </p>
            <p className="description-text">
              <strong>User Goal:</strong> Access specific information about merchants{`'`} advances
              and payment history in order to keep track of funding goals and better serve merchants.
            </p>
          </div>
        </div>
        <div className="desktop">
          <div className="portfolio-content description no-margin">
            <div className="one-third">
              <Subtitle
                subtitle="Desktop UI"
              />
            </div>
            <div className="two-thirds">
              <p className="description-text">
                Given the similarities between this page and the Merchant Portal Advances page, I decided
                to reuse a majority of the components from the merchant portal for this design in order to
                maintain design consistency and ease development efforts.
              </p>
            </div>
            <div className="full-width">
              <LongImage
                image={AdvancesDesktop}
                alt="Partner Portal Advances Desktop UI"
                color="#97BA98"
              />
            </div>
          </div>
        </div>
        <div className="tablet">
          <Subtitle
            subtitle="Tablet UI"
          />
          <Image
            image={AdvancesTablet}
            alt="Partner Portal Advances Tablet UI"
            color="#97BA98"
          />
        </div>
        <div className="mobile">
          <Subtitle
            subtitle="Mobile UI"
          />
          <Image
            image={AdvancesMobile}
            alt="Partner Portal Advances Mobile UI"
            color="#97BA98"
          />
        </div>
      </div>
    );
  }

  renderSearch() {
    const { photoIndex, originalSearchLightboxIsOpen, newSearchLightboxIsOpen } = this.state;

    return (
      <div className="partner-portal-search">
        <div className="portfolio-content description">
          <Title
            title="Partner Portal Search"
          />
          <div className="two-thirds">
            <p className="description-text">
              Two of the pages in the partner portal contain tables with information about deals that have
              not yet been funded (Pipeline page) and deals that have already been funded (Portfolio page).
              The tables are searchable and filterable.
            </p>
            <p className="description-text">
              Through user analytics, it was discovered that users did not often use filters, and that they
              used the tables{`'`} sort features in situations where the filters would likely enable them
              to access their desired results more quickly.
            </p>
            <p className="description-text">
              Based on these analytics, I redesigned the search/filter component to be more discoverable and
              user-friendly.
            </p>
          </div>
        </div>
        <div className="original-designs">
          <div className="portfolio-content description">
            <div className="one-third">
              <Subtitle
                subtitle="Original Designs"
              />
            </div>
            <div className="two-thirds">
              <p className="description-text">
                I began by identifying potential issues with the current search/filtering component design.
              </p>
            </div>
            {
              ffImages.originalSearch.map((image, index) => this.renderImageRow(image, index, "Original Search Design", "originalSearchLightboxIsOpen", "two-thirds__center"))
            }
          </div>
          {this.renderLightbox(ffImages.originalSearch, originalSearchLightboxIsOpen, "originalSearchLightboxIsOpen", photoIndex)}
        </div>
        <div className="new-designs">
          <div className="portfolio-content description">
            <div className="one-third">
              <Subtitle
                subtitle="New Designs"
              />
            </div>
            <div className="two-thirds">
              <p className="description-text">
                I redesigned the search component by separating the filters from the search bar for
                greater clarity, renaming the filter labels to better match the table headers, and
                changing the button colors and locations.
              </p>
            </div>
            {
              ffImages.newSearch.map((image, index) => this.renderImageRow(image, index, "New Search Designs", "newSearchLightboxIsOpen", "one-half"))
            }
          </div>
          {this.renderLightbox(ffImages.newSearch, newSearchLightboxIsOpen, "newSearchLightboxIsOpen", photoIndex)}
        </div>
      </div>
    );
  }

  renderUserManagement() {
    return (
      <div className="partner-portal-user-management">
        <div className="portfolio-content description">
          <Title
            title="Partner Portal User Management"
          />
          <div className="two-thirds">
            <p className="description-text">
              Most partners have multiple representatives who can access the portal. However, not all
              representatives should have access to the same information.
            </p>
            <p className="description-text">
              <strong>Business Goal:</strong> Free up staff time spent manually adding and removing
              users in the authorization system.
            </p>
            <p className="description-text">
              <strong>User Goal:</strong> Manage user access to the portal, including various roles
              who have access to different information.
            </p>
          </div>
        </div>
        <div className="portfolio-content description">
          <div className="one-third">
            <Subtitle
              subtitle="Adding Users"
            />
          </div>
          <div className="two-thirds shadow">
            <Carousel showThumbs={false} dynamicHeight={false}>
              {ffImages.addUser.map((image, index) => this.renderCarouselImages(image, index))}
            </Carousel>
          </div>
        </div>
        <div className="portfolio-content description">
          <div className="one-third">
            <Subtitle
              subtitle="Editing/Removing Users"
            />
          </div>
          <div className="two-thirds shadow">
            <Carousel showThumbs={false} dynamicHeight={false}>
              {ffImages.editUser.map((image, index) => this.renderCarouselImages(image, index))}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }

  renderContactInfo() {
    return (
      <div className="partner-portal-contact-info">
        <div className="portfolio-content description">
          <Title
            title="Partner Portal Contact Information"
          />
          <div className="two-thirds">
            <p className="description-text">
              Each partner has multiple points of contact at Forward Financing, such as Account Managers and
              Funding Coordinators. Previously, partners saw a generic page that listed information for each
              of these contacts. This design represents the introduction of partner-specific contact information.
            </p>
            <p className="description-text">
              <strong>Business Goal:</strong> Ensure that partners have access to the correct, user-specific contact
              information in order to provide better and faster service.
            </p>
            <p className="description-text">
              <strong>User Goal:</strong> Easily find contact information based on the user{`'`} current
              customer service need. Akways contact the right person.
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="forward-financing-wrapper">
        {this.renderHero()}
        <div className="forward-financing page">
          {this.renderProjectInfo()}
          {this.renderBackground()}
          {this.renderMerchantPortalStatements()}
          {this.renderPartnerPortalAdvances()}
          {this.renderSearch()}
          {this.renderUserManagement()}
          {this.renderContactInfo()}
        </div>
      </div>
    );
  }
}

export default ForwardFinancingPage;
