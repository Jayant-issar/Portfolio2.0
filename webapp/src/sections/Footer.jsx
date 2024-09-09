const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-zinc-800 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white/90 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
          <div className="social-icon">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </div>
          <div className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </div>
        </div>
  
        <p className="text-white/70">© 2024 Jayant Issar. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;