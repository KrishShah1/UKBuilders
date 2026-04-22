export default function SignatureCard({ project, className = '' }) {
  return (
    <div className={`bg-white border border-[#eaeaea] p-6 md:p-10 box-border flex flex-col text-center transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] ${className}`}>
      {project.image && (
        <div className="self-center inline-block mb-6 border border-gold-dark p-2 bg-white overflow-hidden">
          <img
            src={project.image}
            alt={project.alt || project.name}
            className="block max-w-full h-[250px] object-contain transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
      )}

      <span className="text-gold text-sm font-bold uppercase block m-0 tracking-[0.5px] whitespace-nowrap overflow-hidden text-ellipsis text-center">
        Completed {project.year} | By {project.builder}
      </span>

      <h3 className="gradient-text font-serif text-xl md:text-2xl font-black uppercase tracking-[2px] my-4 text-center whitespace-nowrap overflow-hidden text-ellipsis">
        {project.name}
      </h3>

      <p className="text-justify text-[#555] mt-0 leading-[1.7] grow">
        {project.description}
      </p>
    </div>
  );
}
