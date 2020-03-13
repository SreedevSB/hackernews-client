import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ItemPageLoader } from "./Myloader";
import Comment from "./Comment";
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
          <h1 style={{ marginTop: "100px", padding: "20px" }}>
            {content.title}
          </h1>
          <h3>
            {content.by} | {content.score} | {content.type} | &nbsp;
            <a href={content.url} style={{ color: "blue" }}>
              Link
            </a>
          </h3>
          <h3 />

          {content.kids.map((a, key) => (
            <Comment commentid={a} />
          ))}
        </>
      )}
    </>
  );
};

export default Itempage;
