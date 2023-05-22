export default function Dropdown(props) {
    const menuType = props.sourceLang ? "source-lang" : "output-lang";

    const languageSelect = (event) => {
        if (props.setSourceLang) {
            props.setSourceLang(event.target.value);
            console.log(`Source language set to ${event.target.value}`);
        }
        else if (props.setOutputLang) {
            props.setOutputLang(event.target.value);
            console.log(`Output language set to ${event.target.value}`);
        }
        else {
            console.log("Language dropdown could not detect if it is source or output.");
        }
    }

  return (
    <div>
        <label htmlFor={ menuType }>Language:</label>
        
        <select name={ menuType } onChange={ (e) => languageSelect(e) }>
            <option value="english">English</option>
            <option value="japanese">Japanese</option>
            <option value="french">French</option>
        </select>
        <button class="button">Submit</button>
    </div>
  )
}
