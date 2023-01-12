import { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  IProduct,
  IProductImage,
} from "../../../redux/slices/collection/collection.type";
import { ImageSkeleton } from "./ImageSkeleton";
import "./ImageViewer.scss";

interface IProps {
  product: IProduct;
}

export const ImageViewer = (props: IProps) => {
  const { productImages } = props.product;

  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const [slider1, setSlider1] = useState<any>(null);
  const [slider2, setSlider2] = useState<any>(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settingsMain = {
    fade: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "main-slider",
    asNavFor: ".slider-nav",
    adaptiveHeight: true,
  };

  const settingsThumbs = {
    speed: 500,
    vertical: true,
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    focusOnSelect: true,
    verticalSwiping: true,
    asNavFor: ".slider-for",
    className: "slick-thumb",
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1023,
        dots: true,
        settings: {
          // slidesToShow: 6,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="ProductImages ">
      <Slider
        {...settingsMain}
        asNavFor={nav2}
        ref={(slider) => setSlider1(slider)}
      >
        {productImages?.map((slide: IProductImage) => (
          <div className="ProductImage__Grid" key={slide.id}>
            <ImageSkeleton slide={slide} />
          </div>
        ))}
      </Slider>

      <Slider
        {...settingsThumbs}
        asNavFor={nav1}
        ref={(slider) => setSlider2(slider)}
      >
        {productImages?.map((slide: IProductImage) => (
          <div className="ProductImage__Grid" key={slide.id}>
            <ImageSkeleton slide={slide} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
