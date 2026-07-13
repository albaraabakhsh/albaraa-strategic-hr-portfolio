export interface ProfileData {
  meta: {
    title: string;
    description: string;
  };
  navigation: {
    about: string;
    expertise: string;
    experience: string;
    projects: string;
    achievements: string;
    credentials: string;
    contact: string;
    downloadResume: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    name: string;
    nameAr: string;
    subtitle: string;
    description: string;
    ctaExplore: string;
    ctaContact: string;
    ctaResume: string;
    nodes: {
      people: string;
      strategy: string;
      development: string;
      technology: string;
      impact: string;
    };
  };
  about: {
    title: string;
    tagline: string;
    description1: string;
    description2: string;
    highlightsTitle: string;
    highlights: string[];
  };
  careerHighlights: {
    title: string;
    subtitle: string;
    items: {
      icon: string;
      title: string;
      description: string;
      metric?: string;
    }[];
  };
  expertise: {
    title: string;
    subtitle: string;
    categories: {
      id: string;
      title: string;
      description: string;
      skills: string[];
    }[];
  };
  experience: {
    title: string;
    subtitle: string;
    viewDetails: string;
    hideDetails: string;
    items: {
      role: string;
      company: string;
      location: string;
      period: string;
      overview: string;
      responsibilities: string[];
      achievements: string[];
      systems: string[];
      skills: string[];
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    filterAll: string;
    categories: { id: string; label: string }[];
    items: {
      id: string;
      category: string;
      name: string;
      problem: string;
      myRole: string;
      contribution: string;
      methods: string[];
      status: string;
      outcome: string;
      confidentiality?: string;
      caseStudy: {
        overview: string;
        context: string;
        objectives: string[];
        approach: string[];
        keyDecisions: string[];
        governance: string[];
        lessonsLearned: string[];
      };
    }[];
  };
  achievements: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      metric: string;
      metricLabel: string;
    }[];
  };
  philosophy: {
    title: string;
    statement: string;
    principles: {
      title: string;
      desc: string;
    }[];
  };
  credentials: {
    title: string;
    subtitle: string;
    educationTitle: string;
    certificationsTitle: string;
    education: {
      degree: string;
      field: string;
      institution: string;
      date: string;
      details?: string;
    }[];
    certifications: {
      name: string;
      issuer: string;
      date: string;
      id?: string;
      url?: string;
    }[];
  };
  technical: {
    title: string;
    subtitle: string;
    items: {
      category: string;
      skills: string[];
    }[];
  };
  recommendations: {
    title: string;
    subtitle: string;
    placeholderText: string;
    placeholderLabel: string;
    items: {
      quote: string;
      author: string;
      position: string;
      company: string;
      relation: string;
      linkedin?: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formOrg: string;
    formSubject: string;
    formMessage: string;
    formConsent: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    formError: string;
    validationRequired: string;
    validationEmail: string;
    validationConsent: string;
    coordinates: {
      email: string;
      linkedin: string;
      github: string;
      twitter: string;
      whatsapp: string;
      location: string;
      meetingUrl: string;
    };
  };
}

