import React from 'react'
import { BluePointHeader, Footer } from '../layout'

export const VideoDemo = () => {
  return (
    <div>
        <BluePointHeader />

        <div style={{backgroundColor: '#ffff', width: '100%', height: '1485px'}}>
                    <span id='mainTitleVP' >Receive accurate patient insurance information before the appointment 
                    with NAVI•Services.
                    </span>

                    <img src="../../../assets/bluepoint/celular.webp"  style={{position: 'absolute', left: '47%', top: '15%'}} />

                     <span id='parrafVP'  style={{top: '24%'}} >The video on the right shows how your patients receive a text notifying
                         them that their insurance information needs to be updated.
                     </span>

                     <span id='parrafVP' style={{top: '30%'}} >All they do is click the link, snap a photo with their phone 
                        through our proprietary NAVI•pal software, approve the image and they’re done.
                     </span>

                     <span id='parrafVP'  style={{top: '38%'}}>Their card image will then be sent to you through our HIPAA and HITECH compliant
                         web services. It’s that easy!
                     </span>

                     <span id='parrafVP1'  style={{top: '55%'}} >NAVI™ can do even more to help your patients have a better experience receiving healthcare
                         in your organization. Watch the video below to see how. 
                     </span>

                     <iframe src="https://player.vimeo.com/video/386648582?h=28677dd262&title=0&byline=0&portrait=0" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{position: 'absolute', top: '60%', left: '30%'}}></iframe>

                    <span id='parrafVP1'  style={{top: '82%'}} >If you'd like to speak with us to learn how to put NAVI™ to work in your organization, let's schedule a call</span>

        </div>

        <Footer/>
    </div>
  )
}
