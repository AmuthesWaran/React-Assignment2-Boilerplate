import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const SavedNews = () => {

  const [getSavedNews, setGetSavedNews] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/savedNews`)
      .then(response =>
        setGetSavedNews(response.data)
        // console.log(response.data)
      )
      .catch(error => console.log(error.message))

  })


  const deleteNews = (id) => {

    axios.delete(`http://localhost:3000/savedNews/${id}`)
    .then(res=> {console.log(res)} )
    .catch(err=> {console.log(err)} )
  }


  const deleteAll = () => {
    for (let i = 0; i < getSavedNews.length; i++) {
      var id = getSavedNews[i].id;
      console.log(id);
      
      axios.delete(`http://localhost:3000/savedNews/${id}`)
    .then(res=> {console.log(res)} )
    .catch(err=> {console.log(err)} )



    }
  }
  // console.log(getSavedNews.length);




  return (
    <div className="container">
      <div className="row">
        <Button onClick={deleteAll}  >Delete All</Button>
      {getSavedNews.map((savedNews) => (
        <div className='col-sm-6 col-md-4' key={savedNews.url}>
        <Card style={{ Width: "30rem", height: "30rem", margin: "1rem" }} >
          <Card.Img variant="top" src={savedNews.urlToImage} />
          <Card.Body>
            <Card.Title>{savedNews.title}</Card.Title>
            <Card.Text>
                {savedNews.authorex}
    </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex ms-5">
              <Button className="m-3 ms-5" type="button" variant="primary" href={savedNews.url} target="blank" >Read Now</Button>
              <Button className="m-3 ms-5" type="button" variant="danger" onClick={() => deleteNews(savedNews.id)} >Delete</Button>
            </div>

          </Card.Footer>
        </Card>
        </div>
      ))}


      </div>
    </div>
  )
}

export default SavedNews