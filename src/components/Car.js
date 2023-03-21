import React from 'react'
import { Container, Paper, Chip } from '@mui/material';

const Car = (props) => {
    const id = props.match.params.id
    {/* Change cars to props.cars and remove the cars.json import above */}
    const car = props.cars.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{props.car.Name}</h2>
                {
                    Object.keys(props.car).map((key, idx) => {
                        return <Chip label={`${key}: ${props.car[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car