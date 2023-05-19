export default function Dropdown(props) {
  return (
    <div>
        <label htmlFor="source-lang">Source language:</label>
        <select name="source-lang">
            <option value="english">English</option>
            <option value="japanese">Japanese</option>
            <option value="french">French</option>
        </select>
    </div>
  )
}
