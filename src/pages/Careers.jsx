const careerReasons = [
  "Meaningful work that helps clients remain safe, comfortable, and independent at home.",
  "A compassionate team culture built around respect, reliability, and dignity.",
  "Opportunities to support families through consistent, person-centered care.",
];

const minimumRequirements = [
  "High school diploma or GED required.",
  "Caregiving experience is preferred.",
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
      "Complete the editable online application form directly on this website.",
    href: "#career-application",
    actionLabel: "Apply Online",
  },
  {
    title: "PAS Attendant Job Description",
    description:
      "Review the PAS attendant role, responsibilities, and expectations before applying.",
    href: "/documents/pas-attendant-job-description.pdf",
    actionLabel: "View / Download",
  },
];

const inputClass =
  "mt-2 w-full rounded-lg border border-blue-200 px-4 py-3 text-gray-800 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100";
const checkboxClass = "h-4 w-4 rounded border-blue-300 text-teal-600";

function FormField({
  label,
  name,
  type = "text",
  className = "",
  placeholder = "",
  required = false,
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-blue-900">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className={inputClass}
      />
    </label>
  );
}

function TextareaField({
  label,
  name,
  className = "",
  placeholder = "",
  rows = "4",
  required = false,
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-blue-900">{label}</span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={inputClass}
      />
    </label>
  );
}

