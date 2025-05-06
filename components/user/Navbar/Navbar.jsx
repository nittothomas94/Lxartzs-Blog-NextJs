// import NavbarLink from './NavBarLink';
import Link from 'next/link';
export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center h-20  px-1 pr-2 md:px-10 lg:px-15 2xl:w-[1386px] relative top-0 left-0 ">
      <div className="flex items-center gap-1 lg:w-[210px] lg:h-[44px]">
        <img
          src="/images/user/logo-blog.png"
          className="size-7 lg:10"
          alt="logo"
        />
        <h1 className="text-[#22D3EE] text-[16px] lg:text-[20px]">
          Ixartz’s Blog
        </h1>
      </div>

      <div className="flex gap-2 lg:gap-7">
        <Link href="/blog" className="font-bold lg:text-[18px]">
          Blog
        </Link>
        <Link href="/news-letter" className="font-bold lg:text-[18px]">
          Newslatter
        </Link>
        <Link href="https://twitter.com/" className="font-bold lg:text-[18px]">
          Twitter
        </Link>
      </div>
    </div>
  );
}
