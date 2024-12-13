import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderComp from "../components/SliderComp";

const About = () => {
  const programs = [
    {
      title: "Program 1",
      duration: "3 years",
      type: "Full-time",
    },
    {
      title: "Program 2",
      duration: "2 years",
      type: "Part-time",
    },
    {
      title: "Program 3",
      duration: "4 years",
      type: "Full-time",
    },
    {
      title: "Program 4",
      duration: "1 year",
      type: "Full-time",
    },
  ];


  const programs2 = [
    {
      title: "Program 1",
      duration: "3 years",
      type: "Full-time",
    },
    {
      title: "Program 2",
      duration: "2 years",
      type: "Part-time",
    },
    {
      title: "Program 3",
      duration: "4 years",
      type: "Full-time",
    },
    {
      title: "Program 4",
      duration: "1 year",
      type: "Full-time",
    },
  ];





  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards initially
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // On medium screens, show 3 cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // On smaller screens, show 2 cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // On very small screens, show 1 card
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="h-screen container">
        <h1 className="bg-clip-text   text-transparent bg-gradient-to-r from-purple-700 via-red-600 to-orange-500 text-4xl font-semibold ">
          Discover Our Programs
        </h1>
        <div className="mt-6 container bg-slate-50  h-[90%] p-6 border-t border-purple-700">
          <h1 className="text-2xl">
            Under Graduate Programs <span className="opacity-30">(11)</span>
          </h1>

          {/* Slider Section */}
          <div className="mt-6 m-auto max-w-[90%] py-4   container ">
            <Slider {...settings}>
              {programs.map((index) => {
                return <SliderComp key={index} />;
              })}
            </Slider>
          </div>
          <div className="mt-6 m-auto max-w-[90%] p-4  container ">
            <Slider {...settings}>
              {programs2.map((index) => {
                return <SliderComp key={index} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;