export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
  personalInfo: {
    fullName: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    officeEmail: string;
    monthlyIncome: [string, string];
    loanRepayment: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  guarantor: {
    fullName: string;
    phoneNumber: string;
    relationship: string;
  };
}