import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { LuCode, LuUsers, LuMonitor, LuSettings } from "react-icons/lu";

const Services = () => {
  const services = [
    {
      icon: LuCode,
      title: "IT Consultation",
      description: "Expert guidance on technology strategy, infrastructure planning, and digital transformation initiatives.",
      features: ["Technology Assessment", "Strategic Planning", "Implementation Roadmaps"]
    },
    {
      icon: LuUsers,
      title: "Computer Training",
      description: "Comprehensive training programs to enhance your team's technical capabilities and productivity.",
      features: ["Custom Training Programs", "Skill Development", "Certification Prep"]
    },
    {
      icon: LuMonitor,
      title: "Device Procurement",
      description: "Strategic sourcing and procurement of computers and devices tailored to your business needs.",
      features: ["Needs Assessment", "Vendor Management", "Cost Optimization"]
    },
    {
      icon: LuSettings,
      title: "Program Management",
      description: "End-to-end program management ensuring successful delivery of your technology initiatives.",
      features: ["Project Planning", "Risk Management", "Quality Assurance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for commercial and governmental sectors, 
            delivering timely and detailed technology solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-card transition-smooth border-0 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#1A1787] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#1A1787] rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-4 px-4 py-2 text-sm border border-primary rounded group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;