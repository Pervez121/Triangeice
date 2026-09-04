import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import SectionTitle from "@/src/components/SectionTitle";
import ProjectCard from "@/src/components/ProjectCard";

const projects = [
  {
    title: "Glacier Education Workshops",
    description: "Interactive sessions that help schools and communities understand the significance of glacier changes.",
    tag: "Education",
  },
  {
    title: "Resilient Mountain Communities",
    description: "Practical support initiatives that strengthen preparedness and adaptability in climate-sensitive areas.",
    tag: "Resilience",
  },
  {
    title: "Climate Innovation Circle",
    description: "A space for young leaders and partners to explore sustainable and nature-based solutions.",
    tag: "Innovation",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Projects"
            title="Programs built around awareness and action"
            description="Our projects are designed to inspire education, community support, and meaningful climate engagement."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
