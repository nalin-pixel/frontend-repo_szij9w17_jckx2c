import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      name: "Single-origin Sesame",
      note: "Hulled & natural • White & mixed",
      img: "https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "Forest Honey",
      note: "Wildflower • Unifloral options",
      img: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "Heirloom Coffee",
      note: "Green beans • Washed & natural",
      img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "Teff & Ancient Grains",
      note: "Whole & milled • Gluten-free",
      img: "https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Hero ingredients, responsibly sourced</h2>
          <p className="mt-3 text-gray-600">Core lines with seasonal specials. Full spec sheets available on request.</p>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={i}
              className="group overflow-hidden rounded-xl ring-1 ring-black/5 bg-white/80 backdrop-blur hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
