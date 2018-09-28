import React from 'react';
import Portrait from "../../assets/portrait.jpg";
import Resume from "../../assets/SaraReich-Resume2018-2.pdf";

class AboutPage extends React.Component {
  render() {
    return (
      <div className="about-page page">
        <div className="portrait__container">
          <img
            src={Portrait}
            className="circle"
          />
        </div>
        <div className="portfolio-content description">
          <div className="one-half__center">
            <h3 className="heading-3 lowercase">
              Hey there! My name is Sara, and I{`'`}m a Boston-based product designer.
            </h3>
            <p className="description-text">
              I{`'`}m currently completing my senior year as a Marketing and Interactive Media student
              at Northeastern University. I found my way to product design through a love of <strong>solving
              problems</strong> and <strong>making people{`'`}s lives a little easier</strong>. With a
              background in both design and front-end development, I enjoy having a hand in all parts of
              the design process — from planning to execution.
            </p>
            <p className="description-text">
              <strong>I am currently seeking full-time employment opportunities beginning in May 2019.</strong>
            </p>
            <p className="description-text">
              In my spare time, you can probably find me cooking/eating vegan food, lifting weights, or
              reading a book.
            </p>
            <p className="description-text">
              For more information, take a look at my <a href={Resume} className="link" target="blank">resume</a>, find
              me on <a href="https://www.linkedin.com/in/sara-reich-281941114/" className="link" target="blank">LinkedIn</a>, or
              drop me a line at [email-here]!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
