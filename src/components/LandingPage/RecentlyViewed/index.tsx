import { FC } from "react";
import Slider from "react-slick";
import { IF } from "../../../ui_kits/IF";
import { ProductItem } from "../../ProductItem/ProductItem";
import { Collections } from "../__common__/Collections/Collections";
import { IProduct } from "../../../redux/slices/collection/collection.type";
import { ArrowNextIcon, ArrowPrevIcon } from "../../../assets/icons/Arrow.icon";
import { IconButton } from "../../../ui_kits/Buttons/IconButton/IconButton.component";
import "./Style.scss";

interface IProps {
  sliderData: IProduct[];
}

export const RecentlyViewed: FC<IProps> = (props: IProps) => {
  const { sliderData = [] } = props;

  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: (
      <div>
        <IconButton isSmall>
          <ArrowNextIcon />
        </IconButton>
      </div>
    ),
    prevArrow: (
      <div>
        <IconButton isSmall>
          <ArrowPrevIcon />
        </IconButton>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Collections heading="Recently Viewed">
      <IF condition={sliderData.length > 0}>
        <div className="ProductList__Slider">
          <Slider {...settings}>
            {sliderData.map((pdt: IProduct) => (
              <div className="Grid__Cell" key={pdt.id}>
                <ProductItem product={pdt} isVisibleFav={false} />
              </div>
            ))}
          </Slider>
        </div>
      </IF>
    </Collections>
  );
};
