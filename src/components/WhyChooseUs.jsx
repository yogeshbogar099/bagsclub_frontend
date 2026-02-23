import { Star, Leaf, Truck, Package, DollarSign, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <Star size={32} />, title: "High Quality Printing", desc: "Premium ink and durable printing techniques." },
    { icon: <Leaf size={32} />, title: "Eco-Friendly Solutions", desc: "100% biodegradable and reusable materials." },
    { icon: <Truck size={32} />, title: "Fast Delivery", desc: "Quick turnaround time for all orders." },
    { icon: <Package size={32} />, title: "Bulk Order Support", desc: "Capacity to handle large corporate orders." },
    { icon: <DollarSign size={32} />, title: "Affordable Pricing", desc: "Best market rates for bulk quantities." },
    { icon: <Users size={32} />, title: "Professional Team", desc: "Expert designers and support staff." }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">WHY CHOOSE US?</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="shrink-0 w-12 h-12 bg-orange-100 text-secondary rounded-lg flex items-center justify-center">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-800">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;