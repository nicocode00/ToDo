
function Entrada({ agregar, capturar, value, capKey }) {
  return (
    <div className="entrada">

      <input onChange={capturar} onKeyDown={capKey} value={value} autoFocus />

      <button onClick={agregar}>Agregar</button>

    </div>
  );
}

export default Entrada;
