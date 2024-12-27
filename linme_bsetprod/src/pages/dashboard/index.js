import React, { memo } from "react";

import styled from "styled-components";

import BestProdDashBoard from "./BestProdDashBoard";

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Dashboard = memo(() => {
  return (
    <DashboardContainer>
      <BestProdDashBoard />
    </DashboardContainer>
  );
});

export default Dashboard;
