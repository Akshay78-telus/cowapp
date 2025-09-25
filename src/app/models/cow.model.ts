export interface ICow {
  earTag: number;
  sex: 'Male' | 'Female';
  pen: string;
  status: 'Active' | 'In Treatment' | 'Deceased' | 'All';
  weight?: number;
  lastEventDate?: Date;
}