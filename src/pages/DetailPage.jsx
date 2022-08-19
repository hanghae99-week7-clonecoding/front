import React from "react";
import Layout from "../components/common/Layout";
import Detail from "../components/features/Detail";
import Comment from "../components/features/comment";

const DetailPage = () => {
  return (
    <Layout>
      <Detail />
      <Comment />
    </Layout>
  );
};

export default DetailPage;
