import { BaseContact } from "../layout/baseContact"


export const ExperienceNavi = () => {

  const spanStyle = {
    width: "326px",
    top: "45%",
    left: "33%",
    zIndex: 2
  };

  const inputStyle = {
    width: "240px",
    height: "30px",
    backgroundColor: "#3078BE",
    border: "none",
    fontSize: "16px",
    color: "white",
    zIndex: 2
  };

  const textareaStyle = {
    width: "240px",
    height: "110px",
    backgroundColor: "#3078BE",
    border: "none",
    fontSize: "16px",
    color: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    paddingTop: "15px",
    resize: "none",
    zIndex: 2
  };

  const buttonStyle = {
    backgroundColor: "#3078BE",
    position: "absolute",
    width: "50px",
    height: "32px",
    top: "65%",
    left: "67.6%",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    border: "none",
    fontSize: "16px",
    color: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    zIndex: 2
  };


  const boxStyle = {
    backgroundColor: "#3078BE",
    position: "absolute",
    width: "246px",
    height: "32px",
    top: "47%",
    left: "56%",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    zIndex: 2
  };

  const textareaBoxStyle = {
    backgroundColor: "#3078BE",
    position: "absolute",
    width: "246px",
    height: "130px",
    top: "53%",
    left: "56%",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    zIndex: 2
  };


  return (
    <>
        <BaseContact />
        
      <span id="span27" style={spanStyle}>
        Please provide us with your contact information so we can connect with
        you and schedule a private demonstration of the NAVI System.
      </span>

      <div style={boxStyle}>
        <input placeholder="Name*" type="text" style={inputStyle} />
      </div>

      <div style={{ ...boxStyle, top: "50%"}}>
        <input
          aria-label="Email *"
          name="email"
          placeholder="Email*"
          type="email"
          pattern="^.+@.+\.[a-zA-Z]{2,63}$"
          style={inputStyle}
        />
      </div>

      <div style={textareaBoxStyle}>
        <textarea
          type="text"
          placeholder="Message*"
          style={textareaStyle}
        ></textarea>
      </div>

      <button style={buttonStyle}>Send</button>
   


    </>
  )
}
