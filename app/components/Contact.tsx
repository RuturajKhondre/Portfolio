import React from 'react'

const Contact = () => {
    return (

 <form id="contact" className="w-full max-w-[1200px] mx-auto bg-black p-4 sm:p-6 md:p-8 rounded-xl shadow-lg text-white">
  <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center relative">
    
    {/* Sol taraf: Form alanları */}
    <div className="flex-1 flex flex-col gap-3 sm:gap-4 w-full">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {/* Name */}
        <div className="flex-1">
          <label className="block mb-1 sm:mb-2 font-semibold text-base sm:text-lg text-gray-600" htmlFor="name">Name, Surname</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full px-3 sm:px-4 py-2 rounded-lg bg-[#1f1c2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
            suppressHydrationWarning
          />
        </div>

        {/* Email */}
        <div className="flex-1">
          <label className="block mb-1 sm:mb-2 font-semibold text-base sm:text-lg text-gray-600" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            className="w-full px-3 sm:px-4 py-2 rounded-lg bg-[#1f1c2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
            suppressHydrationWarning
          />
        </div>
      </div>

      {/* Subject */}<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <div className="flex-2">
        <label className="block mb-1 sm:mb-2 text-gray-600 font-semibold text-base sm:text-lg" htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="Subject"
          className="w-full px-3 sm:px-4 py-2 rounded-lg bg-[#1f1c2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
          suppressHydrationWarning
        />
      </div>

        {/* phone */}
     <div className="flex-1">
            <label className="block mb-1 sm:mb-2 font-semibold text-gray-600 text-base sm:text-lg" htmlFor="phone">Phone</label>
          <input
           type="text"
           id="phone"
            placeholder="0500 000 00 00"
           className="w-full px-3 sm:px-4 py-2 rounded-lg bg-[#1f1c2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
           suppressHydrationWarning
             />
      </div></div>


      {/* Message */}
      <div className="flex-1">
        <label className="block mb-1 sm:mb-2 font-semibold text-gray-600 text-base sm:text-lg" htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Your message"
          className="w-full px-3 sm:px-4 py-2 rounded-lg bg-[#1f1c2e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none h-24 sm:h-32 text-sm sm:text-base"
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-4 sm:mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 sm:py-3 rounded-lg transition text-sm sm:text-base"
      >
        Send Message
      </button>
    </div>

    {/* Sağ taraf: Görsel */}
    <div className="flex-1 flex justify-center items-start hidden lg:block">
      <img src="/lock.png" alt="Contact Decor" className="w-full max-w-[400px] rounded-lg shadow-lg" />
    </div>

  <div className="absolute inset-0 opacity-80 flex items-center justify-center pointer-events-none">
                <img
                    src="/vector.png"
                    alt="radar background"
                    className="w-[400px] sm:w-[550px] md:w-[700px] lg:w-[900px] opacity-100 z-10"
                />
            
               
            </div>
  </div> 


</form>




    )
}

export default Contact