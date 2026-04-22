export default function HistoryPage() {
  return (
    <div className="animate-fade-in">
      <div className="bg-[#f9f9f9] py-16 px-5 text-center border-b border-[#eaeaea]">
        <h2 className="text-center text-4xl text-navy mb-5 uppercase tracking-[3px] font-serif font-normal">
          Our Heritage
          <span className="block w-[60px] h-[2px] bg-gold mx-auto mt-4" />
        </h2>
        <p className="text-[#666] max-w-[600px] mx-auto">
          Building Trust and Shaping Skylines Since 1969.
        </p>
      </div>

      <div className="py-24 px-5 max-w-[1200px] mx-auto">
        <div className="flex gap-12 items-center max-lg:flex-col">
          <div className="flex-[1.2] text-lg text-[#444] leading-[1.8] text-justify">
            <h3 className="font-serif text-navy text-[28px] mt-0">Foundations Built on Trust</h3>
            <p className="mb-6">
              U.K. Builders has been raising the industry&apos;s standard ever since the late 1960s, imparting state-of-the-art real estate solutions for the Redevelopment of Co-operative Housing Societies in the western suburbs of Mumbai for over 55 Years. Our success story is created over 5 decades, bringing over 50 diverse projects to life.
            </p>
            <p className="mb-6">
              From residential masterpieces to commercial landmarks, each endeavour reflects our unwavering dedication to quality and craftsmanship. The core principle on which all our companies are based is the trust earned by our founder, Kishore Shah, by providing over 3000 homes to happy families.
            </p>
            <p>
              In an era where sustainability and innovation are paramount, our companies are dedicated to incorporating cutting-edge technologies and eco-friendly practices. All our companies pride themselves on a commitment to timely project delivery without compromising on quality. This dedication to efficiency is not just a business strategy; it is a promise to our clients that their vision will materialize on schedule.
            </p>
          </div>

          <div className="flex-[0.8] bg-navy text-white p-12 border border-gold text-center">
            <div className="mb-10">
              <span className="text-[64px] text-gold font-serif block leading-none mb-2">55+</span>
              <span className="text-sm uppercase tracking-[2px] text-[#e0e0e0]">Years of Legacy</span>
            </div>
            <div className="mb-10">
              <span className="text-[64px] text-gold font-serif block leading-none mb-2">50+</span>
              <span className="text-sm uppercase tracking-[2px] text-[#e0e0e0]">Projects Delivered</span>
            </div>
            <div>
              <span className="text-[64px] text-gold font-serif block leading-none mb-2">3000+</span>
              <span className="text-sm uppercase tracking-[2px] text-[#e0e0e0]">Happy Families</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