export const translationEn: ProfileData = {
  meta: {
    title: "Albaraa Bakhsh | Head of HR, Planning, Development and Digital Transformation",
    description: "Professional portfolio of Albaraa Bakhsh, an HR and planning leader specializing in organizational development, workforce planning, digital transformation, people technology, and business applications."
  },
  navigation: {
    about: "About",
    expertise: "Expertise",
    experience: "Experience",
    projects: "Selected Work",
    achievements: "Achievements",
    credentials: "Credentials",
    contact: "Contact",
    downloadResume: "Download Résumé"
  },
  hero: {
    eyebrow: "People • Strategy • Technology",
    title: "Building Better Organizations Through People, Strategy, and Technology.",
    name: "Albaraa Bakhsh",
    nameAr: "البراء بخش",
    subtitle: "Head of HR and Planning & Development | HR Transformation Leader | People Technology Builder",
    description: "I connect human-resources leadership, organizational development, strategic planning, data, and technology to build stronger workplaces, clearer systems, and practical digital solutions.",
    ctaExplore: "Explore My Work",
    ctaContact: "Contact Me",
    ctaResume: "Download Résumé",
    nodes: {
      people: "People",
      strategy: "Strategy",
      development: "Development",
      technology: "Technology",
      impact: "Impact"
    }
  },
  about: {
    title: "About Me",
    tagline: "Human understanding. Structured execution. Digital enablement.",
    description1: "I am an HR and organizational-development leader with a Computer Science background and more than seven years of experience across people operations, workforce planning, organizational development, recruitment, compensation and benefits, payroll, performance management, and digital transformation.",
    description2: "My work combines strategic thinking with practical execution. I translate organizational challenges into clear structures, governed processes, measurable decisions, and digital products that improve both organizational performance and employee experience.",
    highlightsTitle: "Professional Highlights",
    highlights: [
      "7+ years of HR experience",
      "HR and planning leadership",
      "Computer Science background",
      "Multi-entity operating experience",
      "HR technology implementation",
      "Workforce planning",
      "Product and platform development",
      "Arabic and English communication"
    ]
  },
  careerHighlights: {
    title: "Core Career Strengths",
    subtitle: "A modern, technology-enabled approach to human resources and organizational excellence",
    items: [
      {
        icon: "Users",
        title: "HR Leadership & Operations",
        description: "Directing end-to-end people operations, policies, and practices with a strong focus on compliance, equity, and employee enablement.",
        metric: "7+ Years"
      },
      {
        icon: "GitPullRequest",
        title: "Organizational Development",
        description: "Designing robust structures, job architectures, and performance metrics that align teams with strategic business objectives."
      },
      {
        icon: "TrendingUp",
        title: "Workforce Planning",
        description: "Aligning personnel, vacancies, replacement strategies, and budgets with exact organizational scale and priorities.",
        metric: "[Add verified employees count]"
      },
      {
        icon: "Cpu",
        title: "Digital Transformation",
        description: "Transitioning legacy paper or disjointed processes into integrated cloud ecosystems and customized internal products."
      },
      {
        icon: "Terminal",
        title: "People Technology",
        description: "Reviewing, designing, and coordinating the deployment of custom software solutions, ATS engines, and automation tools."
      },
      {
        icon: "ShieldCheck",
        title: "Governance & Quality",
        description: "Establishing clear guidelines, process maps, role-based access rules, and robust data privacy controls across departments."
      }
    ]
  },
  expertise: {
    title: "Areas of Expertise",
    subtitle: "Structured competencies spanning strategic planning, people leadership, and custom digital product design",
    categories: [
      {
        id: "leadership",
        title: "People & HR Leadership",
        description: "Fostering progressive work cultures through regulated, human-centric administrative excellence.",
        skills: [
          "HR strategy alignment",
          "End-to-end HR operations",
          "Talent acquisition & pipeline design",
          "Employee relations & advocacy",
          "Compensation & benefits planning",
          "Payroll & compliance regulation",
          "Performance management frameworks",
          "Learning & development pathways",
          "Employee self-service architecture"
        ]
      },
      {
        id: "planning",
        title: "Organization & Planning",
        description: "Structuring organizations for systematic, measurable growth and operational clarity.",
        skills: [
          "Strategic business planning",
          "Organizational development (OD)",
          "Data-backed workforce planning",
          "Corporate job architecture & leveling",
          "Departmental organizational design",
          "KPI definition & assessment",
          "Change management coaching",
          "Corporate policies & procedures drafting"
        ]
      },
      {
        id: "technology",
        title: "Transformation & Tech",
        description: "Leveraging technological fluency to digitize operations and generate actionable insights.",
        skills: [
          "HR digital transformation strategy",
          "HRIS selection & implementation",
          "Workflow process automation",
          "Data structures & people analytics",
          "Executive dashboard design",
          "Functional product requirements mapping",
          "Product management & UX review",
          "AI-assisted business workflows"
        ]
      },
      {
        id: "governance",
        title: "Governance & Execution",
        description: "Ensuring regulatory compliance, risk mitigation, and disciplined delivery schedules.",
        skills: [
          "Process governance & auditability",
          "Data privacy & security guidelines",
          "Internal controls & accountability maps",
          "Agile project management",
          "Cross-functional stakeholder alignment",
          "Third-party vendor coordination",
          "Implementation & roll-out planning",
          "Continuous system improvements"
        ]
      }
    ]
  },
  experience: {
    title: "Professional Journey",
    subtitle: "A record of leadership, structure design, and digital enablement",
    viewDetails: "View Details",
    hideDetails: "Hide Details",
    items: [
      {
        role: "Head of HR and Planning & Development",
        company: "[Add Organization / Qyem Educational Company or Multi-Entity Group]",
        location: "Riyadh, Saudi Arabia",
        period: "[Add Employment Date - Present]",
        overview: "Leading human resources, corporate planning, and digital transformation across multiple schools or organizational entities, coordinating systems alignment, and spearheading the design of custom internal products.",
        responsibilities: [
          "Directing and governing day-to-day HR operations, payroll, compliance, and employee relations across multiple entities.",
          "Establishing comprehensive organizational development architectures, corporate leveling, and performance matrices.",
          "Leading workforce planning campaigns to align recruitment pipeline with annual budgets and operational requirements.",
          "Overseeing HR technology transformation and vendor management, including custom integrations.",
          "Designing workflow requirements for custom ATS, scholarship programs, and employee survey applications."
        ],
        achievements: [
          "Led transition of legacy multi-entity personnel data to unified cloud HRIS systems.",
          "Standardized policy and process framework across several distinct branches to ensure legal and operational alignment.",
          "Optimized recruitment workflows and implemented custom applicant-tracking and scholarship-evaluation pipelines."
        ],
        systems: ["KayanHR", "Custom ATS", "Scholarship System", "Workforce Alignment Sheets"],
        skills: ["Strategic HR", "Workforce Budgeting", "RTL Application Review", "Vendor Coordination", "Data Privacy"]
      },
      {
        role: "HR Transformation & OD Professional",
        company: "[Add Organization]",
        location: "Saudi Arabia",
        period: "[Add Employment Date]",
        overview: "Focused on organizational design, job evaluation frameworks, policy formulations, and the adoption of modern HR tech.",
        responsibilities: [
          "Formulated standard operating procedures (SOPs) and departmental key performance indicators (KPIs).",
          "Conducted comprehensive job descriptions review, grading structures, and salary benchmarking research.",
          "Collaborated with IT developers to design user-friendly visual dashboards for executive decision support.",
          "Coached managers and staff during software rollouts and general organizational transformations."
        ],
        achievements: [
          "Created a comprehensive KPI dashboard system mapping key metrics to organizational objectives.",
          "Drafted over [Number] detailed policies covering remote-work, privacy compliance, and behavioral conduct."
        ],
        systems: ["SAP SuccessFactors", "Excel Business Intelligence Models", "Process Mapping Tools"],
        skills: ["KPI Formulation", "Job Architecture", "Change Management", "Process Modeling"]
      },
      {
        role: "HR Generalist & Tech Enabler",
        company: "[Add Organization]",
        location: "Saudi Arabia",
        period: "[Add Employment Date]",
        overview: "Managed core personnel files, payroll components, onboarding sequences, and initial HR automation scripts.",
        responsibilities: [
          "Processed monthly payroll, social security documentation, and end-of-service benefits calculation.",
          "Orchestrated full onboarding and offboarding cycles for high-volume staffing.",
          "Identified redundant data-entry procedures and designed custom local scripts/spreadsheets to automate workflows."
        ],
        achievements: [
          "Reduced payroll processing duration by [Percentage] through clean automated Excel models and streamlined verification.",
          "Spearheaded digitizing paper-based archives into structured, secure cloud folders."
        ],
        systems: ["Local ERPs", "G Suite Automation Scripts", "Microsoft Excel"],
        skills: ["Payroll Operations", "Saudi Labor Law", "Employee Services", "Workflow Automation"]
      }
    ]
  },
  projects: {
    title: "Selected Work",
    subtitle: "Projects connecting people, organizational needs, governance, and technology.",
    filterAll: "All Projects",
    categories: [
      { id: "all", label: "All" },
      { id: "transformation", label: "HR Transformation" },
      { id: "tech", label: "People Technology" },
      { id: "planning", label: "Workforce Planning" },
      { id: "recruitment", label: "Recruitment" },
      { id: "edtech", label: "Education Technology" },
      { id: "product", label: "Product Development" }
    ],
    items: [
      {
        id: "peoplebefore",
        category: "tech",
        name: "People Before Platform",
        problem: "Organizations lack a completely private, governed, and verified channel for workplace listening, organizational diagnostics, and employee feedback without fear of exposure.",
        myRole: "Product Visionary, Functional Designer & Governance Architect",
        contribution: "Designed the product vision, core functional requirements, privacy-safe reporting workflows, action-planning frameworks, and custom recognition workflows.",
        methods: ["Privacy-safe data modeling", "Role-based authorization mapping", "Action-planning design", "Workplace diagnostics"],
        status: "Beta Active",
        outcome: "Created a modern workplace-listening platform built strictly around personal privacy and auditable corporate response guidelines.",
        confidentiality: "Public safe presentation level",
        caseStudy: {
          overview: "People Before is a next-generation corporate culture and organizational listening system. Built to enable authentic workplace dialogue, it addresses the fundamental trust gap between workers and management.",
          context: "In high-pressure or rapid-change environments, standard pulse surveys suffer from poor engagement due to fears of retaliation. Employees rarely share high-risk, critical issues, and leadership lacks verified action-planning tools.",
          objectives: [
            "Provide 100% anonymized and privacy-safe survey structures for employees",
            "Establish structured feedback loops with SLA-driven leadership responses",
            "Embed recognition governance to boost morale systematically",
            "Implement people analytics dashboards mapping organizational friction points"
          ],
          approach: [
            "Conducted extensive literature review on employee trust and psychological safety.",
            "Designed a data isolation structure where individual metadata is physically separated from narrative text inputs.",
            "Mapped role-based dashboards ensuring middle managers can view high-level aggregate trends, but only designated compliance officers can review escalated safety concerns.",
            "Created clear flowcharts for 'Action-Planning' modules, allowing team leads to document commits and track improvements openly."
          ],
          keyDecisions: [
            "Opted for an aggregated grouping minimum threshold (e.g., no reports shown for teams under 5 members) to mathematically protect identity.",
            "Structured response templates to guide leadership toward constructive dialogue instead of generic public relations statements."
          ],
          governance: [
            "Engineered detailed permission matrices defining precisely who can export aggregate charts.",
            "Wrote comprehensive user-consent models aligned with local privacy guidelines and employee trust metrics."
          ],
          lessonsLearned: [
            "Anonymity alone is not enough; the responsiveness of management is the true catalyst of engagement.",
            "Features must be simple. Overly complex analytics dashboards cause analysis paralysis for busy HR directors."
          ]
        }
      },
      {
        id: "kayanhr",
        category: "transformation",
        name: "KayanHR Implementation & Digital Shift",
        problem: "Disjointed systems for payroll, attendance, and employee self-services caused severe manual labor, high error rates, and delayed decision making across multiple legal entities.",
        myRole: "HR Project Leader & Implementation Director",
        contribution: "Gathered multi-entity requirements, prepared complex clean database migration files, customized approval workflows, and led training programs.",
        methods: ["System mapping", "Data extraction & cleansing", "Approval workflow customization", "Change management"],
        status: "Completed & Deployed",
        outcome: "Transitioned [Add number] employees into a single, cohesive cloud HRIS ecosystem with full self-service capabilities.",
        caseStudy: {
          overview: "An enterprise-grade shift from legacy, fragmented systems into a unified, secure cloud-native HR platform supporting multi-company architectures.",
          context: "The organization operated with separate localized databases, requiring payroll teams to manually compile attendance records from physical spreadsheets, leading to compliance risks and slow month-end closures.",
          objectives: [
            "Consolidate multiple company records into one central, secure HR platform",
            "Provide fully mobile-ready employee self-service tools for vacation, expense, and letters requests",
            "Minimize manual payroll calculations by directly mapping digital clocking with compensation formulas",
            "Build secure, role-based reporting pipelines for C-Suite executives"
          ],
          approach: [
            "Conducted comprehensive process mapping to identify differences between different entities.",
            "Developed strict data migration protocols using sanitized templates to clean years of legacy records.",
            "Configured multi-layered approval paths based on hierarchy, location, and delegation rules.",
            "Delivered localized train-the-trainer workshops in both Arabic and English."
          ],
          keyDecisions: [
            "Decided to migrate historical records incrementally, keeping 2 years of active records in the cloud and archiving older data, which sped up implementation by 40%.",
            "Standardized overtime compensation formulas across all entities under strict compliance with Saudi Labor Law."
          ],
          governance: [
            "Enforced strict data separation: HR leads of one company can never access salary data of sister companies.",
            "Defined clear system auditing protocols to track edits on sensitive compensation and benefits."
          ],
          lessonsLearned: [
            "The technology is only 20% of the effort; the other 80% is preparing data and coaching users.",
            "Early visual walkthroughs of the self-service app substantially increased final user adoption rates."
          ]
        }
      },
      {
        id: "qyemrecruitment",
        category: "recruitment",
        name: "Qyem Recruitment Portal Design",
        problem: "Recruitment teams relied on manual email screenings, slowing down the identification of elite educational talent and complicating candidate tracking for academic committees.",
        myRole: "Business Lead & System Designer",
        contribution: "Wrote core business requirements, designed committee-level candidate review pipelines, and established criteria-based hiring scoring matrices.",
        methods: ["Applicant-tracking workflow design", "Role-based hiring committees setup", "Scoring matrix engineering"],
        status: "Production Live",
        outcome: "A tailored academic and administrative ATS handling thousands of applications under unified recruitment metrics.",
        caseStudy: {
          overview: "The Qyem Recruitment Portal is a fully customized applicant-tracking system (ATS) tailored specifically for educational talent acquisition and administrative excellence.",
          context: "Academic recruiting requires multi-stage evaluations by specialist academic committees. Standard commercial off-the-shelf ATS solutions were either too rigid or failed to present Arabic candidate profiles correctly.",
          objectives: [
            "Streamline job posting and application procedures for thousands of applicants",
            "Provide committee members with a side-by-side comparative rating dashboard",
            "Automate candidate email updates for interview bookings and offers",
            "Enforce standardized evaluation criteria to eliminate systemic evaluation bias"
          ],
          approach: [
            "Mapped entire recruitment journey from job request to contract issuance.",
            "Collaborated with developers to structure an interactive, drag-and-drop hiring pipeline UI.",
            "Created a flexible interview scoring system combining soft-skills indicators with technical academic parameters.",
            "Configured security controls preventing committee members from viewing candidates outside their active panel assignment."
          ],
          keyDecisions: [
            "Integrated automatic phone and email verification to filter duplicate and fake applications immediately.",
            "Enabled PDF resume parsing with search indexing, allowing HR to query skills instantly across database."
          ],
          governance: [
            "Designed auditable logs documenting exact scores and reviewer notes for every applicant to guarantee complete fairness.",
            "Formulated policies for retention of candidate records in compliance with local regulations."
          ],
          lessonsLearned: [
            "Making evaluation criteria simple for the hiring committee results in far faster and more accurate ratings.",
            "Clear bilingual instructions on the candidate dashboard drastically decreased candidate support email inquiries."
          ]
        }
      },
      {
        id: "qyemscholarship",
        category: "edtech",
        name: "Qyem Scholarship Platform",
        problem: "Managing high-volume scholarship applications via spreadsheets caused communication bottlenecks, tracking errors, and inconsistent eligibility evaluations.",
        myRole: "Functional Architect & Coordinator",
        contribution: "Designed digital eligibility filters, structured interview scheduling modules, and mapped automated nomination workflows.",
        methods: ["Eligibility rules mapping", "Scheduling workflows design", "Reporting metrics tracking"],
        status: "Production Live",
        outcome: "Automated the intake, eligibility checks, committee ratings, and final allocations of dozens of major educational scholarships.",
        caseStudy: {
          overview: "An automated system supporting high-precision scholarship allocations, tracking student profiles, financial need indicators, and academic potential.",
          context: "Manual verification of thousands of certificates, transcripts, and financial documents created an immense administrative burden and risked human scoring errors.",
          objectives: [
            "Automate initial filtering of applications based on custom eligibility thresholds (e.g., GPA, English scores)",
            "Centralize all student documents into a single, high-speed secure review portal",
            "Coordinate interview assignments across a pool of volunteer academic interviewers",
            "Ensure full audit logs are generated for final selection decisions"
          ],
          approach: [
            "Defined concrete, computer-interpretable eligibility rules.",
            "Designed a clean interface for application submission with drag-and-drop document uploads.",
            "Built interactive committee modules with scoring fields that automatically aggregate candidate ratings.",
            "Programmed status-change triggers that send real-time confirmation notices."
          ],
          keyDecisions: [
            "Designed an interactive PDF generator for student application files, allowing committee members to download structured files in one click.",
            "Created a double-blind rating option where reviewer names are hidden to preserve impartiality."
          ],
          governance: [
            "Set strict expiration timelines for sensitive financial support documents to guarantee privacy compliance.",
            "Created real-time audit logs of all status changes for subsequent board-level reviews."
          ],
          lessonsLearned: [
            "Automating initial eligibility filters saved the administrative team over 150+ hours of manual document checks.",
            "A progress tracker shown to the applicant dramatically reduces stress-related inbound inquiries."
          ]
        }
      },
      {
        id: "workforceplanning",
        category: "planning",
        name: "Strategic Workforce Planning & Structural Alignment",
        problem: "Lack of direct mapping between approved organizational structures, active personnel, vacancies, and recruitment budgets led to unapproved hires and staffing gaps.",
        myRole: "Workforce Planning & Structural Strategist",
        contribution: "Developed an integrated planning model mapping active positions against official organization charts, tracking replacements, and forecasting budget requirements.",
        methods: ["Organizational design mapping", "Vacancies forecasting", "Budget simulation models", "Structure auditing"],
        status: "Implemented & Active",
        outcome: "Created a unified, governed framework for all personnel decisions, ensuring zero hiring actions occur outside official structures and budgets.",
        caseStudy: {
          overview: "A strategic initiative designed to establish strict operational ties between the company's organization charts and active recruitment processes, reducing hiring leakage.",
          context: "Departments frequently requested personnel without verified budget approvals or clear alignment with organizational hierarchies, resulting in budget overruns.",
          objectives: [
            "Map every single active employee to a unique, authorized position ID on the org chart",
            "Formulate an interactive replacement forecasting model based on retirement or historical turnover metrics",
            "Establish automated triggers that alert HR if a department attempts to recruit beyond their head-count limit",
            "Synchronize workforce plans directly with finance team annual budgets"
          ],
          approach: [
            "Audited and cleaned all active positions, mapping employees to standard job titles.",
            "Built a structural hierarchy mapping reporting lines and spans of control.",
            "Implemented an official 'Position-Based' system inside the HR platform.",
            "Drafted an official policy manual detailing rules for structural modifications and headcount revisions."
          ],
          keyDecisions: [
            "Instituted a strict 'one employee to one position' rule to prevent dual-allocations.",
            "Created 'flexible pooling' options for temporary or seasonal student-assistant positions."
          ],
          governance: [
            "Drafted structural modification guidelines requiring double-authorization from both HR and Finance heads.",
            "Instituted automated monthly auditing reports flagging active employees without matched budget IDs."
          ],
          lessonsLearned: [
            "Workforce planning is as much about financial discipline as it is about recruitment speed.",
            "A clear, accessible visual organizational chart is highly effective in helping department heads understand their structural boundaries."
          ]
        }
      },
      {
        id: "qyemnna",
        category: "product",
        name: "Qyemna Family Development Platform",
        problem: "Families lack a secure, structured digital environment to coordinate children's learning objectives, track daily routines, and measure progress on development plans.",
        myRole: "Product Architect & Workflow Designer",
        contribution: "Designed target user flows, structured child development modules, configured routine check-off mechanics, and reviewed RTL layouts.",
        methods: ["User flow mapping", "Routine progress engine design", "Arabic RTL review", "Responsive interface design"],
        status: "Active Prototype",
        outcome: "A beautifully balanced, secure private family coordinator helping parents monitor routine progress and celebrate educational milestones.",
        caseStudy: {
          overview: "A specialized digital application designed to assist parents in setting, tracking, and nurturing children's core behavioral, developmental, and academic goals.",
          context: "Most family tools are either simple lists or over-engineered business calendars. There was a direct need for an educational framework styled as a playful but structured app.",
          objectives: [
            "Allow parents to set structured, age-appropriate growth objectives",
            "Design daily routine checklists that are easy and fun for child interactions",
            "Provide parents with visual analytics showing consistency and progress milestones",
            "Maintain total data privacy, ensuring no child data is ever shared externally"
          ],
          approach: [
            "Researched contemporary behavioral reward frameworks for early childhood development.",
            "Designed intuitive user journeys with large touch targets for children and comprehensive analytics for parents.",
            "Tested RTL layouts to ensure flawless natural Arabic navigation.",
            "Integrated encouraging sound triggers and delightful star-earning mechanics."
          ],
          keyDecisions: [
            "Chose an invite-only family group model, physically isolating family databases to guarantee safety.",
            "Decided to focus on positive reinforcement mechanics, highlighting consistent behaviors rather than penalizing missed items."
          ],
          governance: [
            "Enforced compliance with COPPA-level privacy specifications.",
            "Secured photo-sharing pipelines, storing family uploads in encrypted storage."
          ],
          lessonsLearned: [
            "Simplifying the user interface is essential when designing for multi-generational household environments.",
            "Children react far better to gamified visual milestones than standard checklists."
          ]
        }
      }
    ]
  },
  achievements: {
    title: "Professional Impact",
    subtitle: "Tangible business results delivering strategic value, process structure, and modern software adoption",
    items: [
      {
        title: "Multi-Entity Systems Integration",
        description: "Successfully unified personnel structures, payroll formulas, and compliance operations across distinct organizations, forming a single operational standard.",
        metric: "[Number]",
        metricLabel: "Entities Unified"
      },
      {
        title: "Cloud HR Platform Migration",
        description: "Migrated legacy file systems and manual databases into KayanHR Cloud, providing real-time self-services to staff.",
        metric: "[Number]",
        metricLabel: "Employees Transitioned"
      },
      {
        title: "Custom Recruitment Platforms Designed",
        description: "Spearheaded functional requirements, workflow paths, and scoring matrices for custom applicant-tracking and scholarship solutions.",
        metric: "3+",
        metricLabel: "Platforms Designed"
      },
      {
        title: "Structure-Based Headcount Optimization",
        description: "Formulated and deployed rigorous position-control models mapping every single active contract against authorized department budgets.",
        metric: "100%",
        metricLabel: "Headcount Alignment"
      },
      {
        title: "Operational Efficiency Boost",
        description: "Automated recurring personnel administrative operations, reducing processing bottlenecks and error rates.",
        metric: "[Add %]",
        metricLabel: "Duration Saved"
      },
      {
        title: "Compliant Policies Formulated",
        description: "Researched, authored, and rolled out comprehensive company policies on behavioral code, remote working, and information security.",
        metric: "15+",
        metricLabel: "Policies Developed"
      }
    ]
  },
  philosophy: {
    title: "Leadership Philosophy",
    statement: "I believe effective HR begins with understanding people, but it succeeds through clear systems, responsible leadership, accurate data, and disciplined execution. My goal is to create workplaces where organizational performance and employee experience strengthen one another.",
    principles: [
      {
        title: "Understand Before Deciding",
        desc: "Examine actual workplace dynamics, legal contexts, and human challenges thoroughly before formulating policies or structures."
      },
      {
        title: "Design for Clarity",
        desc: "Eliminate administrative confusion by defining clean process boundaries, explicit ownership rules, and clear communications."
      },
      {
        title: "Govern Responsibly",
        desc: "Ensure data privacy, legal compliance, and internal controls are embedded natively inside every policy and software tool."
      },
      {
        title: "Improve Continuously",
        desc: "Routinely audit processes, leverage people analytics, and optimize digital tools based on real user feedback and business results."
      }
    ]
  },
  credentials: {
    title: "Education & Credentials",
    subtitle: "A foundation in computer science paired with certified strategic HR capabilities",
    educationTitle: "Academic Education",
    certificationsTitle: "Professional Qualifications & Certifications",
    education: [
      {
        degree: "Bachelor of Science (B.S.)",
        field: "Computer Science",
        institution: "[Add University, e.g., King Saud University]",
        date: "[Add Graduation Year]",
        details: "Provided the technical foundations, data structuring knowledge, and analytical thinking that now powers my approach to digital HR transformation, product management, and people analytics."
      }
    ],
    certifications: [
      {
        name: "Associate Member - CIPD Level 5",
        issuer: "Chartered Institute of Personnel and Development (CIPD)",
        date: "[Add Completion Date]",
        id: "[Add Credential ID]",
        url: "#"
      },
      {
        name: "KPI Professional Certification",
        issuer: "The KPI Institute",
        date: "[Add Completion Date]",
        id: "[Add Credential ID]",
        url: "#"
      },
      {
        name: "SAP SuccessFactors Implementation Experience",
        issuer: "Enterprise Training / Project Delivery",
        date: "Practical Project Experience"
      },
      {
        name: "SAP S/4HANA Core Operations Experience",
        issuer: "Enterprise Training",
        date: "Practical Project Experience"
      },
      {
        name: "Change Management & OD Transformation Program",
        issuer: "[Add Issuing Organization]",
        date: "Professional Training"
      }
    ]
  },
  technical: {
    title: "Technical & Digital Capabilities",
    subtitle: "Bridging the gap between corporate planning and hands-on software design",
    items: [
      {
        category: "Product & UX Design",
        skills: [
          "Business requirements analysis",
          "Functional workflow diagramming",
          "Comprehensive product documentation",
          "User experience (UX) review",
          "Figma design collaboration",
          "Arabic RTL layout audit"
        ]
      },
      {
        category: "Platforms & HRIS Systems",
        skills: [
          "KayanHR setup & data migration",
          "SAP SuccessFactors core",
          "SAP S/4HANA operations",
          "Applicant-Tracking Systems (ATS)",
          "Scholarship portal workflows"
        ]
      },
      {
        category: "Data & Systems Analytics",
        skills: [
          "People analytics dashboards",
          "Database mapping & preparation",
          "KPI tracking models",
          "Excel business modeling",
          "Data structures & role hierarchies"
        ]
      },
      {
        category: "Tech Stack & Deployment Familiarity",
        skills: [
          "HTML, CSS, and Tailwind CSS",
          "TypeScript & React concepts",
          "AI-assisted coding workflows",
          "GitHub collaborative repositories",
          "Docker and containerized deployment",
          "Linux VPS & cloud server architectures"
        ]
      }
    ]
  },
  recommendations: {
    title: "Recommendations",
    subtitle: "Endorsements from peers, stakeholders, and organizational leaders",
    placeholderText: "Written recommendations are currently undergoing validation for public sharing. This section will present authenticated endorsements once approvals are finalized.",
    placeholderLabel: "Recommendation pending verification",
    items: [
      {
        quote: "Albaraa possesses a unique ability to bridge the gap between people management and digital tools. He doesn't just manage HR; he optimizes it using technology.",
        author: "[Placeholder Contact Name]",
        position: "[e.g., Executive Director]",
        company: "[Add Organization]",
        relation: "Collaborated closely with Albaraa during KayanHR rollout"
      }
    ]
  },
  contact: {
    title: "Let's Build Something Meaningful",
    subtitle: "I welcome conversations about HR leadership, organizational development, strategic planning, people technology, digital transformation, and purposeful collaboration.",
    formName: "Full Name",
    formEmail: "Email Address",
    formOrg: "Organization",
    formSubject: "Subject",
    formMessage: "Message",
    formConsent: "I consent to having this website securely process my message and agree to professional correspondence.",
    formSubmit: "Send Message",
    formSubmitting: "Sending Message...",
    formSuccess: "Thank you! Your message has been sent successfully. I will review it and get in touch shortly.",
    formError: "An error occurred while sending your message. Please try again or contact me directly via email/LinkedIn.",
    validationRequired: "This field is required",
    validationEmail: "Please enter a valid email address",
    validationConsent: "You must consent to proceed",
    coordinates: {
      email: "ALBaraBakhsh@gmail.com",
      linkedin: "https://www.linkedin.com/in/[LinkedIn_Username_Placeholder]",
      github: "https://github.com/[GitHub_Username_Placeholder]",
      twitter: "https://twitter.com/[Twitter_Username_Placeholder]",
      whatsapp: "https://wa.me/[WhatsApp_Placeholder]",
      location: "Riyadh, Saudi Arabia",
      meetingUrl: "https://calendly.com/[Calendly_Placeholder]"
    }
  }
};

