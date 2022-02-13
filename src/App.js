import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const TopicsPage = () => (
  <div>
    <h1>Topics Page</h1>
  </div>
);

const TopicsDetailPage = (props) => (
  <div>
    <h1>Topics Detail Page: {props.match.params.topicId}</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route exact path='/topics' component={TopicsPage} />
        <Route path='/topics/:topicId' component={TopicsDetailPage} />
      </Switch>
      {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
