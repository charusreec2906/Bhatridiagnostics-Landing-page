export interface ModalityItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  turnaroundTime: string;
  subspecialty: string;
  commonIndications: string[];
  sampleCase: {
    patientRef: string;
    studyDate: string;
    modalityCode: string;
    clinicalHistory: string;
    findings: string[];
    impression: string;
    radiologist: string;
    peerReviewStatus: string;
  };
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  tag: string;
  iconName: string;
}

export interface CoreValueFeature {
  iconName: string;
  title: string;
  description: string;
}

export interface ClientType {
  iconName: string;
  title: string;
  description: string;
  badge: string;
}

export interface PortalCase {
  id: string;
  accessionNumber: string;
  patientInitials: string;
  modality: 'X-Ray' | 'CT' | 'MRI' | 'US';
  bodyPart: string;
  priority: 'STAT / Emergency' | 'Urgent' | 'Routine';
  receivedTime: string;
  status: 'In Triage' | 'Assigned' | 'Under Subspecialty Read' | 'Peer Review' | 'Verified & Signed';
  reportingRadiologist: string;
  subspecialty: string;
}
