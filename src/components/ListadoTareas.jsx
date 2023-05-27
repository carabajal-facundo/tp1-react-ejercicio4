import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListadoTareas = (tareas) => {
    return (
        <ListGroup className='mt-3'>
            <ItemTarea tarea=''/>
        </ListGroup>
    );
};

export default ListadoTareas;