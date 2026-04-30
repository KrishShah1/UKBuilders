import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const slug = project.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="bg-white border border-border-light box-border transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] overflow-hidden">
      {project.image ? (
        <div className="overflow-hidden h-[320px] md:h-[420px] lg:h-[500px]">
          <img
            src={project.image}
            alt={project.alt}
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.04]"
          />
        </div>
      ) : (
        <div className="h-[200px] bg-surface-light flex items-center justify-center border-b border-border-light">
          <span className="text-text-muted text-xs uppercase tracking-[3px]">Image Coming Soon</span>
        </div>
      )}

      <div className="p-6 md:p-10 text-center">
        <h3 className="gradient-text font-serif text-3xl md:text-[46px] font-black uppercase tracking-[4px] md:tracking-[8px] m-0">
          {project.name}
        </h3>
        <span className="block text-xs tracking-[5px] text-text-muted uppercase mt-2">
          {project.subtitle}
        </span>
        <div className="w-[50px] h-[3px] bg-gold mx-auto mt-5 mb-8" />
      </div>

      <div className="px-6 md:px-10 pb-2 text-left">
        <div className="mb-6">
          <span className="block text-navy text-[13px] font-extrabold uppercase tracking-[3px] mb-2 border-b-2 border-gold pb-1 w-fit">
            Configurations
          </span>
          <span className="block text-lg md:text-[22px] text-text-dark font-serif font-normal py-1">
            {project.configs}
          </span>
        </div>
        <div className="mb-8">
          <span className="block text-navy text-[13px] font-extrabold uppercase tracking-[3px] mb-2 border-b-2 border-gold pb-1 w-fit">
            Location
          </span>
          <span className="block text-lg md:text-[22px] text-text-dark font-serif font-normal py-1">
            {project.location}
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 px-6 md:px-10 pb-8">
        <Link
          to={`/projects/${slug}`}
          className="flex-1 bg-gold text-white px-6 py-3 text-sm tracking-[2px] uppercase border border-gold transition-all duration-300 hover:bg-transparent hover:text-gold text-center"
        >
          View Details
        </Link>
        <Link
          to={`/projects/${slug}#book-visit`}
          className="flex-1 bg-transparent text-gold px-6 py-3 text-sm tracking-[2px] uppercase border border-gold transition-all duration-300 hover:bg-gold hover:text-white text-center"
        >
          Book a Visit
        </Link>
      </div>
    </div>
  );
}
