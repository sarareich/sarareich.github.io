import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.css';
import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import ForwardFinancingPage from './components/ForwardFinancingPage/ForwardFinancingPage';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <div>
        <Route exact path="/work" component={HomePage}/>
        <Route path="/work/forward-financing" component={ForwardFinancingPage}/>
      </div>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
