import "./Search.css"

function Search() {
  
  return (
    <>
      <section id="BarraBuscar">
        <button id="Lupa"> 🔎</button>

        <label>
            Origin
            <select name="Origen" id="Origen">
            <option value="Select a departure">Select a departure</option>
          </select>
        </label>

        <label>
            Destination
            <select name="Destino" id="Destino">
            <option value="Select a arrival">Select a arrival</option>
          </select>
        </label>
        <label>
          Departure <input type="date" />
        </label>
        <label>
          Return <input type="date" />
        </label>

        <label>
            Pasajeros
            <select name="Pasajeros" id="Pasajeros">
            <option value="1"> 1 passenger</option>
            </select>

        </label>
      </section>
    </>
  );
}

export default Search



