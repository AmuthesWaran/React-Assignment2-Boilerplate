import React from 'react'
import { Card } from 'react-bootstrap'

const Unauthorised = () => {


    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Body>

                    <Card.Text>
                        Sorry you are not authorised. Please Login. 
                    </Card.Text>
                    
                </Card.Body>
            </Card>


        </div>
    )
}

export default Unauthorised