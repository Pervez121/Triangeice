import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import SectionTitle from "@/src/components/SectionTitle";
import Button from "@/src/components/Button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s connect"
            description="We welcome inquiries from volunteers, partners, supporters, and communities who want to collaborate."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Get in touch</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Reach out to learn more about our work, share ideas, or explore opportunities to support the mission.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
              <h2 className="text-2xl font-semibold">Contact details</h2>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li>Email: hello@triangeice.org</li>
                <li>Phone: +1 (555) 010-2048</li>
                <li>Location: Global outreach, community-led</li>
              </ul>
              <div className="mt-8">
                <Button href="/" variant="primary" className="bg-white text-slate-900 hover:bg-slate-100">
                  Back Home
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
