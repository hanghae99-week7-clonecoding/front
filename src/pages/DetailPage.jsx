import React from "react";
import Layout from "../components/common/Layout";
import Detail from "../components/features/Detail";
import Comment from "../components/features/Comment";
import { getCookie } from "../res/cookie";

const DetailPage = () => {
  const token = getCookie("jwtToken");
  const userImg = getCookie("userChannel");
  return (
    <Layout>
      <Detail userInfo={userImg} token={token} />
    </Layout>
  );
};

export default DetailPage;
