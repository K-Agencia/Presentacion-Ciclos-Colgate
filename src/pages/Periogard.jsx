// import Spline from '@splinetool/react-spline';
import { CgShapeCircle } from "react-icons/cg";
import '../css/Periogard.css';

const Periogard = () => {
  return (
    <div className='Periogard'>

      <div className="information">
        <h4>peroogard</h4>
        <h1>de ACCIÓN</h1>

        <div className="bullets">
          <div className="btnAcction">
            <CgShapeCircle className='icon circle' />
            <button className='btn'>
              1
            </button>
            <p>
              <span className="text-header">Presencia de fluoruro en entorno ácido.</span><br />
              <span className="text-body">Reducción de la disolución de la hidroxiapatita.</span>
            </p>
          </div>

          <div className="btnAcction">
            <CgShapeCircle className='icon circle' />
            <button className='btn'>
              2
            </button>
            <p>
              <span className="text-header">Aumenta formación de precipitado de CaF2 en período de tiempo corto.</span><br />
              <span className="text-body">Menor solubilidad del fluoruro de calcio.</span>
            </p>
          </div>

          <div className="btnAcction">
            <CgShapeCircle className='icon circle' />
            <button className='btn'>
              3
            </button>
            <p>
              <span className="text-header">Favorece formación deluorhidroxiapatita.</span><br />
              <span className="text-body">Exposición del esmalte a iones de flúor: captación para formar FAP (desplazamiento del calcio en cristales de HAP).</span>
            </p>
          </div>
        </div>
        <div className="vl line1"></div>
        <div className="vl line2"></div>
      </div>

      <div className="footer">
        <p>Pilli LN, Singaraju GS, Nettam V, Keerthipati T, Mandava P, Marya A. An Extensive Comparison of the Clinical Efficiency of Acidulated Phosphate Fluoride (APF) and Neutral Sodium Fluoride (NaF) Oral Rinses in the Prevention of White Spot Lesions during Fixed Orthodontic Treatment: A Randomized Controlled Trial. Biomed Res Int. 2022 Mar 20;2022:6828657. doi: 10.1155/2022/6828657. PMID: 35355827; PMCID: PMC8958060.</p>
      </div>
    </div>
  );
};

export default Periogard;