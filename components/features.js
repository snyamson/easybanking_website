import FeatureItem from "./featureItem";

const features = [
  {
    id: 1,
    title: "Online Banking",
    content:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    iconName: "online",
  },
  {
    id: 2,
    title: " Simple Budgeting",
    content:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    iconName: "budgeting",
  },
  {
    id: 3,
    title: " Fast Onboarding",
    content:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    iconName: "onboarding",
  },
  {
    id: 4,
    title: "Open API",
    content:
      "  Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    iconName: "api",
  },
];

const Features = () => {
  return (
    <div className=" pt-20 px-5 text-center pb-16 bg-neutral-v_light_gray lg:px-28">
      <div className="mb-9 ml-5">
        <h1 className="text-4xl tracking-tight">Why choose Easybank?</h1>
        <div className="mt-6 mb-16 text-neutral-grayish_blue">
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub.
          </p>
          <p> Control your finances like never before.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        {features.map((feature) => (
          <FeatureItem key={feature.id} item={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
