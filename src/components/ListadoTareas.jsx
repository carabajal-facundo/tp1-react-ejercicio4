import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListadoTareas = () => {
    return (
        <ListGroup className='mt-3'>
            <ItemTarea></ItemTarea>
            <ItemTarea></ItemTarea>
            <ItemTarea></ItemTarea>
        </ListGroup>
    );
};

export default ListadoTareas;