import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import IdentitySection from "@/components/MVVSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ValueSectionBento from "@/components/ValueSection_Bento";
import ValueSectionEditorial from "@/components/ValueSection_Editorial";
import ValueSectionIndustrial from "@/components/ValueSection_Industrial";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            {/* <ValueSection /> */}
            {/* <ValueSectionBento/> */}
            <ValueSectionEditorial/>
            {/* <ValueSectionIndustrial/> */}
            <AboutSection />
            <IdentitySection />
            <ServicesSection />
            {/* <ProcessSection /> */}
            <ContactSection />
            <Footer />
            {/* <WhatsAppButton /> */}
        </div>
    );
};

export default Index;
