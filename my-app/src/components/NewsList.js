import {useEffect,useState} from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';


const NewsList = (props) => {
    const {category, searchTerms} = props;

    useEffect(() =>{
        const fetchNews = async () =>{
        let url=``;

        if (category){
            url+=`$topic=${category}`;
        }
        if(searchTerms){
            url += `$q=${searchTerms}`;
        }
        

        url +=`$tokwnt={process.env.React_APP_GNEWS_API_KEY}`;
        const responce = await fetch(url);
       const data= await Response.json();
    };

        fetchNews();
    });
  return (
    <div>NewsList</div>
  )
};

export default NewsList