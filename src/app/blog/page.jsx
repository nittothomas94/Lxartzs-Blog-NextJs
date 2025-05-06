'use client';

import PostCard from '../../../components/user/PostCard/PostCard';
import Subscribe from '../../../components/user/Subscribe/Subscribe';
import posts from '../../../Data/Post';
import { useRouter } from 'next/navigation';

export default function Blog() {
  const router = useRouter();

  const handlePostClick = id => {
    router.push(`/blog/${id}`);
  };

  return (
    <main className="min-h-screen w-full 2xl:w-[1500px]">
      <div className="w-full py-10 flex flex-col items-center justify-center gap-3">
        <h1 className="text-[25px] font-bold w-full text-center lg:text-[35px]">
          Posts Examples
        </h1>
        <p className="w-[400px] text-center text-gray-300 md:w-[600px] md:text-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          bibendum.
        </p>
      </div>

      <div className="w-full min-h-[120px] grid grid-cols-1 py-10 place-items-center md:grid-cols-2 xl:grid-cols-3 xl:my-6 gap-y-20 gap-x-0">
        {posts.map((item, index) => {
          return (
            <PostCard
              key={item.id}
              image={item.image}
              title={item.title}
              date={item.date}
              desc={item.desc}
              onClick={() => {
                handlePostClick(item.id);
              }}
            />
          );
        })}
      </div>

      {/* subscribe */}

      <Subscribe />
    </main>
  );
}
