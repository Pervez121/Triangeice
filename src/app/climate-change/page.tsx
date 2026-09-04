import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import SectionTitle from "@/src/components/SectionTitle";

export default function ClimateChangePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Climate Change"
            title="Understanding the climate crisis in mountain regions"
            description="The changing climate is reshaping glaciers, rivers, and the lives of people who depend on them."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Why it matters</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Rising temperatures accelerate glacier melt, intensify water stress, and increase risk for communities already facing environmental vulnerability.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">How we respond</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                We offer education, strengthen community awareness, and support solutions that help people adapt and act with confidence.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
