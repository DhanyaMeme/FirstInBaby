import { AnnouncementBar } from "../../components/LandingPage/AnnouncementBar/AnnouncementBar";
import { Banner } from "../../components/LandingPage/Banner/Banner";
import { CategoriesView } from "../../components/LandingPage/CategoriesView";
import { ExploreView } from "../../components/LandingPage/ExploreView";
import { HotDeals } from "../../components/LandingPage/HotDeals";
import { InstaFeed } from "../../components/LandingPage/InstaFeeds";
import { RecentlyViewed } from "../../components/LandingPage/RecentlyViewed";
import { SaleItem } from "../../components/LandingPage/SaleItem";
import { collectionsData } from "../../mockData/collectionData";
import { collection } from "../../redux/slices/home/home.selector";
import { useAppSelector } from "../../redux/store";

export const LandingPage = () => {
  const collections = useAppSelector(collection);
  return (
    <main className="maincontent">
      <Banner />
      <AnnouncementBar />
      <HotDeals />
      <CategoriesView collectionsData={collections.data} />
      <ExploreView />
      <SaleItem saleData={collectionsData.slice(0, 6)} />
      <RecentlyViewed sliderData={collectionsData} />
      <InstaFeed instaData={collectionsData} />
    </main>
  );
};
