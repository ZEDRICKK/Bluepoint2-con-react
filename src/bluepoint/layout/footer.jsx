

export const Footer = () => {
  return (
    <div style={{ backgroundColor: '#242323', width: '100%', height: '141.2px', position: 'relative', backgroundImage: 'none' }}>
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
      <span style={{ position: 'absolute', color: '#d5d2d2', fontSize: '12px', top: '70%', left: '50%' }}>
        © 2021 bluepoint2
      </span>
    </div>
  )
}
