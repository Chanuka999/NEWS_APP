// import {useEffect,useState} from 'react';
 import { Card, Col, Container, Row } from 'react-bootstrap';


// const NewsList = (props) => {
//     const {category, searchTerms} = props;
//     const [news, setNews] = useState([]);

//     useEffect(() =>{
//         const fetchNews = async () =>{
//         let url = 'https://gnews.io/api/v4/top-headlines?lang=en';

//         if (category){
//             url +=`&topic=${category}`;
//         }
//         if(searchTerms){
//             url += `&q=${searchTerms}`;
//         }
        

//         url +=`&token={process.env.React_APP_GNEWS_API_KEY}`;
//         // let url = "'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + 1d1e4ed490cff6156a25e0e34f662208";

//         const responce = await fetch(url);
//        const data= await responce.json();
//        setNews(data.article );
//     };

//         fetchNews();
//     }, [searchTerms, category]);
   
//   return (
//     <Container>
//       <Row>
//         {news?.map((article) => (
//           <Col xs={12} md={6} lg={4} key={article.url}>
//           <Card>
//             <Card.Img src={article.image} variant="top" />
//             <Card.Body>
//                 <Card.Title>{article.Title}</Card.Title>
//                 <Card.Text>{article.description}</Card.Text>
//                 <Card.Link href={article.url}>Read More</Card.Link>
//             </Card.Body>

            
//           </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   )

    
  
// };

// export default NewsList

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = '1d1e4ed490cff6156a25e0e34f662208'; // Replace with your actual API key from GNews
      const apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en`;

      try {
        const response = await axios.get(apiUrl);
        console.log(response.data); // Check the console to see the API response
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchNews();
  }, []);


  return (
    <Container>
           <Row>
             {articles?.map((article) => (
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
  );
};

export default NewsList;
