const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="h-3/4 overflow-hidden relative">
        <img
          src="/Building2.jpg"
          alt="building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
    </div>
  );
};

export default Hero;
