import PricingTabs from "@/components/ui/PricingTabs";

const PricingSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-muffer-dark-text">
          Pricing Plans
        </h2>
        <p className="text-xl text-muffer-light-text">
          Choose the perfect video production plan for your needs
        </p>
      </div>

      <PricingTabs />
    </section>
  );
};

export default PricingSection;