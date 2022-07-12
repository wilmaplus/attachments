import PropTypes from 'prop-types';
import React from 'react';
import './Card.css'

export const WilmaPlusCard = (props) => {

    return <div className="wilmaplus-card" id={props.id} style={props.cardStyle}>
        <content style={props.style}>
            {props.children}
        </content>
    </div>
}

WilmaPlusCard.propTypes = {
    style: PropTypes.object,
    cardStyle: PropTypes.object
}