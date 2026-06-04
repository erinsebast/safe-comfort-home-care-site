const careerReasons = [
  "Meaningful work that helps clients remain safe, comfortable, and independent at home.",
  "A compassionate team culture built around respect, reliability, and dignity.",
  "Opportunities to support families through consistent, person-centered care.",
];

const minimumRequirements = [
  "Reliable, compassionate, and respectful approach to client care.",
  "Ability to assist with non-medical daily living tasks and household support.",
  "Clear communication with clients, families, and the Safe Comfort Home Care team.",
  "Dependable transportation and availability for scheduled visits.",
  "Able to follow care plan instructions and maintain client confidentiality.",
];

const employmentDocuments = [
  {
    title: "Employment Application",
    description:
      "Download the employment application form to review or complete as part of the hiring process.",
    href: "/documents/employment-application.pdf",
  },
  {
    title: "PAS Attendant Job Description",
    description:
      "Review the PAS attendant role, responsibilities, and expectations before applying.",
    href: "/documents/pas-attendant-job-description.pdf",
  },
];

function Careers() {
  return (
    <main className="px-6 py-20">
      <section className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Careers
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-blue-900 sm:text-5xl">
            Join a compassionate care team
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">
            Safe Comfort Home Care is looking for dependable PAS attendants who
            care about helping clients remain comfortable, respected, and
            supported at home.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <article className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900">
                Why Work With Us?
              </h2>
              <ul className="mt-5 space-y-3 text-gray-700">
                {careerReasons.map((reason) => (
                  <li key={reason} className="flex gap-3 leading-7">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600"
                      aria-hidden="true"
                    />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900">
                PAS Attendant Role
              </h2>
              <p className="mt-4 leading-7 text-gray-700">
                PAS attendants provide non-medical personal assistance and
                supportive services based on each client&apos;s care plan. This
                may include help with daily routines, light household tasks,
                companionship, safety monitoring, and mobility or transfer
                support.
              </p>
              <p className="mt-4 rounded-lg bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-900">
                This role does not include skilled nursing, medication
                administration, wound care, or medical treatments.
              </p>
            </article>

            <article className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900">
                Minimum Requirements
              </h2>
              <ul className="mt-5 space-y-3 text-gray-700">
                {minimumRequirements.map((requirement) => (
                  <li key={requirement} className="flex gap-3 leading-7">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600"
                      aria-hidden="true"
                    />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-blue-900">
                Employment Documents
              </h2>
              <p className="mt-3 leading-7 text-gray-700">
                These confirmed public employment documents are available for
                applicants to review or download.
              </p>

              <div className="mt-5 space-y-4">
                {employmentDocuments.map((document) => (
                  <div
                    key={document.title}
                    className="border-t border-blue-100 pt-4 first:border-t-0 first:pt-0"
                  >
                    <h3 className="font-semibold text-blue-900">
                      {document.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      {document.description}
                    </p>
                    <a
                      href={document.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
                    >
                      View / Download
                    </a>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <form className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-blue-900">Apply Online</h2>
            <p className="mt-3 leading-7 text-gray-700">
              Share your contact information, availability, and caregiving
              experience. Application submissions will be connected after the
              client confirms the final hiring workflow.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-blue-900">
                  Name
                </span>
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

              <label className="block sm:col-span-2">
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

              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-blue-900">
                  Upload Resume
                </span>
                <input
                  type="file"
                  name="resume"
                  className="mt-2 w-full rounded-lg border border-dashed border-blue-200 bg-blue-50 px-4 py-3 text-sm text-gray-700 file:mr-4 file:rounded-lg file:border-0 file:bg-teal-600 file:px-4 file:py-2 file:font-semibold file:text-white"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-blue-900">
                  Work Availability
                </span>
                <textarea
                  name="availability"
                  rows="4"
                  placeholder="Example: weekdays, weekends, mornings, evenings..."
                  className="mt-2 w-full rounded-lg border border-blue-200 px-4 py-3 text-gray-800 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-blue-900">
                  Experience Summary
                </span>
                <textarea
                  name="experience"
                  rows="5"
                  placeholder="Briefly describe your caregiving or related experience."
                  className="mt-2 w-full rounded-lg border border-blue-200 px-4 py-3 text-gray-800 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                />
              </label>
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              Submit Application
            </button>
            <p className="mt-4 text-xs leading-5 text-gray-500">
              Please do not include Social Security numbers, medical records, or
              other sensitive personal information in this form.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Careers;
