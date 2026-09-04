import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import SectionTitle from "@/src/components/SectionTitle";
import Button from "@/src/components/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="About Triangeice"
            title="A community-led NGO for glacier protection"
            description="We exist to connect people, knowledge, and practical action around glacier conservation and climate resilience."
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Triangeice Institute is not a research institute; it is a community-driven environmental NGO focused on awareness, empowerment, and coordinated climate action.
              </p>
              <p>
                We work with volunteers, local communities, educators, supporters, and innovators to protect mountain ecosystems and strengthen resilience in climate-vulnerable regions.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Our focus</h2>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li>• Climate awareness and public education</li>
                <li>• Glacier conservation and mountain ecosystem protection</li>
                <li>• Volunteer and donor engagement</li>
                <li>• Support for vulnerable communities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <SectionTitle
              eyebrow="Why we matter"
              title="Building a movement that protects what matters"
              description="Our work is grounded in compassion, collaboration, and long-term care for the natural systems that sustain life."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-xl font-semibold text-slate-900">Awareness</h3>
                <p className="mt-3 text-slate-600">We share accessible information about glacier melt and climate change impacts.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-xl font-semibold text-slate-900">Community</h3>
                <p className="mt-3 text-slate-600">We connect people who care and want to act together for environmental protection.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-xl font-semibold text-slate-900">Action</h3>
                <p className="mt-3 text-slate-600">We support practical projects that improve resilience and inspire long-term stewardship.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="rounded-3xl bg-sky-950 p-10 text-white">
            <h2 className="text-3xl font-semibold">Join the mission</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
              Whether you volunteer, donate, or share our message, you help build a stronger movement around mountain ecosystems and glacier protection.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/volunteer" variant="primary" className="bg-white text-sky-900 hover:bg-sky-100">
                Volunteer
              </Button>
              <Button href="/donate" variant="secondary" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                Donate
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
