import React, { useState } from 'react';
import './Rules.css';
import rulesSVG from '../assets/images/image-rules.svg';
import closeSVG from '../assets/images/icon-close.svg';

interface Props {
    isClicked: boolean;
    handleClick: ()=>void;
}

const Rules: React.FC<Props> = ({isClicked, handleClick}) => {

    return (
        <section className={`${isClicked === true ? 'rules-section' : 'rules-section-hidden'}`}>
            <section className="rules">
                <h1 className="rules-header">RULES</h1>
                <img src={rulesSVG} className='rules-svg' alt="rules" />
                <button className="close-rules-btn" onClick={handleClick}></button>
            </section>
        </section>
        
    );
}

export default Rules;