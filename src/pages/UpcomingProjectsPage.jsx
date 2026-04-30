import ProjectCard from '../components/ProjectCard';
import { upcomingProjects } from '../data/projects';

export default function UpcomingProjectsPage() {
  return (
    <div className="animate-fade-in">
      <div className="bg-surface-light py-16 px-5 text-center border-b border-border-light">
        <h2 className="text-center text-3xl md:text-4xl text-navy mb-5 uppercase tracking-[3px] font-serif font-normal">
          Upcoming Projects
          <span className="block w-[60px] h-[2px] bg-gold mx-auto mt-4" />
        </h2>
        <p className="text-text-tertiary max-w-[600px] mx-auto">
          A glimpse at what is coming next — new addresses in Orlem crafted with the same uncompromising standard that defines every U.K. Builders home.
        </p>
      </div>

      <div className="py-16 md:py-24 px-5 bg-surface-subtle">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
