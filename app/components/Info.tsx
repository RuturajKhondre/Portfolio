import React from "react";

const Info = () => {
    return (
        <section id="info" className="relative flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 lg:py-32 bg-black overflow-hidden">
            {/* Arka plan daire efekti */}
            <div className="absolute inset-0 pt-[100px] sm:pt-[150px] md:pt-[200px] flex items-center justify-center">
                <img
                    src="/vector.png"
                    alt="radar background"
                    className="w-[400px] sm:w-[550px] md:w-[700px] lg:w-[900px] opacity-100 z-10"
                />
                {/* Ortadaki merkez ışık efekti */}
                <img
                    src="/leen.png"
                    alt="center glow"
                    className="absolute w-[400px] sm:w-[550px] md:w-[700px] z-20"
                />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-30"></div>

            {/* İçerik */}
            <div className="relative z-40 text-center px-4 sm:px-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4">
                 Never Lose Information Again
                </h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                  Protect critical data with continuous backup, instant recovery, and global redundancy.
                </p>



            </div>
            <img
                src="/star.png"
                alt="App Interface"
                width={80}
                height={80}
                className="absolute z-40 ml-180 rounded-2xl shadow-2xl overflow-hidden hidden md:block"
            />
            <img
                src="/star.png"
                alt="App Interface"
                width={80}
                height={80}
                className="absolute z-40 mr-200 mt-[280px] rounded-2xl shadow-2xl overflow-hidden hidden md:block"
            />

            <div className="relative z-40 text-start px-4 sm:px-6 w-full max-w-[900px]">
                <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row justify-center gap-6 sm:gap-8 md:gap-10 border-[#FFFFFF]/6 rounded-lg text-sm text-gray-400 border p-4 sm:p-5 md:p-0">
                    <div className="flex-1 md:ml-5 md:mt-5 md:mb-5">
                        <h3 className="font-semibold text-white text-xl sm:text-2xl md:text-3xl mb-1">AI-Driven Defense</h3>
                        <p className="text-gray-400 mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg">Predict and eliminate cyber threats using adaptive artificial intelligence.</p>
                    </div>

                  
                    <div className="flex-1 text-left md:mt-5 md:mb-5 md:mr-5">

                        <h3 className="font-semibold text-white text-xl sm:text-2xl md:text-3xl mb-1">Resilient Protection</h3>
                        <p className="text-gray-400 mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg">Ensure uninterrupted security with automated recovery and real-time monitoring.</p>
                    </div>
                </div></div>

        </section>
    );
};

export default Info;
