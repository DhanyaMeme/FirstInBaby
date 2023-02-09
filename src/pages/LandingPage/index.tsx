import { AnnouncementBar } from "../../components/LandingPage/AnnouncementBar/AnnouncementBar";
import { Banner } from "../../components/LandingPage/Banner/Banner";
import { CategoriesView } from "../../components/LandingPage/CategoriesView";
import { ExploreView } from "../../components/LandingPage/ExploreView";
import { HotDeals } from "../../components/LandingPage/HotDeals";
import { InstaFeed } from "../../components/LandingPage/InstaFeeds";
import { RecentlyViewed } from "../../components/LandingPage/RecentlyViewed";
import { SaleItem } from "../../components/LandingPage/SaleItem";
import { collectionsData } from "../../mockData/collectionData";
import { IProduct } from "../../redux/slices/collection/collection.type";
import {
  collection,
  featureProducts,
  hotProducts,
} from "../../redux/slices/home/home.selector";
import { useAppSelector } from "../../redux/store";

export const LandingPage = () => {
  const collections = useAppSelector(collection);
  const { data: hotDeals } = useAppSelector(hotProducts);
  const { data: featureProductsData } = useAppSelector(featureProducts);

  return (
    <main className="maincontent">
      <Banner />
      <AnnouncementBar />
      <HotDeals />
      <CategoriesView collectionsData={collections.data} />
      <ExploreView />
      <SaleItem saleData={hotDeals?.slice(0, 6)} />
      <RecentlyViewed sliderData={(featureProductsData as IProduct[]) || []} />
      <InstaFeed instaData={collectionsData} />
    </main>
  );
};
