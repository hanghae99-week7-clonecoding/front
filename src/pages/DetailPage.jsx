import React from "react";
import Layout from "../components/common/Layout";
import Detail from "../components/features/Detail";
import Comment from "../components/features/Comment";

const DetailPage = () => {
  return (
    <Layout>
      <Detail>
        <Comment />
      </Detail>
    </Layout>
  );
};

export default DetailPage;
