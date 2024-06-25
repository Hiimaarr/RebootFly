import './Button.css'
function Button({size,text,onClick }) {
  return (
    <>
      <button className={size === "small" ? "small" : "data" } onClick={onClick}>{text} </button>
    </>
  )
}

export default Button
