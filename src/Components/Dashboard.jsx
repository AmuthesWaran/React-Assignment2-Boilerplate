import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DisplayCard from './DisplayCard'

const Dashboard = () => {

    const [articles, setArticles] = useState([])
    const[savedNewsdb,setSavedNewsdb] = useState([]);
    


    // console.log(articles[0]); 
    // 0cca92595de748669aab34ea7db5fd1e
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=6e39dd6c131e4efe9c956648205bd79a`)
            .then(response =>
                setArticles(response.data.articles)
                // console.log(response.data.articles)
            )
            .catch(error => console.log(error.message))

    })

    const savedNews = (newCard) => {

        axios.post(`http://localhost:3000/savedNews`,  
                newCard, { headers: { 'Content-Type': 'application/json' }})
             .then((response)=>{
                if (response.status === 201) {
                    setSavedNewsdb([...savedNewsdb, response.data]);
                  }
                // console.log(response);
                     })
             .catch((err)=>{
                console.log(err);
             })

    }



    return (

        <div className="container">
            <div className="row">

                {
                    articles.map((article) => (
                        <div className='col-sm-6 col-md-4' key={article.url}>


                            <DisplayCard

                                author={article.author}
                                authorex={article.source.name}
                                title={article.title}
                                description={article.description}
                                url={article.url}
                                urlToImage={article.urlToImage}
                                content={article.content}
                                readLater = {savedNews}
                            />


                        </div>
                    ))
                }



            </div>
        </div>

        // <div className='container'>
        //     <div className='row'>
        //         {articles.map((article) => (
        //             <div className="col-md-3">

        //                 <Card style={{ width: '18rem' }}>
        //                     <Card.Img variant="top" src={article.urlToImage} />
        //                     <Card.Body>
        //                         <Card.Title>{article.title}</Card.Title>
        //                         <Card.Text>
        //                             {article.author}
        //                         </Card.Text>
        //                         <Button variant="primary">Go somewhere</Button>
        //                     </Card.Body>
        //                 </Card>

        //             </div>
        //         ))}
        //     </div>
        //  </div>
    )
}

export default Dashboard