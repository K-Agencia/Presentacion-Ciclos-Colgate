import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import imgBullets from "../img/botones-ciclo.svg";
import '../css/Orthogard.css';

const Orthogard = () => {

  const [show, setShow] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    ventajas: false
  });

  return (
    <div className='Orthogard'>
      <div className="titulo">
        <div className='accion'>
          <h4>Mecanismo</h4>
          <h1>de ACCIÓN</h1>
        </div>

        <div className='nombre'>
          <h4>Enjuague</h4>
          <h1>Colgate <b>Ortho</b>Gard</h1>
        </div>

      </div>
      <div className="front">
        <div className='animation'>
          <Spline className='animation-3d' scene="https://prod.spline.design/WmF1T2SGpINjqa74/scene.splinecode" />
        </div>

        <div className="information">
          <div className="bullets">

            <div className='imgBullets'>
              <img src={imgBullets} alt="" />
            </div>

            <div>
              <div className="btnAcction">
                {/* <CgShapeCircle className='icon circle' /> */}
                <button className='btn' onClick={() => setShow({ ...show, btn1: !show.btn1 })}>
                  <span>1</span>
                </button>
                {show.btn1 &&
                  <p>
                    <span className="text-header">Presencia de fluoruro en entorno ácido.</span><br />
                  </p>
                }
              </div>

              <div className="btnAcction">
                {/* <CgShapeCircle className='icon circle' /> */}
                <button className='btn' onClick={() => setShow({ ...show, btn2: !show.btn2 })}>
                  <span>2</span>
                </button>
                {show.btn2 &&
                  <p>
                    <span className="text-header">Reducción de la disolución de la hidroxiapatita.</span><br />
                  </p>
                }
              </div>

              <div className="btnAcction">
                {/* <CgShapeCircle className='icon circle' /> */}
                <button className='btn' onClick={() => setShow({ ...show, btn3: !show.btn3 })}>
                  <span>3</span>
                </button>
                {show.btn3 &&
                  <p>
                    <span className="text-header">Aumenta formación de precipitado de CaF2 en período de tiempo corto.</span><br />
                    <span className="text-body">Menor solubilidad del fluoruro de calcio.</span>
                  </p>
                }
              </div>

              <div className="btnAcction">
                {/* <CgShapeCircle className='icon circle' /> */}
                <button className='btn' onClick={() => setShow({ ...show, btn4: !show.btn4 })}>
                  <span>4</span>
                </button>
                {show.btn4 &&
                  <p>
                    <span className="text-header">Favorece formación deluorhidroxiapatita.</span><br />
                    <span className="text-body">Exposición del esmalte a iones de flúor: captación para formar FAP (desplazamiento del calcio en cristales de HAP).</span>
                  </p>
                }
              </div>

            </div>
          </div>

          <div className="ventajas-div">
            <div className='content'>
              <button className='btn ventajas' onClick={() => setShow({ ...show, ventajas: !show.ventajas })}>VENTAJAS</button>
              <p className="text-header">Indicado para pacientes con alto riesgo de caries dental.</p>
            </div>
            {show.ventajas &&
              <p>
                <span className="text-header">Resistencia a la disolución en ambiente ácido</span><br />
                <span className="text-body">Fluoruro actúa como catalizador asistiendo en la remineralización con iones de fosfato</span>
              </p>
            }
          </div>
        </div>

      </div>
      <div className="footer">
        <p>Pilli LN, Singaraju GS, Nettam V, Keerthipati T, Mandava P, Marya A. An Extensive Comparison of the Clinical Efficiency of Acidulated Phosphate Fluoride (APF) and Neutral Sodium Fluoride (NaF) Oral Rinses in the Prevention of White Spot Lesions during Fixed Orthodontic Treatment: A Randomized Controlled Trial. Biomed Res Int. 2022 Mar 20;2022:6828657. doi: 10.1155/2022/6828657. PMID: 35355827; PMCID: PMC8958060.</p>
      </div>
    </div>
  );
};

export default Orthogard;