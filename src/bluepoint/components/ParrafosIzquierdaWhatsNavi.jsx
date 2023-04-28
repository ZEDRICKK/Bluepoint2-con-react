import { useShow } from "../hooks/useShow";
import { CirculosWhatsNavi } from "./CirculosWhatsNavi";


export const ParrafosIzquierdaWhatsNavi = () => {


  const [parrafo1_1, parrafo2_1, pasar_1, salir_1] = useShow();
  const [parrafo1_2, parrafo2_2, pasar_2, salir_2] = useShow();
  const [parrafo1_3, parrafo2_3, pasar_3, salir_3] = useShow();
  const [parrafo1_4, parrafo2_4, pasar_4, salir_4] = useShow();


  return (
    <div >

      <CirculosWhatsNavi parrafo1_1={parrafo1_1} parrafo1_2={parrafo1_2} parrafo1_3={parrafo1_3} parrafo1_4={parrafo1_4} />


      <div  onMouseOver={ pasar_1 }  onMouseOut={salir_1}>
    <div id="whatsN1" className={parrafo2_1 ? "ocultar" : ""}>
      <span className="noteTitle" style={{ top: "22%", left: "25%" }}>
        Connect!
      </span>
      <span className="notes1" style={{ top: "23%", left: "25%" }}>
        NAVI makes it easy to collect and confirm the information needed to
        keep the appointment and begin the treatment process.
      </span>
       <div style={{position: 'absolute', width: '90px', height: '3px', backgroundColor: '#1CA17E', top: '25%', left: '15%'}} ></div>
    </div>

    <span className="notes" style={{ top: "16%", left: "21%" }}>
      Appointment Scheduled.
    </span>

    <div id="whatsD1" className={parrafo1_1 ? "ocultar" : ""}>
      <span className="noteTitle1" style={{ top: "22%", left: "25%" }}>
        Possible Disconnect!
      </span>
      <span className="notes1" style={{ top: "23%", left: "25%" }}>
        Confirmation and information for the appointment requires a reliable
        form of communication in order to begin the treatment process.
      </span>
      <div style={{position: 'absolute', width: '90px', height: '3px', backgroundColor: '#F04E23', top: '25%', left: '15%'}} ></div>
    </div>
    </div>

    <div onMouseOver={pasar_2} onMouseOut={salir_2}>
    <div id="whatsN2"  className={parrafo2_2 ? "ocultar" : ""}>
      <span className="noteTitle" style={{ top: "38%", left: "25%" }}>
        Connect!
      </span>
      <span className="notes1" style={{ top: "39%", left: "25%" }}>
        NAVI ensures the patient has followed instructions so there will be no
        delays or cancellations on the day of surgery.
      </span>
      <div style={{position: 'absolute', width: '90px', height: '3px', backgroundColor: '#1CA17E', top: '40.5%', left: '15%'}} ></div>
    </div>

    <span className="notes" style={{ top: "31%", left: "22%" }}>
      Pre-Admission information collected.
    </span>

    <div id="whatsD2"  className={parrafo1_2 ? "ocultar" : ""}>
      <span className="noteTitle1" style={{ top: "38%", left: "25%" }}>
        Possible Disconnect!
      </span>
      <span className="notes1" style={{ top: "39%", left: "25%" }}>
        A failure in communication prior to the procedure can lead to delays
        or cancellations on the day of surgery.
      </span>
      <div style={{position: 'absolute', width: '90px', height: '3px', backgroundColor: '#F04E23', top: '40.5%', left: '15%'}} ></div>
    </div>
    </div>

    <div  onMouseOver={pasar_3} onMouseOut={salir_3}>
    <div id="whatsN3" className={parrafo2_3 ? "ocultar" : ""} >
      <span className="noteTitle" style={{ top: "54%", left: "25%" }}>
        Connect!
      </span>
      <span className="notes1" style={{ top: "55%", left: "25%" }}>
        NAVI can automate much of the communication needed during recovery to
        avoid unnecessary risk to the patient.
      </span>
      <div style={{position: 'absolute', width: '90px', height: '3px', backgroundColor: '#1CA17E', top: '57%', left: '15%'}} ></div>
    </div>

    <span className="notes" style={{ top: "47%", left: "23%" }}>
      Day of surgical procedure.
    </span>

    <div id="whatsD3"  className={parrafo1_3 ? "ocultar" : ""} >
      <span className="noteTitle1" style={{ top: "54%", left: "25%" }}>
        Possible Disconnect!
      </span>
      <span className="notes1" style={{ top: "55%", left: "25%" }}>
        A failure in communication about continuing recovery can result in
        unnecessary risk to the patient.
      </span>
      <div style={{position: 'absolute', width: '90px', height: '3px', backgroundColor: '#F04E23', top: '57%', left: '15%'}} ></div>
    </div>
      </div>

      <div  onMouseOver={pasar_4} onMouseOut={salir_4}>
    <div id="whatsN4" className={parrafo2_4 ? "ocultar" : ""} >
      <span className="noteTitle" style={{ top: "69%", left: "25%" }}>
        Connect!
      </span>
      <span className="notes1" style={{ top: "70%", left: "25%" }}>
        NAVI enables communication about continuing recovery and provides
        payment options right, within the same platform, making it easy for patients to understand their financial responsibilities.
    </span>
    <div style={{position: 'absolute', width: '90px', height: '3px', backgroundColor: '#1CA17E', top: '72.5%', left: '15%'}} ></div>
    </div>
    <span className="notes" style={{ top: "62%", left: "22%" }}>
        Post-surgical recovery updates and payment.
      </span>

      <div id="whatsD4"  className={parrafo1_4 ? "ocultar" : ""} >
        <span className="noteTitle1" style={{ top: "69%", left: "25%" }}>
          Possible Disconnect!
        </span>
        <span className="notes1" style={{ top: "70%", left: "25%" }}>
          Lack of communication about post-surgical recovery and payment can
          result in confusion and delays in receiving payment for services
          rendered.
        </span>
        <div style={{position: 'absolute', width: '90px', height: '3px', backgroundColor: '#F04E23', top: '72.5%', left: '15%'}} ></div>
        </div>
      </div>
    </div>
  )
}
