import { useState } from "react";
import Entrada from "./Entrada";
import Nota from "./Nota";
import { v4 as uuidv4 } from "uuid";

function Contenedor() {
  const [grupo, setgrupo] = useState([]);
  const [escribiendo, setEscribiendo]=useState("");

  const agregar = () => {
    if (escribiendo.trim()) {
      const estructura={valor:escribiendo, id:uuidv4()};
      const insertar = [estructura, ...grupo];
      setgrupo(insertar);
    }
    setEscribiendo("");
  };

  const capturar = (e) => {
    let captura = e.target.value;
    setEscribiendo(captura);
  };

  const capKey =(e)=> {e.key=="Enter" ? agregar() : '' };

  const eliminar = (ide) => {
    const filtro = grupo.filter((elemet)=>elemet.id !== ide);
    setgrupo(filtro);
  };

  return (
    <div className="contenedor">

      <strong>TO DO</strong>

      <Entrada
        agregar={agregar}
        capturar={capturar}
        capKey={capKey}
        value={escribiendo}
      />

      <div className="lista">
        {grupo.map((item, i) => (
          <Nota
            contenido={item.valor}
            eliminar={eliminar}
            ide={item.id}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Contenedor;
