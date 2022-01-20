import React from 'react';
import { useNavigate } from 'react-router';
import "./CheckoutSteps.css";

export default function CheckoutSteps(props) {
const navigate = useNavigate();

    return (
        <div className='row checkout-steps'>
            <div className={props.step1 ? 'active' : ''} onClick={()=>navigate('/')}>Project</div>
            <div className={props.step2 ? 'active' : ''} onClick={()=>navigate('/materials')}>Materials</div>
            <div className={props.step3 ? 'active' : ''} onClick={()=>navigate('/options')}>Options</div>
            <div className={props.step4 ? 'active' : ''} onClick={()=>navigate('/cross-selling')}>Packs</div>
            <div className={props.step5 ? 'active' : ''} onClick={()=>navigate('/cart')}>Cart</div>
            <div className={props.step6 ? 'active' : ''} onClick={()=>navigate('/coaching')}>Coaching</div>
        </div>
    )
}
