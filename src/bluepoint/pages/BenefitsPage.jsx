import { BluePointHeader } from "../layout"


export const BenefitsPage = () => {
  return (
    <>
    <BluePointHeader />
    <div style={{ zIndex: 1, position: "relative" }}>
      <div style={{ position: "relative", width: "100%", height: "406px" }}>
        <div
          style={{
            backgroundColor: "#2B388C",
            width: "477px",
            height: "406px",
            opacity: 0.9,
            position: "absolute",
            right: "22.1%",
          }}
        >
          <span
            className="listgreen"
            style={{
              color: "#fff",
              fontSize: "32px",
              width: "356px",
              position: "absolute",
              left: "13%",
              top: "10%",
            }}
          >
            NAVI is a web-based mobile communication solution with an intuitive,
            user-friendly interface and an easy to manage administration
            dashboard.
          </span>
        </div>
        <div>
          <img
            src="../../../assets/bluepoint/celuss.webp"
            style={{
              position: "absolute",
              left: "20%",
              width: "502px",
              height: "406px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
    </>
  )
}
