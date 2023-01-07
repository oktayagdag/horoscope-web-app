import axios from "axios";
import {useParams} from 'react-router-dom';
import React from "react";



export default function App() {
 const {zodiacName} = useParams()
  
  const [post, setPost] = React.useState(null);
  const baseURL = "http://localhost:8000/api/ozellikler/"+zodiacName;

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(baseURL)
    });
  }, []);

  if (!post) return null;



  return (  
    <div className="container">     
 
{post.data.map(element => (   
    <div class="my-1 p-1 bg-white rounded box-shadow">
      <div class="media text-muted pt-1">
       <div class="media-body pb-1 mb-0 small lh-125 border-bottom border-gray">
       <div class="d-flex justify-content-between align-items-center w-100">
              <strong class="text-black">{element.aciklama}</strong>
              <a href="/">{element.tarih}</a>
            </div>
            <span class="d-block">@AnonimUser</span> 
       </div>  
      </div>  
    </div>
         ))}   
     
    </div>

      
  );  
}  
