import React from "react";
import TabNav from "./components/TabNav";
import Header from "./components/Header";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationsList';
import { Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
        <Route exact path='/' component={WelcomePage} />
        <Route path='/characters' component={CharacterList} />
    </main>
  );
}

export default App;