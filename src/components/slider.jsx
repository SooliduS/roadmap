const Slider = () => {


    return (
        <div className='rounded-full relative flex flex-wrap max-w-md overflow-hidden shadow-xl aspect-square min-w-64 min-h-64 w-64 h-64  md:min-w-96 md:min-h-96 md:w-96 md:h-96 transition-all duration-200 z-20'>
                <img src="/images/1.jpg" className="w-1/2 hover:-translate-x-1/2 hover:translate-y-1/2 hover:scale-[2.5] hover:z-10 transition-all duration-200" alt="1" />
                <img src="/images/2.jpg" className="w-1/2 hover:translate-x-1/2 hover:translate-y-1/2 hover:scale-[2.5] hover:z-10 transition-all duration-200" alt="2" />
                <img src="/images/3.jpg" className="w-1/2 hover:-translate-x-1/2 hover:-translate-y-1/2 hover:scale-[3] hover:z-10 transition-all duration-200" alt="3" />
                <img src="/images/4.jpg" className="w-1/2 hover:translate-x-1/2 hover:-translate-y-1/2 hover:scale-[3] hover:z-10 transition-all duration-200" alt="4" />
        </div>
    );
};

export default Slider;
