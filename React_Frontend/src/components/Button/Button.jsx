import './Button.css'
function Button({size,text/*,onclick (para que cambie la función del boton)*/ }) {
  return (
    <>
      <button className={size === "small" ? "small" : "data" }>{text} </button>
    </>
  )
}

export default Button
