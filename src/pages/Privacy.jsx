function Privacy() {
  return (
    <main className="px-6 py-20">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Privacy Policy
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight text-blue-900 sm:text-5xl">
          Privacy and information use
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-700">
          Safe Comfort Home Care respects the privacy of clients, families,
          applicants, and website visitors. Information shared through this
          website is used to respond to inquiries, communicate about services,
          and support appropriate follow-up.
        </p>

        <div className="mt-10 space-y-6">
          <section className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-blue-900">
              Information You Share
            </h2>
            <p className="mt-3 leading-7 text-gray-700">
              Website forms may ask for basic contact information such as name,
              phone number, email address, availability, resume details, or a
              general message. Please do not include Social Security numbers,
              medical records, or sensitive health information in website forms.
            </p>
          </section>

          <section className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-blue-900">
              How Information Is Used
            </h2>
            <p className="mt-3 leading-7 text-gray-700">
              Information submitted through the website may be used to respond
              to questions, follow up about non-medical personal assistance
              services, or review employment interest. Safe Comfort Home Care
              does not use website forms for emergency communication.
            </p>
          </section>

          <section className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-blue-900">
              Contact About Privacy
            </h2>
            <p className="mt-3 leading-7 text-gray-700">
              Questions about privacy practices may be directed to Safe Comfort
              Home Care by phone at{" "}
              <a
                href="tel:8327577011"
                className="font-semibold text-teal-700 hover:text-teal-900"
              >
                832-757-7011
              </a>{" "}
              or by email at{" "}
              <a
                href="mailto:safecomforthc@gmail.com"
                className="font-semibold text-teal-700 hover:text-teal-900"
              >
                safecomforthc@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Privacy;
