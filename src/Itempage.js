import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ItemPageLoader } from "./Myloader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Itempage = () => {
  let { postid } = useParams();
  const [content, setContent] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/item/" + postid + ".json")
      .then(r => r.json())
      .then(rjson => {
        //console.log(rjson);
        setContent(rjson);
        setLoaded(true);
      });
  }, [postid]);

  return (
    <>
      {!loaded && <ItemPageLoader />}

      {loaded && (
        <>
          <h1>{content.title}</h1>
          <h3>
            {content.by} | {content.score}
          </h3>
          <h3>
            <a href={content.url}>Link</a>
          </h3>
        </>
      )}
    </>
  );
};

export default Itempage;
