import {useEffect,useState} from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


const NewsList = (props) => {
    const {category, searchTerms} = props;
    const {news, setNews} = useState([]);

    useEffect(() =>{
        const fetchNews = async () =>{
        let url=`https://gnews.io/api/v4/top-headlines?lang=en`;

        if (category){
            url+=`$topic=${category}`;
        }
        if(searchTerms){
            url += `$q=${searchTerms}`;
        }
        

        url +=`$tokwnt={process.env.React_APP_GNEWS_API_KEY}`;
        const responce = await fetch(url);
       const data= await responce.json();
       console.log(data);
       setNews(data.article);
    };

        fetchNews();
    });
  return (
    <Container>
      <Row>
        {news.map((article) => (
          <Col xs={12} md={6} lg={4} key={article.url}>
          <card>
            <Card.Img src={article.image} variant="top" />
            <Card.Body>
                <Card.Title>{article.Title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link href={article}>Read More</Card.Link>
            </Card.Body>

            
          </card>
          </Col>
        ))}
      </Row>
    </Container>
  )

    
  
};

export default NewsList