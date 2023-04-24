import { BluePointHeader, Footer } from "../layout";


export const BaseContact = ({ children }) => {


    return (
      <div id="everything" style={{ padding: 'none' }}>

         <BluePointHeader/>

            <div sx={{width: 450}} style={{ position: 'relative', width: '100%', height: '949px' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '2' }}>
        <img src="../../../assets/bluepoint/Profile background-Liderman.webp" style={{ position: 'absolute', width: '752px', height: '189px', top: '17%', left: '30%', objectFit: 'cover' }} fetchpriority="high" />
      </div>

      <div style={{ position: 'absolute', top: '10%', left: '40%', zIndex: '2' }}>
        <span style={{ fontFamily: 'helvetica-w01-light, helvetica-w02-light, sans-serif', fontSize: '28px', color: 'white', fontWeight: 'bold' }}>Every care center needs NAVI</span>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: 'rgba(28,161,126,0.6)', zIndex: '1' }}>

        <div style={{ content: '', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(28,161,126,0.6)', zIndex: '1' }}></div>
      </div>

        {children}
    
            </div>

        <Footer />
       
        </div>

        

       
    );
}
