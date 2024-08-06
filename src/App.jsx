// import Spline from '@splinetool/react-spline';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import Bienvenida from './pages/Bienvenida';
import Orthogard from './pages/Orthogard';
import Periogard from './pages/Periogard';
import Spline from '@splinetool/react-spline';
import backgroundPeriogard from "./img/fondo_cepillo_periogard.png";
import backgroundsensitive from "./img/background_sensitive_1.jpg";
// import backgroundRegimenPerio from "./img/Sensitive_ciclo_5_Mesa_de_trabajo_1_copia.jpg";
import cepilloPeriogard from "./img/01_Cepillo_Periogard.png";
import cremas_sensitive from "./img/cremas_sensitive.png";
import info_sensitive from "./img/info-sensitive.png";
import periogard_Textos from "./img/periogard_Textos.png";
import periogard_fondo from "./img/periogard_fondo.jpg";
import periogard_periogard from "./img/periogard_periogard.png";
// import React from 'react';

const App = () => {
  return (
    <div className='App'>

      <Parallax pages={6}>
        <ParallaxLayer offset={0} style={{ backgroundColor: '#d0dedf' }} factor={1}>
          <Spline className='animation-3d' scene="https://prod.spline.design/k7tZm6s9C6msV3og/scene.splinecode" />
        </ParallaxLayer>

        <ParallaxLayer offset={0} factor={1}>

        </ParallaxLayer>

        <ParallaxLayer offset={1} factor={1}>
          <Spline className='animation-3d' scene="https://prod.spline.design/QNd4Pk5Vgw1LoPtm/scene.splinecode" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} factor={1}>
          <Orthogard />
        </ParallaxLayer>

        <ParallaxLayer offset={2} factor={1}>
          <img style={{ height: "100%" }} src={backgroundsensitive} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={2} factor={1} speed={.4}>
          <img style={{ height: "100%" }} src={cremas_sensitive} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={2} factor={1} speed={.9}>
          <img style={{ height: "100%" }} src={info_sensitive} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={3} factor={1}>
          <img style={{ height: "100%" }} src={periogard_fondo} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={3} factor={1} speed={.4}>
          <img style={{ height: "100%" }} src={periogard_periogard} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={3} factor={1} speed={.9}>
          <img style={{ height: "100%" }} src={periogard_Textos} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={4} factor={1}>
          <img src={backgroundPeriogard} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={.4} factor={1}>
          <img
            style={{
              width: "50%",
              margin: "5rem 0 0 23rem"
              // position: "absolute",
              // top: 0
            }}
            src={cepilloPeriogard} alt="" />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={1} factor={1}>
          <Periogard />
        </ParallaxLayer>

        <ParallaxLayer offset={5} factor={1}
        style={{ backgroundColor: '#000' }}
        >
          <Spline className='animation-3d' scene="https://prod.spline.design/Y4mZgsq8YAzW5dSh/scene.splinecode" />
        </ParallaxLayer>

        <ParallaxLayer offset={5} factor={1}>

        </ParallaxLayer>

        {/*    <ParallaxLayer offset={6} speed={1} factor={1}>
          <Bienvenida />
        </ParallaxLayer> */}


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