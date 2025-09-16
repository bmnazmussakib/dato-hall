import React from 'react';
import Container from './common/Container';

const Hero = () => {
    return (
        <>
            <div className="">
                <Container>
                    <section
                        className="relative h-[80vh] bg-cover bg-center text-white flex items-center rounded-2xl overflow-hidden"
                        //   style={{ backgroundImage: "url('https://placehold.co/1920x1080/cccccc/ffffff?text=Solar+Panel')" 
                        style={{
                            backgroundImage: "url('/assets/images/hero.jpg')"

                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="h-full b-0 z-10 ">
                            <div className='flex justify-between items-end absolute left-0 bottom-14 w-full p-14'>
                                <div className="max-w-3xl">
                                    <p className="text-lg md:text-xl mb-4">It's a new day for solar power</p>
                                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                        Soleil. Powerful Shop of <span className="underline decoration-4 decoration-white">Green E</span>
                                    </h1>
                                </div>
                                <button className=" bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors text-md">
                                    More About Us
                                </button>
                            </div>
                        </div>
                    </section>
                </Container>
            </div>
        </>
    );
};

export default Hero;
