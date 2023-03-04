import { useLocation } from "react-router-dom";
import { ShopByCollection } from "../../components/ShopBy/ShopByCollection";

export const ShopBy = () => {
  let location = useLocation();
  console.log(location.state.collectionName, location.state.name);

  return <ShopByCollection />;
};
