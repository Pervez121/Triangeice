import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import SectionTitle from "@/src/components/SectionTitle";
import Button from "@/src/components/Button";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Donate"
            title="Support climate action with a gift"
            description="Your donation helps expand awareness, strengthen support programs, and sustain community-focused environmental work."
          />
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg leading-8 text-slate-600">
              Donations help fund public education, local outreach, resilience projects, and the infrastructure needed to continue this important work.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">Support Our Work</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
