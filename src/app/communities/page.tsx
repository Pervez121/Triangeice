import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import SectionTitle from "@/src/components/SectionTitle";

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Communities"
            title="Centering local voices in environmental action"
            description="Strong communities are at the heart of every lasting environmental response."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Community partnerships</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We collaborate closely with local groups, educators, and leaders to ensure our work remains grounded in real needs.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Shared responsibility</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                When communities come together, awareness grows and practical action becomes possible at scale.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
