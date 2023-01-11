import { AnnouncementBar } from "../../components/LandingPage/AnnouncementBar/AnnouncementBar";
import { Banner } from "../../components/LandingPage/Banner/Banner";
import { HotDeals } from "../../components/LandingPage/HotDeals";
import { SaleItem } from "../../components/LandingPage/SaleItem";
import { collectionsData } from "../../mockData/collectionData";

export const LandingPage = () => {
  return (
    <main className="maincontent">
      <Banner />
      <AnnouncementBar />
      <HotDeals />
      <SaleItem saleData={collectionsData} />
    </main>
  );
};
