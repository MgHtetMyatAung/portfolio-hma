import { Button } from "@base-ui/react";

export default function HeroSection() {
  return (
    <section className=" w-full h-screen  rounded-b-[5%] old-news-bg">
      <div className="container mx-auto relative w-full h-full text-midnight grid place-items-center">
        <div className=" space-y-2 text-center">
          <p> 👋 Hi, I'm Htet Myat Aung</p>
          <h2 className=" uppercase text-5xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-bold">
            Frontend <span className="hidden md:inline">Developer</span>
          </h2>
          <h2 className="  md:hidden uppercase text-5xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-bold">
            Developer
          </h2>
          <div className=" space-x-3 mt-5">
            <Button className={" px-5 py-2 rounded-full border"}>
              Projects
            </Button>
            <Button className={" px-5 py-2 rounded-full border"}>
              Contact
            </Button>
          </div>
        </div>
        <div className="  absolute bottom-8 text-center w-full space-y-2">
          <h4 className=" lg:text-lg font-medium">Based in Yangon, Myanmar.</h4>
          <p className=" text-gray-700">
            I design and build clear, fast interfaces for complex web products.
          </p>
        </div>
      </div>
    </section>
  );
}
