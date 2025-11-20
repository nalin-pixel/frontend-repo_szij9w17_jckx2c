import { Leaf, Recycle, ShieldCheck, Ship, BadgeCheck, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const items = [
    {
      icon: <Leaf className="h-5 w-5 text-emerald-600" />,
      title: "Regeneratively sourced",
      desc: "Working with smallholder networks using climate-smart agriculture to restore soils and biodiversity.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "EU compliance",
      desc: "Full documentation and residue testing in line with EU food safety and traceability requirements.",
    },
    {
      icon: <Ship className="h-5 w-5 text-emerald-600" />,
      title: "Ready to ship",
      desc: "Consolidated logistics from Addis Ababa with temperature-controlled handling and reliable ETD/ETA.",
    },
    {
      icon: <BadgeCheck className="h-5 w-5 text-emerald-600" />,
      title: "Quality assured",
      desc: "On-site QA and lot-level sampling ensure consistent flavor, moisture, and microbiology.",
    },
    {
      icon: <Recycle className="h-5 w-5 text-emerald-600" />,
      title: "Low-impact packaging",
      desc: "Recyclable and bulk formats designed to reduce waste across the supply chain.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-emerald-600" />,
      title: "End-to-end traceability",
      desc: "Digital lot records from farm to port provide complete visibility for brand and audit needs.",
    },
  ];

  return (
    <section id="sourcing" className="py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
            Built for responsible brands
          </h2>
          <p className="mt-3 text-gray-600">
            A supply chain you can stand behind — designed for quality, safety and planet-positive impact.
          </p>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <motion.div
              key={i}
              className="rounded-xl ring-1 ring-black/5 bg-white/80 backdrop-blur p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-emerald-50 grid place-items-center">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
