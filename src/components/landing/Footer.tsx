export function Footer() {
  return (
    <footer className="bg-midnight text-white/40 py-12 md:py-16" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-heading text-xl font-bold text-white">Stillwell</span>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              Premium botanical wellness formulated for modern rest. Ethically sourced, clinically informed, beautifully crafted.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-4">Shop</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Calm Mist</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Deep Soak</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Night Balm</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Gift Sets</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Ingredients</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Journal</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/60 mb-4">Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>&copy; {new Date().getFullYear()} Stillwell. All rights reserved.</span>
          <span>This is a fictional brand created for demonstration purposes.</span>
        </div>
      </div>
    </footer>
  );
}
