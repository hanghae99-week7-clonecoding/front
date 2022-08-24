import React from "react";
import Layout from "../components/common/Layout";
import Detail from "../components/features/Detail";
import Comment from "../components/features/Comment";
import { useCookies } from "react-cookie";

const DetailPage = () => {
  const [cookies] = useCookies(["jwtToken"]);
  const userChannel = window.localStorage.getItem("userChannel");

  return (
    <Layout>
      <Detail userInfo={userChannel} token={cookies.jwtToken} />
    </Layout>
  );
};

export default DetailPage;
