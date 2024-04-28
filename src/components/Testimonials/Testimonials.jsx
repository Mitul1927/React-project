import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Sarah",
    text: "I never thought I'd enjoy going to the gym!  Fitness Center completely changed my perspective.  The trainers are amazing - they pushed me to challenge myself but always made sure I felt safe and supported.  I've lost weight, gained muscle, and feel stronger than ever.  Plus, the group fitness classes are so much fun!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "David",
    text: "After my knee surgery, I was worried I wouldn't be able to get back to playing soccer.  The physical therapists at Fitness center designed a personalized recovery program that was both effective and pain-free.  They not only helped me heal but also showed me exercises to prevent future injuries.  Thanks to them, I'm back on the field feeling great!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Maria",
    text: "I used to feel intimidated by gyms, but Fitness Center is different.  Everyone here is friendly and encouraging, regardless of their fitness level.  I've made some amazing friends in my yoga class, and the staff always remembers my name and asks how I'm doing.  It's more than just a gym - it's a supportive community.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "John",
    text: "Joining Fitness Center has been one of the best decisions I've ever made.  It's not just about physical fitness - it's about my whole well-being.  The variety of classes keeps things interesting, the equipment is top-notch, and the facilities are always clean.  I leave every workout feeling energized and ready to take on the day!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 my-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-primary">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-primary/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
