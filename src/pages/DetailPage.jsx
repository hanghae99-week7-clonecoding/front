import React from "react";
import Layout from "../components/common/Layout";
import Detail from "../components/features/Detail";
import Comment from "../components/features/Comment";
import { useCookies } from "react-cookie";

const DetailPage = () => {
  const [cookies] = useCookies(["jwtToken"]);
  return (
    <Layout>
      <Detail token={cookies.jwtToken}>
        <Comment token={cookies.jwtToken} />
      </Detail>
    </Layout>
  );
};

export default DetailPage;
