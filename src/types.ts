export type PageRoute = 
  | 'home'
  | 'natural-farming'
  | 'soil-health'
  | 'natural-pest'
  | 'natural-pest-management'
  | 'smart-water'
  | 'digital-farm'
  | 'model-farm'
  | 'verified-produce'
  | 'verified-farm'
  | 'crop-assistant'
  | 'farm-calculator'
  | 'packages'
  | 'farmer-stories'
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
  | 'knowledge'
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

export interface SoilHealthReport {
  id: string;
  farmId: string;
  farmerName: string;
  location: string;
  date: string;
  ph: number;
  phStatus: 'Optimal' | 'Acidic' | 'Alkaline';
  organicMatter: number; // percentage
  organicMatterStatus: 'High' | 'Adequate' | 'Low';
  moisture: number; // percentage
  nitrogen: 'Low' | 'Medium' | 'Optimal';
  phosphorus: 'Low' | 'Medium' | 'Optimal';
  potassium: 'Low' | 'Medium' | 'Optimal';
  overallCondition: 'Excellent' | 'Good' | 'Attention' | 'Critical';
  recommendations: string[];
  isDemoSample?: boolean;
}

export interface DigitalFarmActivity {
  id: string;
  date: string;
  title: string;
  category: 'Soil' | 'Input' | 'Water' | 'Inspection' | 'Harvest' | 'Pest';
  description: string;
  operator: string;
  notes?: string;
  status: 'Completed' | 'Pending' | 'Scheduled';
}

export interface DigitalFarmAlert {
  id: string;
  title: string;
  date: string;
  severity: 'high' | 'medium' | 'info';
  type: 'irrigation' | 'soil' | 'observation' | 'harvest';
  actionPrompt: string;
}

export interface DigitalFarmProfile {
  farmId: string;
  name: string;
  ownerName: string;
  location: string;
  totalArea: string;
  soilType: string;
  primaryCrops: string[];
  irrigationType: string;
  soilHealthStatus: 'Good' | 'Attention' | 'Critical';
  currentMoisture: number;
  cropStatus: 'Healthy' | 'Monitor' | 'Stress';
  nextTask: string;
  activities: DigitalFarmActivity[];
  alerts: DigitalFarmAlert[];
  isDemoSample?: boolean;
}

export interface ModelFarmZone {
  id: string;
  name: string;
  area: string;
  crop: string;
  soilPractice: string;
  waterSystem: string;
  pestStrategy: string;
  monitoringTech: string;
  image: string;
}

export interface VerifiedFarmItem {
  id: string;
  farmId: string;
  farmerName: string;
  farmName: string;
  location: string;
  district: string;
  crops: string[];
  area: string;
  productionMethod: 'Natural / Ecological' | 'Integrated Organic' | 'Precision Eco-Agro';
  soilHealthGrade: 'A+' | 'A' | 'B+';
  waterSource: string;
  lastHarvestDate: string;
  verificationStatus: 'AYT Verified' | 'In Audit' | 'Registered';
  verificationDate: string;
  qrPayload: string;
  badge: string;
  isDemoSample?: boolean;
}

export interface NaturalPackageItem {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  targetFarmer: string;
  badge?: string;
  features: string[];
  deliverables: string[];
  supportDuration: string;
  suitableArea: string;
}

export interface FarmerStoryItem {
  id: string;
  farmerName: string;
  location: string;
  farmSize: string;
  crop: string;
  challenge: string;
  aytSolution: string;
  experience: string;
  result: string;
  yieldChange?: string;
  costReduction?: string;
  image: string;
  isVerifiedStory: boolean;
}

export interface PestManagementGuide {
  id: string;
  pestName: string;
  pestNameEn: string;
  targetCrops: string[];
  symptoms: string;
  observeIdentify: string;
  prevention: string;
  monitoringMethod: string;
  biologicalMechanicalControl: string;
  riskCategory: 'Low Risk' | 'Moderate' | 'Action Required';
}
