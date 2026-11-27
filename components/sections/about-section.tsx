export default function AboutSection() {
  return (
    <section className="min-h-screen container py-10 text-old-news">
      <div className=" flex justify-between">
        <h2 className=" uppercase text-xl sm:text-2xl md:text-3xl font-bold text-old-news">
          About @ Me
        </h2>
        <div className=" flex items-center gap-3">
          <div className=" w-10 h-0.5 bg-old-news rounded"></div>
          <h3 className=" uppercase">Since 2021</h3>
        </div>
      </div>
    </section>
  );
}
