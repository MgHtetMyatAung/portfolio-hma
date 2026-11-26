export default function HeroSection() {
  return (
    <section className=" w-full h-screen  rounded-b-[5%] bg-gray-200">
      <div className="container mx-auto relative w-full h-full text-gray-800 grid place-items-center">
        <div>
          <h2 className=" uppercase text-5xl md:text-4xl lg:text-5xl xl:text-7xl text-center font-bold mb-2">
            Frontend <span className="hidden md:inline">Developer</span>
          </h2>
          <h2 className="  md:hidden uppercase text-4xl md:text-2xl lg:text-5xl text-center font-bold">
            Developer
          </h2>
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
