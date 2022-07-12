import React from "react";
import './LoadingWidget.css'
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';

export const LoadingWidget = (props) => {

    return <Flexbox alignContent={"center"} justifyItems={"center"} alignItems={"center"} flexDirection={"column"} className={'animated-transitions'} style={props.style}>

        <svg id="loading-spinner" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '15px'}}>
            <circle id="loading-circle-meduim" cx="30" cy="30" r="27" stroke="var(--color-4)" stroke-width="6"/>
        </svg>

        <h3 className={'loading-label'}>{props.text}</h3>
    </Flexbox>
}

LoadingWidget.propTypes = {
    text: PropTypes.string
}