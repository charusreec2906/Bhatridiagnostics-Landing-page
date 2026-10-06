export interface OfferItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  imageKey: string;
}

export interface ClientType {
  iconName: string;
  title: string;
  description: string;
}

export const WHAT_WE_OFFER: OfferItem[] = [
  {
    id: 'ct-reporting',
    iconName: 'Activity',
    title: 'CT Reporting',
    description: 'Cross-sectional computed tomography reporting across cranial, thoracic, abdominal, and musculoskeletal studies.',
  },
  {
    id: 'mri-reporting',
    iconName: 'Layers',
    title: 'MRI Reporting',
    description: 'High-contrast magnetic resonance imaging evaluations for neuro-axis, spine, joints, and soft-tissue examinations.',
  },
  {
    id: 'xray-reporting',
    iconName: 'FileText',
    title: 'X-Ray Reporting',
    description: 'Timely plain radiography interpretations for trauma, chest, skeletal projections, and routine outpatient assessments.',
  },
  {
    id: 'emergency-stat-reporting',
    iconName: 'AlertCircle',
    title: 'Emergency / STAT Reporting',
    description: 'Prioritized reporting coverage for acute and emergency studies requiring urgent turnaround for critical clinical decisions.',
  },
  {
    id: 'second-opinion-subspecialty',
    iconName: 'CheckCircle2',
    title: 'Second Opinion & Subspecialty Reporting',
    description: 'Detailed secondary reviews and subspecialty opinions for complex, oncological, or equivocal radiological studies.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ct-service',
    title: 'CT Reporting',
    shortDesc: 'Comprehensive computed tomography reporting for head, neck, chest, abdomen, pelvis, and angiography studies.',
    imageKey: 'ct',
  },
  {
    id: 'mri-service',
    title: 'MRI Reporting',
    shortDesc: 'Detailed multi-sequence magnetic resonance imaging reads for brain, spine, musculoskeletal, and specialized exams.',
    imageKey: 'mri',
  },
  {
    id: 'xray-service',
    title: 'X-Ray Reporting',
    shortDesc: 'Dependable plain radiography interpretations for chest, emergency trauma, orthopedics, and routine screening.',
    imageKey: 'xray',
  },
  {
    id: 'stat-service',
    title: 'Emergency / STAT Reporting',
    shortDesc: 'Dedicated expedited reporting channels supporting acute trauma admissions, stroke triage, and emergency units.',
    imageKey: 'stat',
  },
  {
    id: 'second-opinion-service',
    title: 'Second Opinion Reporting',
    shortDesc: 'Expert second-look evaluations and subspecialty consensus reads for intricate or difficult diagnostic cases.',
    imageKey: 'second-opinion',
  },
];

export const WHO_WE_SERVE: ClientType[] = [
  {
    iconName: 'Building2',
    title: 'Hospitals',
    description: 'Radiology reporting support for hospitals looking to manage reporting volumes, specialist coverage and after-hours requirements.',
  },
  {
    iconName: 'FlaskConical',
    title: 'Diagnostic Centres',
    description: 'Reliable reporting support for diagnostic centres handling routine, urgent and high-volume imaging studies.',
  },
  {
    iconName: 'BriefcaseMedical',
    title: 'Clinics & Healthcare Facilities',
    description: 'Radiology reporting support for clinics and healthcare facilities that need access to qualified reporting expertise.',
  },
];

export const WHY_PARTNER_POINTS = [
  {
    title: 'Systematic Quality Oversight',
    description: 'Structured review protocols and quality benchmarks designed to maintain clinical accuracy and consistent reporting standards.',
  },
  {
    title: 'Secure DICOM Infrastructure',
    description: 'Encrypted cloud channels ensuring patient imaging datasets and clinical reports remain safe and strictly protected.',
  },
  {
    title: 'Dependable Turnaround Support',
    description: 'Responsive reporting assistance to help healthcare facilities across India manage daily volume swings and after-hours coverage.',
  },
];
