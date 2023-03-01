import { useLocation, useParams } from "react-router-dom";
import { ShopByCollection } from "../../components/ShopBy/ShopByCollection";
import { ShopByProducts } from "../../components/ShopBy/ShopByProducts";

export const ShopBy = () => {
  let { name } = useParams();

  let location = useLocation();
  console.log(location.state.collectionName, location.state.name);

  return (
    <>{name === "collection" ? <ShopByCollection /> : <ShopByProducts />}</>
  );
};
