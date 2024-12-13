import CollegeTotal from "./CollegeTotal";

const Hero = () => {
  // Define the data for the cards
  const binzaniData = [
    {
      id: 1,
      number: '10',
      description: 'Departments',
    },
    {
      id: 2,
      number: '30',
      description: 'Courses Offered',
    },
    {
      id: 3,
      number: '1200+',
      description: 'Students Enrolled',
    },
    {
      id: 4,
      number: '80',
      description: 'Faculty Members',
    },
  ];

  return (
    <div className="relative h-screen">
      {/* Image Section */}
      <div className="h-3/4 overflow-hidden relative">
        {/* <img
          src="/Building2.jpg"
          alt="building"
          className="w-full h-full object-cover"
        /> */}
        <img
          src="/public/bg1.jpg"
          alt="building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Card Section */}
      <div className="h-1/4 flex items-center justify-center">
        <div className="container mx-auto max-w-[90%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:gap-6 gap-1">
          {/* Map through data and render SmallCard components */}
          {binzaniData.map((item) => (
            <CollegeTotal
              key={item.id}
              number={item.number}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

