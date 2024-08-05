// import Spline from '@splinetool/react-spline';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Bienvenida from './pages/Bienvenida';
import Orthogard from './pages/Orthogard';
import Periogard from './pages/Periogard';
import Spline from '@splinetool/react-spline';
import backgroundPeriogard from "./img/fondo_cepillo_periogard.png";
// import React from 'react';

const App = () => {
  return (
    <div className='App'>

      <Parallax pages={5}>
        <ParallaxLayer offset={0} style={{ backgroundColor: '#f0f0f0' }} factor={1.5}>
          <h1>HOLAAA</h1>
          <h1>HOLAAA</h1>
          <h1>HOLAAA</h1>
          <h1>HOLAAA</h1>
          <h1>HOLAAA</h1>
          <h1>HOLAAA</h1>
          <h1>HOLAAA</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} factor={1.1}>
          <Spline className='animation-3d' scene="https://prod.spline.design/QNd4Pk5Vgw1LoPtm/scene.splinecode" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1.1} factor={1}>
          <Orthogard />
        </ParallaxLayer>

        <ParallaxLayer offset={2} factor={1.1}>
          <img src={backgroundPeriogard} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} factor={1}>
          <Periogard />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1} factor={1.5}>
          <Bienvenida />
        </ParallaxLayer>


      </Parallax>




      {/* <Spline className='animation-3d' scene="https://prod.spline.design/em35KD9ykSVXZ21m/scene.splinecode" />

      <div className='information'>
      
      <button>

      </button> */}
      {/* </div> */}
    </div>
  );
};

export default App;