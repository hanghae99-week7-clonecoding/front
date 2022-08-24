import React from "react";
import Layout from "../components/common/Layout";
import Detail from "../components/features/Detail";
import { getCookie } from "../res/cookie";

const DetailPage = () => {
  const token = getCookie("jwtToken");
  const userInfo = getCookie("userChannel");
  const userImg = getCookie("userImg");
  return (
    <Layout>
      <Detail userInfo={userInfo} userImg={userImg} token={token} />
    </Layout>
  );
};

export default DetailPage;
