import { AnnouncementBar } from "../../components/LandingPage/AnnouncementBar/AnnouncementBar";
import { Banner } from "../../components/LandingPage/Banner/Banner";
import { HotDeals } from "../../components/LandingPage/HotDeals";
import { InstaFeed } from "../../components/LandingPage/InstaFeeds";
import { RecentlyViewed } from "../../components/LandingPage/RecentlyViewed";
import { SaleItem } from "../../components/LandingPage/SaleItem";
import { collectionsData } from "../../mockData/collectionData";

export const LandingPage = () => {
  return (
    <main className="maincontent">
      <Banner />
      <AnnouncementBar />
      <HotDeals />
      <SaleItem saleData={collectionsData.slice(0, 6)} />
      <RecentlyViewed sliderData={collectionsData} />
      <InstaFeed instaData={collectionsData} />
    </main>
  );
};
