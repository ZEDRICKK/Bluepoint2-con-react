import { BluePointHeader, Footer } from "../layout";


export const ContactUsPage = () => {


    return (
      <div  style={{ padding: 'none' }}>

         <BluePointHeader/>

            <div id="everything" style={{ position: 'relative', width: '100%', height: '949px' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <img src="../../../assets/bluepoint/Profile background-Liderman.webp" style={{ position: 'absolute', width: '752px', height: '189px', top: '17%', left: '30%', objectFit: 'cover' }} fetchpriority="high" />
      </div>

      <div style={{ position: 'absolute', top: '10%', left: '40%' }}>
        <span style={{ fontFamily: 'helvetica-w01-light, helvetica-w02-light, sans-serif', fontSize: '28px', color: 'white', fontWeight: 'bold' }}>Every care center needs NAVI</span>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: 'rgba(28,161,126,0.6)', zIndex: '-1', opacity: '0.8' }}>

        <div style={{ content: '', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(28,161,126,0.6)', zIndex: '-1', opacity: '0.8' }}></div>
      </div>

      <div className="divStyle" style={{ width: '100%', height: '552.66px',  bottom: '60%'}}>
        <span id="span26">Contact Us</span>
        <span className="lastspan2" style={{ top: '20%', left: '42%' }}>We would love to hear from you!</span>
    
        <div style={{ width: '958px', height: '218.2px', margin: '0px 11px', position: 'absolute', backgroundColor: '#ffff' }}>
          <div className="cuadrodiv" style={{ top: '6.5%', left: '1.5%', textAlign: 'center', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
            <img src="../../../assets/bluepoint/PAPER AIRPLANE.png" style={{ width: '70px', height: '60px', position: 'absolute', top: '25%', left: '35%' }} />
            <span href="info@bluepoint2.com" style={{ position: 'absolute', textAlign: 'center', color: '#ffff', top: '70%', left: '23%', fontSize: '18px', fontFamily: 'Arial, Helvetica, sans-serif' }}>info@bluepoint2.com</span>
          </div>
          <div className="cuadrodiv" style={{ top: '6.5%', left: '34.5%', textAlign: 'center', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
            <img src="../../../assets/bluepoint/SIGNAL PHONE.png" style={{ width: '64px', height: '80px', position: 'absolute', top: '15%', left: '40%' }} />
            <span style={{ position: 'absolute', textAlign: 'center', color: '#ffff', top: '70%', left: '33%', fontsize: '18px', fontfamily: 'Arial, Helvetica, sans-serif'}}>913.735.6202</span>
            </div>
            <div className="cuadrodiv" style={{ top: '6.5%', left: '67.5%', textAlign: 'center', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
            <img src="../../../assets/bluepoint/init.gif" style={{ width: '60px', height: '60px', position: 'absolute', top: '20%', left: '40%' }} />
            <span style={{ position: 'absolute', textAlign: 'center', color: '#ffff', top: '70%', left: '25%', fontSize: '18px', fontFamily: 'Arial, Helvetica, sans-serif' }}>Visit us on LinkedIn</span>
             </div>
    
            </div>
            </div>
            </div>

        <Footer />
       
        </div>

        

       
    );
}
