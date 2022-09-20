import React from 'react'
import { Button, Card } from 'react-bootstrap'

const DisplayCard = (props) => {


    const saveNews = () => {
        const newCard={
          description:props.description,
          url:props.url,
          title:props.title,
          urlToImage:props.urlToImage,
          authorex:props.authorex
        }
        props.readLater(newCard);
      };



    return (
        <div>
            <Card style={{ Width: "30rem", height: "30rem", margin: "1rem" }} >
                <Card.Img variant="top" src={props.urlToImage} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                                {props.authorex}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex ms-5">
                        <Button className="m-3 ms-5" type="button" variant="primary" href={props.url} target="blank"  >Read Now</Button>
                        <Button className="m-3" type="button" variant="primary" onClick={() => {saveNews()}} >Read Later</Button>
                    </div>

                </Card.Footer>
            </Card>
        </div>
    )
}

export default DisplayCard