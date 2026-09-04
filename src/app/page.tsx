"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import SectionTitle from "@/src/components/SectionTitle";
import ImpactCard from "@/src/components/ImpactCard";
import ProjectCard from "@/src/components/ProjectCard";
import Button from "@/src/components/Button";
import AnimatedCounter from "@/src/components/AnimatedCounter";

const impactCards = [
  {
    metric: "12k+",
    title: "Community members reached",
    description: "We connect local people with practical climate knowledge and support.",
  },
  {
    metric: "35",
    title: "Volunteer-led initiatives",
    description: "Local volunteers help drive awareness, resilience, and outreach.",
  },
  {
    metric: "8",
    title: "Mountain regions engaged",
    description: "Our network spans vulnerable glacial regions and climate-sensitive communities.",
  },
];

const projectCards = [
  {
    title: "Glacier Awareness Walks",
    description: "Community-led education events that bring climate stories to schools and villages.",
    tag: "Education",
  },
  {
    title: "Community Resilience Hub",
    description: "A local support network sharing adaptation tools, training, and emergency preparedness.",
    tag: "Support",
  },
  {
    title: "Youth Climate Innovation Lab",
    description: "We nurture young innovators designing climate-smart, nature-based solutions.",
    tag: "Innovation",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero
          title="Protecting Glaciers. Empowering Communities."
          subtitle="Triangeice Institute is a community-driven NGO working to raise awareness about melting glaciers, strengthen climate education, and support mountain communities facing growing environmental risks."
        />

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
          >
            <div>
              <SectionTitle
                eyebrow="About Triangeice"
                title="A trusted voice for glacier protection and climate action"
                description="We bring together volunteers, local leaders, researchers, and supporters to build a global movement rooted in care, education, and action."
              />
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our mission is to protect mountain ecosystems by creating awareness, encouraging sustainable practices, and helping vulnerable communities adapt to a changing climate.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/about" variant="primary">Learn More</Button>
                <Button href="/research" variant="secondary">Explore Research</Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"
                alt="Mountain community and glacier landscape"
                width={900}
                height={600}
                className="h-72 w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-[1.25rem] bg-slate-950/70 p-5 text-white backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Community-led action</p>
                <p className="mt-2 text-lg">Protecting mountain ecosystems through awareness, adaptation, and collaboration.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                eyebrow="Glacier Crisis"
                title="Why glacier conservation matters"
                description="The rapid melting of glaciers affects water security, biodiversity, livelihoods, and the safety of mountain communities."
              />
            </motion.div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-[2rem] bg-slate-900 p-8 text-white"
              >
                <Image
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1000&q=80"
                  alt="Glacier and ice landscape"
                  width={1000}
                  height={700}
                  className="mb-6 h-56 w-full rounded-[1.5rem] object-cover"
                />
                <h3 className="text-2xl font-semibold">A warming world, a changing landscape</h3>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  Melting glaciers contribute to rising risks for downstream communities and fragile ecosystems. Our work helps people understand these changes and respond with hope and action.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8"
              >
                <h3 className="text-2xl font-semibold text-slate-900">What we do</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  We promote climate education, support local resilience, and inspire collective participation across regions and generations.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Awareness</p>
                    <p className="mt-2 text-sm text-slate-600">Public education, storytelling, and outreach.</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Support</p>
                    <p className="mt-2 text-sm text-slate-600">Community backing for climate-vulnerable regions.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              eyebrow="Our Impact"
              title="Progress rooted in community action"
              description="Every project reflects our belief that lasting change begins with informed and engaged people."
            />
          </motion.div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <AnimatedCounter value={12000} label="Community members reached" suffix="+" />
            <AnimatedCounter value={35} label="Volunteer-led initiatives" />
            <AnimatedCounter value={8} label="Mountain regions engaged" />
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {impactCards.map((card) => (
              <ImpactCard key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                eyebrow="Current Projects"
                title="Programs that connect people and nature"
                description="We focus on education, resilience, and innovation to create practical climate solutions."
              />
            </motion.div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {projectCards.map((card) => (
                <ProjectCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              eyebrow="Community Stories"
              title="Stories of courage, care, and collective action"
              description="Local voices guide our work and remind us why protecting mountain ecosystems matters."
            />
          </motion.div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
                alt="Community volunteers in nature"
                width={900}
                height={600}
                className="h-56 w-full object-cover"
              />
              <div className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Villages</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">A shared response to changing seasons</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Families and youth leaders are using community workshops to better understand climate risks and adapt together.
                </p>
              </div>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
                alt="Volunteers supporting conservation work"
                width={900}
                height={600}
                className="h-56 w-full object-cover"
              />
              <div className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Volunteers</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">People showing up for the places they love</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  From awareness drives to neighborhood support, volunteers keep our mission grounded in real action.
                </p>
              </div>
            </motion.article>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-950 via-slate-900 to-emerald-900 p-8 text-white shadow-[0_30px_80px_rgba(2,6,23,0.25)]"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Glacier monitoring preview</p>
                <h3 className="mt-3 text-3xl font-semibold">Interactive regional insight for future climate monitoring</h3>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  A dedicated space for future glacier monitoring markers, affected regions, and community impact tracking.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div className="relative h-56 rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.4),transparent_25%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(30,41,59,0.9))]">
                  <div className="absolute left-[18%] top-[30%] h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_0_8px_rgba(125,211,252,0.2)]" />
                  <div className="absolute left-[48%] top-[42%] h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(74,222,128,0.2)]" />
                  <div className="absolute left-[72%] top-[26%] h-3 w-3 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.15)]" />
                  <div className="absolute bottom-6 left-6 rounded-2xl bg-slate-950/70 p-4 text-sm text-slate-200">
                    <p className="font-semibold text-white">Northern Mountain Regions</p>
                    <p className="mt-1">Seasonal glacier monitoring • community resilience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="bg-sky-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/10 p-8 lg:flex-row lg:items-center lg:justify-between"
            >
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Join the movement</p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Volunteer, donate, or partner with us</h2>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  Your time and support can help build a stronger, more resilient future for glacier regions and the communities that depend on them.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/volunteer" variant="primary" className="bg-white text-sky-900 hover:bg-sky-100">
                  Become a Volunteer
                </Button>
                <Button href="/donate" variant="secondary" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                  Donate Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
