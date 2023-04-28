

export const BenefitsMainComponent = ({img, texto}) => {

    

  return (
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
          {texto}
      </div>
      <div>
        <img
          src={img}
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

  )
}
