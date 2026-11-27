import { Button } from "@base-ui/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className=" w-full rounded-b-[5%] bg-old-news">
      <div className="container min-h-[calc(100vh-80px)] text-midnight flex flex-col">
        <div className=" grow grid place-items-center ">
          <div className="space-y-5 text-center">
            <p> 👋 Hi, I'm Htet Myat Aung</p>
            <h2 className=" uppercase text-5xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-bold">
              Tech Stack <span className="hidden md:inline">Power</span>
            </h2>
            <h2 className="  md:hidden uppercase text-5xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-bold">
              Developer
            </h2>
            <div className=" mt-5">
              <Button
                className={
                  " px-5 py-2 rounded-full border flex w-fit items-center gap-3 cursor-pointer mx-auto"
                }
                render={<Link href={"/"} />}
              >
                Contact Me{" "}
                <span className=" size-8 rounded-full bg-gray-800 grid place-items-center">
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={18}
                    className=" text-old-news"
                  />
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className=" space-y-2 text-center pb-5">
          <h4 className=" lg:text-lg font-medium">Based in Yangon, Myanmar.</h4>
          <p className=" text-gray-700">
            I design and build clear, fast interfaces for complex web products.
          </p>
        </div>
      </div>
    </section>
  );
}
