export default function Footer() {
  return (
    <main className="w-full flex items-center justify-center gap-5 flex-col h-20 border-t px-1 pr-2 md:px-10 relative bottom-0 lg:px-15 2xl:w-[1490px] lg:flex-row lg:justify-between">
      <p className="text-[8px] text-gray-400 md:text-[12px]">
        © Copyright 2022 by Ixartz’s blog. Built with ♥ by CreativeDesignsGuru
      </p>
      <div className="flex gap-5">
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </main>
  );
}
