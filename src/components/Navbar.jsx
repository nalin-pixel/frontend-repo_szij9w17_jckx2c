import { Menu, Leaf, BadgeCheck } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600 text-white grid place-items-center shadow-sm">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-gray-900">Habesha Harvest</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#products" className="hover:text-gray-900 transition-colors">Products</a>
            <a href="#sourcing" className="hover:text-gray-900 transition-colors">Sourcing</a>
            <a href="#standards" className="hover:text-gray-900 transition-colors flex items-center gap-1">
              <BadgeCheck className="h-4 w-4 text-emerald-600" /> Standards
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-black transition-colors">Talk to sales</a>
            <button className="md:hidden p-2 rounded-md hover:bg-black/5">
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
