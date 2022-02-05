import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Card, StylizedCard } from './styles'


function CardAppointment({ type, hours, amount }) {
    const [mouseHere, setMouseHere] = useState(false);

    return (
        <StylizedCard type={type} onMouseOver={() => setMouseHere(true)} onMouseOut={() => setMouseHere(false)} text={'light'} className={`m-2 hover-overlay `} >
            <Card.Body>
                <Card.Text className="d-flex justify-content-center align-items-center" style={{height: '80px'}}>
                    { mouseHere ? 
                        <FontAwesomeIcon icon={faPlusCircle} size="3x" />
                            :
                        <h2>{hours}</h2>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center" >
                <small className="text-light">{amount} vagas disponíveis</small>
            </Card.Footer>
        </StylizedCard>             
    )
}

export default CardAppointment