import { 
  UserPlus, 
  Users, 
  FileText, 
  Stethoscope, 
  Settings,
  UserCog // Changed from UserMd to UserCog
} from 'lucide-react';

export const NAVIGATION_ITEMS = [
  { 
    id: 'patients',
    icon: Users,
    text: 'Patients',
    href: '#patients' 
  },
  { 
    id: 'new-patient',
    icon: UserPlus,
    text: 'New Patient',
    href: '#new-patient' 
  },
  { 
    id: 'prescriptions',
    icon: FileText,
    text: 'Prescriptions',
    href: '#prescriptions' 
  },
  {
    id: 'doctors',
    icon: UserCog, // Changed from UserMd to UserCog
    text: 'Doctors',
    href: '#doctors'
  },
  {
    id: 'diagnoses',
    icon: Stethoscope,
    text: 'Diagnoses',
    href: '#diagnoses'
  },
  { 
    id: 'settings',
    icon: Settings,
    text: 'Settings',
    href: '#settings' 
  },
] as const;
