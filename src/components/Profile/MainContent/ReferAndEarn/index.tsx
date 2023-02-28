import { useEffect } from "react";
import { Panel } from "../../../../ui_kits/Panel/Panel";
import { PageContent } from "../../../../ui_kits/global/PageContent.styles";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import {
  customer,
  subscribedPlan,
} from "../../../../redux/slices/profile/profile.selector";
import { fetchSubscribedPlanAsync } from "../../../../redux/slices/profile/profile.reducer";
import { useAuth } from "../../../../contexts/AuthContext";
import { formatDate } from "../../../../utils/script";
import { ReferralPlan } from "./ReferralPlan";
import { ReferralLogo } from "./ReferralLogo";
import "./Style.scss";

export const ReferAndEarn = () => {
  
  const { data: userData } = useAppSelector(customer);

  const PlanDetails = {
    CustomerName: userData?.fname,
    CustomerId: userData?.email,
    Phone: userData?.uPhone,
    PlanName: userData?.plan,
    SubscriptionDate: formatDate(userData?.expiry as string),
    PlanStatus: userData?.status ? "ACTIVE" : "INACTIVE",
  };

  return (
    <PageContent>
      <Panel title="Refer Your Friends & get Cashback">
        <div className="Grid">
          <div className="Grid__Cell 1/1--phone 1/2--tablet-and-up 1/2--desk">
            <ReferralPlan
              planInfo={PlanDetails as any}
              userReferral={userData?.userReferral as string}
            />
          </div>
          <div className="Grid__Cell 1/1--phone 1/2--tablet-and-up 1/2--desk">
            <ReferralLogo />
          </div>
        </div>
      </Panel>
    </PageContent>
  );
};
