import '../styles/main.css';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center sm:text-left">
            
            <h3 className="text-4xl md:text-4xl font-bold mb-4 md:mb-6 gradient-text">
              Beatzz
            </h3>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Your ultimate music streaming experience with premium features and stunning interface
            </p>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-white transition-all duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/download" className="hover:text-white transition-all duration-300">
                  Download
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Community</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/jerry-619/beatzz-website" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-all duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/beatzzApp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-all duration-300"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="hover:text-white transition-all duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white transition-all duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Beatzz. All rights reserved. Made with ❤️ by <a href="https://github.com/jerry-619" target="_blank" rel="noopener noreferrer" className="hover:text-white font-bold transition-all duration-300">Fardeen Beigh</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;