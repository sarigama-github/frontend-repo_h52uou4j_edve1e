import { User } from 'lucide-react';

// Note: Team bios should come from the uploaded PDF. If additional names/bios are provided later,
// we can update this list accordingly. Using representative structure and accessible markup now.
const team = [
  {
    name: 'Leadership Team',
    role: 'Public Health, Systems Strengthening, Implementation Science',
    bio:
      'Our leadership brings decades of experience partnering with governments and development agencies across India and Southeast Asia to design and scale primary health care initiatives.',
  },
  {
    name: 'Technical Advisors',
    role: 'RMNCH+A, Digital Health, Health Financing',
    bio:
      'A network of senior advisors supports program design, evaluation, and continuous learning to translate strategy into measurable impact.',
  },
  {
    name: 'Program Team',
    role: 'Field Implementation & Capacity Building',
    bio:
      'Embedded teams co-create solutions with local leaders, strengthen frontline capabilities, and ensure last-mile delivery.',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Team</h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          We bring a multidisciplinary team with deep public health experience and strong local partnerships.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {team.map((m) => (
            <article key={m.name} className="rounded-xl border border-gray-200 p-6 bg-white">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-teal-600/10 text-teal-700 flex items-center justify-center" aria-hidden="true">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{m.name}</h3>
                  <p className="text-sm text-gray-600">{m.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-700 leading-relaxed">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
