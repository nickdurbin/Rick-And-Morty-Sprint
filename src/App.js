import React from "react";
import TabNav from "./components/TabNav";
import Header from "./components/Header";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationsList';

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <WelcomePage />
    </main>
  );
}
