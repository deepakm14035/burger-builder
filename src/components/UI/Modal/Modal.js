import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props)=>{
    return (<Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
        <div style={{
            transform:props.show?'translateY(0)':'translateY(-100vh)',
            opacity:props.show?'1':'0' 
        }} show={props.show} className={classes.Modal} >{props.children}</div>
    </Aux>);
}

export default modal;