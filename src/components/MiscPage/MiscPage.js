import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ScrollUp from '../common/ScrollUp/ScrollUp';
import Hero from '../common/Hero/Hero';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';
import projectInfo from '../../constants/projectInfo';
import Title from '../common/ProjectAssets/Title';
import miscImages from '../../constants/miscImages';
import MiscHero from '../../assets/Miscellaneous/MiscellaneousHome.jpg';
import QuoteGenerator from '../../assets/Miscellaneous/quoteGenerator.gif';
import WeatherApp from '../../assets/Miscellaneous/weather.gif';

class MiscPage extends React.Component {
  renderCarouselImages(image, index, altText) {
    return (
      <div key={index}>
        <img src={image} alt={altText}/>
      </div>
    );
  }

  renderHero() {
    return (
      <Hero
        background="#CDEFE9"
        image={MiscHero}
        imageAlt="Miscellaneous Projects"
      />
    );
  }

  renderProjectInfo() {
    return (
      <ProjectInfo
        title="Miscellaneous"
        subtitle="Other Design Projects"
        summaryInfo={projectInfo.miscProjectInfo}
      />
    );
  }

  renderImpact() {
    return (
      <div className="portfolio-content description">
        <Title
          title="What's Your Impact?"
        />
        <div className="two-thirds text">
          <p className="description-text">
          This project was created in my Programming Basics class, where we used
          the <a href="https://processing.org/" target="blank" className="link">Processing</a> language
          and software to create animated and interactive designs. What{`'`}s Your Impact? is an interactive
          data visualization intended to inform people about the environmental impacts of the foods
          they consume. Users can explore the impacts of consuming beef, eggs, dairy, pork, chicken
          and fish, as well as some environmentally friendly, plant-based alternatives.
          </p>
        </div>
        <div className="two-thirds__center">
          <Carousel showThumbs={false} dynamicHeight={false}>
            {miscImages.impact.map((image, index) => this.renderCarouselImages(image, index, "What's Your Impact?"))}
          </Carousel>
        </div>
      </div>
    );
  }

  renderVideoGame() {
    return (
      <div className="portfolio-content description">
        <Title
          title="Cookie Catcher"
        />
        <div className="two-thirds text">
          <p className="description-text">
          This video game, called Cookie Catcher, was also created in my Programming Basics course.
          The game increases in difficulty each time the user completes a level, and will continue
          to generate levels indefinitely until the user drops too many cookies.
          </p>
        </div>
        <div className="two-thirds__center">
          <Carousel showThumbs={false} dynamicHeight={true}>
            {miscImages.cookieCatcher.map((image, index) => this.renderCarouselImages(image, index, "Cookie Catcher"))}
          </Carousel>
        </div>
      </div>
    );
  }

  renderQuote() {
    return (
      <div className="portfolio-content description">
        <Title
          title="Quote Generator"
        />
        <div className="two-thirds text">
          <p className="description-text">
          This project was created using JavaScript and generates random quotes from
          the <a href="https://forismatic.com/en/api/" target="blank" className="link">forismatic API</a>.
          The background randomly cycles through a series of colors.
          </p>
        </div>
        <div className="two-thirds__center">
          <img src={QuoteGenerator} alt="Quote Generator" className="video"/>
        </div>
      </div>
    );
  }

  renderWeather() {
    return (
      <div className="portfolio-content description">
        <Title
          title="Weather App"
        />
        <div className="two-thirds text">
          <p className="description-text">
          This project was created using JavaScript. It identifies the user{`'`}s location and provides
          the current weather by utilizing
          the <a href="https://www.wunderground.com/weather/api/" target="blank" className="link">Weather Underground API</a>.
          </p>
        </div>
        <div className="one-half__center">
          <img src={WeatherApp} alt="Weather App" className="video"/>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="miscellaneous-wrapper">
        {this.renderHero()}
        <div className="miscellaneous page">
          <ScrollUp/>
          {this.renderProjectInfo()}
          {this.renderImpact()}
          {this.renderVideoGame()}
          {this.renderQuote()}
          {this.renderWeather()}
        </div>
      </div>
    );
  }
}

export default MiscPage;
