import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MyLoader } from "./Myloader";
import { Link } from "react-router-dom";

var ItemStyled = styled.div`
  width: 70%;
  font-size: 1.1em;
  text-align: left;
  color: #565656;
  margin: 10px auto;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
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
          <a href={content.url} style={{ color: "Black" }} target="_blank">
            {content.title} | {content.type}
          </a>
          <Link to={`./${content.id}`}>
            <span
              style={{
                float: "right",
                backgroundColor: "#7052fc",
                padding: "2px 10px",
                color: "white",
                borderRadius: "5px"
              }}
            >
              Open
            </span>
          </Link>
        </ItemStyled>
      )}
    </>
  );
};

export default Item;
