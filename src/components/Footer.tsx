export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <a href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tighter text-white">
                VIHA
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Building digital growth for businesses through high-performance websites and result-driven marketing.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Physical (traditional) Marketing</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Digital Paintings</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors"> Customized Gifts</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors"> Brochers Designing </a></li>
              {/* <li><a href="#services" className="hover:text-primary-400 transition-colors"> printing related stuff </a></li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-primary-400 transition-colors">Our Process</a></li>
              <li><a href="#why-us" className="hover:text-primary-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs">
            © {currentYear} Viha – All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
