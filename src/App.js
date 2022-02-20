import { useState } from "react";
import { Container, Button, Form, Stack, ListGroup } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import "./App.css";

function App() {
  const [nama, setNama] = useState("");
  const [hasilNama, setHasilNama] = useState("");
  const [namaPacar, setNamaPacar] = useState("");
  const [listPacar, setListPacar] = useState([]);

  return (
    <Container>
      {/* Input nama kita sendiri */}
      <h2 className="mt-4">Masukkan nama anda</h2>
      <Stack direction="horizontal" gap="4">
        <Form.Control type="text" placeholder="Masukkan nama kita..." onChange={(cb) => setNama(cb.target.value)} />
        <Button onClick={() => setHasilNama(nama)}>
          <AiOutlinePlus />
        </Button>
      </Stack>

      {/* Hasil nama kita */}
      <h2 className="text-center mt-2">{hasilNama}</h2>

      {/* Input nama pacar */}
      <h3 className="mt-5">Masukkan nama pacar</h3>
      <Stack direction="horizontal" gap="4">
        <Form.Control type="text" placeholder="Masukkan nama pacar..." onChange={(cb) => setNamaPacar(cb.target.value)} />
        <Button onClick={() => setListPacar([namaPacar, ...listPacar])}>
          <AiOutlinePlus />
        </Button>
      </Stack>

      {/* List nama pacar */}
      <ListGroup className="mt-4">
        {listPacar.map((pcr, id) => {
          return <ListGroup.Item key={id}>{pcr}</ListGroup.Item>;
        })}
      </ListGroup>
    </Container>
  );
}

export default App;
