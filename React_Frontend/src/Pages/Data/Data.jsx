import "./Data.css"
import Button from "../../components/Button/Button"
function Data() {
  return (
    <>
    <div id="data">
        <h3>Passenger 1</h3>
        <div id="infoData">  
        <label id="name">Name</label>
        <label id="apellido">Surname</label> 
        <br/>
        <input type="text" id="name" name="name" />
        <input type="apellidos" id="apellidoI"/>
          <br/>       
        <label id="dniT">Document type</label>
        <label id="dni">DNI</label><br/>
        <select id="dniTS">
            <option value="DNI">DNI</option>
            <option value="NIF">NIF</option>
        </select>
        <input id="dniI" type="text"></input>
        </div>
        <h3>Contact Info</h3>
        <div id="infoContact">
        <label id="email">Email</label>
        <label id="emailC">Confirm Email</label>
        <br/>
        <input type="email" id="emailI"></input>
        <input type="email" id="emailIC"></input>
        </div>  
        <Button size="data" text="Continuar"/>
    </div>
    </>
  )
}

export default Data
