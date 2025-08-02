import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Technology Infrastructure?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our comprehensive technology services can help
            streamline your operations and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              Download Service Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
