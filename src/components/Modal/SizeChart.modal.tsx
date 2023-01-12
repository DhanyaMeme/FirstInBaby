import ModalWrapper from "../../ui_kits/modal/modal-wrapper.component";

export const SizeChartModal = () => {
  return (
    <ModalWrapper size="small" image={true} basic={true}>
      <div className="hidden-phone">
        <img
          src="https://cdn.shopify.com/s/files/1/2428/5565/files/desktop-size-chart.png"
          alt="SizeChart"
        />
      </div>
      <div className="hidden-tablet-and-up">
        <img
          src="https://cdn.shopify.com/s/files/1/2428/5565/files/mobile-size-chart.png"
          alt="SizeChart"
        />
      </div>
    </ModalWrapper>
  );
};
