import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const Homepage = () => {
  return (
    <div>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/BlogPost-Image-71x.max-1000x1000.jpg" />
        <Card.Body>
          <Card.Title>Global News</Card.Title>
          <Card.Text>
            News Feed - Best relevent news from 8000+ resources around the globe.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>
        
    </div>
  )
}

export default Homepage