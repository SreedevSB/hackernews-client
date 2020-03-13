import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    foregroundColor="#d6dfef"
    viewBox="0 0 100 3.8"
    style={{ marginBottom: "5px" }}
  >
    <rect x="15%" y="0px" width="70%" height="15px" />
  </ContentLoader>
);

const ItemPageLoader = () => (
  <ContentLoader viewBox="0 0 100 180" style={{ marginBottom: "10px" }}>
    <rect x="15%" y="0px" width="70%" height="15px" />

    <rect x="15%" y="100px" width="70%" height="5px" />
    <rect x="15%" y="120px" width="70%" height="5px" />
  </ContentLoader>
);

export { MyLoader, ItemPageLoader };
