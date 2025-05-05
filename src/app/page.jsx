//home page

import Hithere from '../../components/user/Hithere/Hithere';
import ReactProject from '../../components/user/ReactProject/ReactProject';
export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col p-4 gap-5 2xl:w-[1386px]">
      <Hithere />
      <h1 className="text-[24px] font-bold w-full md:px-10 lg:px-14 ">
        React <span className="text-[#22D3EE]">Projects</span>{' '}
      </h1>
      <ReactProject />

      <div className="w-full flex justify-between mt-8 md:px-10 lg:px-14">
        <h1 className="text-[24px] font-bold">
          Latest <span>Posts</span>
        </h1>

        <div className="flex gap-1 items-center">
          <p>View All Posts</p>
          <i className="material-icons">arrow_circle_right</i>
        </div>
      </div>
    </main>
  );
}
