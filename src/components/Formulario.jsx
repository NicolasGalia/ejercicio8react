import { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { validacionApellido, validacionNombre, validarEmail, validarDni } from "../validaciones";

const Formulario = () => {
  const [validar, setValidar] = useState(false);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState();
  const [email, setEmail] = useState("");

  const [cliente, setCliente] = useState({});

  const validarDatos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!validacionNombre(nombre) || 
    !validacionApellido(apellido) || 
    !validarDni(dni) || 
   !validarEmail(email)){
      return;
    } else {
      setValidar(true);
      setCliente({
        nombre,
        apellido,
        email,
        dni,
      });
      Swal.fire({
        icon: "success",
        title: "felicidades",
        text: `te inscribiste correctamente, ${cliente.nombre}`,
        footer: "A continuacion podras ver tu informacion",
      });
    }
    setNombre("");
    setApellido("");
    setDni("");
    setEmail("");
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
            value={nombre}
            placeholder="por ej: Nicolas"
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 m-3" controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            value={apellido}
            placeholder="por ej: Gonzalez"
            required
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 m-3" controlId="formBasicPassword">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="number"
            value={dni}
            placeholder="40300200"
            required
            onChange={(e) => setDni(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 m-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="nicolas@gmail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="m-3">
          Submit
        </Button>
      </Form>
      {
        validar ?   
        <ListGroup>
        <ListGroup.Item>{cliente.nombre}</ListGroup.Item>
        <ListGroup.Item>{cliente.apellido}</ListGroup.Item>
        <ListGroup.Item>{cliente.dni}</ListGroup.Item>
        <ListGroup.Item>{cliente.email}</ListGroup.Item>     
        </ListGroup> : null
      }
    </div>
  );
};

export default Formulario;
