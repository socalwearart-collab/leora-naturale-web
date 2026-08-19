import Hero from "@/components/Hero";
import BrandBanner from "@/components/BrandBanner";
import AboutSection from "@/components/AboutSection";
import ProductGrid from "@/components/ProductGrid";
import CategoryCards from "@/components/CategoryCards";
import ProcessSection from "@/components/ProcessSection";
import IngredientsSection from "@/components/IngredientsSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CertificationsSection from "@/components/CertificationsSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import NewsletterSection from "@/components/NewsletterSection";
import StoreBar from "@/components/StoreBar";
import JsonLd from "@/components/JsonLd";
import { getFaqs, getFeaturedProducts } from "@/lib/data";
import { faqJsonLd, itemListJsonLd } from "@/lib/seo";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <JsonLd data={faqJsonLd(getFaqs())} />
      <JsonLd data={itemListJsonLd()} />
      <StoreBar variant="top" />
      <Hero />
      <BrandBanner />
      <AboutSection />
      <ProductGrid
        products={featuredProducts}
        title="Popular Products"
        subtitle="Discover our chemical-free range of dehydrated fruits, traditional vegetables, and herbal wellness — packed with nutrients and crafted in Sri Lanka."
      />
      <CategoryCards />
      <ProcessSection />
      <IngredientsSection />
      <ImpactSection />
      <TestimonialsSection />
      <BlogSection />
      <CertificationsSection />
      <FAQSection />
      <ContactForm />
      <StoreBar variant="bottom" />
      <NewsletterSection />
    </>
  );
}