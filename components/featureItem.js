/* eslint-disable @next/next/no-img-element */
const FeatureItem = ({ item }) => {
  return (
    <div className="flex flex-col items-center w-full px-5 mb-10 text-center md:text-left md:items-start lg:64">
      <img src={`/icon-${item.iconName}.svg`} alt={`icon ${item.iconName}`} />
      <h3 className="text-lg my-5 font-public_sans">{item.title}</h3>
      <p className="text-base text-neutral-light_grayish_blue">
        {item.content}
      </p>
    </div>
  );
};

export default FeatureItem;
