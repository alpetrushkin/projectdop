import React from 'react';
import './App.css';
import { Body } from './site/Body';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";

function App() {
  return (
    <div className="App">
      <Header title={'NEW HEADER'} />
      <Body titleForBody={'NEW BODY'} />
      <Footer titleForFooter={'NEW FOOTER'} />
    </div>
  );
}

export default App;
