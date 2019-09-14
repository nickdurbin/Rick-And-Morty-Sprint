import React from "react";
import TabNav from "./components/TabNav";
import Header from "./components/Header";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';
import { Route } from 'react-router-dom';

function App() {

  return (
    <main>
      <Header />
      <TabNav />
        <Route exact path='/' component={WelcomePage} />
        <Route path='/characters' component={CharacterList} />
        <Route path='/location' component={LocationList} />
        <Route path='/episodes' component={EpisodeList} />
    </main>
  );
}

export default App;