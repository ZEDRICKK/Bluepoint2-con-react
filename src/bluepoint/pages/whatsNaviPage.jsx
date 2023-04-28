import { ParrafosDerechaWhatsNavi } from "../components/ParrafosDerechaWhatsNavi"
import { ParrafosIzquierdaWhatsNavi } from "../components/ParrafosIzquierdaWhatsNavi"
import { useShow } from "../hooks/useShow"
import { BluePointHeader, Footer } from "../layout"


export const WhatsNaviPage = () => {


  const [parrafo1, parrafo2, pasar] = useShow();

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

        <div style={{ width: "222px", height: "1177px", position: "absolute", display: "flex", justifyContent: "center", top: "15%" }}>
          <div className="circulos" style={{ width: "123px", height: "123px", top: 0, backgroundColor: "#2B388C", border: "4px solid #049efd"}}>
            <img src="../../../assets/bluepoint/calendario.png" style={{ width: "110px", height: "50px" }} />
          </div>
          <div className="circulos" style={{ width: "64px", height: "64px", top: "12%", backgroundColor: "#F04E23", border: "4px solid #049efd" }}>
            <img src="../../../assets/bluepoint/cadena.png" style={{ width: "60px", height: "60px" }} />
          </div>
          <div className="circulos" style={{ width: "153px", height: "153px", top: "19%", backgroundColor: "#2B388C", border: "4px solid #049efd" }}>
            <img src="../../../assets/bluepoint/lapiz y hoja.png" style={{ width: "100px", height: "100px" }} />
          </div>
          <div className="circulos" style={{ width: "64px", height: "64px", top: "34%", backgroundColor: "#F04E23", border: "4px solid #049efd" }}>
            <img src="../../../assets/bluepoint/cadena.png" style={{ width: "60px", height: "60px" }} />
          </div>
          <div className="circulos" style={{ width: "186px", height: "186px", top: "41%", backgroundColor: "#2B388C", border: "4px solid #049efd" }}>
            <img src="../../../assets/bluepoint/doctor-removebg-preview.png" style={{ width: "180px", height: "180px" }} />
          </div>
          <div className="circulos" style={{ width: "64px", height: "64px", top: "58%", backgroundColor: "#F04E23", border: "4px solid #049efd" }}>
            <img src="../../../assets/bluepoint/cadena.png" style={{ width: "60px", height: "60px" }} />
          </div>
          <div className="circulos" style={{ width: "153px", height: "153px", top: "65%", backgroundColor: "#2B388C", border: "4px solid #049efd" }}>
            <img src="../../../assets/bluepoint/casa-removebg-preview.png" style={{ width: "150px", height: "150px" }} />
          </div>
          <div className="circulos" style={{ width: "64px", height: "64px", top: "80%", backgroundColor: "#F04E23", border: "4px solid #049efd" }}>
            <img src="../../../assets/bluepoint/cadena.png" style={{ width: "60px", height: "60px" }} />
          </div>
          <div className="circulos" style={{ width:"153px", height: "153px", top: "87%", backgroundColor: "#2B388C", border: "4px solid #049efd" }}>
            <img src="../../../assets/bluepoint/medicina y calculadora.png" style={{ width: "125px", height: "80px" }} />


          </div>
          <div
        style={{
          position: "absolute",
          width: "10px",
          height: "970px",
          top: "5%",
          backgroundColor: "#2B388C",
          zIndex: 1,
        }}
      ></div>

      
    
        </div>

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
