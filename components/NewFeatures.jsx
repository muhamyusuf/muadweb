const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[300px] min-w-[280px] shadow-lg p-[24px] rounded-lg bg-white">
    <div className="flexCenter w-full h-[140px] rounded-md bg-[#323F5D]">
      <img src={imgUrl} alt="icon" className="object-contain w-1/2 h-1/2" />
    </div>
    <h1 className="mt-[26px] font-extrabold text-[24px] leading-[30.24px] text-left text-gradient">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] text-left font-normal text-[14px] leading-[32.4px]">
      {subtitle}
    </p>

    <button
      type="button"
      className="flexCenter mt-[24px] w-full h-[50px] rounded-md bg-primary-blue hover:border-[#132d3ad4] hover:border-2 hover:bg-transparent hover:text-primary-blue transition duration-200 ease-out  text-white font-semibold text-[18px]"
    >
      Lihat Detail
    </button>
  </div>
);

export default NewFeatures;
