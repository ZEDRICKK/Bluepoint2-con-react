import React from 'react'


export const CirculosWhatsNavi = ({parrafo1_1, parrafo1_2, parrafo1_3, parrafo1_4}) => {

    const color1 = parrafo1_1 ? "#1CA17E" : "#F04E23";
    const color2 = parrafo1_2 ? "#1CA17E" : "#F04E23";
    const color3 = parrafo1_3 ? "#1CA17E" : "#F04E23";
    const color4 = parrafo1_4 ? "#1CA17E" : "#F04E23";

  return (
    <div> 

<div style={{ width: "222px", height: "1177px", position: "absolute", display: "flex", justifyContent: "center", top: "15%" }}>
         
<div className="circulos"  style={{ width: "123px", height: "123px", top: 0, backgroundColor: "#2B388C", border: "4px solid #049efd"}} >
    <img src="../../../assets/bluepoint/calendario.png" style={{ width: "110px", height: "50px" }} />
  </div>
  <div className="circulos" style={{ width: "64px", height: "64px", top: "12%", backgroundColor: color1 ,border: "4px solid #049efd" }}>
    <img src="../../../assets/bluepoint/cadena.png" style={{ width: "60px", height: "60px" }} />
  </div>
  <div className="circulos" style={{ width: "153px", height: "153px", top: "19%", backgroundColor: "#2B388C", border: "4px solid #049efd" }}>
    <img src="../../../assets/bluepoint/lapiz y hoja.png" style={{ width: "100px", height: "100px" }} />
  </div>
  <div className="circulos" style={{ width: "64px", height: "64px", top: "34%",  backgroundColor: color2, border: "4px solid #049efd" }}>
    <img src="../../../assets/bluepoint/cadena.png" style={{ width: "60px", height: "60px" }} />
  </div>
  <div className="circulos" style={{ width: "186px", height: "186px", top: "41%", backgroundColor: "#2B388C", border: "4px solid #049efd" }}>
    <img src="../../../assets/bluepoint/doctor-removebg-preview.png" style={{ width: "180px", height: "180px" }} />
  </div>
  <div className="circulos" style={{ width: "64px", height: "64px", top: "58%", backgroundColor: color3, border: "4px solid #049efd" }}>
    <img src="../../../assets/bluepoint/cadena.png" style={{ width: "60px", height: "60px" }} />
  </div>
  <div className="circulos" style={{ width: "153px", height: "153px", top: "65%", backgroundColor: "#2B388C", border: "4px solid #049efd" }}>
    <img src="../../../assets/bluepoint/casa-removebg-preview.png" style={{ width: "150px", height: "150px" }} />
  </div>
  <div className="circulos" style={{ width: "64px", height: "64px", top: "80%", backgroundColor: color4, border: "4px solid #049efd" }}>
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

  </div>
  )
}
