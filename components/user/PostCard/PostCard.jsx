const PostCard = ({ title, date, desc, image, onClick }) => {
  return (
    <div
      className="w-[300] cursor-pointer  hover:shadow-md shadow-amber-50 lg:w-[350px] xl:w-[420px] md:px-10 bg-[#1E293B66] rounded-[8px] flex flex-col items-center justify-center gap-4 pb-10"
      onClick={onClick}
    >
      <img
        src={image}
        alt="project image"
        className="w-full h-fit object-center object-contain"
      />
      <div className="flex flex-col justify-center items-center gap-1 ">
        <h1 className="font-bold text-[15px]">{title}</h1>
        <p className="text-gray-400 text-[10px]">{date}</p>
        <p className="w-[300px] text-center text-[12px]">{desc}</p>
      </div>
    </div>
  );
};

export default PostCard;
