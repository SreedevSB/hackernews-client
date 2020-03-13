import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ContentLoader from "react-content-loader";
import { MyLoader, ItemPageLoader } from "./Myloader";

const CommentStyled = styled.div`
  width: 70%;
  margin: 10px auto 0px;
  padding: 20px;

  ${props =>
    props.level > 0 &&
    css`
      width: 90%;
      margin: 20px 0% 0px 5%;
      padding: 0px 0px 0px 10px;
      border-left: 2px solid #d0d0d4;
    `};
  background-color: white;
  font-size: 15px;
  text-align: left;
`;

const Comment = ({ commentid, level = 0 }) => {
  const [comment, setComment] = useState(false);
  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/item/" + commentid + ".json")
      .then(r => r.json())
      .then(c => setComment(c));
  }, [commentid]);
  return (
    <>
      {!comment && <MyLoader />}
      {comment && (
        <CommentStyled level={level}>
          <span dangerouslySetInnerHTML={{ __html: comment.text }} />
          &nbsp;| &nbsp;
          <span
            style={{
              backgroundColor: "#81d6f3",
              color: "white",
              padding: "0px 10px",
              borderRadius: "2px"
            }}
          >
            {comment.by}
          </span>
          {comment.kids &&
            comment.kids.map((a, key) => {
              return <Comment commentid={a} level={level + 1} />;
            })}
        </CommentStyled>
      )}
    </>
  );
};

export default Comment;
