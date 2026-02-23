import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "How does the auto-dialer work?",
    answer: "Our auto-dialer connects to your Android phone via our mobile app. It automatically queues up leads and dials them one by one, saving your agents time from manual dialing."
  },
  {
    question: "Can I integrate with WhatsApp?",
    answer: "Yes! We have a native WhatsApp integration that allows you to send templates, automated follow-ups, and chat with leads directly from the CRM dashboard."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use enterprise-grade encryption for all data at rest and in transit. We are ISO 27001 certified and GDPR compliant."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start."
  },
  {
    question: "Can I import my existing leads?",
    answer: "Yes, you can easily import leads via Excel or CSV files. We also integrate with Facebook Ads, Google Forms, and other lead sources for auto-capture."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-indigo-600" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
