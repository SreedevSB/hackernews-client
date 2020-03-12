import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MyLoader from "./Myloader";

var ItemStyled = styled.div`
  width: 80%;
  font-size: 0.8em;
  color: white;
  margin: 10px auto;
  padding: 10px;
  background-color: #3d3d3d;
`;

var Item = ({ postid, key }) => {
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
      {!loaded && <MyLoader />}
      {loaded && (
        <ItemStyled>
          <span>{content.score}</span>&nbsp;&nbsp;&nbsp;
          <a href={content.url} target="_blank">
            {content.title}
          </a>
        </ItemStyled>
      )}
    </>
  );
};

export default Item;
