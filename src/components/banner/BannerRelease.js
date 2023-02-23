import Button from "components/button/Button";

const BannerRelease = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={require("../images/book-sale.png")} alt="" />
      <div className="text-center book-sale-content">
        <p className="my-2 text-[30px]">Get Extra</p>
        <p className="my-2 text-[40px] font-medium text-primary">Sale -25%</p>
        <p className="my-2 mb-5 text-[24px] text-lightGray">
          ON ORDER OVER $100
        </p>
        <Button className="!px-8 py-[12px]">View More</Button>
      </div>
    </div>
  );
};

export default BannerRelease;
