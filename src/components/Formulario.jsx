import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { validacionNombre } from "../validaciones";

const Formulario = () => {
  const [validar, setValidar] = useState(false);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [DNI, setDNI] = useState();
  const [email, setEmail] = useState("");

  const [cliente, setCliente] = useState({});

  const validarDatos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (validacionNombre(nombre)) {
      setValidar(true);
      setCliente({
        nombre,
        apellido,
        email,
        DNI,
      });
      Swal.fire({
        icon: "success",
        title: "felicidades",
        text: `te inscribiste correctamente, ${cliente.nombre}`,
        footer: "A continuacion podras ver tu informacion",
      });
    }
    setNombre("");
  };

  return (
    <div>
      <Form
        className="w-50 border border-dark bg-secondary m-2"
        onSubmit={validarDatos}
      >
        <Form.Group controlId="formBasicEmail" className="m-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="por ej: Nicolas"
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 m-3" controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="por ej: Gonzalez"
            required
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 m-3" controlId="formBasicPassword">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="number"
            placeholder="40300200"
            required
            onChange={(e) => setDNI(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 m-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="nicolas@gmail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="m-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Formulario;
