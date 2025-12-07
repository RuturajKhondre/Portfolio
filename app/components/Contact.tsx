"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BlurFade } from "@/components/ui/blur-fade";
import { ShineBorder } from "@/components/ui/shine-border";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setLoading(false);
          setStatus('success');
          if (form.current) form.current.reset();
          setTimeout(() => setStatus('idle'), 5000);
        }, (error) => {
          console.log(error.text);
          setLoading(false);
          setStatus('error');
        });
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Side: Text & Info */}
          <BlurFade delay={0.2} inView className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                Enjoyed your<br /> visit?
              </h2>
              <p className="text-xl sm:text-2xl font-semibold text-gray-300">
                I'd love to hear from you!
              </p>
            </div>

            <div className="flex flex-col gap-4 text-gray-400 text-base sm:text-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <p>Need a tester for your AI platform?</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤝</span>
                <p>Open to collaboration or freelance opportunities?</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔗</span>
                <p>Let's connect and build something impactful together!</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🙋‍♂️</span>
                <p className="text-gray-300 font-medium">Have a question? Email me at:</p>
              </div>
              <a
                href="mailto:contact@ruturaj.dev"
                className="text-blue-500 hover:text-blue-400 text-lg sm:text-xl font-medium transition-colors ml-10"
              >
                contact@ruturaj.dev
              </a>
            </div>
          </BlurFade>

          {/* Right Side: Form */}
          <BlurFade delay={0.4} inView className="w-full relative">
            <div className="relative rounded-2xl overflow-hidden bg-black/40">
              <ShineBorder
                className="text-center text-2xl font-bold capitalize"
                shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                borderWidth={2}
              />
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 p-6 relative z-10">

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="user_name" className="text-xs font-medium text-gray-300 ml-1">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    placeholder="Your Name"
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="user_email" className="text-xs font-medium text-gray-300 ml-1">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    placeholder="Your Email"
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-medium text-gray-300 ml-1">Phone</label>
                  <div className="flex gap-3">
                    <span className="py-2 border-b border-gray-700 text-gray-400 text-sm">+91</span>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone number"
                      className="w-full px-0 py-2 bg-transparent border-b border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 mt-1">
                  <label htmlFor="message" className="text-xs font-medium text-gray-300 ml-1">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    placeholder="Your Message"
                    rows={3}
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600 resize-none text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 text-sm"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Message Sent!
                    </>
                  ) : status === 'error' ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      Failed to Send
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center mt-3">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            </div>
          </BlurFade>

        </div>
      </div>
    </section>
  )
}

export default Contact