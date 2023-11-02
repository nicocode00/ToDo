
function Nota({ contenido, eliminar, ide }) {
  return (
    <div className="nota" id={ide}>

      <p> {contenido} </p>

      <button onClick={() => eliminar(ide)}>Eliminar</button>

    </div>
  )
}

export default Nota;
