import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.css';
import 'react-image-lightbox/style.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ForwardFinancingPage from './components/ForwardFinancingPage/ForwardFinancingPage';
import MunchPage from './components/MunchPage/MunchPage';
import MiscPage from './components/MiscPage/MiscPage';
import DoughPage from './components/DoughPage/DoughPage';
import TourzyPage from './components/TourzyPage/TourzyPage';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/work/forward-financing" component={ForwardFinancingPage}/>
          <Route path="/work/munch" component={MunchPage}/>
          <Route path="/work/miscellaneous" component={MiscPage}/>
          <Route path="/work/dough" component={DoughPage}/>
          <Route path="/work/tourzy" component={TourzyPage}/>
          <Route path="/about" component={AboutPage}/>
        </div>
      </App>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);
