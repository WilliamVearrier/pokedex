import React from 'react';
import './App.css';
import styled from 'styled-components';
import { strings } from './data/strings';
import DexCard from './components/dex-card/dex-card';

// aspect ratio will be 22 : 15 (110 width 75 tall)

const App = () => (
  <Body>
    <Header>
      {strings.dexNames.galar}
    </Header>
    <Content>
      <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/>
      <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/>
      <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/>
      <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/>
      <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/>
      <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/> <DexCard/>
    </Content>
  </Body>
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
);

const Body = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background: #211f1f;
  color: white;
  display: grid;
  
  grid-template-areas:
    "header"
    "content";

  grid-template-rows: 2em auto;
`;

const Header = styled.header`
  grid-area: header;
  position: sticky;
  background: #211f1f;
  top: 0;
  text-align: center;
  font-size: 20px;
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
`;

export default App;
