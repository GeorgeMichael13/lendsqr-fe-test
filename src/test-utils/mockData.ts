import { User } from "@/types/user";

export const MOCK_USER: User = {
  id: "1",
  personalInfo: {
    fullName: "Grace Effiom",
    email: "grace@lendsqr.com",
    phone: "07060780922",
    bvn: "12345678901",
    gender: "Female",
    maritalStatus: "Single",
    children: "None",
    residence: "Parent's Apartment",
    avatar: "/avataricon.png"
  },
  education: {
    level: "B.Sc",
    employmentStatus: "Employed",
    sector: "FinTech",
    duration: "2 years",
    officeEmail: "grace@lendsqr.com",
    monthlyIncome: ["₦50,000", "₦100,000"],
    loanRepayment: "40,000"
  },
  socials: {
    twitter: "@grace_effiom",
    facebook: "Grace Effiom",
    instagram: "@grace_effiom"
  },
  guarantor: {
    fullName: "Debby Ogana",
    phone: "07060780922",
    email: "debby@gmail.com",
    relationship: "Sister"
  },
  status: "Active" as any
};