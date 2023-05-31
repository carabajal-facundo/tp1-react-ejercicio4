import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListadoTareas = ({tareas, borrarTarea}) => {
    let tareass = [];
    tareass = tareas;
    console.log(tareass)

    const listado = tareass.map(tarea=> <ItemTarea borrarTarea={borrarTarea} tarea={tarea}/>);

    return (
        <ListGroup className='mt-3'>
            {listado}
        </ListGroup>
    );
};

export default ListadoTareas;