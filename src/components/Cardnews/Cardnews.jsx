import React, {useState, useEffect} from "react";
import "./Cardnews.css";
import HeaderNews from "../HeaderNews/HeaderNews";
import Footer from "../Footer/Footer"

export function Cardnews() {

  const apiKey = 'https://ligabasketbackend.herokuapp.com/api/news';
  const [news, setNews] = useState([]);
  const [table, setTable] = useState([]);
  const [search, setSearch] = useState("");

  const textValue = (obj) => {
    let result = table.filter((team) => {
      if(news.title.toString().toLowerCase().includes(obj.toLowerCase()) 
      ){
        return news;
      }
    })
    setNews(result)
  }
   
  const handleSearch = (e) => {
    setSearch(e.target.value)
    textValue(e.target.value)
  }
  
  useEffect(() => {
    fetch(apiKey)
    .then((res) => 
      res.json())
      .then((data) => {
      setTable(data);
      setNews(data);
    });
  }, []);

  console.log(news)
  
    return (
    <>
      <HeaderNews/> 
      <div className="wrapper">
       <h1>Noticias</h1>
        <div class="container">
        {news.map((news, _id) =>(
          <div class="card" key={_id}>
            <div class="card-header">
              <img src={news.imgUrl} alt="rover" />
            </div>    
              <h4>
                {news.title}
              </h4>
              <h6>{news.subtitle}</h6>
              <p>{news.info}</p>   
          </div>     
        ))}
       </div>
        </div>
      <Footer />
    </>
  )
}
