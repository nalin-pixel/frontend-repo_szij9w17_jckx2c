import { ArrowRight, Leaf } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useCallback } from "react";

export default function Hero() {
  // Subtle pointer-reactive highlight for premium feel
  const x = useSpring(0, { stiffness: 80, damping: 20 });
  const y = useSpring(0, { stiffness: 80, damping: 20 });
  const radial = useMotionTemplate`radial-gradient(600px 600px at ${x}px ${y}px, rgba(16,185,129,0.15), transparent 60%)`;

  const onMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }, [x, y]);

  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-1/2 right-1/2 translate-x-1/2 h-[600px] w-[600px] rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      </div>

      <motion.div
        onMouseMove={onMove}
        style={{ backgroundImage: radial }}
        className="relative"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-6 space-y-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs text-gray-700 ring-1 ring-black/5 backdrop-blur"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Leaf className="h-3.5 w-3.5 text-emerald-600" />
                Ethiopian-grown • EU-ready
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Ethical foods from Ethiopia, crafted for Europe
              </motion.h1>
              
              <motion.p
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                We partner directly with smallholder farmers across Ethiopia to bring premium, traceable ingredients to European brands — with zero compromise on taste, quality, or sustainability.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-3"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
                }}
              >
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors"
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request a sample
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore products
                </motion.a>
              </motion.div>

              <motion.div
                className="flex items-center gap-6 pt-2 text-sm text-gray-600"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <span>Organic pathways</span>
                <span>Fair trade practices</span>
                <span>Full traceability</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white group"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop"
                  alt="Ethiopian landscape with farmlands"
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent" />
                <motion.div
                  className="absolute bottom-4 left-4 right-4 text-white text-sm"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Sourced directly from highland cooperatives across Ethiopia
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Subtle noise for texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.5\\'/></svg>')" }} />
    </section>
  );
}
