export type PageRoute = 
  | 'home'
  | 'services'
  | 'service-details'
  | 'products'
  | 'product-details'
  | 'machinery'
  | 'machinery-rental'
  | 'machine-details'
  | 'booking'
  | 'solutions'
  | 'farm-engineering'
  | 'irrigation'
  | 'drainage'
  | 'solar-agriculture'
  | 'soil-testing'
  | 'advisory'
  | 'projects'
  | 'project-details'
  | 'blog'
  | 'article'
  | 'crop-guide'
  | 'about'
  | 'team'
  | 'contact'
  | 'faq'
  | 'careers'
  | 'login'
  | 'register'
  | 'dashboard'
  | 'privacy'
  | 'terms'
  | '404';

export interface ServiceItem {
  id: string;
  code: string;
  slug: string;
  title: string;
  titleEn: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  problemStatement?: string;
  solutionProvided?: string;
  image: string;
  icon: string;
  features: string[];
  equipmentList?: string[];
  workflowSteps?: { step: string; title: string; desc: string }[];
  process?: { step: string; title: string; desc: string }[];
  idealFor?: string;
  benefits?: string[];
  pricing?: { startingPrice: string; unit: string; note: string };
  priceGuideline?: string;
  faqs?: { question: string; answer: string; q?: string; a?: string }[];
  relatedServiceIds?: string[];
}

export interface MachineryItem {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  category: string;
  pricePerDay: number;
  pricePerAcre?: number;
  pricePerWeek?: number;
  unit: string;
  location: string;
  status?: string;
  availability?: 'Available' | 'Reserved' | 'Rented' | 'Maintenance' | 'Unavailable';
  image: string;
  gallery?: string[];
  specs: { [key: string]: string };
  engineType?: string;
  power?: string;
  fuel?: string;
  fuelType?: string;
  capacity?: string;
  coverage?: string;
  usage?: string;
  deposit?: string;
  operatorIncluded?: boolean;
  operatorAvailable?: boolean;
  rentalTerms?: string[];
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  category: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewsCount?: number;
  stockStatus?: string;
  stock?: 'In Stock' | 'Limited Stock' | 'Pre-Order' | 'Out of Stock';
  image: string;
  gallery?: string[];
  specs: { [key: string]: string };
  description: string;
  features?: string[];
  usage?: string;
  warranty: string;
}

export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  subtitle?: string;
  description?: string;
  problem: string;
  solution: string;
  tag: string;
  image: string;
  equipment?: string[];
  services?: string[];
  keyFeatures?: string[];
  expectedBenefit: string[];
  impactMetric?: string;
  caseSnippet?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  district?: string;
  year?: string;
  image: string;
  gallery?: string[];
  clientType?: string;
  cropType?: string;
  landSize: string;
  shortDesc: string;
  fullCaseStudy?: string;
  challenge: string;
  solution?: string;
  solutionProvided?: string;
  implementation?: string[];
  results: string[];
  clientFeedback?: { quote: string; clientName: string; designation: string };
  isDemoSample?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string | { name: string; designation: string; avatar?: string };
  summary: string;
  content: string | string[];
  keyTips?: string[];
  relatedSlugs?: string[];
}

export interface CropGuide {
  id: string;
  name: string;
  nameEn?: string;
  category: string;
  image?: string;
  season: string;
  soilType?: string;
  landPreparation?: string;
  irrigationStages: string[];
  waterRequirement?: string;
  keyPractices: string[];
  basicCare?: string[];
  recommendedMachinery: string[];
  commonProblems?: string[];
  harvesting?: string;
}

export interface BookingRecord {
  id: string;
  type?: 'service' | 'machine' | 'engineering' | 'soil-testing';
  bookingType?: 'service' | 'machine' | 'engineering' | 'soil-testing';
  itemTitle: string;
  itemSlug?: string;
  itemId?: string;
  farmerName?: string;
  customerName?: string;
  phone: string;
  whatsappNumber?: string;
  district: string;
  thana?: string;
  upazila?: string;
  address?: string;
  landSize?: string;
  farmSize?: string;
  bookingDate?: string;
  startDate?: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  specialRequirement?: string;
  estimatedCost?: string;
  assignedTechnician?: string;
  notes?: string;
  status: 'Pending' | 'Confirmed' | 'Assigned' | 'In Progress' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  phone: string;
  email?: string;
  role?: 'farmer' | 'commercial_owner' | 'technician' | 'admin';
  district: string;
  thana?: string;
  location?: string;
  landSize?: string;
  crops?: string[];
  registeredDate?: string;
}

export interface QuoteCartItem {
  id: string;
  type: 'product' | 'machine' | 'service';
  title: string;
  quantity?: number;
  days?: number;
  unitPrice?: number;
  image?: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contractual';
  experience: string;
  salary: string;
  deadline: string;
  description: string;
  requirements: string[];
}
