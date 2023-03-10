import { AnnouncementBar } from "../../components/LandingPage/AnnouncementBar/AnnouncementBar";
import { Banner } from "../../components/LandingPage/Banner/Banner";
import { CategoriesView } from "../../components/LandingPage/CategoriesView";
import { ExploreView } from "../../components/LandingPage/ExploreView";
import { HotDeals } from "../../components/LandingPage/HotDeals";
import { InstaFeed } from "../../components/LandingPage/InstaFeeds";
import { RecentlyViewed } from "../../components/LandingPage/RecentlyViewed";
import { SaleItem } from "../../components/LandingPage/SaleItem";
import { ShopFeatures } from "../../components/LandingPage/ShopFeatures";
import {
  featureProducts,
  hotDealProducts,
  hotDealsCollection,
  instaProducts,
  shopByCollection,
  shopByProducts,
} from "../../redux/slices/home/home.selector";
import { useAppSelector } from "../../redux/store";

export const LandingPage = () => {
  const { data: shopByCollectionData } = useAppSelector(shopByCollection);
  const { data: hotDealsData } = useAppSelector(hotDealsCollection);
  const { data: shopByProductsData } = useAppSelector(shopByProducts);

  const { data: featureProductsData } = useAppSelector(featureProducts);
  const { data: hotDeals } = useAppSelector(hotDealProducts);
  const { data: instaData } = useAppSelector(instaProducts);

  return (
    <main className="maincontent">
      <Banner />
      <AnnouncementBar />
      <HotDeals hotDealsData={hotDealsData} />
      <CategoriesView collectionsData={shopByCollectionData} />
      <ExploreView shopByProductsData={shopByProductsData} />
      <SaleItem saleData={hotDeals?.productdto} />
      <RecentlyViewed sliderData={featureProductsData?.productdto} />
      <ShopFeatures />
      <InstaFeed instaData={instaData?.productdto} />
    </main>
  );
};
