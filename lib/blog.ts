export interface Author {
  name: string
  role: string
  avatar: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: 'Financial Wellness' | 'HR & Retention' | 'Fintech & Security' | 'Guides'
  author: Author
  date: string
  readTime: string
  image: string
  featured?: boolean
  content: {
    intro: string
    sections: {
      heading: string
      body: string[]
      quote?: string
      callout?: {
        title: string
        text: string
      }
    }[]
    takeaways: string[]
  }
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'salary-backed-loans-vs-predatory-loan-apps',
    title: 'Why Salary-Backed Workplace Loans Are Eradicating Predatory Loan Sharks Across Nigeria',
    excerpt: 'How employer-sponsored financial benefits are rescuing hard-working professionals from extortionate interest traps and contact-shaming defamation.',
    category: 'Financial Wellness',
    author: {
      name: 'Ifeoluwa Ajetomobi',
      role: 'Product Expert at FUNDit',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGKKyVXGh3HIbVfAQaQMK1OXaxAEricpme8wF4F0-Qg&s=10',
    },
    date: 'Oct 24, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&auto=format&fit=crop&q=80',
    featured: true,
    content: {
      intro: 'Across Nigerian corporate offices, a silent crisis has affected productivity for years: dedicated employees facing sudden mid-month expenses and falling prey to predatory digital lending apps that charge triple-digit interest and harass their personal contacts. Workplace salary-backed loans are proving to be the ethical, sustainable antidote.',
      sections: [
        {
          heading: 'The Mid-Month Reality in Nigeria',
          body: [
            'Payday comes once every thirty days. Life emergencies (unexpected medical bills, urgent home repairs, school fees deadlines, and transport hikes) do not adhere to payroll schedules.',
            'When commercial banks require weeks of processing and physical collateral that most salary earners do not possess, employees frequently turn to quick digital loan apps out of pure desperation. Within weeks, compounding daily interest rates of 1% to 2% turn a modest ₦50,000 emergency into an unmanageable ₦180,000 debt cycle.',
          ],
          quote: 'Asking for credit to handle a legitimate family emergency is not a character flaw. It is an economic reality of modern urban life.',
        },
        {
          heading: 'The Psychological Cost of Predatory Debt Collection',
          body: [
            'Unlike regulated financial institutions, rogue lending apps frequently employ illegal debt-collection tactics: scraping users’ smartphone contact lists and broadcasting defamatory messages accusing borrowers of fraud to colleagues, religious leaders, and family members.',
            'The psychological toll on employees is devastating. Staff experience acute shame, depression, and workplace distraction, leading to high absenteeism and precipitous drops in job performance.',
          ],
          callout: {
            title: 'The Digiit Privacy Guarantee',
            text: 'Digiit operates strictly under the Nigeria Data Protection Act (NDPA). We never access contacts, never broadcast loan statuses, and never compromise employee dignity.',
          },
        },
        {
          heading: 'How Employer-Sponsorship Restores Sanity and Dignity',
          body: [
            'By partnering with forward-thinking employers, Digiit integrates directly with verified payroll systems. This structural integration eliminates credit risk for lenders, allowing us to offer vastly lower, capped interest rates with zero hidden traps.',
            'Because repayments are automatically scheduled on monthly salary dates, the employee never experiences the terror of predatory rollover fees. The process is 100% confidential, self-serve, and dignified.',
          ],
        },
      ],
      takeaways: [
        'Predatory lending harms both the employee’s mental health and the company’s bottom-line productivity.',
        'Salary-backed loans replace high-interest shark loans with fair, capped rates funded by licensed institutions.',
        'Employers incur zero balance-sheet risk or capital outlay while providing their team with a transformative safety net.',
      ],
    },
  },
  {
    slug: 'reducing-employee-turnover-with-financial-benefits',
    title: 'The Hidden Cause of Employee Attrition: Why Financial Stress Drives Your Best Talent Away',
    excerpt: 'How workplace financial wellness prevents staff turnover.',
    category: 'HR & Retention',
    author: {
      name: 'Ifeoluwa Ajetomobi',
      role: 'Product Expert at FUNDit',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGKKyVXGh3HIbVfAQaQMK1OXaxAEricpme8wF4F0-Qg&s=10',
    },
    date: 'Oct 18, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80',
    content: {
      intro: 'When human resources directors review exit interviews, departing employees often cite "seeking better opportunities." However, beneath that diplomatic phrase lies a deeper reality: relentless mid-month cash-flow stress that causes staff to hop between companies for marginal pay bumps.',
      sections: [
        {
          heading: 'The Real Impact of Financial Anxiety on Job Performance',
          body: [
            'A worker who is preoccupied with how to pay rent or cover urgent prescription costs for a sick parent is operating at a severe cognitive deficit. Studies demonstrate that financial stress reduces workplace productivity by up to 34% and increases errors in critical operations.',
            'Furthermore, when traditional employers require staff to write humiliating letters to HR requesting salary advances, it introduces uncomfortable interpersonal dynamics and delays.',
          ],
        },
        {
          heading: 'The 23% Retention Advantage',
          body: [
            'Data from companies that have deployed Digiit demonstrates an average 23% reduction in voluntary staff turnover within the first twelve months of rollout.',
            'When employees know they have confidential, instant access to emergency funds backed by their salary at zero cost to their dignity, their loyalty to the organization deepens significantly.',
          ],
          quote: 'Financial wellness is no longer an optional executive perk; it is the single most requested workplace benefit across Nigerian enterprises.',
        },
        {
          heading: 'Zero Cost and Zero Administration for HR',
          body: [
            'Historically, managing internal staff loan schemes tied up valuable working capital and required hours of tedious manual accounting for HR and payroll teams.',
            'Digiit solves this by automating underwriting, disbursement, and monthly deduction schedules through a modern self-service portal, completely insulating the employer from credit risk.',
          ],
        },
      ],
      takeaways: [
        'Personal financial anxiety is a primary catalyst for unplanned employee turnover in Nigeria.',
        'Offering dignified salary-backed loans boosts retention by up to 23% and improves daily focus.',
        'Modern enterprise platforms handle administration and capital, costing the employer zero naira.',
      ],
    },
  },
  {
    slug: 'ndpr-compliance-in-workplace-fintech',
    title: 'Data Privacy in Corporate Lending: What Every Nigerian HR Director Must Know About NDPR',
    excerpt: 'Navigating the Nigeria Data Protection Act 2023: why traditional staff loan paper trails risk regulatory penalties and how bank-grade portals safeguard your enterprise.',
    category: 'Fintech & Security',
    author: {
      name: 'Ifeoluwa Ajetomobi',
      role: 'Product Expert at FUNDit',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGKKyVXGh3HIbVfAQaQMK1OXaxAEricpme8wF4F0-Qg&s=10',
    },
    date: 'Oct 12, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80',
    content: {
      intro: 'With the enactment of the Nigeria Data Protection Act (NDPA) 2023, data governance is no longer just an IT concern. It is an executive boardroom priority. Corporate HR departments that collect, store, and process staff financial requests must ensure rigorous compliance.',
      sections: [
        {
          heading: 'The Vulnerability of Paper-Based Staff Loans',
          body: [
            'In many Nigerian organizations, employee salary advance requests still travel through open email threads, printed approval memos, and shared spreadsheets. This exposes deeply personal financial details to office gossip and unauthorized staff access.',
            'Under the NDPA, unencrypted transmission of sensitive employee identifiers (such as BVNs, bank accounts, and personal borrowing reasons) constitutes a severe data protection breach subject to heavy fines by the Nigeria Data Protection Commission (NDPC).',
          ],
        },
        {
          heading: 'The Bank-Grade Vault Architecture',
          body: [
            'At Digiit, all employee data is encrypted at rest using 256-bit AES algorithms and transmitted through TLS 1.3 tunnels. Sensitive identifiers such as BVN are tokenized immediately upon verification.',
            'Crucially, our system enforces complete separation between the employee’s loan reasons and their employer’s payroll administrators. HR receives only the consolidated deduction figures needed for payroll reconciliation.',
          ],
          callout: {
            title: 'NDPA Compliance Shield',
            text: 'Partnering with Digiit transfers the compliance, data handling, and regulatory burden to a certified Data Protection Compliance Organization (DPCO)-audited platform.',
          },
        },
        {
          heading: 'Institutional Lending Backing',
          body: [
            'Digiit partners exclusively with Central Bank of Nigeria (CBN)-licensed financial institutions and lenders. This ensures that every naira disbursed adheres strictly to federal anti-money laundering (AML/CFT) frameworks.',
          ],
        },
      ],
      takeaways: [
        'Informal staff advance requests create severe legal vulnerabilities under the NDPA 2023.',
        'Encrypted, tokenized platforms protect employees from workplace exposure and companies from regulatory fines.',
        'Digiit provides a turnkey, fully compliant lending framework audited by certified DPCOs.',
      ],
    },
  },
  {
    slug: 'budgeting-and-managing-cash-flow-between-paydays',
    title: 'The Modern Nigerian Salary Earner’s Guide to Managing Cash Flow in an Inflationary Economy',
    excerpt: 'Practical budgeting strategies, how to handle unexpected emergencies responsibly, and when using a salary-backed loan makes sound financial sense.',
    category: 'Guides',
    author: {
      name: 'Ifeoluwa Ajetomobi',
      role: 'Product Expert at FUNDit',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGKKyVXGh3HIbVfAQaQMK1OXaxAEricpme8wF4F0-Qg&s=10',
    },
    date: 'Oct 05, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop&q=80',
    content: {
      intro: 'With economic fluctuations and cost-of-living adjustments impacting household budgets in Lagos, Abuja, and across Nigeria, navigating the 30-day salary cycle requires deliberate planning and clear financial habits.',
      sections: [
        {
          heading: 'The 50/30/20 Rule Adapted for Nigerian Realities',
          body: [
            'The classical budgeting framework suggests allocating 50% of income to essential needs, 30% to personal wants, and 20% to savings or debt reduction. However, in urban Nigeria where rent, food inflation, and transport represent outsized burdens, adjustments are essential.',
            'Aim for 60% essentials, 20% future buffer, and 20% discretionary spending. Tracking every transfer via mobile banking apps is the first step toward reclaiming control.',
          ],
        },
        {
          heading: 'Good Debt vs. Bad Debt: Understanding the Difference',
          body: [
            'Borrowing money is not inherently bad; the terms, purpose, and structure of the loan determine its value.',
            'Bad debt involves borrowing at extortionate rates (e.g., 20% monthly from unregulated loan apps) to finance consumer lifestyle purchases. Good debt involves utilizing low-interest, transparent salary-backed loans to solve urgent emergencies or pay upfront annual expenses that save you money in the long run.',
          ],
          quote: 'A salary advance used to prevent a late-fee penalty on rent or child school fees is a strategic financial tool, provided the repayment schedule is transparent and manageable.',
        },
        {
          heading: 'Building a Micro-Emergency Buffer',
          body: [
            'Even saving ₦5,000 to ₦15,000 every payday into an interest-yielding target account builds a psychological cushion that reduces reliance on external credit over time.',
          ],
        },
      ],
      takeaways: [
        'Adapt global budgeting models to realistic Nigerian household expenses and inflation.',
        'Distinguish between high-risk predatory loans and ethical, salary-deducted workplace credit.',
        'Use salary advances as a deliberate bridge for unavoidable emergencies, not lifestyle inflation.',
      ],
    },
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS
}

export function getRelatedPosts(currentSlug: string, count = 2): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, count)
}

// "Oct 24, 2026" -> "24.10.26" (falls back to the original text)
export function formatShortDate(d: string): string {
  const t = new Date(d)
  if (isNaN(t.getTime())) return d
  const p = (n: number) => String(n).padStart(2, '0')
  return `${p(t.getDate())}.${p(t.getMonth() + 1)}.${String(t.getFullYear()).slice(-2)}`
}

// "Why Salary Loans Work" -> "why-salary-loans-work" (used for in-page heading links)
export function slugifyHeading(text: string): string {
  return text.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

// "Oct 24, 2026" -> "2026-10-24" (machine-readable for <time> and structured data)
export function toIsoDate(d: string): string {
  const t = new Date(d)
  if (isNaN(t.getTime())) return d
  const p = (n: number) => String(n).padStart(2, '0')
  return `${t.getFullYear()}-${p(t.getMonth() + 1)}-${p(t.getDate())}`
}
