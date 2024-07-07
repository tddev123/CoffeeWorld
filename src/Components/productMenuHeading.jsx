import React, { useEffect, useRef } from 'react';

const ProductMenuHeading = () => {
  const headingRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          underlineRef.current.classList.add('scale-x-100');
        } else {
          underlineRef.current.classList.remove('scale-x-100');
        }
      });
    });

    observer.observe(headingRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold text-center mt-5 mb-12 relative">
      <span className="inline-block mb-2"> <img className='size-48 ' src=".\Images\Menu Cover PNG Image, Vector Menu Cover Design, Menu Clipart, Brown, Knife And Fork PNG Image For Free Download.jpg" alt="" /></span>
     

    </h2>
  );
};

export default ProductMenuHeading;
