import React from 'react';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import ProjectDescription from '../common/ProjectDescription/ProjectDescription'
import projectInfo from '../../constants/projectInfo';
import FFHero from '../../assets/ForwardFinancing/FF_Hero.png';
import MPMobile from '../../assets/ForwardFinancing/MP_Mobile_Statements.png';
import MPDesktop from '../../assets/ForwardFinancing/MP_Desktop_Statements.png';
import MPTablet from '../../assets/ForwardFinancing/MP_Tablet_Statements.png';

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

  renderTitle(title) {
    return (
      <h2 className="heading-2 one-third">
        {title}
      </h2>
    );
  }

  renderSubtitle(subtitle) {
    return (
      <h3 className="heading-3">
        {subtitle}
      </h3>
    )
  }

  renderImage(color, image) {
    return (
      <div
        className="project-image__container"
        style={{
          backgroundColor: color
        }}
      >
        <img src={image} className="project-image"/>
      </div>
    );
  }

  renderContext() {
    return (
      <div className="portfolio-content description">
        {this.renderTitle("Context")}
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
          {this.renderTitle("Merchant Portal Statements")}
          <div className="two-thirds">
            <p className="description-text">
              <strong>Business Goal:</strong> Free up staff time spent answering merchants{`'`} questions
              about their payment history by providing an online portal where this information can be accessed.
            </p>
            <p className="description-text">
              <strong>User Goal:</strong> Quickly and easily find information about current and past advances,
              including the amount to be repaid, the total amount collected thus far, and a detailed history of
              previous payments.
            </p>
          </div>
          <div className="wireframes full-width">
            {this.renderSubtitle("Wireframes")}
          </div>
          <div className="desktop full-width">
            {this.renderSubtitle("Desktop UI")}
            {this.renderImage("#52995c", MPDesktop)}
          </div>
          <div className="tablet full-width">
            {this.renderSubtitle("Tablet UI")}
            {this.renderImage("#52995c", MPTablet)}
          </div>
          <div className="mobile full-width">
            {this.renderSubtitle("Mobile UI")}
            {this.renderImage("#52995c", MPMobile)}
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
        </div>
      </div>
    );
  }
}

export default ForwardFinancingPage;
