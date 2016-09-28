import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main.jsx';
import Home from '../components/Home.jsx';
import PromptContainer from '../containers/promptContainer.jsx';
import ConfirmBattleContainer from '../containers/confirmBattleContainer.jsx';
import ResultsContainer from '../containers/ResultContainer.jsx';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='playerOne' header="Player One" component={PromptContainer}/>
      <Route path='playerTwo/:playerOne' header="Player two" component={PromptContainer}/>
      <Route path='battle' component={ConfirmBattleContainer}/>
      <Route path='results' component={ResultsContainer}/>
    </Route>
  </Router>
);

export default routes;
