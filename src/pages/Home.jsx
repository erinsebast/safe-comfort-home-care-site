import ServiceCard from "../components/ServiceCard";
import heroImage from "../assets/home-care-hero.png";

const serviceHighlights = [
  {
    title: "Bathing & Personal Hygiene",
    icon: "hygiene",
    description:
      "Respectful support with bathing, toileting, and personal hygiene routines.",
  },
  {
    title: "Dressing & Grooming",
    icon: "grooming",
    description:
      "Assistance with dressing, grooming, and getting ready for the day.",
  },
  {
    title: "Meal Preparation",
    icon: "meal",
    description:
      "Help preparing simple meals and keeping mealtimes comfortable at home.",
  },
  {
    title: "Light Housekeeping",
    icon: "home",
    description:
      "Support with everyday household tasks that help maintain a safe space.",
  },
  {
    title: "Mobility & Transfer Assistance",
    icon: "mobility",
    description:
      "Steady assistance with walking, positioning, and safe movement around the home.",
  },
  {
    title: "Companionship",
    icon: "companion",
    description:
      "Friendly conversation, supervision, and reassuring presence during the day.",
  },
  {
    title: "Medication Reminders",
    icon: "reminder",
    description:
      "Non-medical reminders to take medications as directed by the care plan.",
  },
  {
    title: "Escort to Appointments",
    icon: "appointment",
    description:
      "Accompaniment to appointments, errands, and approved activities.",
  },
  {
    title: "Safety Monitoring",
    icon: "safety",
    description:
      "Attentive support to help clients remain safe and comfortable at home.",
  },
  {
    title: "Support with Daily Routines",
    icon: "routines",
    description:
      "Reliable help with the daily habits and tasks that support independence.",
  },
];

const reasons = [
  "Person-centered care that supports dignity and independence",
  "Reliable help with daily routines in the comfort of home",
  "Compassionate support for clients, families, and caregivers",
  "Clear non-medical services focused on safety and comfort",
];

const counties = [
  "Fort Bend County",
  "Harris County",
  "Brazoria County",
  "Waller County",
];

function Home() {
  return (
    <main id="home" className="pb-16 md:pb-0">
      <section
        className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-blue-950 px-6 py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(23, 37, 84, 0.92), rgba(23, 37, 84, 0.68), rgba(23, 37, 84, 0.16)), url(${heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">
              Texas-Licensed Personal Assistance Services
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Safe support. Comfort at home. Compassionate care.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-blue-50">
              Safe Comfort Home Care provides respectful, non-medical in-home
              care that helps clients maintain independence, dignity, and safety
              in their daily lives.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#request"
                className="rounded-lg bg-teal-500 px-5 py-3 font-semibold text-blue-950 transition hover:bg-teal-300"
              >
                Request Services
              </a>

              <a
                href="tel:8327577011"
                className="rounded-lg border border-white px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-950"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue-900">
              Non-medical personal assistance for everyday needs
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              Our services are designed to support daily living at home, from
              personal care routines to household support and companionship.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceHighlights.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#request"
              className="rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              Request Care Today
            </a>
            <a
              href="#resources"
              className="rounded-lg border border-blue-900 px-5 py-3 font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white"
            >
              View our Service Plans
            </a>
          </div>

          <p className="mt-8 rounded-lg bg-blue-900 px-5 py-4 text-sm leading-6 text-blue-50">
            Safe Comfort Home Care provides non-medical personal assistance
            services. We do not provide skilled nursing, medication
            administration, wound care, or medical treatments.
          </p>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue-900">
              Care built around comfort, dignity, and independence
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              We are committed to enhancing quality of life for individuals in
              their homes by providing compassionate, reliable, and personalized
              personal assistance services.
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 p-6">
            <h3 className="font-semibold text-blue-900">Our Mission</h3>
            <p className="mt-3 leading-7 text-gray-700">
              To deliver care with integrity, respect, and professionalism while
              supporting clients and families in maintaining safety, comfort, and
              independence in daily life.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-bold text-blue-900">
            Warm, reliable support families can trust
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm"
              >
                <p className="font-semibold leading-7 text-blue-900">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="scroll-mt-24 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Client Resources
          </p>
          <h2 className="mt-3 text-3xl font-bold text-blue-900">
            Helpful documents will live here
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
            This section will include client rights and responsibilities,
            grievance procedures, privacy practices, service plan information,
            and what to expect during home visits.
          </p>
        </div>
      </section>

      <section id="careers" className="scroll-mt-24 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Careers
          </p>
          <h2 className="mt-3 text-3xl font-bold text-blue-900">
            Join a compassionate care team
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
            A future application section will allow PAS attendants to share
            contact details, availability, experience, and resume information.
          </p>
        </div>
      </section>

      <section id="request" className="scroll-mt-24 bg-blue-900 px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">
              Request Care Today
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Ready to talk through your care needs?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-blue-100">
              Call Safe Comfort Home Care or send a request to begin a
              conversation about non-medical support at home.
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-lg bg-teal-400 px-5 py-3 text-center font-semibold text-blue-950 transition hover:bg-teal-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold text-blue-900">
            Family feedback placeholder
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">
            Testimonials can be added here once Safe Comfort Home Care has
            approved family or client feedback to publish.
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Service Area
            </p>
            <h2 className="mt-3 text-3xl font-bold text-blue-900">
              Serving the Houston region
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              Safe Comfort Home Care serves families across the greater Houston
              area, including:
            </p>
            <ul className="mt-6 grid gap-3 text-gray-700 sm:grid-cols-2">
              {counties.map((county) => (
                <li key={county} className="rounded-lg bg-white px-4 py-3">
                  {county}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900">Contact Us</h3>
            <p className="mt-4 leading-7 text-gray-700">
              18115 Emerybrook Court
              <br />
              Richmond, Texas 77407
            </p>
            <p className="mt-4 leading-7 text-gray-700">
              <a href="tel:8327577011" className="font-semibold text-teal-700">
                832-757-7011
              </a>
              <br />
              <a
                href="mailto:safecomforthc@gmail.com"
                className="font-semibold text-teal-700"
              >
                safecomforthc@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <a
        href="tel:8327577011"
        className="fixed bottom-4 left-4 right-4 z-40 rounded-lg bg-teal-600 px-5 py-3 text-center font-semibold text-white shadow-lg md:hidden"
      >
        Call Us
      </a>
    </main>
  );
}

export default Home;
