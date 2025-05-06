import Button from '../../Common/Button/Button';

const EnterYourEmail = () => {
  return (
    <div className="w-[350px] h-12 flex justify-between items-center bg-[#28364c66] rounded-[20px] px-2 md:1/2 lg:mr-10 lg:h-14">
      <input
        type="email"
        className="w-full h-full border-none px-4 focus:border-none focus:outline-none"
        placeholder="Enter Your Email"
      />
      <Button
        text="Subscribe"
        className="px-4 bg-[#1fb2c9] h-9 rounded-[18px] lg:h-10"
      />
    </div>
  );
};

export default EnterYourEmail;
