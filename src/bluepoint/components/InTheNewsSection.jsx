import { useSlider } from "../hooks/useNext";


export const InTheNewsSection = () => {


  const [index, next, prev] = useSlider(0, 2);


  return (
    <div
    style={{
      backgroundColor: "#1CA17ECC",
      width: "100%",
      height: "418px",
      opacity: 0.99,
      position: "relative",
    }}
  >
    <span onClick={next} id="botonFlecha" style={{ left: "90%", top: "30%" }}>
      &gt;
    </span>
    <span onClick={prev} id="botonFlecha1" style={{ left: "10%", top: "30%" }}>
      &lt;
    </span>

    <div id="ocultarDiv1" className={index === 0 ? '' : 'ocultar'} >
      <img id="magazineL" src="../../../assets/bluepoint/Magazine HTO.webp" />
      <span
        className="listgreen"
        style={{
          width: "358.28px",
          fontSize: "20px",
          color: "#ffff",
          top: "40%",
          left: "25%",
        }}
      >
        Bluepoint2's product NAVI received The Healthcare Tech Outlook Top 10
        Patient Communication Solution Providers of 2020. Click the button
        below to read the story.
      </span>
      <span
        className="titulofuerte"
        style={{ fontSize: "40px", top: "25%", left: "25%" }}
      >
        In The News
      </span>
      <a 
      href="https://communications.healthcaretechoutlook.com/vendor/bluepoint2-reengineering-patientdoctor-communication-cid-1265-mid-117.html"
      target="_blank"
        className="boton2"
        style={{
          top: "75%",
          left: "25%",
          border: "1px solid white",
          padding: 0,
        }}
      >
       <span style={{position: 'absolute', left:'18%' , top: '25%'}}>Read the Story</span>
      </a>
    </div>

    <div id="ocultarDiv2" className={index === 1 ? '' : 'ocultar'}>
      <img id="Quote" src="../../../assets/bluepoint/quote.webp" />
      <span
        className="listgreen"
        style={{
          width: "358.28px",
          fontSize: "20px",
          color: "#ffff",
          top: "40%",
          left: "25%",
        }}
      >
        Jon Adrian was quoted in the recent issue of Net Solution's article
        titled 8 "Digital Transformation Trends that will Steer 2020." Click
        the button below to read the story.
      </span>
      <span
        className="titulofuerte"
        style={{ fontSize: "40px", top: "25%", left: "25%" }}
      >
        In The News
      </span>
      <a 
      href="https://www.netsolutions.com/insights/digital-transformation-trends/"
      target="_blank"
        className="boton2"
        style={{
          top: "75%",
          left: "25%",
          border: "1px solid white",
          padding: 0,
        }}
      >
       <span style={{position: 'absolute', left:'18%' , top: '25%'}}>Read the Story</span>
      </a>
    </div>

    <div id="ocultarDiv3" className={index === 2 ? '' : 'ocultar'} >
      <img id="Klas" src="../../../assets/bluepoint/klas.webp" />
      <span
        className="listgreen"
        style={{
          width: "358.28px",
          fontSize: "20px",
          color: "#ffff",
          top: "40%",
          left: "25%",
        }}
      >
        Bluepoint2 is honored to have been named "A Top Emerging Company to
        watch for its innovation" by KLAS.
      </span>
      <span
        className="titulofuerte"
        style={{ fontSize: "40px", top: "25%", left: "25%" }}
        >
          In The News
        </span>
        <a 
      href="http://demo-vp.herokuapp.com/src/patient/landing-bio.html"
      target="_blank"
        className="boton2"
        style={{
          top: "75%",
          left: "30%",
          border: "1px solid white",
          padding: 0,
        }}
      >
       <span style={{position: 'absolute', left:'7%' , top: '25%'}}>Reguest Whitepaper</span>
      </a>
      </div>

      <div className={index === 0 ? 'aro' : 'circle'} style={{position: 'absolute',  left: "50%" }}></div>
      <div className={index === 1 ? 'aro' : 'circle'} style={{position: 'absolute', left: '52%' }}></div>
      <div className={index === 2 ? 'aro' : 'circle'} style={{position: 'absolute', left: '54%'}}></div>

    </div>
  )
}
