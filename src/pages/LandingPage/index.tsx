import React from "react";
import { AnnouncementBar } from "../../components/LandingPage/AnnouncementBar/AnnouncementBar";
import { Banner } from "../../components/LandingPage/Banner/Banner";

export const LandingPage = () => {
  return (
    <main className="maincontent">
      <Banner />
      <AnnouncementBar />
    </main>
  );
};
