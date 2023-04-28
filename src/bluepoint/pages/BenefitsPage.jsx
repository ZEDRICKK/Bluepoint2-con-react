import { BenefitsMainComponent } from "../components/BenefitsMainComponent"
import { BluePointHeader, Footer } from "../layout"


export const BenefitsPage = () => {

  const texto =  <span
              className="listgreen"
              style={{
                color: "#fff",
                fontSize: "32px",
                width: "356px",
                position: "absolute",
                left: "13%",
                top: "10%",
              }}
                >"NAVI is a web-based mobile communication solution with an intuitive, 
                user-friendly interface and an easy to manage administration dashboard.";
                </span>

  return (
    <div >
    <BluePointHeader />
   
   <BenefitsMainComponent img={"../../../assets/bluepoint/celuss.webp" } texto={texto}/>

      <div style={{position: "relative", width: "100%", height: "1389px", zIndex: 1}}>
  <div style={{position: "absolute", width: "979px", height: "1389px", left: "20%"}}>
    <div style={{position: "absolute", width: "979px", height: "1389px", backgroundColor: "#1CA17E", opacity: 0.85}}></div>
    <span className="titulofuerte" style={{fontSize: "36px", width: "360px", color: "#fff", top: "5%", left: "10%", lineHeight: "1.3em"}}>Patient Engagement Like Never Before</span>
    <span className="listgreen" style={{color: "#fff", fontSize: "20px", width: "334px", left: "10%", top: "13%", textAlign: "left"}}>NAVI leverages existing and emerging technologies to build a better communication platform. It allows the patient to navigate their appointments and communicate with their care providers all from their mobile device for a comfortable, and intuitive patient experience.</span>
    <div style={{backgroundColor: "#fff", position: "absolute", width: "400px", height: "250px", top: "9%", left: "54%"}}></div>
    <img src="../../../assets/bluepoint/NAVI20ComputerScreen_edited.webp" style={{width: "534px", height: "406px", position: "absolute", top: "6%", left: "44%"}}/>
    <span className="listgreen" style={{fontSize: "18px", top: "5%", left: "60%", color: "#fff"}}>Administration Dashboard</span>
    <img src="../../../assets/bluepoint/NAVI-admin-forms-screen.webp" style={{width: "827px", height: "543px", position: "absolute", top: "37%", left: "10%"}}/>
    <span className="titulofuerte" style={{fontSize: "36px", top: "80%", left: "10%", color: "#fff"}}>Accurate Information</span>
    <span className="listgreen" style={{fontSize: "20px", width: "712px", top: "85%", left: "10%", color: "#fff"}}>NAVI accesses the patient’s information (clinical and non-clinical) from your organization and presents it to the Patient for any corrections or updates. The information is then reviewed during pre-admissions for approval and is entered in as discrete data to the EHR. The information can now be directly available within the patient's chart.</span>
  </div>
</div>
<div style={{position: "relative", width: "100%", height: "930px", zIndex: 1}}>
  <div style={{position: "absolute", width: "979px", height: "930px", left: "20%"}}>
    <div style={{position: "absolute", width: "979px", height: "930px", backgroundColor: "#2B388C", opacity: 0.85}}></div>
    <img src="../../../assets/bluepoint/NAVI-admin-schedule-screen.webp" style={{width: "831px", height: "548px", position: "absolute", top: "5%", left: "10%"}}/>
    <span className="titulofuerte" style={{fontSize: "36px", top: "70%", left: "10%", color: "#fff"}}>Secure Information</span>
    <span className="listgreen" style={{color: '#fff', fontSize: '20px', width: '712px', top: '85%', left: '10%'}}>
  NAVI accesses the patient’s information (clinical and non-clinical) from your organization and presents it to the Patient for any corrections or updates. The information is then reviewed during pre-admissions for approval and is entered in as discrete data to the EHR. The information can now be directly available within the patient's chart.
</span>
</div>
</div>

<div style={{position: 'relative', width: '100%', height: '930px', zIndex: '1'}}>
  <div style={{position: 'absolute', width: '979px', height: '930px', left: '20%'}}>
    <div style={{position: 'absolute', width: '979px', height: '930px', backgroundColor: '#2B388C', opacity: '0.85'}}></div>
    <img src="../../../assets/bluepoint/NAVI-admin-schedule-screen.webp" style={{width: '831px', height: '548px', position: 'absolute', top: '5%', left: '10%'}} />
    <span className="titulofuerte" style={{fontSize: '36px', top: '70%', left: '10%', color: '#fff'}}>Secure Information</span>
    <span className="listgreen" style={{fontSize: '20px', width: '712px', top: '77%', left: '10%', color: '#fff'}}>
      Bluepoint2 works with your team and your Electronic Health Record vendor to ensure that the communication between NAVI and the EHR follows FHIR standards and/or any other standards that will satisfy all parties involved.
    </span>
  </div>
</div>

<div style={{ position: 'relative', width: '100%', height: '603px', zIndex: '1' }}>
  <div style={{ position: 'absolute', width: '979px', height: '603px', left: '20%' }}>

    <div style={{ position: 'absolute', width: '979px', height: '603px', backgroundColor: '#1ca17e', opacity: '0.85' }}></div>
    <span className="titulofuerte" style={{ fontSize: '36px', color: '#fff', top: '5%', left: '10%', lineHeight: '1.3em' }}>Proactive Notification</span>

    <span className="listgreen" style={{ color: '#fff', fontSize: '20px', width: '410px', left: '10%', top: '15%', textAlign: 'left' }}>NAVI proactively sends critical healthcare information to the patients scheduled for appointments, presents the patients with the forms they need to verify and update prior to their medical visits, communicates expectations and shares relevant content regarding their care before and after their appointments.</span>

    <img className="circulo" src="../../../assets/bluepoint/On the phone.webp" style={{ top: '-5%', left: '53%', backgroundColor: '#2B388C', width: '429px', height: '428px', border: '2px solid white' }} />

    <span className="listgreen" style={{ fontWeight: '100', fontSize: '32px', color: '#fff', width: '401px', top: '57%', left: '10%' }}>All of this can be done from their mobile device!</span>

    <button id="boton4" className="boton2" style={{ top: '80%', left: '25%', border: '1px solid white' }}>Experience Navi</button>
    <button id="boton5" className="boton2" style={{ left: '55%', top: '80%', border: '1px solid white' }}>Contact Us</button>

    <span className="spanVerde" style={{ position: 'absolute', top: '90%', left: '22%', color: '#fff' }}>Schedule an Online Interactive Demo</span>
    <span className="spanVerde" style={{ position: 'absolute', top: '90%', left: '55%', color: '#fff' }}>For More Detailed Information</span>

  </div>

    </div>

    <Footer />
    </div>
  )
}
