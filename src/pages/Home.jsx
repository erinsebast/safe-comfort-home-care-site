function Home() {
  return (
    <main id="home">
      <section className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold text-blue-900">
          Safe Comfort Home Care
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          Compassionate non-medical home care you can trust.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="#request"
            className="rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white"
          >
            Request Services
          </a>

          <a
            href="tel:8327577011"
            className="rounded-lg border border-blue-900 px-5 py-3 font-semibold text-blue-900"
          >
            Call Us
          </a>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-900">Services</h2>
      </section>

      <section
        id="about"
        className="scroll-mt-24 bg-white px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold text-blue-900">About Us</h2>
      </section>

      <section id="resources" className="scroll-mt-24 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-900">Client Resources</h2>
      </section>

      <section
        id="careers"
        className="scroll-mt-24 bg-white px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold text-blue-900">Careers</h2>
      </section>

      <section id="request" className="scroll-mt-24 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-900">Request Services</h2>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 bg-white px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold text-blue-900">Contact Us</h2>
      </section>
    </main>
  );
}

export default Home;
