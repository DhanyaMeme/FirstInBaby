import "./Review.scss";
import { StarRating } from "./StarRating";
import { ReviewItem } from "./ReviewItem";
import { TextButton } from "../../ui_kits/Buttons/TextButton/TextButton.component";
import { ReviewsOverview } from "./ReviewsOverview/ReviewsOverview";
import { useAppDispatch } from "../../redux/store";
import { openModal } from "../../redux/slices/modal/modal.slice";

function Reviews() {
  const dispatch = useAppDispatch();

  const handleWriteReview = () => {
    dispatch(
      openModal({
        modalType: "ReviewModal",
      })
    );
  };

  return (
    <div className="RatingSummary">
      <div className="RatingWdgt__Header">
        <div className="RatingWdgt__Summary">
          <StarRating rating={4} />
          <div>Based on 256 reviews</div>
        </div>
        <div className="RatingWdgt__ReviewsSummary">
          <ReviewsOverview rating={5} count={232} percentage="91%" />
          <ReviewsOverview rating={4} count={100} percentage="5%" />
          <ReviewsOverview rating={3} count={21} percentage="9%" />
          <ReviewsOverview rating={2} count={0} percentage="0%" />
          <ReviewsOverview rating={1} count={0} percentage="0%" />
        </div>
        <div className="RatingWdgt__Action">
          <TextButton isSmall onClick={handleWriteReview}>
            WRITE REVIEW
          </TextButton>
        </div>
      </div>
      <div>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
    </div>
  );
}

export default Reviews;
