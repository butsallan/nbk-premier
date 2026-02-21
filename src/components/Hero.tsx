import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[800px] flex flex-col pt-32 md:pt-48 pb-20 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-bg.png"
          alt="Kampala Skyline at Sunset"
          className="w-full h-full object-cover brightness-[0.6]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent" />
      </div>

      <div className="container-custom relative z-10 px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="flex -space-x-3">
              {["/assets/team-1.png", "/assets/team-2.png", "/assets/team-3.png"].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt="NBK Expert"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-white/90 text-sm font-medium">
              <span className="text-white font-bold">4.7/5</span> (600+ Google Reviews)
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight"
          >
            The Best Solution For <br />
            <span className="text-brand-primary">Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 mb-12 max-w-2xl font-body leading-relaxed"
          >
            We are a business management and consulting firm based in Kampala, Uganda, working with businesses and investors to set up and manage strategies for profit and impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-full text-lg font-bold flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20 group">
              Get started now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto glass text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/20 transition-all">
              Explore Our Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative glass element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"
      />
    </section>
  );
}
