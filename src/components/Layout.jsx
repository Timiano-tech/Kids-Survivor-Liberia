import { motion } from 'framer-motion';
import DonateNotification from './DonateNotification';

const Layout = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="grow relative"
    >
      {children}
      <DonateNotification />
    </motion.main>
  );
};

export default Layout;