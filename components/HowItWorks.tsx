interface Step {
  step: string
  color: string
  title: string
  desc: string
}

const steps: Step[] = [
  {
    step: 'Step 1',
    color: '#27398a', // Digiit Indigo
    title: 'Onboard in 48 Hours',
    desc: 'Your company signs a legal agreement with us, then fills in our company and staff onboarding form to get started.',
  },
  {
    step: 'Step 2',
    color: '#ef3932', // Digiit Coral Red
    title: 'Zero HR Touchpoints',
    desc: 'Staff activate their Digiit account and can start getting loans in under 3 minutes.',
  },
  {
    step: 'Step 3',
    color: '#f59e0b', // Warm Gold
    title: 'Instant Disbursement',
    desc: "Funds are credited directly to the staff member's bank account in under 2 minutes, with zero liability to the employer.",
  },
  {
    step: 'Step 4',
    color: '#10b981', // Emerald Green
    title: 'Automated Deductions',
    desc: 'Repayments are deducted seamlessly on payday, backed by clear automated reconciliation reports.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="wrap">
        <div className="how-header">
          <h2>How Digiit Works</h2>
          <p className="sub">
            Digiit sits between your payroll and your people.
          </p>
        </div>

        <div className="how-timeline-wrap">
          {/* Sinuous undulating wave connector for desktop */}
          <svg
            className="how-wave-svg"
            viewBox="0 0 1000 160"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M 125 22 C 250 22, 250 94, 375 94 C 500 94, 500 22, 625 22 C 750 22, 750 94, 875 94"
              stroke="#cbd5e1"
              strokeWidth="3"
              strokeDasharray="7 6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          <div className="how-cols">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`how-step-col ${i % 2 === 1 ? 'how-step-low' : 'how-step-high'}`}
              >
                <div className="how-badge" style={{ backgroundColor: s.color }}>
                  {s.step}
                </div>
                <h3 className="how-step-title">{s.title}</h3>
                <p className="how-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