export const translationAr: ProfileData = {
  meta: {
    title: "البراء بخش | رئيس الموارد البشرية والتخطيط والتطوير وقائد تحول الموارد البشرية",
    description: "الموقع المهني الخاص بالبراء بخش، قائد موارد بشرية وتخطيط متخصص في التطوير التنظيمي، وتخطيط القوى العاملة، والتحول الرقمي، وتقنيات الأفراد، وتطبيقات الأعمال."
  },
  navigation: {
    about: "نبذة عني",
    expertise: "مجالات الخبرة",
    experience: "المسيرة المهنية",
    projects: "مشاريع مختارة",
    achievements: "الإنجازات والأثر",
    credentials: "الشهادات والمؤهلات",
    contact: "تواصل معي",
    downloadResume: "تحميل السيرة الذاتية"
  },
  hero: {
    eyebrow: "الإنسان • الاستراتيجية • التقنية",
    title: "نبني منظمات أفضل من خلال الإنسان والاستراتيجية والتقنية.",
    name: "البراء بخش",
    nameAr: "البراء بخش",
    subtitle: "رئيس الموارد البشرية والتخطيط والتطوير | قائد تحول الموارد البشرية | ومطور حلول تقنيات الأفراد",
    description: "أجمع بين قيادة الموارد البشرية، والتطوير التنظيمي، والتخطيط الاستراتيجي، والبيانات، والتقنية لبناء بيئات عمل أقوى، وأنظمة واضحة، وحلول رقمية عملية.",
    ctaExplore: "استكشف أعمالي",
    ctaContact: "تواصل معي",
    ctaResume: "تحميل السيرة الذاتية",
    nodes: {
      people: "الإنسان",
      strategy: "الاستراتيجية",
      development: "التطوير",
      technology: "التقنية",
      impact: "الأثر"
    }
  },
  about: {
    title: "نبذة عني",
    tagline: "فهم إنساني. تنفيذ منظم. تمكين رقمي.",
    description1: "أنا قائد في مجالات الموارد البشرية والتطوير التنظيمي بخلفية أكاديمية في علوم الحاسب، وأمتلك خبرة تمتد لأكثر من سبع سنوات تغطي عمليات الموارد البشرية، وتخطيط القوى العاملة، والتطوير التنظيمي، والاستقطاب، والتعويضات والمزايا، والرواتب، وإدارة الأداء، والتعلم والتطوير، وخدمات الموظفين، والتحول الرقمي.",
    description2: "يجمع عملي بين التفكير الاستراتيجي والتنفيذ العملي. أقوم بترجمة التحديات التنظيمية إلى هياكل واضحة، وعمليات محوكمة، وقرارات مدروسة قائمة على البيانات، ومنتجات رقمية تسهم في رفع الأداء المؤسسي وتحسين تجربة الموظف.",
    highlightsTitle: "أبرز الملامح المهنية",
    highlights: [
      "خبرة تزيد عن 7 سنوات في الموارد البشرية",
      "قيادة الموارد البشرية والتخطيط والتطوير",
      "خلفية أكاديمية في علوم الحاسب",
      "خبرة تشغيلية في بيئات عمل متعددة الكيانات",
      "تطبيق وتفعيل تقنيات الموارد البشرية",
      "تخطيط القوى العاملة باحترافية",
      "تطوير المنتجات والمنصات الرقمية",
      "إتقان التواصل باللغتين العربية والإنجليزية"
    ]
  },
  careerHighlights: {
    title: "نقاط القوة المهنية الأساسية",
    subtitle: "منهج حديث وممكّن تقنياً للموارد البشرية والتميز التنظيمي",
    items: [
      {
        icon: "Users",
        title: "قيادة الموارد البشرية والعمليات",
        description: "إدارة وتوجيه عمليات الموظفين الشاملة، والسياسات، والممارسات مع التركيز التام على الامتثال، والعدالة، وتمكين الكفاءات.",
        metric: "7+ سنوات"
      },
      {
        icon: "GitPullRequest",
        title: "التطوير التنظيمي",
        description: "تصميم هياكل تنظيمية قوية، وتوصيف وظيفي متكامل، ومؤشرات أداء تضمن مواءمة الفرق مع الأهداف الاستراتيجية للمنشأة."
      },
      {
        icon: "TrendingUp",
        title: "تخطيط القوى العاملة",
        description: "مواءمة الاحتياجات البشرية، والوظائف الشاغرة، وخطط الإحلال، والميزانيات المعتمدة مع حجم المنظمة وأولوياتها الفعلية.",
        metric: "[عدد الموظفين المدعومين]"
      },
      {
        icon: "Cpu",
        title: "التحول الرقمي",
        description: "تحويل العمليات الورقية أو المشتتة إلى منظومات سحابية متكاملة وحلول رقمية داخلية مخصصة."
      },
      {
        icon: "Terminal",
        title: "تقنيات الأفراد (People Tech)",
        description: "مراجعة وتصميم وتنسيق إطلاق البرمجيات المخصصة، وأنظمة استقطاب الكفاءات (ATS)، وأدوات الأتمتة الإدارية."
      },
      {
        icon: "ShieldCheck",
        title: "الحوكمة والجودة",
        description: "وضع مبادئ توجيهية واضحة، وخرائط للعمليات، وصلاحيات الوصول القائمة على الأدوار، وضوابط خصوصية البيانات في جميع الأقسام."
      }
    ]
  },
  expertise: {
    title: "مجالات الخبرة والتخصص",
    subtitle: "كفاءات مهنية تجمع بين التخطيط الاستراتيجي وقيادة الأفراد وتصميم الحلول الرقمية",
    categories: [
      {
        id: "leadership",
        title: "إدارة وقيادة الموارد البشرية",
        description: "تعزيز ثقافات العمل الإيجابية والإنتاجية من خلال تميز تشغيلي منظم يركز على الكوادر البشرية.",
        skills: [
          "مواءمة استراتيجية الموارد البشرية",
          "إدارة عمليات الموارد البشرية بالكامل",
          "تصميم خطط ومسارات استقطاب المواهب",
          "علاقات الموظفين وحل النزاعات",
          "تخطيط هيكل التعويضات والمزايا",
          "إدارة مسيرات الرواتب والامتثال القانوني",
          "تصميم أطر تقييم وإدارة الأداء",
          "تطوير مسارات التعلم والتطوير المهني",
          "هيكلة أدوات الخدمة الذاتية للموظفين"
        ]
      },
      {
        id: "planning",
        title: "التطوير والتخطيط التنظيمي",
        description: "بناء هياكل تنظيمية مرنة وقابلة للقياس تدعم النمو المستمر والوضوح التشغيلي.",
        skills: [
          "التخطيط الاستراتيجي للأعمال",
          "التطوير التنظيمي (OD)",
          "تخطيط القوى العاملة المبني على البيانات",
          "تصميم الهياكل وتدرج الوظائف والأدوار",
          "تصميم الهياكل التنظيمية للإدارات",
          "تحديد وصياغة مؤشرات الأداء الرئيسية (KPIs)",
          "إدارة التغيير والتهيئة التنظيمية",
          "إعداد وصياغة السياسات والإجراءات الداخلية"
        ]
      },
      {
        id: "technology",
        title: "التحول الرقمي والتقنية",
        description: "توظيف الفهم البرمجي والتقني لرقمنة العمليات واستخلاص مرئيات ذكية قابلة للتنفيذ.",
        skills: [
          "استراتيجية التحول الرقمي للموارد البشرية",
          "اختيار وتطبيق أنظمة الموارد البشرية (HRIS)",
          "أتمتة إجراءات وعمليات الموظفين",
          "هيكلة البيانات وتحليلات الأفراد (People Analytics)",
          "تصميم لوحات المؤشرات والبيانات التنفيذية",
          "صياغة المتطلبات الوظيفية والتقنية للأنظمة",
          "إدارة المنتجات ومراجعة تجربة المستخدم (UX)",
          "توظيف الذكاء الاصطناعي في بيئات العمل"
        ]
      },
      {
        id: "governance",
        title: "الحوكمة وإجراءات التنفيذ",
        description: "ضمان الامتثال للأنظمة، وتقليل المخاطر، والالتزام بجدول زمني منضبط للمشاريع.",
        skills: [
          "حوكمة العمليات وقابلية التدقيق",
          "إرشادات خصوصية وسرية البيانات",
          "خرائط الصلاحيات والمسؤوليات الداخلية",
          "إدارة المشاريع بالمنهجيات المرنة (Agile)",
          "مواءمة وتنسيق متطلبات أصحاب المصلحة",
          "إدارة وتوجيه شركاء التقنية الخارجيين",
          "إعداد خطط الإطلاق والتفعيل التجريبي",
          "التطوير المستمر للأنظمة والمنصات"
        ]
      }
    ]
  },
  experience: {
    title: "المسيرة المهنية والخبرات",
    subtitle: "سجل حافل بالقيادة، وإعادة الهيكلة، والتمكين الرقمي الفعال",
    viewDetails: "عرض التفاصيل",
    hideDetails: "إخفاء التفاصيل",
    items: [
      {
        role: "رئيس الموارد البشرية والتخطيط والتطوير",
        company: "[أدخل اسم المنظمة / شركة قيم التعليمية أو الكيان ذو الصلة]",
        location: "الرياض، المملكة العربية السعودية",
        period: "[أدخل تاريخ التعيين - الحالي]",
        overview: "قيادة قطاعات الموارد البشرية والتخطيط والتطوير والتحول الرقمي عبر عدة مدارس أو كيانات تابعة، ومواءمة الأنظمة، وقيادة تصميم المنتجات الرقمية الداخلية المخصصة.",
        responsibilities: [
          "توجيه وحوكمة عمليات الموارد البشرية اليومية، والرواتب، والامتثال، وعلاقات الموظفين عبر كيانات متعددة.",
          "تأسيس بنية متكاملة للتطوير التنظيمي، وتصميم الهياكل الوظيفية ومصفوفات تقييم الأداء والمستويات.",
          "قيادة حملات تخطيط القوى العاملة لمواءمة عمليات الاستقطاب مع الميزانيات السنوية والمتطلبات التشغيلية.",
          "الإشراف على مشاريع التحول التقني للموارد البشرية وإدارة الموردين والشركاء الخارجيين.",
          "تصميم متطلبات العمل الخاصة بأنظمة استقطاب الكفاءات (ATS)، ومنصات المنح الدراسية، وتطبيقات قياس نبض المنظمة."
        ],
        achievements: [
          "قيادة نقل البيانات التاريخية للعديد من الكيانات إلى نظام سحابي موحد لإدارة الموارد البشرية (HRIS).",
          "توحيد سياسات وإجراءات العمل عبر عدة فروع لضمان المواءمة القانونية والتشغيلية الكاملة.",
          "تحسين إجراءات التوظيف بالكامل وتطبيق وتدشين بوابات مخصصة لاستقطاب وتقييم المتقدمين والمنح الدراسية."
        ],
        systems: ["KayanHR", "بوابة التوظيف المخصصة", "نظام إدارة المنح الدراسية", "نماذج مواءمة القوى العاملة"],
        skills: ["الموارد البشرية الاستراتيجية", "ميزانية القوى العاملة", "مراجعة تطبيقات RTL", "إدارة الموردين الخارجيين", "خصوصية البيانات"]
      },
      {
        role: "أخصائي تحول الموارد البشرية والتطوير التنظيمي",
        company: "[أدخل اسم المنظمة]",
        location: "المملكة العربية السعودية",
        period: "[أدخل تاريخ العمل]",
        overview: "التركيز على تصميم الهياكل التنظيمية، وأطر تقييم الوظائف، وصياغة السياسات المعتمدة، وتبني تقنيات الموارد البشرية الحديثة.",
        responsibilities: [
          "إعداد وصياغة السياسات والإجراءات القياسية (SOPs) ومؤشرات الأداء الرئيسية للإدارات (KPIs).",
          "مراجعة الأوصاف الوظيفية وتحديث الهياكل وتصنيفات الرواتب بناءً على دراسات وبحوث المقارنة المعيارية.",
          "التعاون مع مهندسي البرمجيات لتصميم لوحات مؤشرات تفاعلية سهلة الاستخدام لدعم القرار التنفيذي.",
          "تقديم الدعم والإرشاد لمدراء الأقسام والموظفين خلال فترات تفعيل الأنظمة والتغييرات التنظيمية."
        ],
        achievements: [
          "تطوير نظام شامل لمؤشرات الأداء الرئيسية يربط الأهداف التشغيلية بالأهداف الاستراتيجية العليا.",
          "صياغة أكثر من [عدد] سياسة تنظيمية تغطي العمل عن بُعد، والامتثال للخصوصية، وقواعد السلوك المهني."
        ],
        systems: ["SAP SuccessFactors", "نماذج تحليل بيانات الأعمال في Excel", "أدوات نمذجة العمليات والمسارات"],
        skills: ["صياغة مؤشرات الأداء", "تصميم الهياكل الوظيفية", "إدارة التغيير", "نمذجة إجراءات العمل"]
      },
      {
        role: "أخصائي موارد بشرية وممكّن تقني",
        company: "[أدخل اسم المنظمة]",
        location: "المملكة العربية السعودية",
        period: "[أدخل تاريخ العمل]",
        overview: "إدارة ملفات شؤون الموظفين الأساسية، ومكونات الرواتب، وإجراءات مباشرة العمل، وتطوير أوراق العمل البرمجية لأتمتة المهام التشغيلية اليومية.",
        responsibilities: [
          "معالجة مسيرات الرواتب الشهرية، وتأدية وثائق التأمينات الاجتماعية، واحتساب مستحقات نهاية الخدمة.",
          "إدارة دورة تهيئة وتعيين الموظفين الجدد بالكامل، وكذلك إجراءات إنهاء الخدمة والمغادرة لأعداد كبيرة من الموظفين.",
          "تحديد إجراءات إدخال البيانات المكررة وتصميم نماذج وبرمجيات أتمتة محلية لتسهيل وتسريع سير العمل."
        ],
        achievements: [
          "تقليص مدة معالجة مسيرات الرواتب بنسبة [نسبة مئوية] بفضل أتمتة التحقق في Excel وتسريع إجراءات المراجعة.",
          "قيادة مبادرة تحويل الأرشيف الورقي إلى مجلدات سحابية منظمة وآمنة بالكامل."
        ],
        systems: ["أنظمة ERP المحلية", "برمجيات أتمتة بيئة Google", "Microsoft Excel المتقدم"],
        skills: ["عمليات الرواتب والمسيرات", "نظام العمل السعودي", "خدمات الموظفين", "أتمتة سير العمل التشغيلي"]
      }
    ]
  },
  projects: {
    title: "مشاريع مختارة",
    subtitle: "مشاريع مميزة تجمع بين تلبية الاحتياجات التنظيمية والحوكمة واستخدام التقنية.",
    filterAll: "جميع المشاريع",
    categories: [
      { id: "all", label: "الكل" },
      { id: "transformation", label: "تحول الموارد البشرية" },
      { id: "tech", label: "تقنيات الأفراد" },
      { id: "planning", label: "تخطيط القوى العاملة" },
      { id: "recruitment", label: "الاستقطاب والتوظيف" },
      { id: "edtech", label: "التقنيات التعليمية" },
      { id: "product", label: "تطوير المنتجات" }
    ],
    items: [
      {
        id: "peoplebefore",
        category: "tech",
        name: "منصة People Before",
        problem: "تفتقر المنظمات لقناة آمنة ومحوكمة تضمن سرية تامة للاستماع لبيئة العمل وتحليل وتشخيص التحديات وتلقي ملاحظات الموظفين دون خوف من كشف الهوية.",
        myRole: "مبتكر وصاحب الرؤية للمنتج، المصمم الوظيفي ومهندس حوكمة المنصة",
        contribution: "صياغة الرؤية العامة للمنتج، وتحديد المتطلبات الوظيفية الأساسية، وتصميم دورات تدفق البيانات الآمنة، وهياكل معالجة الشكاوى، وأنظمة المكافآت والتقدير المؤسسي.",
        methods: ["نمذجة البيانات الآمنة والخاصة", "توزيع الصلاحيات القائم على الأدوار", "تصميم دورة التخطيط والتنفيذ", "تشخيص بيئة العمل"],
        status: "مرحلة التجريب الفعال (Beta)",
        outcome: "إنشاء منصة استماع حديثة مبنية ومصممة بدقة تامة لضمان الخصوصية والالتزام بمعايير الحوكمة والاستجابة المؤسسية الصارمة.",
        confidentiality: "مستوى عرض آمن للعامة ولا يمس الخصوصية",
        caseStudy: {
          overview: "منصة People Before هي نظام جيل جديد لتشخيص وتحسين الثقافة التنظيمية والاستماع للموظفين. صممت لسد فجوة الثقة بين الكوادر البشرية والإدارة التنفيذية.",
          context: "في بيئات العمل سريعة التغير، تفشل استبيانات قياس النبض التقليدية بسبب خوف الموظفين من التبعات السلبية لآرائهم. نادراً ما يتم الإبلاغ عن المشكلات الحرجة، مما يحرم الإدارة من بيانات دقيقة لإيجاد حلول حقيقية.",
          objectives: [
            "توفير استبيانات آمنة ومجهولة الهوية بنسبة 100% لحماية خصوصية الموظفين",
            "إنشاء قنوات ردود فعل واضحة مبنية على اتفاقيات مستوى الخدمة (SLA)",
            "ترسيخ آليات التقدير والمكافآت لرفع الروح المعنوية بأسلوب مؤسسي محوكم",
            "بناء لوحات مؤشرات تحليلات الأفراد لتحديد نقاط الاحتكاك التنظيمي بدقة"
          ],
          approach: [
            "إجراء دراسات وبحوث متعمقة حول الثقة والأمان النفسي في بيئات العمل.",
            "تصميم آلية عزل للبيانات تفصل تماماً بيانات الموظفين المعرفية عن ردودهم وملاحظاتهم المكتوبة.",
            "تطوير لوحات مؤشرات تتيح لمدراء الصف الثاني رؤية المؤشرات العامة فقط، وتمنح مسؤولي الامتثال المعتمدين صلاحية معالجة الحالات الحرجة المرفوعة.",
            "إنشاء مخططات انسيابية لتتبع مهام التحسين والالتزامات التي يتعهد بها قادة الفرق."
          ],
          keyDecisions: [
            "اعتماد حد أدنى لعدد المشاركين في الفريق (مثلاً: عدم عرض تقرير لأي فريق يقل عن 5 موظفين) لحماية الهويات حسابياً.",
            "صياغة قوالب استجابة ذكية تحث القيادات على تبني حوار بناء وتجنب الردود العامة غير المفيدة."
          ],
          governance: [
            "تصميم مصفوفة صلاحيات بالغة الدقة لتحديد من يمكنه تصدير تقارير التحليلات العامة.",
            "صياغة نماذج موافقة واضحة متوافقة مع أنظمة حماية البيانات المحلية وثقة الموظفين."
          ],
          lessonsLearned: [
            "السرية وحدها لا تكفي؛ بل إن سرعة وجدية استجابة الإدارة هي المحفز الحقيقي للمشاركة والشفافية.",
            "البساطة هي الأساس. لوحات المؤشرات المعقدة للغاية تؤدي إلى شلل في اتخاذ القرار لدى مسؤولي الموارد البشرية."
          ]
        }
      },
      {
        id: "kayanhr",
        category: "transformation",
        name: "تطبيق وتفعيل نظام KayanHR والتحول الرقمي",
        problem: "أدى تشتت أنظمة مسيرات الرواتب والتحضير والخدمات الذاتية للموظفين إلى أخطاء يدوية مستمرة، وتأخر في إعداد التقارير المالية لعدة كيانات قانونية مستقلة.",
        myRole: "قائد مشروع تفعيل نظام الموارد البشرية ومدير التحول الرقمي",
        contribution: "جمع متطلبات الكيانات المتعددة، وتنظيف وترتيب ملفات البيانات التاريخية الضخمة للهجرة الرقمية، وتصميم مسارات الاعتمادات والطلبات، وتقديم الورش التدريبية.",
        methods: ["خرائط العمليات والأنظمة", "استخراج وتنظيف البيانات", "مواءمة إجراءات طلبات الموظفين", "إدارة التغيير"],
        status: "مكتمل ومفعّل بالكامل",
        outcome: "نقل وترحيل [أدخل رقم] موظف بنجاح إلى منصة سحابية موحدة ومتكاملة للموارد البشرية مع تفعيل كافة الخدمات الذاتية عبر الجوال.",
        caseStudy: {
          overview: "تحول استراتيجي شامل على مستوى المنشأة من أنظمة يدوية وإكسل مشتت إلى منصة سحابية موحدة مخصصة للشركات ذات الكيانات المتعددة.",
          context: "كانت المجموعة تعمل بقواعد بيانات مستقلة وغير متجانسة، مما تطلب من فرق الرواتب جمع ساعات العمل يدوياً من كشوف التحضير الورقية، مما تسبب في تأخير قفل المسيرات الشهرية وزيادة مخاطر عدم الامتثال.",
          objectives: [
            "دمج سجلات موظفي جميع الشركات التابعة في منصة سحابية موحدة وآمنة",
            "إتاحة خدمات الخدمة الذاتية للموظفين بشكل كامل عبر تطبيق الجوال لتقديم الإجازات والتعويضات والخطابات",
            "تقليل الاحتساب اليدوي للرواتب من خلال ربط مباشر وتلقائي لبصمات الحضور مع معادلات الأجور الإضافية والخصومات",
            "توفير تقارير فورية دقيقة للقيادة التنفيذية لدعم اتخاذ القرار"
          ],
          approach: [
            "إجراء دراسة تفصيلية لخرائط الإجراءات التشغيلية الحالية لتحديد الفروقات بين الكيانات.",
            "تطوير بروتوكولات هجرة البيانات التاريخية باستخدام قوالب تنظيف موحدة ومصنفة لمعالجة بيانات سنوات سابقة.",
            "تكوين وتفعيل مستويات اعتماد الطلبات ديناميكياً بناءً على الهيكل التنظيمي، الموقع، وقواعد التفويض.",
            "تقديم ورش عمل تدريبية متكاملة للمستخدمين الأساسيين باللغتين العربية والإنجليزية."
          ],
          keyDecisions: [
            "اتخاذ قرار بترحيل البيانات التاريخية تدريجياً (ترحيل بيانات آخر سنتين بصفة نشطة وأرشفة ما قبلها)، مما ساعد في تسريع المشروع بنسبة 40%.",
            "توحيد معادلات العمل الإضافي واحتساب الأجور بما يتوافق تماماً مع مواد نظام العمل السعودي لجميع الكيانات."
          ],
          governance: [
            "تطبيق نظام فصل بيانات صارم: لا يمكن لمسؤولي موارد بشرية في شركة تابعة الاطلاع على رواتب موظفي شركة شقيقة.",
            "إنشاء سجلات تدقيق النظام (Audit Logs) لمراقبة وتوثيق كافة التعديلات على الرواتب والبيانات الحساسة."
          ],
          lessonsLearned: [
            "التقنية تمثل 20% فقط من جهد المشروع؛ والـ 80% المتبقية تتمحور حول جودة البيانات وإدارة التغيير وتأهيل الكوادر البشرية.",
            "العروض التوضيحية المبكرة للخدمات الذاتية أسهمت بشكل كبير في تقليل ممانعة المستخدمين وزيادة نسب تبني التطبيق."
          ]
        }
      },
      {
        id: "qyemrecruitment",
        category: "recruitment",
        name: "تصميم بوابة قيم للتوظيف",
        problem: "كانت فرق التوظيف تعتمد على فرز السير الذاتية يدوياً عبر البريد الإلكتروني، مما أخر استقطاب الكفاءات التعليمية المتميزة وعقّد تتبع المتقدمين لدى لجان التقييم الأكاديمية.",
        myRole: "قائد الأعمال ومصمم رحلة الاستقطاب والأنظمة",
        contribution: "كتابة متطلبات العمل التفصيلية، وتصميم رحلة المتقدم الأكاديمي، وتأسيس مصفوفات تقييم اللجان والدرجات المبنية على الكفاءة والمهارات.",
        methods: ["تصميم مسارات تتبع المتقدمين (ATS)", "هيكلة لجان التوظيف وصلاحياتها", "صياغة مصفوفات التقييم المعيارية"],
        status: "نشط وقائم بالكامل",
        outcome: "بوابة توظيف مخصصة للأكاديميين والإداريين نجحت في معالجة آلاف الطلبات تحت معايير تقييم موحدة وشفافة.",
        caseStudy: {
          overview: "بوابة قيم للتوظيف هي نظام متكامل لإدارة واستقطاب الكفاءات التعليمية تم تصميمه خصيصاً لتلبية متطلبات التوظيف الأكاديمي والتعليمي المتقدم.",
          context: "يتطلب التوظيف الأكاديمي تفعيلاً متعدداً لمستويات التقييم من قبل لجان علمية مختصة. لم تكن الأنظمة التجارية الجاهزة تفي بالمتطلبات المعقدة للجان أو تدعم ملفات المتقدمين العرب بكفاءة.",
          objectives: [
            "تسهيل إجراءات التقديم لآلاف الباحثين عن عمل عبر واجهة عصرية وبسيطة",
            "تزويد لجان التقييم بلوحة تحكم موحدة تتيح مقارنة المتقدمين جنباً إلى جنب وبكل شفافية",
            "أتمتة إرسال التحديثات والرسائل للمتقدمين في كل مرحلة من حجز المقابلات حتى عروض العمل",
            "تطبيق مصفوفات تقييم واضحة للحد من الانحياز الفردي في التقييم"
          ],
          approach: [
            "رسم وتوثيق دورة حياة التوظيف بالكامل بدءاً من طلب الاستقطاب وحتى مباشرة الموظف.",
            "التعاون مع المطورين لتصميم واجهة مستخدم تفاعلية (سحب وإفلات) لمراحل التوظيف المختلفة.",
            "تطوير نظام درجات يجمع بين المهارات الشخصية والمعايير العلمية التخصصية.",
            "تفعيل حماية خصوصية البيانات لمنع أعضاء اللجان من الاطلاع على متقدمين خارج نطاق تخصص اللجنة."
          ],
          keyDecisions: [
            "تفعيل التحقق التلقائي من البريد والهاتف للحد من تقديم الحسابات المكررة والوهمية فوراً.",
            "تفعيل خاصية البحث الفهرسي في ملفات السير الذاتية مما يتيح تصفية الكفاءات والمهارات بثوانٍ معدودة."
          ],
          governance: [
            "بناء سجل تدقيق يرصد الدرجات والتقييمات المدخلة من كل مقيّم لضمان العدالة التشغيلية والشفافية التامة.",
            "وضع سياسات لحفظ وإتلاف بيانات المتقدمين غير المقبولين بما يتوافق مع أنظمة حماية البيانات المحلية."
          ],
          lessonsLearned: [
            "تبسيط معايير التقييم للجان يسهم في اتخاذ قرارات توظيف أسرع بكثير وأكثر دقة.",
            "الإرشادات ثنائية اللغة في لوحة تحكم المتقدم قللت من رسائل الاستفسار الواردة لبريد الدعم بنسبة كبيرة."
          ]
        }
      },
      {
        id: "qyemscholarship",
        category: "edtech",
        name: "منصة قيم للمنح الدراسية",
        problem: "تسببت إدارة طلبات المنح الدراسية عبر جداول البيانات التقليدية في بطء التواصل وتأخر مراجعة المستندات وعدم تجانس معايير القبول.",
        myRole: "المصمم الوظيفي للحلول والمنسق العام",
        contribution: "تصميم فلاتر التحقق التلقائي من الأهلية والشروط، وتطوير وحدة حجز وإدارة المقابلات، ورسم دورة ترشيح واعتماد الطلبات.",
        methods: ["صياغة قواعد التحقق من الأهلية", "تصميم مسارات الجدولة والتحضير", "تحليل وتتبع مؤشرات الترشيح"],
        status: "نشط وقائم بالكامل",
        outcome: "أتمتة عملية استقبال، وتدقيق المستندات، وتقييم اللجان، وإعلان النتائج لعشرات المنح الدراسية الكبرى بنجاح.",
        caseStudy: {
          overview: "منصة تقنية متطورة لإدارة المنح الدراسية وتتبع مستويات المتقدمين العلمية والمؤشرات المالية وتحديد مرشحي المنح الأكثر استحقاقاً.",
          context: "كان التدقيق اليدوي لآلاف الشهادات والمستندات المالية وشهادات درجات اللغة يمثل عبئاً إدارياً ضخماً ويعرض عملية اتخاذ القرار للأخطاء والتحيز البشري.",
          objectives: [
            "أتمتة الفرز المبدئي للطلبات بناءً على حدود الأهلية كالمعدل ودرجات اللغة والمنطقة",
            "مركزية مستندات الطلاب في بوابة موحدة وآمنة تسهم في تسريع مراجعتها من قبل اللجان المختصة",
            "تنظيم وتوزيع مواعيد المقابلات للطلاب المقبولين مع لجان التقييم",
            "إنشاء سجلات مكتملة وموثقة لقرارات الاعتماد النهائية لحماية جودة القرار وموثوقيته"
          ],
          approach: [
            "تحديد وصياغة قواعد الأهلية المبرمجة بدقة تامة لتمكين الفرز التلقائي للطلبات.",
            "تصميم واجهة متقدمة لرفع المستندات وسحبها بسلاسة للمتقدمين.",
            "بناء لوحات مخصصة للجان التقييم تتيح رصد الدرجات وحساب متوسطاتها تلقائياً.",
            "برمجة رسائل البريد والرسائل التفاعلية الفورية فور حدوث تغيير في حالة طلب المتقدم."
          ],
          keyDecisions: [
            "تصميم أداة لإنشاء ملفات PDF تفاعلية مجمعة لكل طالب لتسهيل قراءتها بنقرة واحدة من قبل اللجنة الأكاديمية.",
            "إتاحة خيار التقييم المزدوج الأعمى (Double-Blind Evaluation) لتعزيز الحيادية التامة لدى المقيّمين."
          ],
          governance: [
            "تحديد فترات صلاحية وحذف تلقائي للمستندات المالية والاجتماعية الحساسة لضمان الامتثال لخصوصية البيانات.",
            "رصد وتسجيل كافة التعديلات على حالات الطلبات من قبل الإدارة لمراجعتها لاحقاً من قبل مجلس الإدارة."
          ],
          lessonsLearned: [
            "تفعيل فلاتر الأهلية التلقائية وفر على الفريق الإداري أكثر من 150+ ساعة عمل يدوية للتحقق من الأوراق والمعدلات.",
            "إظهار مؤشر تتبع مراحل الطلب للطالب المتقدم يقلل من القلق والاستفسارات المتكررة لخدمة العملاء."
          ]
        }
      },
      {
        id: "workforceplanning",
        category: "planning",
        name: "تخطيط القوى العاملة الاستراتيجي والمواءمة الهيكلية",
        problem: "أدى غياب المواءمة المباشرة بين الهياكل المعتمدة وقوائم الموظفين الفعليين والوظائف الشاغرة وميزانيات الاستقطاب إلى تعيينات خارج النطاق وتجاوز الميزانيات المخططة.",
        myRole: "أخصائي ومخطط القوى العاملة والمواءمة الهيكلية",
        contribution: "بناء نموذج تخطيط متكامل يربط الموظفين النشطين بالهياكل التنظيمية المعتمدة، وتتبع معدلات الدوران والوظائف الشاغرة ومحاكاة ميزانيات التوظيف المستهدفة.",
        methods: ["رسم وتخطيط الهياكل التنظيمية", "التنبؤ بالوظائف الشاغرة والإحلال", "محاكاة ميزانيات القوى العاملة", "تدقيق ومواءمة الهياكل"],
        status: "مفعّل ومطبق حالياً",
        outcome: "تأسيس إطار عمل موحد ومحكم لكافة القرارات الوظيفية بالمنشأة، بما يضمن عدم إصدار أي قرار تعيين خارج حدود الهياكل المعتمدة والميزانيات.",
        caseStudy: {
          overview: "مبادرة استراتيجية لإيجاد ترابط متين وقابل للقياس بين الهياكل الإدارية للمجموعة وعمليات التوظيف والاستقطاب الفعلية للحد من الهدر المالي.",
          context: "كانت الإدارات تطلب بصفة مستمرة فتح قنوات توظيف دون مراجعة حقيقية للميزانيات الشاغرة أو مواءمة الوظائف مع الهياكل المعتمدة، مما خلق ضغطاً مستمراً على ميزانية الرواتب.",
          objectives: [
            "ربط كل موظف نشط برقم وظيفة فريد ومعتمد (Position ID) على الهيكل التنظيمي",
            "صياغة نموذج محاكاة للتنبؤ باحتياجات الإحلال بناءً على دراسات التقاعد والدوران الوظيفي",
            "بناء تنبيهات إلكترونية تمنع الإدارات من طلب تعيين موظفين جدد يتجاوز السقف المحدد لهيكل الإدارة",
            "مواءمة خطط القوى العاملة مباشرة مع ميزانيات الإدارة المالية السنوية"
          ],
          approach: [
            "تدقيق وتطهير كافة المسميات الوظيفية النشطة وتوحيدها لتتوافق مع بطاقات الوصف الوظيفي المعتمدة.",
            "بناء شجرة الهيكل التنظيمي لتوضيح خطوط الارتباط الإداري ونطاقات الإشراف (Span of Control).",
            "تفعيل نظام 'التوظيف المعتمد على الرقم الوظيفي' (Position-Based System) داخل نظام شؤون الموظفين.",
            "إعداد وتأليف دليل سياسات الحوكمة الخاص بتعديل الهياكل واعتماد الوظائف الشاغرة الإضافية."
          ],
          keyDecisions: [
            "تطبيق قاعدة 'موظف واحد لكل رقم وظيفي' بشكل صارم لمنع تداخل الأدوار والمسؤوليات.",
            "تأسيس 'مجموعات وظائف مرنة' لتنظيم ومراقبة عقود الموظفين المؤقتين والمستشارين دون التأثير على الهياكل المستديمة."
          ],
          governance: [
            "تأسيس سياسة معتمدة لتعديل الهياكل تتطلب موافقة ثنائية من رئيس الموارد البشرية والمدير المالي.",
            "إعداد تقارير تدقيق شهرية تلقائية ترصد أي موظف نشط في النظام لا يمتلك رقماً وظيفياً معتمداً ومطابقاً للميزانية."
          ],
          lessonsLearned: [
            "تخطيط القوى العاملة يتعلق بالانضباط المالي والرقابة الهيكلية بقدر ما يتعلق بسرعة تلبية الاحتياجات التشغيلية.",
            "إن توفير هيكل تنظيمي مرئي وواضح يسهل على مدراء الإدارات فهم الحدود الهيكلية لإداراتهم والالتزام بها."
          ]
        }
      },
      {
        id: "qyemnna",
        category: "product",
        name: "تطبيق قيمنا لتنمية الأسرة",
        problem: "تفتقر العائلات لبيئة رقمية آمنة ومنظمة لتنسيق أهداف تعلم الأطفال وتتبع الأنشطة اليومية وقياس التقدم في خطط النمو التربوي والسلوكي.",
        myRole: "معماري المنتجات ومصمم إجراءات العمل والرحلات",
        contribution: "تحديد رحلات المستخدمين، وهيكلة وحدات تطوير سلوكيات الطفل، وتكوين آليات تتبع العادات والمهام اليومية، ومراجعة واجهات المستخدم المتوافقة مع اللغة العربية.",
        methods: ["رسم رحلات المستخدمين", "تطوير محركات تتبع الأنشطة", "مراجعة واجهات اللغة العربية RTL", "تصميم واجهات المستخدم التفاعلية"],
        status: "نموذج أولي فعال (Active Prototype)",
        outcome: "تطبيق أسري ذو واجهة جذابة وآمنة يساعد الآباء في متابعة تنمية مهارات الأبناء والاحتفال بالمنجزات السلوكية والدراسية.",
        caseStudy: {
          overview: "تطبيق رقمي متخصص مصمم لمساعدة أولياء الأمور في تحديد ومتابعة وتنمية الأهداف السلوكية والتربوية والأكاديمية الأساسية للأطفال.",
          context: "معظم التطبيقات الأسرية المتاحة هي إما قوائم مهام بسيطة أو تقاويم أعمال معقدة للغاية. تبرز الحاجة لمنظومة تربوية متكاملة مبسطة ومحببة للطفل.",
          objectives: [
            "تمكين أولياء الأمور من تحديد أهداف نمو سلوكية مخصصة تتناسب مع عمر الطفل",
            "تصميم لوحات مهام تفاعلية سهلة وممتعة للاستخدام المباشر من قبل الأطفال",
            "تزويد الآباء بتحليلات بصرية لمدى استمرارية والتزام الطفل بالخطط التنموية",
            "الحفاظ التام على خصوصية البيانات لضمان عدم مشاركة أي بيانات تخص الأطفال مع أطراف خارجية"
          ],
          approach: [
            "دراسة نظريات تعديل السلوك الإيجابي والتحفيز الذاتي المخصصة للأطفال والمراهقين.",
            "تصميم واجهات سهلة بلمسات تفاعلية مريحة للأطفال ولوحات تحكم تفصيلية للوالدين.",
            "اختبار كامل لواجهات RTL لضمان انسيابية التصفح باللغة العربية بأسلوب طبيعي وجذاب.",
            "دمج تأثيرات صوتية تشجيعية وآليات لكسب النجوم والمكافآت التقديرية."
          ],
          keyDecisions: [
            "اعتماد نموذج المجموعات الأسرية المغلقة (بالمدعوين فقط)، مع عزل قواعد بيانات كل عائلة لضمان حماية خصوصية الأطفال بالكامل.",
            "التركيز على آليات التحفيز الإيجابي من خلال إبراز الإنجازات والالتزام، بدلاً من أساليب العقاب والتأنيب للأنشطة غير المكتملة."
          ],
          governance: [
            "تطبيق ضوابط تتوافق مع معايير حماية خصوصية الأطفال على الإنترنت (COPPA).",
            "تأمين وتشفير قنوات رفع الصور العائلية وحفظها في خوادم سحابية آمنة ومحمية بالكامل."
          ],
          lessonsLearned: [
            "تبسيط واجهات المستخدم إلى أقصى حد أمر بالغ الأهمية عند التصميم لبيئات أسرية تضم أعماراً ومستويات رقمية متفاوتة.",
            "يتفاعل الأطفال بصورة أفضل بكثير مع المراحل البصرية المحفزة مقارنة بالجداول المكتوبة التقليدية."
          ]
        }
      }
    ]
  },
  achievements: {
    title: "أبرز الإنجازات والأثر المهني",
    subtitle: "نتائج أعمال ملموسة أسهمت في تقديم قيمة استراتيجية وتنظيمية وتفعيل أحدث التقنيات",
    items: [
      {
        title: "تكامل وتوحيد الأنظمة لكيانات متعددة",
        description: "نجاح كبير في توحيد السياسات التشغيلية، وصيغ الرواتب، وإجراءات الامتثال لعدة كيانات قانونية مستقلة في نموذج تشغيلي واحد وموحد.",
        metric: "[عدد]",
        metricLabel: "كيانات مدمجة"
      },
      {
        title: "التحول السحابي لمنصات الموارد البشرية",
        description: "ترحيل الأرشيفات والملفات الورقية وقواعد البيانات اليدوية إلى منصة KayanHR السحابية، لتقديم خدمات ذاتية فورية لجميع الموظفين.",
        metric: "[عدد]",
        metricLabel: "موظف تم نقلهم"
      },
      {
        title: "تصميم منصات توظيف مخصصة",
        description: "قيادة تحديد المتطلبات الفنية، ورحلات المتقدمين، ومعايير تقييم اللجان لبوابات التوظيف واستقطاب الكفاءات والمنح الأكاديمية.",
        metric: "3+",
        metricLabel: "منصات تم تصميمها"
      },
      {
        title: "ضبط وهيكلة القوى العاملة",
        description: "تطبيق وتفعيل نماذج الرقابة الهيكلية والمطابقة الكاملة لكل عقد وظيفي نشط مع الميزانيات المعتمدة للإدارات والأقسام.",
        metric: "100%",
        metricLabel: "المطابقة الهيكلية"
      },
      {
        title: "تحسين سرعة الكفاءة التشغيلية",
        description: "أتمتة العمليات التشغيلية المتكررة لشؤون الموظفين، مما ساهم في تقليص فترات معالجة البيانات الإدارية والحد من الأخطاء.",
        metric: "[أدخل %]",
        metricLabel: "الوقت المهدر الذي تم توفيره"
      },
      {
        title: "صياغة وتفعيل السياسات واللوائح",
        description: "إعداد وتأليف وتطبيق لوائح وسياسات تنظيمية متكاملة تغطي قواعد السلوك والعمل عن بُعد وأمن المعلومات والخصوصية.",
        metric: "15+",
        metricLabel: "سياسة تنظيمية معتمدة"
      }
    ]
  },
  philosophy: {
    title: "الفلسفة القيادية والعملية",
    statement: "أومن بأن نجاح الموارد البشرية يبدأ بفهم تطلعات واحتياجات الأفراد، ولكنه يكتمل وينجح من خلال الأنظمة الواضحة، والقيادة المسؤولة، والبيانات الدقيقة، والتنفيذ المنضبط. هدفي الدائم هو بناء بيئات عمل تدعم الأداء المؤسسي العالي وتثري تجربة الموظف في آن واحد.",
    principles: [
      {
        title: "الفهم والتحليل قبل اتخاذ القرار",
        desc: "دراسة واقع بيئة العمل بدقة، والمحددات القانونية، والتطلعات البشرية قبل صياغة الهياكل والسياسات."
      },
      {
        title: "التصميم من أجل الوضوح الشامل",
        desc: "الحد من البيروقراطية والغموض الإداري عبر تحديد مسؤوليات واضحة، وإجراءات مبسطة، وتواصل فعال ومستمر."
      },
      {
        title: "الحوكمة والمسؤولية المهنية",
        desc: "تضمين سرية البيانات، والامتثال القانوني، وضوابط الرقابة الداخلية كجزء أصيل في كل سياسة ونظام رقمي نتبناه."
      },
      {
        title: "التطوير والتحسين المستمر",
        desc: "مراجعة العمليات بصفة دورية، وتحليل مؤشرات تحليلات الأفراد، وتحسين الأنظمة الرقمية بناءً على مراجعات المستخدمين والنتائج الفعلية."
      }
    ]
  },
  credentials: {
    title: "المؤهلات العلمية والشهادات المهنية",
    subtitle: "خلفية تقنية متينة في علوم الحاسب مدعومة بشهادات وخبرات استراتيجية في الموارد البشرية",
    educationTitle: "المؤهل الأكاديمي",
    certificationsTitle: "الشهادات المهنية والتأهيل المستمر",
    education: [
      {
        degree: "بكالوريوس العلوم (B.S.)",
        field: "علوم الحاسب",
        institution: "[أدخل اسم الجامعة، مثلاً: جامعة الملك سعود]",
        date: "[أدخل سنة التخرج]",
        details: "منحني هذا المؤهل الأسس البرمجية، ومعرفة هياكل البيانات والتفكير التحليلي المنظم، وهو ما يدعم تفعيلي المتميز لمشاريع التحول الرقمي وإدارة المنتجات وتحليلات الأفراد."
      }
    ],
    certifications: [
      {
        name: "عضو مشارك - CIPD Level 5",
        issuer: "المعهد المعتمد للأفراد والتنمية (CIPD)",
        date: "[أدخل تاريخ الحصول عليها]",
        id: "[أدخل رقم الشهادة]",
        url: "#"
      },
      {
        name: "الشهادة الاحترافية لمؤشرات الأداء الرئيسية (KPI Professional)",
        issuer: "معهد مؤشرات الأداء الرئيسية (The KPI Institute)",
        date: "[أدخل تاريخ الحصول عليها]",
        id: "[أدخل رقم الشهادة]",
        url: "#"
      },
      {
        name: "خبرة تفعيل وتطبيق SAP SuccessFactors",
        issuer: "مشاريع وتدريب عملي في بيئة العمل",
        date: "خبرة عملية تطبيقية"
      },
      {
        name: "خبرة في العمليات الأساسية لنظام SAP S/4HANA",
        issuer: "تدريب وممارسة عملية",
        date: "خبرة عملية تطبيقية"
      },
      {
        name: "برنامج إدارة التغيير والتطوير التنظيمي",
        issuer: "[أدخل الجهة المانحة]",
        date: "تأهيل مهني مخصص"
      }
    ]
  },
  technical: {
    title: "القدرات الفنية والرقمية",
    subtitle: "سد الفجوة بين التخطيط المؤسسي للمنشآت والتصميم المباشر للحلول البرمجية",
    items: [
      {
        category: "تصميم المنتجات وتجربة المستخدم (UX)",
        skills: [
          "تحليل وكتابة متطلبات العمل ووثائقه",
          "تخطيط وتوثيق إجراءات العمل ومساراتها",
          "إعداد الوثائق الوظيفية للمنتجات البرمجية",
          "تقييم ومراجعة تجربة المستخدم (UX Review)",
          "التعاون البرمجي عبر تصاميم Figma",
          "مراجعة وتطابق واجهات اللغة العربية RTL"
        ]
      },
      {
        category: "أنظمة شؤون الموظفين السحابية (HRIS)",
        skills: [
          "تجهيز وهجرة وتفعيل نظام KayanHR",
          "العمليات الأساسية لنظام SAP SuccessFactors",
          "تشغيل ومتابعة نظام SAP S/4HANA",
          "أنظمة تتبع واستقطاب الكفاءات (ATS)",
          "تصميم مسارات وإجراءات بوابات المنح الدراسية"
        ]
      },
      {
        category: "تحليل البيانات ونمذجة الأعمال",
        skills: [
          "تصميم لوحات تحليلات الأفراد والكوادر",
          "تنظيف وهيكلة قواعد بيانات شؤون الموظفين",
          "صياغة لوحات تتبع مؤشرات الأداء",
          "بناء النماذج التحليلية المتقدمة في Excel",
          "هيكلة قواعد البيانات ومستويات الصلاحيات"
        ]
      },
      {
        category: "فهم التقنيات والاستضافة والتطوير",
        skills: [
          "HTML, CSS, Tailwind CSS لترجمة التصاميم",
          "مفاهيم لغة TypeScript ومكتبة React",
          "استخدام الذكاء الاصطناعي في هندسة البرمجيات",
          "إدارة مستودعات الكود في منصة GitHub",
          "مفاهيم الحاويات Docker والرفع للخوادم",
          "مفاهيم أنظمة Linux وخوادم الـ VPS السحابية"
        ]
      }
    ]
  },
  recommendations: {
    title: "التوصيات والآراء المهنية",
    subtitle: "توصيات مهنية من زملاء العمل وأصحاب المصلحة وقيادات العمل",
    placeholderText: "تخضع التوصيات والآراء المكتوبة حالياً لمراجعة التوثيق والموافقة للنشر العام. سيعرض هذا القسم التوصيات الرسمية بمجرد اعتمادها.",
    placeholderLabel: "التوصية بانتظار الاعتماد الموثق",
    items: [
      {
        quote: "يمتلك البراء قدرة فريدة على سد الفجوة بين تطلعات الموارد البشرية والأدوات الرقمية الحديثة. إنه لا يقوم فقط بإدارة الموارد البشرية؛ بل يسهم في رفع كفاءتها التشغيلية باستخدام التقنية بشكل مبهر.",
        author: "[اسم الموصي - نائب الرئيس أو قيادي]",
        position: "[أدخل المسمى الوظيفي، مثل: المدير التنفيذي]",
        company: "[أدخل اسم الجهة]",
        relation: "عملت بشكل وثيق مع البراء خلال تفعيل نظام KayanHR"
      }
    ]
  },
  contact: {
    title: "دعنا نبني شيئاً ذا قيمة حقيقية",
    subtitle: "أرحب بالنقاشات الهادفة والمثمرة حول قيادة الموارد البشرية، والتطوير التنظيمي، والتخطيط الاستراتيجي، وتقنيات الأفراد، والتحول الرقمي، والتعاون المهني البنّاء.",
    formName: "الاسم الكامل",
    formEmail: "البريد الإلكتروني",
    formOrg: "الجهة / المنشأة",
    formSubject: "عنوان الرسالة",
    formMessage: "تفاصيل الرسالة",
    formConsent: "أوافق على معالجة رسالتي بأمان عبر هذا الموقع وأوافق على المراسلات المهنية الهادفة.",
    formSubmit: "إرسال الرسالة",
    formSubmitting: "جاري إرسال الرسالة...",
    formSuccess: "شكرًا لك! تم إرسال رسالتك بنجاح. سأقوم بمراجعتها والتواصل معك في أقرب وقت ممكن.",
    formError: "حدث خطأ أثناء محاولة إرسال رسالتك. يرجى المحاولة مرة أخرى أو تواصل معي مباشرة عبر البريد الإلكتروني أو LinkedIn.",
    validationRequired: "هذا الحقل مطلوب",
    validationEmail: "يرجى إدخال بريد إلكتروني صحيح",
    validationConsent: "يجب الموافقة للاستمرار",
    coordinates: {
      email: "ALBaraBakhsh@gmail.com",
      linkedin: "https://www.linkedin.com/in/[LinkedIn_Username_Placeholder]",
      github: "https://github.com/[GitHub_Username_Placeholder]",
      twitter: "https://twitter.com/[Twitter_Username_Placeholder]",
      whatsapp: "https://wa.me/[WhatsApp_Placeholder]",
      location: "الرياض، المملكة العربية السعودية",
      meetingUrl: "https://calendly.com/[Calendly_Placeholder]"
    }
  }
};
