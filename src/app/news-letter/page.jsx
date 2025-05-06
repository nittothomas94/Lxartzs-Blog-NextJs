import Button from '../../../components/Common/Button/Button';

const Newslatter = () => {
  return (
    <main className="w-full  min-h-screen flex flex-col items-center my-15 gap-7 p-3 2xl:w-[1536px]">
      <h1 className="w-fit text-center text-[28px] sm:text-[35px] md:text-[48px] font-bold">
        Subscribe to my <span className="text-[#22D3EE]">Newsletters</span>
      </h1>

      <div className="w-full min-h-40 flex flex-col gap-10 items-center my-5 ">
        <p className="w-[450px] text-gray-300 sm:w-[550px] md:w-[700px] lg:w-[860px] md:text-[20px] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          quam error consequuntur at voluptatem minima odio quas nobis saepe!
          Quibusdam architecto labore maiores repellat dicta. Voluptatum
          mollitia temporibus reiciendis! Sequi.
        </p>
        <ul className="w-[400px] sm:w-[550px] md:w-[700px] lg:w-[860px] pl-10 md:pl-20">
          <li className="list-disc text-gray-300">
            Lorem ipsum dolor sit amet
          </li>
          <li className="list-disc text-gray-300">Lorem ipsum</li>
          <li className="list-disc text-gray-300">Lorem ipsum dolor sit</li>
        </ul>
      </div>

      {/* enter your email */}

      <div className="w-[400px] sm:w-[550px] md:w-[700px] lg:w-[860px] h-12 flex justify-between items-center bg-[#28364c66] rounded-[20px] px-2 lg:h-14 ">
        <input
          type="email"
          className="w-full h-full -none px-4 focus:-none focus:outline-none"
          placeholder="Enter Your Email"
        />
        <Button
          text="Subscribe"
          className="px-4 bg-[#1fb2c9] h-9 rounded-[18px] lg:h-10"
        />
      </div>
    </main>
  );
};
export default Newslatter;
