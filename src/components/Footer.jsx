export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-dark text-text-muted text-center py-16 px-5 text-sm">
      <div className="flex flex-row items-center justify-center gap-4 mb-6 flex-wrap">
        <img
          src="/images/company/logo/U.K. Builders Logo (Square) copy.jpg"
          alt="U.K. Builders Logo"
          className="h-[60px] w-auto mix-blend-screen brightness-110"
        />
        <h2 className="text-white m-0 uppercase tracking-[2px] text-[28px] font-serif md:translate-y-[15px]">
          U.K. Builders
        </h2>
      </div>
      <p className="my-2">
        Corporate Office: <span className="text-gold font-bold">F-34, Sej Plaza, Marve Road, Malad West, Mumbai - 400 064</span>
      </p>
      <p className="my-2">
        Inquiries: <span className="text-gold font-bold">u.k.builders1981@gmail.com</span> | <span className="text-gold font-bold">+91 98203 11177</span>
      </p>
      <p className="mt-6 text-xs opacity-60">&copy; 2026 U.K. Builders. All rights reserved. RERA Registered.</p>
    </footer>
  );
}
