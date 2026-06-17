const counties = [
  "Fort Bend County",
  "Harris County",
  "Brazoria County",
  "Waller County",
];

function Contact() {
  return (
    <main className="px-6 py-20">
      <section className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-blue-900 sm:text-5xl">
            Start a conversation about care at home
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">
            Reach out to Safe Comfort Home Care to ask about non-medical PAS
            support, service availability, or next steps for a loved one.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-blue-900">
              Contact Information
            </h2>

            <div className="mt-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr] sm:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                    Office Address
                  </p>
                  <address className="mt-2 not-italic leading-7 text-gray-700">
                    18115 Emerybrook Court
                    <br />
                    Richmond, Texas 77407
                  </address>
                </div>

                <iframe
                  title="Map to Safe Comfort Home Care office"
                  src="https://www.google.com/maps?q=18115%20Emerybrook%20Court%2C%20Richmond%2C%20Texas%2077407&output=embed"
                  className="h-48 w-full rounded-lg border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                  Phone
                </p>
                <a
                  href="tel:8327577011"
                  className="mt-2 inline-flex font-semibold text-teal-700 transition hover:text-teal-900"
                >
                  832-757-7011
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                  Email
                </p>
                <a
                  href="mailto:safecomforthc@gmail.com"
                  className="mt-2 inline-flex font-semibold text-teal-700 transition hover:text-teal-900"
                >
                  safecomforthc@gmail.com
                </a>
              </div>
            </div>

            <p className="mt-6 rounded-lg bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-900">
              Please do not send Social Security numbers, medical records, or
              other sensitive personal information by email.
            </p>
          </div>

          <div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-blue-900">
              Serving the Houston region
            </h2>
            <p className="mt-4 leading-7 text-gray-700">
              Safe Comfort Home Care serves families across the greater Houston
              area, including:
            </p>
            <ul className="mt-5 space-y-3 text-gray-700">
              {counties.map((county) => (
                <li key={county} className="flex gap-3 leading-7">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600"
                    aria-hidden="true"
                  />
                  <span>{county}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-lg bg-blue-900 px-5 py-4 text-blue-50">
              <p className="font-semibold">Ready to request support?</p>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                Call or email Safe Comfort Home Care to begin discussing
                non-medical personal assistance services.
              </p>
            </div>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="mt-8 rounded-lg border border-blue-100 bg-white p-6 shadow-sm"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human:
              <input name="bot-field" />
            </label>
          </p>

          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-blue-900">Send a Message</h2>
            <p className="mt-3 leading-7 text-gray-700">
              Use this form to ask a general question or request a follow-up
              about non-medical personal assistance services.
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <label className="block">
              <span className="text-sm font-semibold text-blue-900">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="mt-2 w-full rounded-lg border border-blue-200 px-4 py-3 text-gray-800 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-blue-900">
                Phone
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="mt-2 w-full rounded-lg border border-blue-200 px-4 py-3 text-gray-800 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-blue-900">
                Email
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="mt-2 w-full rounded-lg border border-blue-200 px-4 py-3 text-gray-800 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </label>

            <label className="block md:col-span-3">
              <span className="text-sm font-semibold text-blue-900">
                Message
              </span>
              <textarea
                name="message"
                rows="5"
                placeholder="How can we help?"
                className="mt-2 w-full rounded-lg border border-blue-200 px-4 py-3 text-gray-800 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
          >
            Send Message
          </button>
          <p className="mt-4 text-xs leading-5 text-gray-500">
            Please do not include medical records, Social Security numbers, or
            sensitive health information in this form.
          </p>
        </form>
      </section>
    </main>
  );
}

export default Contact;
