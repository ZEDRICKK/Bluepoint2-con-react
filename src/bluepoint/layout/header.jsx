import { Link } from "react-router-dom"


export const BluePointHeader = () => {

    const headColor = (e) => {
        if(e){
            return '#ffff'
        } else { return '#2382' }
    }

  return (
    <div id="container" style={{ backgroundColor: '#ffff', width: '100%', height: '141.2px', position: 'relative', backgroundImage: 'none' }}>
    <img className="bluelogo" src="../../../assets/bluepoint/bluepoint2-Logo.webp" alt="Bluepoint Logo" />
    <ul className="min-w-full d-flex justify-content-center">
        <li className="lista">
            <Link to='/' style={{ textDecoration: 'none' }} >
                <div className="cuadroDeLista">
                    <p href="bluepoint.html">
                        Home
                    </p>
                </div>
            </Link>
        </li>
        <li>
            <Link to='/whatsnavi' style={{ textDecoration: 'none' }} >
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
</div>
  )
}
