import {useEffect,useState} from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


const NewsList = (props) => {
    const {category, searchTerms} = props;
    const [news, setNews] = useState([]);

    useEffect(() =>{
        const fetchNews = async () =>{
        let url = 'https://gnews.io/api/v4/top-headlines?lang=en';

        if (category){
            url+=`&topic=${category}`;
        }
        if(searchTerms){
            url += `&q=${searchTerms}`;
        }
        

        url +=`&token={process.env.React_APP_GNEWS_API_KEY}`;
        // let url = "'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + 1d1e4ed490cff6156a25e0e34f662208";

        const responce = await fetch(url);
       const data= await responce.json();
       setNews(data.article );
    };

        fetchNews();
    }, [searchTerms, category]);
  return (
    <Container>
      <Row>
        {news?.map((article) => (
          <Col xs={12} md={6} lg={4} key={article.url}>
          <Card>
            <Card.Img src={article.image} variant="top" />
            <Card.Body>
                <Card.Title>{article.Title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link href={article.url}>Read More</Card.Link>
            </Card.Body>

            
          </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )

    
  
};

export default NewsList