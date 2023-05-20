import { useState } from "react";

export default function UploadText(props) {
    let [textFile, setTextFile] = useState(null);

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
            reader.onload = () => {
                props.setInput(reader.result);
            }
        }
    }

  return (
    <div>
        <input type="file" name="selectFile" onChange={ event => handleFileChange(event) } />
        {/* <div>{textFile && `${textFile.name}`}</div> */}
        <button type="button" name="uploadText" className="btn btn-primary" onClick={ handleSubmit }>Upload Text File</button>
    </div>
  )
}
