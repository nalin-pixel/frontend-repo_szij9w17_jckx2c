import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          className="rounded-2xl bg-gray-900 text-white p-10 ring-1 ring-black/5 overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl"/>
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl"/>

          <div className="max-w-2xl space-y-4">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Let’s bring Ethiopian quality to your shelves</h3>
            <p className="text-gray-300">Share your requirements and we’ll send samples, pricing, and documentation within 48 hours.</p>

            <form onSubmit={(e)=>e.preventDefault()} className="mt-6 grid sm:grid-cols-2 gap-3">
              <input className="w-full rounded-md bg-white/10 border border-white/10 px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name"/>
              <input className="w-full rounded-md bg-white/10 border border-white/10 px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Work email"/>
              <input className="w-full rounded-md bg-white/10 border border-white/10 px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:col-span-2" placeholder="Company"/>
              <textarea rows="3" className="w-full rounded-md bg-white/10 border border-white/10 px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:col-span-2" placeholder="What are you looking to source?"/>
              <motion.button
                className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-2 font-medium hover:bg-gray-100 transition-colors sm:w-auto"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Request details
              </motion.button>
            </form>

            <p className="text-xs text-gray-400 pt-2">We comply with EU food safety and data protection standards.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
