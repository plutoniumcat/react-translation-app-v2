import { useEffect, useState } from "react";
import Tesseract from 'tesseract.js';
import Recordinput from "./Recordinput";
import Recordoutput from "./Recordoutput";

export default function ImageReader() {
    const [inputString, setInputString] = useState("");
    const [outputString, setOutputString] = useState("")
    const [imageFile, setImageFile] = useState(null);
    const [sourceLang, setSourceLang] = useState("english");
    const [outputLang, setOutputLang] = useState("english");

    const handleFile = (e) => {
        console.log(e.target.files)
        setImageFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = () => {
      if (imageFile) {
        (async () => {
          const worker = await Tesseract.createWorker();
          await worker.loadLanguage('eng');
          await worker.initialize('eng');
          const { data: { text } } = await worker.recognize(imageFile);
          setInputString(text);
          await worker.terminate();
        })();
      }
      else {
        alert("Please select a file.");
      }
    }

    useEffect(async () => {
      console.log(`Translating from ${languageMap[sourceLang]} to ${languageMap[outputLang]}`); // Requesting the translation tool to translate our text
      console.log(`Text to translate: ${inputString}`);
  
      try { //Try and catch method to handle errors
          const response = await libreTranslateAPI.translateText(inputString, languageMap[sourceLang], languageMap[outputLang]);
          console.log('Translation response:', response.data);
          setOutputString(response.data.translatedText);
      } catch (error) {
          console.error('Failed to translate text:', error); //To catch the error
      }
    }, [input]);

  return (
    <div>
        <label htmlFor="image-upload">Select an image to upload</label>
        <input type="file" name="image-upload" onChange={ (e) => handleFile(e) } />
        <button onClick={ handleSubmit }>Upload</button>
        <Dropdown sourceLang={sourceLang} setSourceLang={setSourceLang} />
        <Recordinput input={inputString} setInput={setInputString} />
        <Dropdown outputLang={outputLang} setOutputLang={setOutputLang} />
        <Recordoutput outputText={outputString} />
    </div>
  )
}
