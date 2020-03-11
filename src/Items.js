import React, { useState, useEffect } from "react";
import Item from "./Item";

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

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      alert("scrolltop");
      setPagecount({
        ...pagecount,
        end: pagecount.end + 10
      });
    }
  };
  // var loadItems = (offset, count) => {
  //   return items
  //     .slice(offset, count)
  //     .map((a, key) => <Item posid={a} key={key} />);
  // };

  return (
    <>
      <h1>HN</h1>
      {items.slice(pagecount.start, pagecount.end).map((a, keyq) => (
        <Item postid={a} key={a} />
      ))}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Items;
