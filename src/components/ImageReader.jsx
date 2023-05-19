import { useState } from "react"

export default function ImageReader() {
    const [inputString, setInputString] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const handleFile = (e) => {
        console.log(e.target.files)
        setImageFile(URL.createObjectURL(e.target.files[0]));
    }

  return (
    <div>
        <label htmlFor="image-upload">Select an image to upload</label>
        <input type="file" name="image-upload" onChange={ (e) => handleFile(e) } />
    </div>
  )
}
