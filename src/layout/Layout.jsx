import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StarBackground from '../components/StarBackground';

const Layout = ({ children }) => {
  const location = useLocation();
  const isPlayground = location.pathname === '/playground';

  return (
    <div className="min-h-screen text-white relative" style={{ backgroundColor: 'transparent' }}>
      {!isPlayground && <StarBackground />}
      <div className="relative z-10">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-24"
        >
          {children}
        </motion.main>
        {!isPlayground && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
