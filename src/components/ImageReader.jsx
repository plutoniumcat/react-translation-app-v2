import { useEffect, useState } from "react"

export default function ImageReader() {
    const [inputString, setInputString] = useState("");
    const [outputString, setOutputString] = useState("")
    const [imageFile, setImageFile] = useState(null);

    const handleFile = (e) => {
        console.log(e.target.files)
        setImageFile(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(() => {
        let myHeaders = new Headers();
        myHeaders.append("apikey", "K87327703988957");

        let formdata = new FormData();
        formdata.append("language", "eng");
        formdata.append("url", { imageFile });
        formdata.append("filetype", "png");
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
    },[imageFile]);

  return (
    <div>
        <label htmlFor="image-upload">Select an image to upload</label>
        <input type="file" name="image-upload" onChange={ (e) => handleFile(e) } />
        <textarea name="translated-text" value={ outputString } cols="30" rows="10"></textarea>
    </div>
  )
}
