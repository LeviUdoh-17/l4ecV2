import Navbar from "../navbar";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero text-white">
    <Navbar/>
      <div className="container py-20 mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive{" "}
            <span className="text-accent">Technology Services</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            From IT infrastructure to digital transformation, we deliver
            end-to-end technology solutions that drive business success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
