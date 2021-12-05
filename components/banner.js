import RequestInviteBtn from "./requestInviteBtn";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mt-20 bg-green-500">
      <div className="flex-1 bg-neutral-white pt-16">
        <div className="px-7 text-center pb-16">
          <h1 className="text-5xl"> Next generation digital banking</h1>
          <p className="my-8">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <RequestInviteBtn />
        </div>
      </div>
      <div className="flex 1 bg-intro-mobile h-96 bg-no-repeat bg-cover bg-center bg-neutral-white relative">
        <img
          src="/image-mockups.png"
          alt="mockups"
          className="absolute -top-40 w-11/12"
          style={{ left: "4.1%" }}
        />
      </div>
    </div>
  );
};

export default Banner;

{
  /* <div className="py-20 ml-28 w-96 order-last md:order-first">
        <h1 className="text-5xl"> Next generation digital banking</h1>
        <p className="my-8">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <RequestInviteBtn />
      </div>
      <div className="md:h-full md:w-full bg-intro-mobile md:bg-intro-desktop md:bg-cover md:bg-bottom md:relative order-first md:order-last ">
        <img
          src="/image-mockups.png"
          alt="mockups"
          className="hidden md:block absolute w-3/4 -top-20 left-52"
        />
      </div> */
}
