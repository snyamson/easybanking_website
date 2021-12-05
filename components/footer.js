import RequestInviteBtn from "./requestInviteBtn";
import Link from "next/link";

const icons = ["facebook", "youtube", "twitter", "pinterest", "instagram"];

const Footer = () => {
  return (
    <div className=" w-screen flex flex-col items-center bg-primary-dark_blue px-5 py-10 md:flex-row md:justify-between lg:px-28  ">
      <div className="flex flex-col text-neutral-white md:flex-row">
        <div>
          <img src="/logo.svg" alt="logo" style={{ fill: "white" }} />
          <div className="mt-8">
            <div className="flex justify-evenly">
              {icons.map((icon) => (
                <div key={icon}>
                  <Link href="/">
                    <img src={`icon-${icon}.svg`} alt={`icon ${icon}`} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:mx-28 mt-8 mb-5 md:mt-0 md:mb-0">
          <ul className="text-center">
            <li className="hover:text-primary-lime_green">
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li className="my-4 hover:text-primary-lime_green">
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
            <li className="hover:text-primary-lime_green">
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <ul className="text-center">
            <li className="hover:text-primary-lime_green">
              <Link href="/">
                <a>Careers</a>
              </Link>
            </li>
            <li className="my-4 hover:text-primary-lime_green">
              <Link href="/">
                <a>Support</a>
              </Link>
            </li>
            <li className="hover:text-primary-lime_green">
              <Link href="/">
                <a>Privacy Policy</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex flex-col ml-auto">
          <RequestInviteBtn />
          <p className="mt-8 text-neutral-light_grayish_blue">
            &copy; Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
