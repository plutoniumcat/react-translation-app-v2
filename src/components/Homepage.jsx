import { useState } from "react";
import Dropdown from "./Dropdown";
import Recordinput from "./Recordinput";
import Recordoutput from "./Recordoutput";
import libreTranslateAPI from './libreTranslateAPI';
import UploadText from "./UploadText";

const languageMap = {
  english: 'en',
  japanese: 'ja',
  french: 'fr',
  german: 'de',
};

export default function Homepage() {
  const [sourceLang, setSourceLang] = useState("english");
  const [outputLang, setOutputLang] = useState("english");
  const [input, setInput] = useState('');
  const [translation, setTranslation] = useState('');
  const [mode, setMode] = useState("input");

  const handleTranslate = async (event) => {
    event.preventDefault();

    console.log(`Translating from ${languageMap[sourceLang]} to ${languageMap[outputLang]}`);
    console.log(`Text to translate: ${input}`);

    try {
      const response = await libreTranslateAPI.translateText(input, languageMap[sourceLang], languageMap[outputLang]);
      console.log('Translation response:', response.data);
      setTranslation(response.data.translatedText);
    } catch (error) {
      console.error('Failed to translate text:', error);
    }
  };

  const handleModeSwitch = () => {
    setMode(mode === "input" ? "output" : "input");
  };

  return (
    <div>
      <UploadText setInput={setInput} />
      <form onSubmit={handleTranslate} className="d-flex flex-column align-items-center">
        <Dropdown sourceLang={sourceLang} setSourceLang={setSourceLang} />
        {mode === "input" ? (
          <Recordinput input={input} setInput={setInput} />
        ) : (
          <Recordoutput outputText={translation} />
        )}
        <button type="submit">Translate</button>
        <Dropdown outputLang={outputLang} setOutputLang={setOutputLang} />
        <button type="button" onClick={handleModeSwitch}>Switch</button>
      </form>
    </div>
  );
}