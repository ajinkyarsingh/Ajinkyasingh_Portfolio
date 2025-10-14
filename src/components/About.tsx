import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 gradient-text"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8 sm:p-12 glow-box hover:glow-box-secondary transition-all duration-500"
          >
            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                👋 Hi there! I'm <span className="text-primary font-semibold">Ajinkyasingh Rajput</span>,
                a passionate frontend developer with a deep love for creating beautiful,
                functional, and user-friendly web applications.
              </p>

              <p>
                💻 My journey in web development is driven by curiosity and the desire
                to leverage modern technologies like <span className="text-secondary font-semibold">React</span>,{" "}
                <span className="text-secondary font-semibold">Tailwind CSS</span>, and{" "}
                <span className="text-secondary font-semibold">AI tools</span> to build innovative solutions
                that make a difference.
              </p>

              <p>
                🚀 I specialize in crafting responsive, performant web experiences
                and I'm always exploring new ways to integrate AI into frontend development.
                Whether it's using ChatGPT for code assistance or Cursor AI for enhanced
                productivity, I embrace cutting-edge tools to stay ahead in this
                ever-evolving field.
              </p>

              <p>
                ✨ When I'm not coding, you'll find me learning about the latest web
                technologies, contributing to open-source projects, or sharing knowledge
                with the developer community.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