function Choice({ name, value, type = "checkbox", children, required = false }) {
  return (
    <label className="flex gap-3 leading-7 text-gray-700">
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        className={checkboxClass}
      />
      <span>{children}</span>
    </label>
  );
}

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
                      className="mt-3 inline-flex rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
                      {...(document.href.startsWith("/documents/")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {document.actionLabel}
                    </a>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <form
            id="career-application"
            name="career-application"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            encType="multipart/form-data"
            className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm"
          >
            <input
              type="hidden"
              name="form-name"
              value="career-application"
            />
            <p className="hidden">
              <label>
                Don&apos;t fill this out if you&apos;re human:
                <input name="bot-field" />
              </label>
            </p>

            <h2 className="text-xl font-bold text-blue-900">Apply Online</h2>
            <p className="mt-3 leading-7 text-gray-700">
              Complete the employment application below. Submitted applications
              are received privately by Safe Comfort Home Care and are not
              published on the website.
            </p>

            <div className="mt-6 space-y-8">
              <div className="rounded-lg bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-900">
                <p className="font-semibold">Administrator: Ewere Osamede</p>
                <p className="mt-2">
                  Safe Comfort Home Care, LLC is an equal opportunity employer.
                  All qualified applicants will receive consideration without
                  regard to race, color, national origin, age, disability, sex,
                  or religion.
                </p>
              </div>

              <section>
                <h3 className="text-lg font-bold text-blue-900">
                  1. Applicant Information
                </h3>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  <FormField label="Full Name" name="full_name" required />
                  <FormField
                    label="Date of Birth"
                    name="date_of_birth"
                    type="date"
                  />
                  <FormField
                    label="Social Security Number (last 4 only)"
                    name="ssn_last_4"
                    placeholder="Last 4 digits only"
                  />
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    required
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    className="sm:col-span-2"
                    required
                  />
                  <FormField
                    label="Address"
                    name="address"
                    className="sm:col-span-2"
                  />
                  <FormField label="City" name="city" />
                  <FormField label="State" name="state" />
                  <FormField label="Zip" name="zip" />
                  <FormField
                    label="Emergency Contact Name"
                    name="emergency_contact_name"
                  />
                  <FormField
                    label="Emergency Contact Phone"
                    name="emergency_contact_phone"
                    type="tel"
                  />
                  <FormField
                    label="Emergency Contact Relationship"
                    name="emergency_contact_relationship"
                  />
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold text-blue-900">
                  2. Position Applying For
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Choice name="position_applying_for" value="PAS Attendant">
                      PAS Attendant
                    </Choice>
                    <Choice
                      name="position_applying_for"
                      value="Administrative Staff"
                    >
                      Administrative Staff
                    </Choice>
                    <Choice name="position_applying_for" value="Other">
                      Other
                    </Choice>
                    <FormField
                      label="Other Position"
                      name="position_other"
                      placeholder="If other, please specify"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      label="Date Available to Start"
                      name="date_available"
                      type="date"
                    />
                    <div>
                      <p className="text-sm font-semibold text-blue-900">
                        Desired Employment
                      </p>
                      <div className="mt-2 grid gap-3">
                        <Choice
                          name="desired_employment"
                          value="Full-Time"
                          type="radio"
                        >
                          Full-Time
                        </Choice>
                        <Choice
                          name="desired_employment"
                          value="Part-Time"
                          type="radio"
                        >
                          Part-Time
                        </Choice>
                        <Choice
                          name="desired_employment"
                          value="PRN / As Needed"
                          type="radio"
                        >
                          PRN / As Needed
                        </Choice>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold text-blue-900">
                  3. Work Eligibility
                </h3>
                <div className="mt-4 space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-blue-900">
                      Are you legally authorized to work in the U.S.?
                    </p>
                    <div className="mt-2 flex flex-wrap gap-5">
                      <Choice
                        name="authorized_to_work"
                        value="Yes"
                        type="radio"
                      >
                        Yes
                      </Choice>
                      <Choice
                        name="authorized_to_work"
                        value="No"
                        type="radio"
                      >
                        No
                      </Choice>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-900">
                      Have you ever been convicted of a felony?
                    </p>
                    <div className="mt-2 flex flex-wrap gap-5">
                      <Choice name="felony_conviction" value="No" type="radio">
                        No
                      </Choice>
                      <Choice name="felony_conviction" value="Yes" type="radio">
                        Yes
                      </Choice>
                    </div>
                    <TextareaField
                      label="If yes, please explain"
                      name="felony_explanation"
                      rows="3"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-900">
                      Have you ever been listed on the Employee Misconduct
                      Registry (EMR) or Nurse Aide Registry (NAR)?
                    </p>
                    <div className="mt-2 flex flex-wrap gap-5">
                      <Choice name="emr_nar_listed" value="No" type="radio">
                        No
                      </Choice>
                      <Choice name="emr_nar_listed" value="Yes" type="radio">
                        Yes
                      </Choice>
                    </div>
                    <TextareaField
                      label="If yes, please explain"
                      name="emr_nar_explanation"
                      rows="3"
                    />
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold text-blue-900">
                  4. Work Experience
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  List your last three employers, starting with the most recent.
                </p>
                {[1, 2, 3].map((employerNumber) => (
                  <div
                    key={employerNumber}
                    className="mt-5 rounded-lg border border-blue-100 bg-blue-50 p-4"
                  >
                    <h4 className="font-semibold text-blue-900">
                      Employer #{employerNumber}
                    </h4>
                    <div className="mt-4 grid gap-5 sm:grid-cols-2">
                      <FormField
                        label="Company Name"
                        name={`employer_${employerNumber}_company`}
                      />
                      <FormField
                        label="Position"
                        name={`employer_${employerNumber}_position`}
                      />
                      <FormField
                        label="Supervisor"
                        name={`employer_${employerNumber}_supervisor`}
                      />
                      <FormField
                        label="Phone"
                        name={`employer_${employerNumber}_phone`}
                        type="tel"
                      />
                      <FormField
                        label="From"
                        name={`employer_${employerNumber}_from`}
                      />
                      <FormField
                        label="To"
                        name={`employer_${employerNumber}_to`}
                      />
                      <TextareaField
                        label="Reason for Leaving"
                        name={`employer_${employerNumber}_reason_for_leaving`}
                        className="sm:col-span-2"
                        rows="3"
                      />
                    </div>
                  </div>
                ))}
              </section>

              <section>
                <h3 className="text-lg font-bold text-blue-900">
                  5. Education
                </h3>
                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  <FormField label="High School" name="high_school" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900">
                      Education Completed
                    </p>
                    <div className="mt-2 grid gap-3">
                      <Choice
                        name="education_completed"
                        value="Diploma"
                        type="radio"
                      >
                        Diploma
                      </Choice>
                      <Choice
                        name="education_completed"
                        value="GED"
                        type="radio"
                      >
                        GED
                      </Choice>
                      <Choice
                        name="education_completed"
                        value="None"
                        type="radio"
                      >
                        None
                      </Choice>
                    </div>
                  </div>
                  <FormField label="Graduation Year" name="graduation_year" />
                  <FormField
                    label="College/Training"
                    name="college_training"
                  />
                  <FormField
                    label="Degree/Certificate"
                    name="degree_certificate"
                  />
                  <FormField label="Year Completed" name="year_completed" />
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold text-blue-900">
                  6. Certifications & Skills
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Choice name="certifications" value="CPR">
                    CPR
                  </Choice>
                  <Choice name="certifications" value="First Aid">
                    First Aid
                  </Choice>
                  <Choice name="certifications" value="CNA">
                    CNA
                  </Choice>
                  <Choice name="certifications" value="HHA">
                    HHA
                  </Choice>
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Other Certification"
                    name="other_certification"
                  />
                  <FormField
                    label="Languages Spoken"
                    name="languages_spoken"
                  />
                  <TextareaField
                    label="List any PAS experience or special skills"
                    name="pas_experience_skills"
                    className="sm:col-span-2"
                    rows="5"
                  />
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold text-blue-900">
                  7. References
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">
                  Provide two professional references.
                </p>
                {[1, 2].map((referenceNumber) => (
                  <div
                    key={referenceNumber}
                    className="mt-5 rounded-lg border border-blue-100 bg-blue-50 p-4"
                  >
                    <h4 className="font-semibold text-blue-900">
                      Reference #{referenceNumber}
                    </h4>
                    <div className="mt-4 grid gap-5 sm:grid-cols-2">
                      <FormField
                        label="Name"
                        name={`reference_${referenceNumber}_name`}
                      />
                      <FormField
                        label="Phone"
                        name={`reference_${referenceNumber}_phone`}
                        type="tel"
                      />
                      <FormField
                        label="Relationship"
                        name={`reference_${referenceNumber}_relationship`}
                      />
                      <FormField
                        label="Years Known"
                        name={`reference_${referenceNumber}_years_known`}
                      />
                    </div>
                  </div>
                ))}
              </section>

              <section>
                <h3 className="text-lg font-bold text-blue-900">
                  8. Applicant Attestation
                </h3>
                <div className="mt-4 space-y-4 text-gray-700">
                  <Choice name="attestation_certify" value="Certified" required>
                    I certify that the information provided in this application
                    is true and complete to the best of my knowledge. I
                    understand that providing false information may result in
                    disqualification or termination.
                  </Choice>
                  <Choice name="authorization_verify" value="Authorized">
                    I authorize Safe Comfort Home Care, LLC to contact previous
                    employers and verify credentials.
                  </Choice>
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Applicant Signature"
                    name="applicant_signature"
                    placeholder="Type your full name"
                    required
                  />
                  <FormField
                    label="Date"
                    name="signature_date"
                    type="date"
                    required
                  />
                </div>
              </section>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              Submit Application
            </button>
            <p className="mt-4 text-xs leading-5 text-gray-500">
              Please do not include full Social Security numbers, medical
              records, or other sensitive personal information in this form.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Careers;
