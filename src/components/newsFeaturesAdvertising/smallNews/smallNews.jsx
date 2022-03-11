import "./smallNews.css"
import image from "./images/Josh-Hart.png"
import {useState, useEffect} from "react"

export function SmallNews() {
    const apiKey = 'https://ligabasketbackend.herokuapp.com/api/news';
  const [news, setNews] = useState([]);
  const [table, setTable] = useState([]);
  const [search, setSearch] = useState("");

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
        <div id="noticias">
            <div className="news-container">
                <div className="half-news">
                    {news.map((news, _id) =>(
                        <div className="small-news" key={_id}>
                            <img className="small-news-picture" src={news.imgUrl}/>
                            <div className="small-news-element">
                                <a className="title" href="#">{news.title}</a>
                                <p className="dateTime">{news.createdAt}</p>
                            </div>
                        </div>
                    ))}
                    <div className="small-news" >
                        <img className="small-news-picture" src={image}/>
                        <div className="small-news-element">
                            <a className="title" href="#">Josh Hart rompe un nuevo record</a>
                            <p className="dateTime">2021-28-03</p>
                        </div>
                    </div>
                    
                </div>

                
            </div>
        </div>     
    )
}