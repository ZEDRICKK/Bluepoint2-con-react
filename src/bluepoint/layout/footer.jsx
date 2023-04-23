import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div style={{ backgroundColor: '#242323', width: '100%', height: '141.2px', position: 'relative', backgroundImage: 'none' }}>
      <ul className="min-w-full d-flex justify-content-center">
        <li className="lista">
          <Link to='/' style={{ textDecoration: 'none' }}>
            <div className="cuadroDeLista">
              <p href="bluepoint.html">
                Home
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/whatsnavi' style={{ textDecoration: 'none' }}>
            <div className="cuadroDeLista">
              <p>
                What is NAVI?
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/naviservices' style={{ textDecoration: 'none' }}>
            <div className="cuadroDeLista">
              <p href="optometry.html">
                NAVI services
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/benefits' style={{ textDecoration: 'none' }}>
            <div className="cuadroDeLista">
              <p>
                Benefits
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/careers' style={{ textDecoration: 'none' }}>
            <div className="cuadroDeLista">
              <p>
                Careers
              </p>
            </div>
          </Link>
        </li>
        <li className="lista">
          <Link to='/contactus' style={{ textDecoration: 'none' }}>
            <div className="cuadroDeLista" style={{ borderRight: 'none' }}>
              <p>
                Contact Us
              </p>
            </div>
          </Link>
        </li>
      </ul>
      <span style={{ position: 'absolute', color: '#d5d2d2', fontSize: '12px', top: '70%', left: '50%' }}>
        © 2021 bluepoint2
      </span>
    </div>
  )
}
