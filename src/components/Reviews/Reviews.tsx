import "./Review.scss";
import { StarRating } from "./StarRating";
import { ReviewItem } from "./ReviewItem";
import { TextButton } from "../../ui_kits/Buttons/TextButton/TextButton.component";
import { ReviewsOverview } from "./ReviewsOverview/ReviewsOverview";
import { useAppDispatch } from "../../redux/store";
import { openModal } from "../../redux/slices/modal/modal.slice";
import { useAuth } from "../../contexts/AuthContext";
import toastMessage from "../../utils/toastMessage";
import {
  IProductData,
  IProductReview,
} from "../../redux/slices/collection/collection.type";
import { FC } from "react";
import { caluclatePercentage, groupByValueLength } from "../../utils/generics";
import { isEmpty } from "../../utils/script";
import { IF } from "../../ui_kits/IF";

interface IProps {
  product: IProductData;
}

export const Reviews: FC<IProps> = (props: IProps) => {
  const { reviews } = props.product;

  const { user } = useAuth();
  const dispatch = useAppDispatch();

  const reviewsLength = reviews?.length || 0;
  // const averagRating =
  //   reviews?.reduce((acc, review: IProductReview) => acc + review.rating, 0) /
  //   reviewsLength;

  const averagRating = 5;

  const groupedList = groupByValueLength(reviews || [], "rating");

  const handleWriteReview = () => {
    if (user) {
      dispatch(
        openModal({
          modalType: "ReviewModal",
        })
      );
    } else {
      toastMessage("Login", "warning");
    }
  };

  return (
    <div className="RatingSummary">
      <div className="RatingWdgt__Header">
        <div className="RatingWdgt__Summary">
          <StarRating rating={averagRating || 0} />
          <div>Based on {reviews?.length} reviews</div>
        </div>
        <IF condition={!isEmpty(reviews)}>
          <div className="RatingWdgt__ReviewsSummary">
            {Array.from(Array(5).keys()).map((item: number) => {
              const itemIndex = item + 1;
              const groupListKey = groupedList[itemIndex] || 0;
              const percentage = caluclatePercentage(
                groupListKey,
                reviewsLength
              ).toFixed();
              return (
                <ReviewsOverview
                  rating={itemIndex}
                  count={groupListKey}
                  percentage={`${percentage} %`}
                />
              );
            })}
          </div>
        </IF>
        <div className="RatingWdgt__Action">
          <TextButton isSmall onClick={handleWriteReview}>
            WRITE REVIEW
          </TextButton>
        </div>
      </div>
      <div>
        {reviews?.map((item: IProductReview) => (
          <ReviewItem review={item} key={item.rid} />
        ))}
      </div>
    </div>
  );
};
