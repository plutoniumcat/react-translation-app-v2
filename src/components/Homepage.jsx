import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Recordinput from "./Recordinput";
import Recordoutput from "./Recordoutput";
import libreTranslateAPI from './libreTranslateAPI';
import UploadText from "./UploadText";
import { libreLangMap } from "../data/languageMaps";


const languageMap = { libreLangMap
};

export default function Homepage() {
  const [sourceLang, setSourceLang] = useState("english");
  const [outputLang, setOutputLang] = useState("english");
  const [input, setInput] = useState('');
  const [translation, setTranslation] = useState('');

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
  
  // Function to handle swap fields
  const handleSwapFields = () => {
    const tempInput = input;
    const tempSourceLang = sourceLang;
  
    setInput(translation);
    setSourceLang(outputLang);
    setOutputLang(tempSourceLang);
    setTranslation(tempInput);
  };

    // eslint-disable-next-line no-undef
    useEffect(() => {
        const savedSourceLang = localStorage.getItem("sourceLang");
        const savedOutputLang = localStorage.getItem("outputLang");
    
        if (savedSourceLang) {
          setSourceLang(savedSourceLang);
        }
    
        if (savedOutputLang) {
          setOutputLang(savedOutputLang);
        }
      }, []);

    return (
      <div>
          <UploadText setInput={ setInput } />
          <form onSubmit={handleTranslate} className="d-flex flex-column align-items-center">
              <Dropdown value={sourceLang} sourceLang={sourceLang} setSourceLang={setSourceLang} />
              <Recordinput input={input} setInput={setInput} />
              <button type="submit">Translate</button>
              <Dropdown value={outputLang} outputLang={outputLang} setOutputLang={setOutputLang} />
              <Recordoutput outputText={translation} />
          </form>
      </div>
  );
}