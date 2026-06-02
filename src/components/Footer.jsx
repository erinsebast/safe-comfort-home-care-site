function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold">Safe Comfort Home Care</h2>
          <p className="mt-3 text-sm leading-6 text-blue-100">
            Safe support. Comfort at home. Compassionate care.
          </p>
          <p className="mt-4 text-sm leading-6 text-blue-100">
            Providing non-medical personal assistance services with dignity,
            compassion, and respect.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-200">
            Contact
          </h3>
          <address className="mt-3 not-italic text-sm leading-6 text-blue-100">
            18115 Emerybrook Court
            <br />
            Richmond, Texas 77407
          </address>

          <p className="mt-3 text-sm leading-6 text-blue-100">
            <a href="tel:8327577011" className="hover:text-white">
              832-757-7011
            </a>
            <br />
            <a href="mailto:safecomforthc@gmail.com" className="hover:text-white">
              safecomforthc@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-200">
            Important Notice
          </h3>
          <p className="mt-3 text-sm leading-6 text-blue-100">
            Safe Comfort Home Care provides non-medical personal assistance
            services. We do not provide skilled nursing, medication
            administration, wound care, or medical treatments.
          </p>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 text-sm text-blue-100 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {currentYear} Safe Comfort Home Care, LLC. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/#resources" className="hover:text-white">
              Client Resources
            </a>
            <a href="/#contact" className="hover:text-white">
              Contact
            </a>
            <a href="#privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
