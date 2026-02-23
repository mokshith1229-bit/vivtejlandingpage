import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Since switching to CallFlow, our team's productivity has doubled. The auto-dialer is a game changer for our outbound sales process.",
    author: "Rajesh Kumar",
    role: "Sales Director, EdTech Pro",
    image: "RK"
  },
  {
    content: "The mobile app allows my field agents to update lead status instantly. No more end-of-day data entry. It's saved us hours every week.",
    author: "Sarah Jenkins",
    role: "VP of Sales, RealtyOne",
    image: "SJ"
  },
  {
    content: "Best CRM for tele-calling teams. The reporting features helped us identify our top performers and clone their strategies.",
    author: "Amit Patel",
    role: "Founder, FinServe",
    image: "AP"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by high-growth teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm mr-3">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
