//home page

'use client';
import Hithere from '../../components/user/Hithere/Hithere';
import ReactProject from '../../components/user/ReactProject/ReactProject';
import PostCard from '../../components/user/PostCard/PostCard';
import Subscribe from '../../components/user/Subscribe/Subscribe';
import posts from '../../Data/Post';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();

  const handlePostClick = id => {
    router.push(`/blog/${id}`);
  };
  return (
    <main className="w-full min-h-screen flex flex-col p-4 gap-5 2xl:w-[1536px]">
      <Hithere />
      <h1 className="text-[24px] font-bold w-full md:px-10 lg:px-14 ">
        React <span className="text-[#22D3EE]">Projects</span>{' '}
      </h1>
      <ReactProject />

      {/* latest Posts */}
      <div className="w-full flex justify-between mt-8 md:px-10 lg:px-14">
        <h1 className="text-[24px] font-bold">
          Latest <span>Posts</span>
        </h1>

        <div className="flex gap-1 items-center">
          <p>View All Posts</p>
          <i className="material-icons">arrow_circle_right</i>
        </div>
      </div>
      <div className="w-full min-h-[120px] grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 xl:my-6 gap-4">
        {posts.slice(0, 3).map(item => {
          return (
            <PostCard
              key={item.id}
              image={item.image}
              title={item.title}
              date={item.date}
              desc={item.desc}
              onClick={() => handlePostClick(item.id)}
            />
          );
        })}
      </div>

      {/* Subscribe to my Newsletters*/}
      <Subscribe />
    </main>
  );
}
