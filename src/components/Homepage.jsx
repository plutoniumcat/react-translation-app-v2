import { useState } from "react";
import Dropdown from "./Dropdown";

export default function Homepage() {
    const [sourceLang, setSourceLang] = useState("english");
    const [outputLang, setOutputLang] = useState("english");


  return (
    <div>
      <form>
        <Dropdown sourceLang={ sourceLang } setSourceLang={ setSourceLang } />
        <textarea name="source-text" cols="30" rows="10"></textarea>
        <Dropdown outputLang={ outputLang } setOutputLang={ setOutputLang } />
        <textarea name="translated-text" cols="30" rows="10"></textarea>
      </form>
    </div>
  )
}
