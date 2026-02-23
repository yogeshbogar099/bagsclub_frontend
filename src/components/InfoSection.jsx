const InfoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://cpimg.tistatic.com/04902652/b/4/Shopping-Bag-Printing-Service.jpg" 
                alt="Printed Bag" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
              Premium Quality <span className="text-secondary">Cloth Printing</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              We provide eco-friendly and durable bag printing solutions tailored for your brand. Whether you need promotional bags or retail packaging, we have you covered.
            </p>
            
            <ul className="space-y-4">
              {[
                "Eco-friendly materials",
                "Durable fabric quality",
                "Custom branding solutions",
                "Affordable bulk pricing",
                "Suitable for shops, events, corporates"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="mt-8 bg-primary hover:bg-green-800 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Request Samples
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;