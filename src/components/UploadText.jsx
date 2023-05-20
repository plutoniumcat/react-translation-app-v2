import { useState, useEffect } from "react";

export default function UploadText(props) {
    let [textFile, setTextFile] = useState(null);
    let [inputString, setInputString] = useState("");

    const reader = new FileReader();

    const handleFileChange = (e) => {
        if (e.target.files) {
            setTextFile(e.target.files[0]);
        }
    }

    const handleSubmit = () => {
        if (textFile) {
            console.log("Found file");
            reader.readAsText(textFile);
            setInputString(reader.result);
        }
    }

    useEffect(() => {
        console.log(inputString);
    }, [inputString])

  return (
    <div>
        <input type="file" name="selectFile" onChange={ event => handleFileChange(event) } />
        <div>{textFile && `${textFile.name}`}</div>
        <button type="button" name="uploadText" className="btn btn-primary" onClick={ handleSubmit }>Upload Text File</button>
    </div>
  )
}
