import './Button.css'
function Button({size,text/*,onclick (para que cambie la función del boton)*/ }) {
  return (
    <>
      <button className={size === "small" ? "small" : "large" }>{text} </button>
    </>
  )
}

export default Button
