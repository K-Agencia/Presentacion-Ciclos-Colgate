import Spline from '@splinetool/react-spline';
import { CgShapeCircle } from "react-icons/cg";
import '../css/Orthogard.css';
import { useState } from 'react';

const Orthogard = () => {

  const [show, setShow] = useState({
    btn1: false,
    btn2: false,
    btn3: false
  });
  return (
    <div className='Orthogard'>
      <div className="front">
        <div className='animation'>
          <Spline className='animation-3d' scene="https://prod.spline.design/WmF1T2SGpINjqa74/scene.splinecode" />
        </div>

        <div className="information">
          <h4>Mecanismo</h4>
          <h1>de ACCIÓN</h1>

          <div className="bullets">
            <div className="btnAcction">
              <CgShapeCircle className='icon circle' />
              <button className='btn' onClick={() => setShow({ ...show, btn1: !show.btn1 })}>
                1
              </button>
              {show.btn1 &&
                <p>
                  <span className="text-header">Presencia de fluoruro en entorno ácido.</span><br />
                  <span className="text-body">Reducción de la disolución de la hidroxiapatita.</span>
                </p>
              }
            </div>

            <div className="btnAcction">
              <CgShapeCircle className='icon circle' />
              <button className='btn' onClick={() => setShow({ ...show, btn2: !show.btn2 })}>
                2
              </button>
              {show.btn2 &&
                <p>
                  <span className="text-header">Aumenta formación de precipitado de CaF2 en período de tiempo corto.</span><br />
                  <span className="text-body">Menor solubilidad del fluoruro de calcio.</span>
                </p>
              }
            </div>

            <div className="btnAcction">
              <CgShapeCircle className='icon circle' />
              <button className='btn' onClick={() => setShow({ ...show, btn3: !show.btn3 })}>
                3
              </button>
              {show.btn3 &&
                <p>
                  <span className="text-header">Favorece formación deluorhidroxiapatita.</span><br />
                  <span className="text-body">Exposición del esmalte a iones de flúor: captación para formar FAP (desplazamiento del calcio en cristales de HAP).</span>
                </p>
              }
            </div>
          </div>
          <div className="vl line1"></div>
          <div className="vl line2"></div>
        </div>

      </div>
      <div className="footer">
        <p>Pilli LN, Singaraju GS, Nettam V, Keerthipati T, Mandava P, Marya A. An Extensive Comparison of the Clinical Efficiency of Acidulated Phosphate Fluoride (APF) and Neutral Sodium Fluoride (NaF) Oral Rinses in the Prevention of White Spot Lesions during Fixed Orthodontic Treatment: A Randomized Controlled Trial. Biomed Res Int. 2022 Mar 20;2022:6828657. doi: 10.1155/2022/6828657. PMID: 35355827; PMCID: PMC8958060.</p>
      </div>
    </div>
  );
};

export default Orthogard;