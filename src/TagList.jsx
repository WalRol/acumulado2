import React, { useState, useEffect } from 'react';
import { getTags } from './Tags/getTags';
import getArticles from './services/getArticles';
import { Link } from 'react-router-dom';

export default function TagList () {
  const [tags, setTags] = useState([]);
  const [data, setData] = useState([]);
  

useEffect(() => {
  async function fetchData() {
    const result = await getArticles();
    setData(result);
    setTags(getTags(result));
  }
  fetchData();
}, []);

  return (
    <>
<div>
  <h2>Artículos</h2>
  <ul>
    {console.log("data",data)}
    {data.map((article) => (
      article.subtype === "7" && (
        <li key={article.id}>
           {/* <Link href={`/articulo/${article.id}`}>  */}
            <a>
              <img src={article.promo_items.basic.url} alt={article.headlines.basic} />
              <h3>{article.headlines.basic}</h3>
              <span>{new Date(article.display_date).toLocaleDateString("es-AR", { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </a>
          {/* </Link>  */}
        </li>
      )
    ))}
  </ul>
</div>

    </>
  );
};
