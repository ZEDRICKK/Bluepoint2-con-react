import { ContactUsComponent } from "../components/ContactUsComponent";
import { BaseContact } from "../layout/baseContact";


export const ContactUsPage = () => {

  const contactUsStyle = { 
    width: '100%', 
    height: '552.66px', 
    zIndex: '2',
    bottom: '60%'
  }


    return (
      <div  >

        <BaseContact>  

        <ContactUsComponent style={contactUsStyle} color1={'#ffff'}/>
 
             </BaseContact>
       
        </div>

        

       
    );
}
