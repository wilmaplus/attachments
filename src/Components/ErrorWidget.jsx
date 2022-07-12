import React from "react";
import './ErrorWidget.css'
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';
import ErrorIcon from './error.svg'

export const ErrorWidget = (props) => {
    return <Flexbox alignContent={"center"} alignItems={"center"} flexDirection={"column"} className={'error-widget animated-transitions'} style={props.style}>
        <img src={ErrorIcon} className={'inverted-icon'} height={'65px'} width={'65px'} alt={'Icon'} />
        <h3>{props.error?.title ?? "Voi ei, tapahtui virhe."}</h3>
        <p>{props.error?.desc ?? "Yritä uudelleen, jos ongelma toistuu, ota yhteyttä tukeen"}</p>
        <span className={'error-code'}>Virhekoodi: {props.error?.code}</span>
    </Flexbox>
}

ErrorWidget.propTypes = {
    error: PropTypes.object
}