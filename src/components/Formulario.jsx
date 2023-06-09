import { Button, Form } from 'react-bootstrap';
import ListadoTareas from './ListadoTareas';
import { useState } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setTareas([...tareas, tarea]);
        setTarea('');
    }

    const borrarTarea = (tarea)=>{
        let copiaTareas = tareas.filter((item)=>item!==tarea);
        setTareas(copiaTareas);
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="tarea">
                <Form.Control type='text' placeholder='Ingrese aqui la tarea' onChange={ (e)=>setTarea(e.target.value) } value={tarea}/>
                <Button variant='success' type='submit'>Ingresar</Button>
            </Form.Group>
        </Form>
        <ListadoTareas tareas={tareas} borrarTarea={borrarTarea}></ListadoTareas>
        </>
    );
};

export default Formulario;