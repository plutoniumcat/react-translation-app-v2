import { useState } from "react";
import Dropdown from "./Dropdown";


export default function Homepage() {
  const [sourceLang, setSourceLang] = useState("english");
  const [outputLang, setOutputLang] = useState("english");

  return (


    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <form className="d-flex flex-column align-items-center">
            <Dropdown sourceLang={sourceLang} setSourceLang={setSourceLang} />
            <textarea name="source-text" className="form-control" cols="30" rows="10"></textarea>
          </form>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <form className="d-flex flex-column align-items-center">
            <Dropdown outputLang={outputLang} setOutputLang={setOutputLang} />
            <textarea name="translated-text" className="form-control" cols="30" rows="10"></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}
