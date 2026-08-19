import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { QuoteDrawerModal } from './components/QuoteDrawerModal';
import { ToastContainer } from './components/ToastContainer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailsPage } from './pages/ServiceDetailsPage';
import { MachineryRentalPage } from './pages/MachineryRentalPage';
import { MachineDetailsPage } from './pages/MachineDetailsPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { BookingPage } from './pages/BookingPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { FarmEngineeringPage } from './pages/FarmEngineeringPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { BlogPage } from './pages/BlogPage';
import { ArticlePage } from './pages/ArticlePage';
import { CropGuidePage } from './pages/CropGuidePage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { CareersPage } from './pages/CareersPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { currentRoute } = useApp();

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'service-details':
        return <ServiceDetailsPage />;
      case 'machinery':
        return <MachineryRentalPage />;
      case 'machine-details':
        return <MachineDetailsPage />;
      case 'products':
        return <ProductsPage />;
      case 'product-details':
        return <ProductDetailsPage />;
      case 'booking':
        return <BookingPage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'farm-engineering':
        return <FarmEngineeringPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'project-details':
        return <ProjectDetailsPage />;
      case 'blog':
        return <BlogPage />;
      case 'article':
        return <ArticlePage />;
      case 'crop-guide':
        return <CropGuidePage />;
      case 'about':
        return <AboutPage />;
      case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FAQPage />;
      case 'careers':
        return <CareersPage />;
      case 'login':
        return <LoginPage />;
      case 'register':
        return <RegisterPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] text-[#1A251E] flex flex-col selection:bg-[#1E7E34] selection:text-white font-sans antialiased">
      
      {/* 1. Global Navigation Header */}
      <Header />

      {/* 2. Main Routed Content */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Mobile Bottom Quick App Bar */}
      <MobileBottomNav />

      {/* 5. Global Search Modal (Ctrl+K or Header search) */}
      <GlobalSearchModal />

      {/* 6. Persistent Quote Cart Drawer */}
      <QuoteDrawerModal />

      {/* 7. Toast Notification Feed */}
      <ToastContainer />

      {/* 8. Floating WhatsApp Interactive Widget */}
      <WhatsAppFloating />

    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
