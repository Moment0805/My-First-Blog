const LazyLoadImages = () => {
    return (
      <section className="py-2 px-10 scroll-fade opacity-0 transition-opacity duration-1000 backdrop-blur-md ">
        <h2 className="text-2xl font-bold text-center mb-6">Portfolio projects from recent workshops</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 ">
          
          <img
            src="/images/slide 2.jpg"
            alt="Sample 1"
            loading="lazy"
            className="w-9/12 h-3/4 rounded-xl shadow-lg"
          />
          <img
            src="/images/slide 4.jpg"
            alt="Sample 2"
            loading="lazy"
            className="w-9/12 h-3/4 rounded-xl shadow-lg"
          />
          <img
          src="/images/slide 3.jpg"
          alt="Sample 4"
          loading="lazy"
          className="w-9/12 h-3/4 rounded-xl shadow-lg"
        />
          <img
            src="/images/slide 5.jpg"
            alt="Sample 3"
            loading="lazy"
            className=" w-9/12 h-3/4 rounded-xl shadow-lg"
          />
        </div>
      </section>
    );
  };
  
  export default LazyLoadImages;
  