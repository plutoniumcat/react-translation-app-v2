import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Recordinput from "./Recordinput";
import Recordoutput from "./Recordoutput";
import libreTranslateAPI from './libreTranslateAPI';
import UploadText from "./UploadText";



const languageMap = { //mapping dropdown list to match libretranslate API
  english: 'en',
  arabic: 'ar',
  azerbaijani: 'az',
  catalan: 'ca',
  chinese: 'zh',
  czech: 'cs',
  danish: 'da',
  dutch: 'nl',
  esperanto: 'eo',
  finnish: 'fi',
  french: 'fr',
  german: 'de',
  greek: 'el',
  hebrew: 'he',
  hindi: 'hi',
  hungarian: 'hu',
  indonesian: 'id',
  irish: 'ga',
  italian: 'it',
  japanese: 'ja',
  korean: 'ko',
  persian: 'fa',
  polish: 'pl',
  portuguese: 'pt',
  russian: 'ru',
  slovak: 'sk',
  spanish: 'es',
  swedish: 'sv',
  turkish: 'tr',
  ukrainian: 'uk',
  auto: 'auto'
};

export default function Homepage() {
    const [sourceLang, setSourceLang] = useState("english");
    const [outputLang, setOutputLang] = useState("english");
    const [input, setInput] = useState('');
    const [translation, setTranslation] = useState('');

    const handleTranslate = async (event) => {
        event.preventDefault(); // Stops the page from reloading after clicking the translate button

        console.log(`Translating from ${languageMap[sourceLang]} to ${languageMap[outputLang]}`); // Requesting the translation tool to translate our text
        console.log(`Text to translate: ${input}`);

        try { //Try and catch method to handle errors
            const response = await libreTranslateAPI.translateText(input, languageMap[sourceLang], languageMap[outputLang]);
            console.log('Translation response:', response.data);
            setTranslation(response.data.translatedText);
        } catch (error) {
            console.error('Failed to translate text:', error); //To catch the error
        }
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
