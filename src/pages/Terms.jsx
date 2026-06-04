function Terms() {
  return (
    <main className="px-6 py-20">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          Terms & Conditions
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight text-blue-900 sm:text-5xl">
          Website terms and service disclaimer
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-700">
          This website provides general information about Safe Comfort Home Care
          and its non-medical personal assistance services. By using this
          website, visitors agree to use the information for general reference
          and communication purposes only.
        </p>

        <div className="mt-10 space-y-6">
          <section className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-blue-900">
              Non-Medical Services
            </h2>
            <p className="mt-3 leading-7 text-gray-700">
              Safe Comfort Home Care provides non-medical personal assistance
              services. We do not provide skilled nursing, medication
              administration, wound care, medical treatments, or emergency
              medical services.
            </p>
          </section>

          <section className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-blue-900">
              Website Information
            </h2>
            <p className="mt-3 leading-7 text-gray-700">
              Website content is provided for general informational purposes and
              may be updated over time. Specific services, availability, and
              care planning details should be confirmed directly with Safe
              Comfort Home Care.
            </p>
          </section>

          <section className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-blue-900">
              Form Submissions
            </h2>
            <p className="mt-3 leading-7 text-gray-700">
              Website forms are intended for general inquiries and employment
              interest. Please do not submit medical records, Social Security
              numbers, or sensitive health information through website forms.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Terms;
