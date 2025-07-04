import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";

import TrendProperties from "@/libs/components/homePage/TrendProperties";
import PopularProperties from "@/libs/components/homePage/PopularProperties";
import Advertisement from "@/libs/components/homePage/Advertisement";
import TopProperties from "@/libs/components/homePage/TopProperties";
import TopAgents from "@/libs/components/homePage/TopAgents";

const Home: NextPage = () => {
  return (
    <Stack className="home-page">
      <TrendProperties />
      <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents />
    </Stack>
  );
};

export default withLayoutMain(Home);
