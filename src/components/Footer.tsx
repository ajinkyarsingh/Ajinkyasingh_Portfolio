import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            © {new Date().getFullYear()} Ajinkyasingh Rajput. Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />{" "}
            and <span className="gradient-text font-semibold">AI</span>
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 glow-box"
          ></motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
