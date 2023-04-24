import { ContactUsComponent } from "../components/ContactUsComponent"
import { InTheNewsSection } from "../components/InTheNewsSection"
import { Footer } from "../layout"
import { BluePointHeader } from "../layout/header"


export const HomePage = () => {

  const contactUsStyle = { 
    width: '100%', 
    height: '552.66px', 
    zIndex: '2',
    bottom: '-5%'
  }

  return (
    <>
        <BluePointHeader/>
        <div id="everything">
      <div id="img1" style={{ position: 'relative' }}>
        <img src="../../../assets/bluepoint/c86aa8_358f73285afd482195e23f9e02bbc0a9_mv2.webp" style={{ zIndex: 1, height: '535px' }} />
        <span id="span2">We’re the company that's changing the way you navigate your healthcare.</span>
        <p id="parrafo2">Innovative solutions that create a comfortable, intuitive patient experience.</p>
      </div>
      <div id="comunicacion">
        <img id="imgllave" src="../../../assets/bluepoint/llave.webp" />
        <span id="span1">Communication is the key.</span>
        <p id="parrafo">We believe that better communication leads to better outcomes in healthcare. Our passion and mission are to create better communication between patients and care providers - it’s that simple.</p>
      </div>
      <div id="phone">
        <img src="../../../assets/bluepoint/AdobeStock_135032238-Girl-on-phone.webp" style={{ width: '1436px', height: '673px', objectFit: 'cover', objectPosition: '50% 50%', position: 'absolute', left: '10%' }} fetchpriority="high" />
        <span id="span3">Introducing NAVI•Services</span>
        <span id="span4">Fast and accurate insurance information collected from your patients</span>
        <span id="span5">NAVI<b style={{ fontSize: '20px' }}>•</b>Services provides accurate insurance collection from your patients <strong>before their appointment</strong>. We then use our proprietary NAVI<b style={{ fontSize: '20px' }}>•</b>pal software to deliver it to your staff securely through HIPAA and HITECH compliant web services.</span>
        <span id="span7" className="letra"><strong style={{ fontWeight: 'bold', fontSize: '24px' }}>•</strong> Text-based, pre-appointment insurance collection allows your office to see more patients.</span>
        <span id="span8" className="letra"><strong style={{ fontWeight: 'bold', fontSize: '24px' }}>•</strong> Patients click the link in your text message, snap a photo of their insurance card and that's all they need to do.</span>
        <span id="span9" className="letra"><strong style={{ fontWeight: 'bold', fontSize: '24px' }}>•</strong> Their card image will then be sent to you through HIPAA and HITECH compliant web services. <strong style={{ fontWeight: 'bold', fontSize: '19px' }}>It’s that easy!</strong></span>
        <button className="boton">Video Demo</button>
      </div>
      <div style={{ backgroundColor: '#1CA17ECC', width: '100%', height: '418px', position: 'relative' }}>
        <span id="botonFlecha" style={{ left: '90%', top: '30%' }}>&gt;</span>
        <span id="botonFlecha1" style={{ left: '10%', top: '30%' }}>&lt;</span>

      <InTheNewsSection />  

      </div>

      <div className="divStyle" style={{ backgroundColor: "#2B388C", width: "100%", height: "483px", opacity: 0.8}}>
      <img src="../../../assets/bluepoint/Navi.webp" style={{ width: "75px", height: "73px", position: "absolute", top: "20%", alignItems: "center", alignContent: "center", zIndex: 2}} />
      <span id="span10">Better communication starts with NAVI</span>
      <span id="span11">NAVI allows patients to navigate their healthcare appointments and communicate with their care providers from <strong>any mobile device.</strong> </span>
      </div>
      
      <div className="divStyle" style={{ backgroundColor: "#ffffffcc", width: "100%", height: "418px" }}>
        <span id="span12">Navigating your healthcare should be as easy as one tap or swipe on your mobile device.</span>
        <span id="span13">Liderman Duin</span>
        <span id="span14">Founder of bluepoint2</span>
      </div>

      <div className="divStyle" style={{ backgroundColor: "#2B388C", width: "100%", height: "139px", zIndex: 2 }}>
        <span style={{ color: "#ffff", textAlign: "center", fontFamily: "helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif", fontSize: "36px", fontWeight: "bolder" }}>Healthcare communication for a mobile world</span>
        </div>

        <div style={{ backgroundColor: "#1CA17ECC", width: "100%", height: "559px", position: "relative" }}>
        <div>
        <img className="circulo" src="../../../assets/bluepoint/chekandocell.webp" style={{ top: "33%", left: "47%", backgroundColor: "#2B388C", width: "320px", height: "320px", border: "2px solid white", zIndex: 2 }} />
          <img className="circulo" src="../../../assets/bluepoint/enfermera.webp" style={{ top: "-10%", left: "57%", backgroundColor: "#2B388C", width: "429px", height: "428px", border: "2px solid white", zIndex: 1 }} />
          <span className="listgreen" style={{ color: "#ffff", fontSize: "28px", width: "360px", top: "36%", left: "25%" }}>Experience the power of mobile messaging for faster, more accurate communication to improve the patient experience.</span>
          <span className="titulofuerte" style={{ fontSize: "30px", top: "28%", left: "25%" }}> With NAVI you can...</span>
          <button id="boton11" className="boton2" style={{ top: "75%", left: "25%", border: "1px solid white" }}>Experience Navi</button>
        </div>
      </div>

      <div className="divStyle" style={{backgroundColor: '#2B388CCC', width: '100%', height: '550px', }}>
                <span id="span15">Healthcare providers are increasingly adopting mobile messaging.</span>
                <span id="span17">More people than ever prefer communicating through mobile messaging, especially when it comes to healthcare information. Care providers can use texting to communicate with patients in a more personal way through all the key touchpoints of the patient journey. </span>
                <span id="span16">Increased online patient involvement can result in a 90% satisfaction rate for both patients and physicians.</span>
                <img src="../../../assets/bluepoint/90-circle-graphic (1).png" style={{top: '40%', left: '45%', position: 'absolute', width: '270px', height: '270px'}} />
            </div>
            <div className="divStyle" style={{backgroundColor: '#43C8F5D9', width: '100%', height: '550px', }}>
                <span id="span18">
                    One example of the economic impact of inefficient communications in Healthcare.</span>
                <span id="span19">Admitting one patient takes about 51 minutes, of which an average of 33 minutes or 65% is lost due to inefficient communications.</span>
                <span id="span20">This translates into an annual loss of about $728,000 per U.S. hospital.</span>
                <img src="../../../assets/bluepoint/Admissiontimegraphic.png" style={{width: '386px', height: '280px', position: 'absolute', left: '20%', top: '35%'}} />
                <div className="circulo" style={{top: '-10%', left: '59%', backgroundColor: '#2B388C', width: '425px', height: '427px', border: '4px solid white'}}>
                    <span style={{textAlign: 'center', top: '50%', fontSize: '26px', color: '#ffff', width: '287.98px', height: '188px'}}><strong>Communication</strong> is the one key element that has a part to play in every area of the patient experience.</span>
                </div>
            </div>
            <div className="divStyle" style={{backgroundColor: '#1CA17ECC', width: '100%', height: '435px', }}>
                <span id="span21">Watch this short video to learn how NAVI can help your organization.</span>
                <button id="btn7" className="boton1">Request a live demo</button>
                <iframe src="https://player.vimeo.com/video/386648582?h=28677dd262&title=0&byline=0&portrait=0" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{position: 'absolute', top: '10%', left: '15%'}}></iframe>
            </div>

            <div className="divStyle" style={{backgroundColor: '#43C8F578', width: '100%', height: '552.66px'}}>
            
            <ContactUsComponent style={contactUsStyle} color1={'#2B388C'}/>
            
          </div>

          <Footer/>

    </div>
    </>
  )
}
