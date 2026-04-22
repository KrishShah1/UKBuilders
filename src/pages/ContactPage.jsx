export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      <div className="bg-[#f9f9f9] py-16 px-5 text-center border-b border-[#eaeaea]">
        <h2 className="text-center text-3xl md:text-4xl text-navy mb-5 uppercase tracking-[3px] font-serif font-normal">
          Contact Us
          <span className="block w-[60px] h-[2px] bg-gold mx-auto mt-4" />
        </h2>
        <p className="text-[#666] max-w-[600px] mx-auto">
          We would love to hear from you. Reach out to discuss your dream home or learn more about our projects.
        </p>
      </div>

      <div className="py-16 md:py-24 px-5">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-navy text-2xl mb-6">Get In Touch</h3>
              <p className="text-[#444] leading-[1.8] mb-6">
                With over five decades of experience in crafting luxury residences across Mumbai&apos;s western suburbs, U.K. Builders is your trusted partner in finding the perfect home. Whether you&apos;re interested in our ongoing masterpieces or wish to explore investment opportunities, our team is here to guide you every step of the way.
              </p>
              <p className="text-[#444] leading-[1.8] mb-6">
                We take pride in our transparent and client-first approach. From your initial inquiry to the final handover, we ensure a seamless and personalized experience that reflects our commitment to excellence.
              </p>
              <p className="text-[#444] leading-[1.8]">
                Visit our corporate office or reach out via phone or email — we look forward to building your legacy home together.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-navy text-white p-8 border border-gold">
                <span className="block text-[13px] font-extrabold uppercase tracking-[3px] mb-3 text-gold">
                  Corporate Office
                </span>
                <p className="text-[#e0e0e0] leading-[1.8]">
                  F-34, Sej Plaza, Marve Road,<br />
                  Malad West, Mumbai - 400 064
                </p>
              </div>

              <div className="bg-navy text-white p-8 border border-gold">
                <span className="block text-[13px] font-extrabold uppercase tracking-[3px] mb-3 text-gold">
                  Email
                </span>
                <a href="mailto:u.k.builders1981@gmail.com" className="text-[#e0e0e0] no-underline hover:text-gold transition-colors duration-300">
                  u.k.builders1981@gmail.com
                </a>
              </div>

              <div className="bg-navy text-white p-8 border border-gold">
                <span className="block text-[13px] font-extrabold uppercase tracking-[3px] mb-3 text-gold">
                  Phone
                </span>
                <a href="tel:+919820311177" className="text-[#e0e0e0] no-underline hover:text-gold transition-colors duration-300">
                  +91 98203 11177
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
