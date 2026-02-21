import { motion } from "motion/react";
import { TrendingUp, ShieldCheck, Award, Globe, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Personalized Strategies",
    desc: "We craft financial solutions based on your unique goals and industry needs.",
    num: "01"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Transparent Processes",
    desc: "Clear, honest, and genuinely data-driven insights for better decision-making.",
    num: "02"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Proven Track Record",
    desc: "Extensive experience in helping businesses achieve sustainable growth.",
    num: "03"
  }
];

export default function About() {
  return (
    <section id="about-us" className="section-padding bg-brand-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-brand-dark" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight">
              Dedicated to Supporting Your Business Growth
            </h2>
            <p className="text-lg text-gray-600 font-body leading-relaxed">
              NBK PREMIER SOLUTIONS is a business management and investment consulting firm based in Kampala, Uganda, working with businesses and investors to set up and manage successful plans, projects, and profit strategies.
            </p>
            <button className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-dark transition-all group">
              About NBK Premier
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center font-display font-bold">
                    {f.num}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-1">{f.title}</h4>
                    <p className="text-gray-500 font-body text-sm">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Trust Section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/assets/expertise.png"
              alt="Business Meeting in Kampala"
              className="w-full h-auto rounded-2xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-brand-dark" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-dark">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-brand-dark leading-tight">
              Trusted by Top Businesses in East Africa
            </h2>
            <p className="text-lg text-gray-600 font-body leading-relaxed">
              Led by Dr. Nicholas Katushabe, our team has over a decade of experience in business development, research projects, and regulatory compliance, ensuring that serious businesses build serious structure.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-4xl font-display font-bold text-brand-dark">10+</div>
                <div className="text-sm text-gray-500 font-body mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-brand-dark">150%</div>
                <div className="text-sm text-gray-500 font-body mt-1">Typical Revenue Growth</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
