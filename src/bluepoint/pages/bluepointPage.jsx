

export const BluePointPage = () => {

    return (
      <div>
          <div id="container">
              <img className="bluelogo" src="../../assets/img/marvel-wolverine.jpg" alt="Bluepoint Logo" />
              <ul className="min-w-full d-flex justify-content-center">
                  <li className="lista">
                      <a href="bluepoint.html" style={{ textDecoration: 'none' }}>
                          <div className="cuadroDeLista">
                              <p href="bluepoint.html">
                                  Home
                              </p>
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="whatIsNavi.html" style={{ textDecoration: 'none' }}>
                          <div className="cuadroDeLista">
                              <p>
                                  What is NAVI?
                              </p>
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="optometry.html" style={{ textDecoration: 'none' }}>
                          <div className="cuadroDeLista">
                              <p href="optometry.html">
                                  NAVI services
                              </p>
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="benefits.html" style={{ textDecoration: 'none' }}>
                          <div className="cuadroDeLista">
                              <p>
                                  Benefits
                              </p>
                          </div>
                      </a>
                  </li>
                  <li>
                      <a href="careers.html" style={{ textDecoration: 'none' }}>
                          <div className="cuadroDeLista">
                              <p>
                                  Careers
                              </p>
                          </div>

                      </a>
                  </li>
                  <li className="lista">
                      <a href="ContactUs.html" style={{ textDecoration: 'none' }}>

                          <div className="cuadroDeLista" style={{ borderRight: 'none' }}>
                              <p>
                                  Contact Us
                              </p>
                          </div>
                      </a>
                  </li>
              </ul>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '949px' }}>

              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                  <img src="" style={{ position: 'absolute', width: '752px', height: '189px', top: '17%', left: '30%', objectFit: 'cover' }} fetchpriority="high" alt="Profile background" />
              </div>

              <div style={{ position: 'absolute', top: '10%', left: '40%' }}>
                  <span style={{ fontFamily: 'helvetica-w01-light,helvetica-w02-light,sans-serif', fontSize: '28px', color: 'white', fontWeight: 'bold' }}>Every care center needs NAVI</span>
              </div>

              <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: 'rgba(28,161,126,0.6)', zIndex: '-1' }}>

                  <div style={{ content: '', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(28,161,126,0.6)', zIndex: '-1' }}></div>
              </div>

              <div className="divStyle" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ fontFamily: 'helvetica-w01-light,helvetica-w02-light,sans-serif', fontSize: '24px', color: 'white', textAlign: 'center' }}>
                        Welcome to NAVI, your go-to solution for all your optometry care center needs. We provide comprehensive services and benefits to help you deliver the best care to your patients. Contact us to learn more!
                    </p>
                </div>
            </div>
        </div>

       
    );
}
