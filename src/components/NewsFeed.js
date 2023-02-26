import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news16.p.rapidapi.com/news/top/5",
      headers: {
        "X-RapidAPI-Key":
          process.env.REACT_APP_RAPID_API_KEY ||
          "8d7a6496c5mshfd261d37b59d95dp11ae08jsn87d40cf74972",
        "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(articles);

  const first7Articles = articles?.slice(0, 7);

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {first7Articles &&
        first7Articles.map((article, _index) => (
          <div key={_index}>
            <a href={article.url}>
              <p>{article.title}</p>
            </a>
          </div>
        ))}
    </div>
  );
};

export default NewsFeed;
