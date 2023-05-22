import { useState } from "react";
import Dropdown from "./Dropdown";




export default function Homepage() {
  const [sourceLang, setSourceLang] = useState("english");
  const [outputLang, setOutputLang] = useState("english");

  // const customBorderStyle = {
  //   borderColor: "#5D7589",
  // };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100%">
      <div className="row justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <form className="d-flex flex-column align-items-center">
            <Dropdown sourceLang={sourceLang} setSourceLang={setSourceLang} />
            <span className="border border-secondary border-5 rounded-4 p-1">
              <textarea name="translated-text" className="form-control border border-grey border-4 rounded-2" cols="30" rows="10"></textarea>
            </span>
          </form>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <form className="d-flex flex-column align-items-center">
            <Dropdown outputLang={outputLang} setOutputLang={setOutputLang} />
            <span className="border border-secondary border-5 rounded-4 p-1">
              <textarea name="translated-text" className="form-control border border-grey border-4 rounded-3" cols="30" rows="10"></textarea>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
