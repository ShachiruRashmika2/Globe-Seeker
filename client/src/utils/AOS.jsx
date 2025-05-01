
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = (options = { duration: 1000 }) => {
  useEffect(() => {
    AOS.init(options);
  }, []);
};

export default useAOS;
