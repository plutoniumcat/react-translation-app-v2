import Dropdown from "./Dropdown";

export default function Homepage() {
  return (
    <div>
      <form>
        <Dropdown />
        <textarea name="source-text" cols="30" rows="10"></textarea>
        <Dropdown />
        <textarea name="translated-text" cols="30" rows="10"></textarea>
      </form>
    </div>
  )
}
