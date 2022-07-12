import './Button.css';
import PropTypes from "prop-types";
import React from 'react';

export const WilmaPlusButton = (props) => {
    return <button className="wilmaplus-button" onClick={props.onClick} style={props.style}>
        {props.title}
    </button>
}

export const WilmaPlusButtonLink = (props) => {
    return <a className="wilmaplus-button" href={props.href} target={props.target} style={props.style}>
        {props.title}
    </a>
}

WilmaPlusButtonLink.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    style: PropTypes.object
}

WilmaPlusButton.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string
}