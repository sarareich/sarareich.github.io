import React from 'react';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import ProjectDescription from '../common/ProjectDescription/ProjectDescription';
import Title from '../common/ProjectAssets/Title';
import Subtitle from '../common/ProjectAssets/Subtitle';
import Image from '../common/ProjectAssets/Image';
import LongImage from '../common/ProjectAssets/LongImage';
import projectInfo from '../../constants/projectInfo';
import FFHero from '../../assets/ForwardFinancing/FF_Hero.png';
import MPMobile from '../../assets/ForwardFinancing/MP_Mobile_Statements.png';
import MPDesktop from '../../assets/ForwardFinancing/MP_Desktop_Statements.png';
import MPTablet from '../../assets/ForwardFinancing/MP_Tablet_Statements.png';
import AdvancesDesktop from '../../assets/ForwardFinancing/Desktop_AdvancePage.png';
import AdvancesTablet from '../../assets/ForwardFinancing/Tablet_AdvancePage.png';
import AdvancesMobile from '../../assets/ForwardFinancing/Mobile_AdvancePage.png';

class ForwardFinancingPage extends React.Component {
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

  renderContext() {
    return (
      <div className="portfolio-content description">
        <Title
          title="Context"
        />
        <div className="two-thirds">
          <p className="description-text">
          I spent 7 months as an intern at Forward Financing working on both
          front end development and design. I had the opportunity to see many
          projects through from start to finish, from initial wireframes to writing the final code.
          I designed and implemented a variety of new features that matched the company’s existing
          UI while improving design consistency across multiple internal- and external-facing web applications.
          I also created design tools such as a Sketch style guide and a live documentation of
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
        <div className="wireframes">
          <Subtitle
            subtitle="Wireframes"
          />
        </div>
        <div className="desktop">
          <Subtitle
            subtitle="Desktop UI"
          />
          <Image
            image={MPDesktop}
            color="#52995c"
          />
        </div>
        <div className="tablet">
          <Subtitle
            subtitle="Tablet UI"
          />
          <Image
            image={MPTablet}
            color="#52995c"
          />
        </div>
        <div className="mobile">
          <Subtitle
            subtitle="Mobile UI"
          />
          <Image
            image={MPMobile}
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
          <Subtitle
            subtitle="Desktop UI"
          />
          <LongImage
            image={AdvancesDesktop}
            color="#97BA98"
          />
        </div>
        <div className="tablet">
          <Subtitle
            subtitle="Tablet UI"
          />
          <Image
            image={AdvancesTablet}
            color="#97BA98"
          />
        </div>
        <div className="mobile">
          <Subtitle
            subtitle="Mobile UI"
          />
          <Image
            image={AdvancesMobile}
            color="#97BA98"
          />
        </div>
      </div>
    );
  }

  renderSearch() {
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
          {this.renderContext()}
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
