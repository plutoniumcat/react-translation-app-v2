import { Button } from "bootstrap";
import { useEffect, useState } from "react"

export default function ImageReader() {
    const [inputString, setInputString] = useState("");
    const [outputString, setOutputString] = useState("")
    const [imageFile, setImageFile] = useState(null);
    const [base64file, setBase64File] = useState(null);

    const handleFile = (e) => {
        console.log(e.target.files)
        setImageFile(e.target.files[0]);
    }

    const handleSubmit = () => {
      if (imageFile) {
        let reader = new FileReader();
        reader.onload = () => {
          setBase64File(reader.result);
        }
        reader.readAsDataURL(imageFile);
      }
      else {
        alert("Please select a file.");
      }
    }

    useEffect(() => {
        let myHeaders = new Headers();
        myHeaders.append("apikey", "K87327703988957");

        let formdata = new FormData();
        formdata.append("language", "jpn");
        formdata.append("base64Image", { base64file });
        formdata.append("filetype", "png")
        formdata.append("detectOrientation", "true");
        formdata.append("scale", "true");

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
          };

        fetch("https://api.ocr.space/parse/image", requestOptions)
        .then(response => response.text())
        .then(result => setInputString(result))
        .catch(error => console.log('error', error));
    }, [base64file]);

  return (
    <div>
        <label htmlFor="image-upload">Select an image to upload</label>
        <input type="file" name="image-upload" onChange={ (e) => handleFile(e) } />
        <button onClick={ handleSubmit }>Upload</button>
        <textarea name="translated-text" readOnly={ true } value={ outputString } cols="30" rows="10"></textarea>
    </div>
  )
}
