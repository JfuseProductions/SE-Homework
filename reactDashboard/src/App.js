import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

import Sidebar from './COMPONENTS/sidebar';
import Navbar from './COMPONENTS/navbar';
import DisplayReviews from './COMPONENTS/displayReviews'
import DisplayRating from './COMPONENTS/displayRating';
import DisplayAnalysis from './COMPONENTS/displayAnalysis';
import DisplayVisitors from './COMPONENTS/visitors';
import faker from 'faker';

const App = () => {
  return (
    <div>
    <Navbar/>
    <Sidebar/>
      <div class='body'>
        <DisplayReviews cardName="REVIEWS"/>
        <DisplayRating cardName="Ratings"/>
        <DisplayAnalysis cardName="Analysis"/>
        <DisplayVisitors
          photoDisplay={faker.image.business()}
          cardName="VISITORS"/>
      </div>
    </div>
  );
};

export default App;
