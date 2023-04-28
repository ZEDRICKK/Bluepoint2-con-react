import { useSlider } from "../hooks/useNext"


export const WithNaviYouCan = () => {


    const [index, next, prev] = useSlider(0, 2);

  return (

    

    <div style={{  width: "100%", height: "559px", position: "relative" }}>

        <span onClick={next} id="botonFlecha" style={{ left: "90%", top: "30%", zIndex: 2}}>
            &gt;
            </span>
            <span onClick={prev} id="botonFlecha1" style={{ left: "10%", top: "30%", zIndex: 2}}>
            &lt;
            </span>


        <div style={{ backgroundColor: "#1CA17ECC", width: "100%", height: "559px", position: "absolute" }} id="ocultarDiv1" className={index === 0 ? '' : 'ocultar'} >
        <div>
        <img className="circulo" src="../../../assets/bluepoint/chekandocell.webp" style={{ top: "33%", left: "47%", backgroundColor: "#2B388C", width: "320px", height: "320px", border: "2px solid white", zIndex: 2 }} />
          <img className="circulo" src="../../../assets/bluepoint/enfermera.webp" style={{ top: "-10%", left: "57%", backgroundColor: "#2B388C", width: "429px", height: "428px", border: "2px solid white", zIndex: 1 }} />
          <span className="listgreen" style={{ color: "#ffff", fontSize: "28px", width: "360px", top: "36%", left: "25%" }}>Experience the power of mobile messaging for faster, more accurate communication to improve the patient experience.</span>
          <span className="titulofuerte" style={{ fontSize: "30px", top: "28%", left: "25%" }}> With NAVI you can...</span>
          <button id="boton11" className="boton2" style={{ top: "75%", left: "25%", border: "1px solid white" }}>Experience Navi</button>
        </div>
      </div>

      <div style={{ backgroundColor: "#2A92A9CC", width: "100%", height: "559px", position: "absolute" }} id="ocultarDiv1" className={index === 1 ? '' : 'ocultar'}>
        <div>
        <img className="circulo" src="../../../assets/bluepoint/doctora.webp" style={{ top: "42%", left: "61%", backgroundColor: "#2B388C", width: "217px", height: "212px", border: "2px solid white", zIndex: 2 }} />
          <img className="circulo" src="../../../assets/bluepoint/abrazo.webp" style={{ top: "6%", left: "50%", backgroundColor: "#2B388C", width: "365px", height: "363px", border: "2px solid white", zIndex: 1 }} />
          <span className="listgreen" style={{ color: "#ffff", fontSize: "28px", width: "360px", top: "30%", left: "25%" }}>Proactively send critical healthcare information to patients prior to their scheduled procedure.</span>
          <span className="titulofuerte" style={{ fontSize: "30px", top: "20%", left: "25%" }}> With NAVI you can...</span>
          <button id="boton11" className="boton2" style={{ top: "65%", left: "25%", border: "1px solid white" }}>Experience Navi</button>
        </div>
      </div>

      <div style={{ backgroundColor: "#1CA17ECC", width: "100%", height: "559px", position: "absolute" }} id="ocultarDiv1" className={index === 2 ? '' : 'ocultar'} >
        <div>
        <img className="circulo" src="../../../assets/bluepoint/Phone-screen-group-croped.webp" style={{ top: "47%", left: "25%", backgroundColor: "#2B388C", width: "217px", height: "212px", border: "2px solid white", zIndex: 2 }} />
          <img className="circulo" src="../../../assets/bluepoint/Paid screen w-hand.webp" style={{ top: "6%", left: "31%", backgroundColor: "#2B388C", width: "365px", height: "363px", border: "2px solid white", zIndex: 1 }} />
          <span className="listgreen" style={{ color: "#ffff", fontSize: "28px", width: "360px", top: "30%", left: "55%" }}>Proactively send critical healthcare information to patients prior to their scheduled procedure.</span>
          <span className="titulofuerte" style={{ fontSize: "30px", top: "20%", left: "55%" }}> With NAVI you can...</span>
          <button id="boton11" className="boton2" style={{ top: "65%", left: "55%", border: "1px solid white" }}>Experience Navi</button>
        </div>
      </div>

      <div className={index === 0 ? 'aro' : 'circle'} style={{position: 'absolute',  left: "50%" }}></div>
      <div className={index === 1 ? 'aro' : 'circle'} style={{position: 'absolute', left: '52%' }}></div>
      <div className={index === 2 ? 'aro' : 'circle'} style={{position: 'absolute', left: '54%'}}></div>

    </div>
  )
}
