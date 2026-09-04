import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import SectionTitle from "@/src/components/SectionTitle";
import Button from "@/src/components/Button";

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main id="main-content">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Volunteer"
            title="Join a community of changemakers"
            description="Your time and energy can help raise awareness, support local action, and protect mountain ecosystems."
          />
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg leading-8 text-slate-600">
              Volunteers can help with outreach, community events, education campaigns, and digital storytelling. We welcome people who care about climate action and want to contribute meaningfully.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">Get Involved</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
