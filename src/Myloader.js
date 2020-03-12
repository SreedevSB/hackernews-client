import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader viewBox="0 0 100 3.8" style={{ marginBottom: "10px" }}>
    <rect x="10%" y="0px" width="80%" height="15px" />
  </ContentLoader>
);

export default MyLoader;
