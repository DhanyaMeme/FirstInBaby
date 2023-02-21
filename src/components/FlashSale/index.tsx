import React from "react";
import { FlashSaleIcon } from "../../assets/icons/FlashSale.icon";
import { useTimer } from "../../hooks/useTimer.hook";
import "./Style.scss";

interface IProps {
  endDate: string;
}

export const Flashsale: React.FC<IProps> = (props: IProps) => {
  const { endDate } = props;

  const { timeLeft } = useTimer(endDate);

  const getValuse = (input: any) => {
    return input ? input : 0;
  };

  const hours = ` ${getValuse(timeLeft?.days)} D : ${getValuse(
    timeLeft?.hours
  )} H : ${getValuse(timeLeft?.minutes)} M : ${getValuse(timeLeft?.seconds)} S`;

  return (
    <div className="FlashSale__Container" style={{ display: "block" }}>
      <FlashSaleIcon />
      <span className="goodgrade-time">
        End in &nbsp;
        <span className="js-dl-goodtime" data-time="0">
          {hours}
        </span>
      </span>
    </div>
  );
};
