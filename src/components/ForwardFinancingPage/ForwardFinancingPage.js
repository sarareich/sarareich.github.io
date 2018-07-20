import React from 'react';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import ProjectDescription from '../common/ProjectDescription/ProjectDescription'
import projectInfo from '../../constants/projectInfo';

class ForwardFinancingPage extends React.Component {
  render() {
    const contextString="I spent 7 months as an intern at Forward Financing working on both\
    front end development and design. I had the opportunity to see many\
    projects through from start to finish, from initial wireframes to writing the final code.\
    I designed and implemented a variety of new features that matched the company’s existing\
    UI while improving design consistency across multiple internal- and external-facing web applications."

    return (
      <div className="forward-financing-wrapper">
        <Hero
          background="#52995c"
        />
        <div className="forward-financing page">
          <ProjectInfo
            title="Forward Financing"
            subtitle="UX/UI + Web Development Intern"
            summaryInfo={projectInfo.ffProjectInfo}
          />
          <ProjectDescription
            title="Context"
            description={contextString}
          />
        </div>
      </div>
    );
  }
}

export default ForwardFinancingPage;
