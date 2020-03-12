import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader viewBox="0 0 100 3.8" style={{ marginBottom: "10px" }}>
    <rect x="10%" y="0px" width="80%" height="15px" />
  </ContentLoader>
);

const ItemPageLoader = () => (
  <ContentLoader viewBox="0 0 100 100" style={{ marginBottom: "10px" }}>
    <rect x="10%" y="0px" width="80%" height="15px" />

    <rect x="10%" y="0px" width="80%" height="5px" />
    <rect x="10%" y="0px" width="80%" height="5px" />
  </ContentLoader>
);

export { MyLoader, ItemPageLoader };
