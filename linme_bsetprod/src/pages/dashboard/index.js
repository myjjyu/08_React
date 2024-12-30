import React, { memo } from "react";

import styled from "styled-components";

import BestProdDashBoard from "./BestProdDashBoard";
import SalesDashboard from "./SalesDashboard";
import NewMemberDashBoard from "./NewMemberDashBoard";

import mq from "../../components/MediaQuery";

const DashboardContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
`;

const Dashboard = memo(() => {
  return (
    <DashboardContainer>
      {/*1. 총매출 집계 */}
      <SalesDashboard />
      {/*2. 신규회원 집계 */}
      <NewMemberDashBoard />
      {/*3. 인기상품 집ㅖ */}
      <BestProdDashBoard />
      {/*4. 카테고리 집계 */}
    </DashboardContainer>
  );
});

export default Dashboard;
