import React, { useEffect, useState } from 'react';
import { getTags } from '../../utils/getTags';
import getArticles from '../../services/getArticles';




export default function Banner() {

  const [tags, setTags] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getArticles();
      setTags(getTags(result));
      setData(result);
    }
    fetchData();
  }, []);
  return (
    <>

      <div className="banner w-100 --bg-banner">
        {/* <div className="banner --top --desktop"></div> 
         <div className="banner --top --tablet"></div> 
         <div className="banner --top --mobile"></div> */}
      </div>
      <div className="banner w-100 --bg-banner">
        {/* <div className="banner --sticky --mobile"></div> */}
      </div>

      <div className="lay-sidebar">
        <div className="sidebar__main">
          <div className="row">
            <div className="com-titleWithfollow hlp-marginBottom-15">
              <h1 className="com-title-section-xl hlp-marginBottom-40"
              >Acumulado Grilla</h1>
            </div>
          </div>
          <div className="row">
            
               <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
               {tags.map((tag) => (
               <a href={`${tag.slug}`} className="">{tag.text}</a>
               ))}
             </div>
            
           
          </div>
          <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
          {data.map((article) => (
      article.subtype === "7" &&  (
        <article className="mod-caja-nota lugares w-100-mobile">
              <section className="cont-figure" >
                <a href="" className="figure">
                  <picture id="" className="content-pic picture">
                    <img src={article.promo_items.basic.url} alt={article.headlines.basic} className="content-img" />
                  </picture>
                </a>
              </section>
              <div className="mod-caja-nota__descrip">
                <h2 className="com-title-acu"><a href={`https://www.lanacion.com.ar${article.website_url}`}>{article.headlines.basic}</a></h2>
                <h4 className="com-date">{new Date(article.display_date).toLocaleDateString("es-AR", { year: 'numeric', month: 'long', day: 'numeric' }).replace(/^([a-z])|\s+([a-z])/g, function ($1) { return $1.toUpperCase(); })}</h4>
                
              </div>
            </article>
      )
    ))}
            
          </section>
          <section className="row">
            <div className="col-12 hlp-text-center hlp-margintop-40">
              <button className="--btn --secondary"
              >MÁS NOTAS DE ACUMULADO GRILLA</button>
            </div>
          </section>
        </div>

   
      </div>
    </>
  );
};

