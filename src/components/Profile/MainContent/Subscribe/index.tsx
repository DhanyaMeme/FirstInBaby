import classNames from "classnames";
import { useEffect, useState } from "react";
import { Panel } from "../../../../ui_kits/Panel/Panel";
import { IPlan } from "../../../../redux/slices/profile/profile.type";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { plans } from "../../../../redux/slices/profile/profile.selector";
import { PageContent } from "../../../../ui_kits/global/PageContent.styles";
import { fetchPlansAsync } from "../../../../redux/slices/profile/profile.reducer";
import "./Style.scss";

export const Subscribe = () => {
  const { data: plansInfo } = useAppSelector(plans);
  const dispatch = useAppDispatch();

  const [selectedPlan, setSelectedPlan] = useState<null | IPlan>(null);

  const handleOnClick = (plan: IPlan) => {
    setSelectedPlan(plan);
  };

  useEffect(() => {
    if (!plansInfo) {
      dispatch(fetchPlansAsync());
    }
  }, [dispatch, plansInfo]);

  return (
    <PageContent>
      <Panel title="Subscribe to get more offers">
        <div className="Grid">
          {plansInfo?.map((plan: IPlan) => (
            <div
              className="Grid__Cell 1/1--phone 1/3--tablet-and-up 1/3--desk"
              key={plan.planID}
              onClick={() => handleOnClick(plan)}
            >
              <div
                className={classNames("Plan_Element", {
                  "Plan_Element--isActive":
                    plan.planID === selectedPlan?.planID,
                })}
              >
                <img src={plan.imageUrl} alt={plan.planName}></img>
                <h5 className="Heading Text--highlight">{plan.planName}</h5>
                <h4 className="Heading Text--highlight">
                  Rs. {plan.planAmount}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </PageContent>
  );
};
