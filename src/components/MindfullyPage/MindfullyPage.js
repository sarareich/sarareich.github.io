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
class MindfullyPage extends React.Component {
  render() {
    return (
      <div className="mindfully-wrapper">
        <div className="mindfully-page">
          <ScrollUp />
        </div>
      </div>
    );
  }
}

export default MindfullyPage;
