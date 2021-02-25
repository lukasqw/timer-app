import React from 'react';
import Timer from './pages/Timer';
import GlobalStyle from './styles/global';
// import backgroundVideo from './assets/gradient.mp4';
import backgroundImg from './assets/background-min.png';

const App: React.FC = () => {


  return (
    <>
      {/* <video autoPlay loop muted style={{
        position: 'fixed', top: '50%', left: '50%', minWidth: '100%', minHeight: '100%', width: 'auto', height: 'auto', transform: 'translate(-50%, -50%)'
      }} src={backgroundVideo} /> */}
      <img style={{
        position: 'fixed', top: '50%', left: '50%', minWidth: '100%', minHeight: '100%', width: '200px', height: 'auto', transform: 'translate(-50%, -50%)'
      }} src={backgroundImg} />
      <Timer></Timer>
      <GlobalStyle/>
    </>
  )
};

export default App;
