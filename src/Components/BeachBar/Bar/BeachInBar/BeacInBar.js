import React from 'react';
import './BeachInBar.css';
import {Rating} from "@mui/material";
import {Card} from "react-bootstrap";

const BeachInBar = ({beach, onClick, currentBeachId}) => {
    const {beachName, beachAverageScore, country, city} = beach;


    return (
        <Card className={"beach-in-bar "} onClick={onClick}>
            <Card.Body className={"ps-2 pt-1 pb-1 " + (currentBeachId === beach.id ? "chosen" : 'default')}>
                <Card.Title className="font-monospace">{beachName}</Card.Title>
                <Card.Text className="font-monospace">{country}, {city}</Card.Text>
                <Rating value={beachAverageScore / 2} precision={0.1} readOnly={true} size="small"/>
            </Card.Body>
        </Card>
)
    ;
};

export default BeachInBar;