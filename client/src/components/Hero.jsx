import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2000&auto=format&fit=crop", // Cloth bag placeholder
      title: "Premium Cloth Bag Printing",
      subtitle: "Eco-friendly, durable, and custom branded for your business."
    },
    {
      image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?q=80&w=2000&auto=format&fit=crop",
      title: "Eco-Friendly & Custom Designs",
      subtitle: "Stand out with sustainable packaging solutions."
    },
    {
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2000&auto=format&fit=crop",
      title: "Bulk Corporate Orders",
      subtitle: "High quality printing at affordable wholesale prices."
    }
  ];

  return (
    <div className="h-screen w-full relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 font-body">
                    {slide.subtitle}
                  </p>
                  <button className="bg-secondary hover:bg-orange-600 text-white text-lg font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
