import React from "react";
import './ErrorWidget.css'
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';
import UnknownIcon from './unknown.svg'

export const MessageBox = (props) => {
    return <Flexbox alignContent={"center"} alignItems={"center"} flexDirection={"column"} className={'error-widget animated-transitions'} style={props.style}>
        <img src={props.icon ?? UnknownIcon} className={'inverted-icon'} height={'65px'} width={'65px'} alt={'Icon :-)'} />
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
    </Flexbox>
}

MessageBox.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.object
}