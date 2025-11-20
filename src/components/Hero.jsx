import { ArrowRight, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute -bottom-1/2 right-1/2 translate-x-1/2 h-[600px] w-[600px] rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs text-gray-700 ring-1 ring-black/5 backdrop-blur">
              <Leaf className="h-3.5 w-3.5 text-emerald-600" />
              Ethiopian-grown • EU-ready
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
              Ethical foods from Ethiopia, crafted for Europe
            </h1>
            
            <p className="text-lg text-gray-600">
              We partner directly with smallholder farmers across Ethiopia to bring premium, traceable ingredients to European brands — with zero compromise on taste, quality, or sustainability.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors">
                Request a sample
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#products" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Explore products</a>
            </div>

            <div className="flex items-center gap-6 pt-2 text-sm text-gray-600">
              <span>Organic pathways</span>
              <span>Fair trade practices</span>
              <span>Full traceability</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white">
              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop"
                alt="Ethiopian landscape with farmlands"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm">
                Sourced directly from highland cooperatives across Ethiopia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
