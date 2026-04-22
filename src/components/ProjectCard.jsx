export default function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-[#eaeaea] p-6 md:p-10 box-border text-center transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)]">
      <div className="mb-4">
        <h3 className="gradient-text font-serif text-3xl md:text-[46px] font-black uppercase tracking-[4px] md:tracking-[8px] m-0">
          {project.name}
        </h3>
        <span className="block text-xs tracking-[5px] text-[#888] uppercase mt-2">
          {project.subtitle}
        </span>
        <div className="w-[50px] h-[3px] bg-gold mx-auto mt-5 mb-8" />
      </div>

      {project.image && (
        <div className="inline-block mb-6 border border-gold-dark p-2 bg-white overflow-hidden">
          <img
            src={project.image}
            alt={project.alt}
            className="block max-w-full h-[300px] md:h-[500px] lg:h-[600px] object-contain transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="mt-8 text-left">
        <div className="mb-6">
          <span className="block text-navy text-[13px] font-extrabold uppercase tracking-[3px] mb-2 border-b-2 border-gold pb-1 w-fit">
            Configurations
          </span>
          <span className="block text-lg md:text-[22px] text-[#333] font-serif font-normal py-1">
            {project.configs}
          </span>
        </div>
        <div className="mb-6">
          <span className="block text-navy text-[13px] font-extrabold uppercase tracking-[3px] mb-2 border-b-2 border-gold pb-1 w-fit">
            Location
          </span>
          <span className="block text-lg md:text-[22px] text-[#333] font-serif font-normal py-1">
            {project.location}
          </span>
        </div>
      </div>
    </div>
  );
}
