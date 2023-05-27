import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Formulario = () => {
    return (
        <Form>
            <Form.Control type='text' placeholder='Ingrese aqui la tarea'/>
            <Button variant='suses'>Ingresar</Button>
        </Form>
    );
};

export default Formulario;