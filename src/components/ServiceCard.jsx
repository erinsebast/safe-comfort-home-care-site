const iconPaths = {
  hygiene: (
    <>
      <path d="M7 11h10" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      <path d="M6 11h12v3a6 6 0 0 1-12 0v-3Z" />
      <path d="M9 19v2" />
      <path d="M15 19v2" />
    </>
  ),
  grooming: (
    <>
      <path d="M7 5h10" />
      <path d="M9 5v14" />
      <path d="M15 5v14" />
      <path d="M7 19h10" />
      <path d="M12 8v8" />
    </>
  ),
  meal: (
    <>
      <path d="M6 3v18" />
      <path d="M10 3v7a4 4 0 0 1-4 4" />
      <path d="M17 3v18" />
      <path d="M14 7a3 3 0 0 1 6 0v4h-6V7Z" />
    </>
  ),
  home: (
    <>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  mobility: (
    <>
      <circle cx="9" cy="5" r="2" />
      <path d="M9 7v5l4 2" />
      <path d="M7 12h4" />
      <path d="M6 21a5 5 0 1 0 8-4" />
      <path d="M17 13h3v8" />
    </>
  ),
  companion: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="8" r="3" />
      <path d="M3 21a5 5 0 0 1 10 0" />
      <path d="M11 21a5 5 0 0 1 10 0" />
    </>
  ),
  reminder: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
      <path d="M7 4 5 2" />
      <path d="M17 4l2-2" />
    </>
  ),
  appointment: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M4 10h16" />
      <path d="m9 15 2 2 4-4" />
    </>
  ),
  safety: (
    <>
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  routines: (
    <>
      <path d="M6 5h12" />
      <path d="M6 12h12" />
      <path d="M6 19h12" />
      <path d="m4 5 1 1 2-2" />
      <path d="m4 12 1 1 2-2" />
      <path d="m4 19 1 1 2-2" />
    </>
  ),
};

function ServiceIcon({ name }) {
  return (
    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        {iconPaths[name] ?? iconPaths.home}
      </svg>
    </span>
  );
}

function ServiceCard({ title, description, icon }) {
  return (
    <article className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <ServiceIcon name={icon} />
      <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
      <p className="mt-3 leading-7 text-gray-700">{description}</p>
    </article>
  );
}

export default ServiceCard;
