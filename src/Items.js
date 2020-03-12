import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Item from "./Item";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const LoadButton = styled.div`
  width: 80%;
  padding: 10px;
  border: 2px solid black;
  margin: 0px auto;

  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

var Items = () => {
  const [items, setItems] = useState([]);
  const [pagecount, setPagecount] = useState({ start: 0, end: 10 });
  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(r => r.json())
      .then(rjson => {
        //console.log(rjson);
        setItems(rjson);
      });
  }, []);

  // window.onscroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     alert("scrolltop");
  //     setPagecount({
  //       ...pagecount,
  //       end: pagecount.end + 10
  //     });
  //   }
  // };

  const loadItems = () => {
    setPagecount({ ...pagecount, end: pagecount.end + 10 });
  };
  return (
    <>
      <h1>HN</h1>
      {items.slice(pagecount.start, pagecount.end).map((a, keyq) => (
        <Item postid={a} key={a} />
      ))}
      <br />
      <LoadButton onClick={loadItems}>Load More</LoadButton>
      <br />
      <br />
      <br />
    </>
  );
};

export default Items;
