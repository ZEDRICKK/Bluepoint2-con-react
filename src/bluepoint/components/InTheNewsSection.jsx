

export const InTheNewsSection = () => {
  return (
    <div
    style={{
      backgroundColor: "#1CA17ECC",
      width: "100%",
      height: "418px",
      opacity: 0.99,
      position: "relative",
    }}
  >
    <span id="botonFlecha" style={{ left: "90%", top: "30%" }}>
      &gt;
    </span>
    <span id="botonFlecha1" style={{ left: "10%", top: "30%" }}>
      &lt;
    </span>

    <div id="ocultarDiv1" >
      <img id="magazineL" src="../../../assets/bluepoint/Magazine HTO.webp" />
      <span
        className="listgreen"
        style={{
          width: "358.28px",
          fontSize: "20px",
          color: "#ffff",
          top: "40%",
          left: "25%",
        }}
      >
        Bluepoint2's product NAVI received The Healthcare Tech Outlook Top 10
        Patient Communication Solution Providers of 2020. Click the button
        below to read the story.
      </span>
      <span
        className="titulofuerte"
        style={{ fontSize: "40px", top: "25%", left: "25%" }}
      >
        In The News
      </span>
      <button
        id="boton8"
        className="boton2"
        style={{
          top: "75%",
          left: "25%",
          border: "1px solid white",
        }}
      >
        Read the Story
      </button>
    </div>

    <div id="ocultarDiv2" className="ocultar">
      <img id="Quote" src="../../../assets/bluepoint/quote.webp" />
      <span
        className="listgreen"
        style={{
          width: "358.28px",
          fontSize: "20px",
          color: "#ffff",
          top: "40%",
          left: "25%",
        }}
      >
        Jon Adrian was quoted in the recent issue of Net Solution's article
        titled 8 "Digital Transformation Trends that will Steer 2020." Click
        the button below to read the story.
      </span>
      <span
        className="titulofuerte"
        style={{ fontSize: "40px", top: "25%", left: "25%" }}
      >
        In The News
      </span>
      <button
        id="boton9"
        className="boton2"
        style={{
          top: "75%",
          left: "25%",
          border: "1px solid white",
        }}
      >
        Read the Story
      </button>
    </div>

    <div id="ocultarDiv3" className="ocultar" >
      <img id="Klas" src="../../../assets/bluepoint/klas.webp" />
      <span
        className="listgreen"
        style={{
          width: "358.28px",
          fontSize: "20px",
          color: "#ffff",
          top: "40%",
          left: "25%",
        }}
      >
        Bluepoint2 is honored to have been named "A Top Emerging Company to
        watch for its innovation" by KLAS.
      </span>
      <span
        className="titulofuerte"
        style={{ fontSize: "40px", top: "25%", left: "25%" }}
        >
          In The News
        </span>
        <button
          id="boton10"
          className="boton2"
          style={{
            top: "75%",
            left: "25%",
            border: "1px solid white",
          }}
        >
          Read the Story
        </button>
      </div>
    </div>
  )
}
