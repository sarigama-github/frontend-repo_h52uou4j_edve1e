import { CheckCircle2, HeartPulse, Stethoscope, Users, Microscope, MapPin, Phone, Mail } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              AROHAN Partners works alongside public health systems, development agencies, and communities to strengthen
              primary health care across India and Southeast Asia. We combine systems thinking, implementation science,
              and collaborative design to translate strategy into durable results.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900">Mission</h3>
                <p className="mt-2 text-gray-700 text-sm">
                  “To strengthen primary health care in India and Southeast Asia by co-creating inclusive, locally rooted
                  solutions that enable resilient and equitable systems change.”
                </p>
                <p className="mt-3 text-xs text-gray-500">— AROHAN Partners</p>
              </div>
              <div className="p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900">Vision</h3>
                <p className="mt-2 text-gray-700 text-sm">
                  “A world in which primary health care is accessible to all, and every family thrives with optimal health
                  and wellbeing.”
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-teal-600" /> Our approach
            </h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="text-teal-600 mt-1">•</span> Co-creation with governments and communities</li>
              <li className="flex items-start gap-3"><span className="text-teal-600 mt-1">•</span> Data-driven decision-making and measurement</li>
              <li className="flex items-start gap-3"><span className="text-teal-600 mt-1">•</span> Contextualized implementation and capacity building</li>
              <li className="flex items-start gap-3"><span className="text-teal-600 mt-1">•</span> Equity-first strategy and inclusive design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      icon: <HeartPulse className="h-6 w-6 text-teal-600" aria-hidden="true" />,
      title: 'Primary health care systems',
      items: ['PHC strategy', 'Program design', 'Quality improvement', 'Last-mile delivery'],
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-teal-600" aria-hidden="true" />,
      title: 'Maternal, newborn & child health',
      items: ['Continuum of care', 'Facility readiness', 'Clinical mentorship', 'Community outreach'],
    },
    {
      icon: <Microscope className="h-6 w-6 text-teal-600" aria-hidden="true" />,
      title: 'Data, learning, and evaluation',
      items: ['Monitoring systems', 'Operational research', 'Implementation science', 'Data use'],
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600" aria-hidden="true" />,
      title: 'Workforce & capacity building',
      items: ['Training & mentorship', 'Leadership development', 'Change management'],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Services & Capabilities</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          We partner from strategy through scale-up, providing end-to-end technical assistance that strengthens systems,
          enables local leadership, and delivers measurable improvements in population health.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3">
                {s.icon}
                <h3 className="font-semibold text-gray-900">{s.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2"><span className="text-teal-600">•</span>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FocusAreasSection() {
  const areas = [
    { title: 'Immunization & RMNCH+A', desc: 'Strengthening coverage and quality across the continuum of care.' },
    { title: 'Health financing & procurement', desc: 'Designing efficient, transparent systems to maximize impact.' },
    { title: 'Digital health & data systems', desc: 'Improving data use and interoperability for frontline decision-making.' },
    { title: 'Community health & engagement', desc: 'Partnering with local leaders to reach the last mile sustainably.' },
  ];
  return (
    <section id="focus" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Focus Areas</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((a) => (
            <div key={a.title} className="p-5 rounded-xl border border-gray-200 bg-gradient-to-br from-white to-teal-50/50">
              <h3 className="font-semibold text-gray-900">{a.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: 'Scaling quality improvement in PHC',
      context: 'Statewide technical assistance partnership',
      impact: ['80% facilities meeting quality standards', 'Improved adherence to clinical protocols', 'Enhanced data-use culture'],
    },
    {
      title: 'Strengthening community health worker programs',
      context: 'District-level capacity building initiative',
      impact: ['Increased home-based newborn care coverage', 'Optimized supervision models', 'Improved referral pathways'],
    },
    {
      title: 'Digital transformation for data-driven planning',
      context: 'Interoperable dashboards for PHC managers',
      impact: ['Real-time decision making', 'Better resource allocation', 'Reduced reporting burden'],
    },
  ];
  return (
    <section id="projects" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Projects & Case Studies</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.context}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
                {p.impact.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact</h2>
            <p className="mt-3 text-gray-700">We'd love to hear from you.</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-800"><Phone className="h-5 w-5 text-teal-600" aria-hidden="true" /> <a href="tel:+91XXXXXXXXXX" className="hover:underline">+91 00000 00000</a></div>
              <div className="flex items-center gap-3 text-gray-800"><Mail className="h-5 w-5 text-teal-600" aria-hidden="true" /> <a href="mailto:hello@arohan.partners" className="hover:underline">hello@arohan.partners</a></div>
              <div className="flex items-center gap-3 text-gray-800"><MapPin className="h-5 w-5 text-teal-600" aria-hidden="true" /> India & Southeast Asia</div>
            </div>
          </div>
          <form className="bg-gray-50 border border-gray-200 rounded-xl p-6" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input id="name" name="name" type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-teal-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input id="email" name="email" type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-teal-500" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-teal-500" required />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-md bg-teal-600 text-white px-4 py-2 text-sm font-semibold hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
