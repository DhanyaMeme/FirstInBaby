import { useParams } from "react-router-dom";
import { ShopByCollection } from "../../components/ShopBy/ShopByCollection";
import { ShopByProducts } from "../../components/ShopBy/ShopByProducts";

export const ShopBy = () => {
  let { name } = useParams();

  return (
    <>{name === "collection" ? <ShopByCollection /> : <ShopByProducts />}</>
  );
};
