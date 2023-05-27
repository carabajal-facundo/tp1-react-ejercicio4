import React from 'react';
import { Button, Form } from 'react-bootstrap';
import ListadoTareas from './ListadoTareas';
import { useState } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const handleSubmit = ()=>{
        e.prevendDefault();
        setTareas([...tareas, tarea]);
        setTarea('');
    }

    return (
        <>
        <Form className='d-flex'>
            <Form.Control type='text' placeholder='Ingrese aqui la tarea' onChange={ (e)=>setTarea(e.target.value) }/>
            <Button variant='success'>Ingresar</Button>
        </Form>
        <ListadoTareas tareas={tareas}></ListadoTareas>
        </>
    );
};

export default Formulario;