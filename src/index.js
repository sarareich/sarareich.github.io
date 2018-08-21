import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.css';
import 'react-image-lightbox/style.css';
import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import ForwardFinancingPage from './components/ForwardFinancingPage/ForwardFinancingPage';
import MunchPage from './components/MunchPage/MunchPage';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <div>
        <Route exact path="/work" component={HomePage}/>
        <Route path="/work/forward-financing" component={ForwardFinancingPage}/>
        <Route path="/work/munch" component={MunchPage}/>
      </div>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
