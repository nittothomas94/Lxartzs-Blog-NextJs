import EnterYourEmail from '../EnterYourEmail/EnterYourEmail';
const Subscribe = () => {
  return (
    <div className="w-full min-h-30  flex flex-col items-center justify-between gap-4 py-10 md:flex-row md-px-10">
      <div className="w-full flex flex-col gap-4 items-center  md:w-1/2 lg:w-[500px] lg:items-start">
        <h1 className="font-bold  text-[27px] w-[400px] lg:text-[42px]">
          Subscribe to my <br className="hidden md:block" />
          <span className="text-[#22D3EE]"> Newsletters</span>
        </h1>
        <p className="w-[400px]  text-[15px] text-gray-300 lg:w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at.
        </p>
      </div>
      <EnterYourEmail />
    </div>
  );
};

export default Subscribe;
