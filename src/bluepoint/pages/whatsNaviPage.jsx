import { CirculosWhatsNavi } from "../components/CirculosWhatsNavi"
import { ParrafosDerechaWhatsNavi } from "../components/ParrafosDerechaWhatsNavi"
import { ParrafosIzquierdaWhatsNavi } from "../components/ParrafosIzquierdaWhatsNavi"
import { BluePointHeader, Footer } from "../layout"


export const WhatsNaviPage = () => {


  

  return (
    <div >
      <BluePointHeader />

      <main style={{ zIndex: 1, position: 'relative' }}>
        <div style={{ position: 'relative', width: '100%', height: '427px' }}>
          <div style={{ backgroundColor: '#2B388C', width: '592px', height: '427px', opacity: 0.9, position: 'absolute', left: '19.75%' }}>
            <span id="span23">We believe better communication leads to better outcomes in healthcare. Our passion and mission are to create and facilitate better communication between patients and care providers; it’s that simple.</span>
          </div>
          <div>
            <img src="../../../assets/bluepoint/AdobeStock_316543923-med-rez.webp" style={{ position: 'absolute', left: '54.7%', width: '389px', height: '427px' }} />
          </div>
        </div>
      </main>

      <div style={{ position: "relative", width: "100%", height: "1700px", zIndex: 1 }}>
      <div style={{ position: "absolute", width: "980px", height: "1700px", left: "19.75%", zIndex: 2}}>

      <div style={{ position: "relative", width: "980px", height: "1700px", backgroundColor: "#ffff", opacity: 0.9 }}> </div>
         
        <div style={{ backgroundColor: "#1CA17E", width: "526px", height: "101px", position: "absolute", top: "5%" }}> 
      <span id="span24">Hover over each point of connection below to learn how NAVI can help.</span>
      <div className="circulos" style={{ width: "50px", height: "50px", left: "75%", top: "75%", backgroundColor: "#F04E23", border: "2px solid white" }}></div>
      <div className="triangulo"></div>

      
      </div>

       <ParrafosDerechaWhatsNavi />
  
        <ParrafosIzquierdaWhatsNavi />
      

      <span className="notes" style={{ top: "81%", left: "22%", width: "325px" }}>
        Continuing care, follow-up visits and bill pay.
      </span>

      <button id="boton2" className="boton2" style={{ top: "90%", left: "25%" }}>
        Experience Navi
      </button>
      <button id="boton3" className="boton2" style={{ left: "55%", top: "90%" }}>
        Contact Us
      </button>

      <span className="spanVerde" style={{ position: "absolute", top: "93%", left: "22%" }}>
        Schedule an Online Interactive Demo
      </span>
      <span className="spanVerde" style={{ position: "absolute", top: "93%", left: "55%" }}>
        For More Detailed Information
      </span>

      </div>
            
    </div>

        <Footer />
  
    </div>
    
  )
}
