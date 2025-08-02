import { scale } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { LuCode, LuUsers, LuMonitor, LuSettings } from "react-icons/lu";

const Services = () => {

  const services = [
    {
      icon: LuCode,
      title: "IT Consultation",
      description: "Expert guidance on technology strategy, infrastructure planning, and digital transformation initiatives.",
      features: ["Technology Assessment", "Strategic Planning", "Implementation Roadmaps"],
      scale: "h-[20rem] my-auto"
    },
    {
      icon: LuMonitor,
      title: "Device Procurement",
      description: "Strategic sourcing and procurement of computers and devices tailored to your business needs.",
      features: ["Needs Assessment", "Vendor Management", "Cost Optimization"],
      scale: "scale-110 z-10 shadow-lg shadow-[#1A1787]/50"
    },
    {
      icon: LuSettings,
      title: "Program Management",
      description: "End-to-end program management ensuring successful delivery of your technology initiatives.",
      features: ["Project Planning", "Risk Management", "Quality Assurance"],
      scale: "h-[20rem] my-auto"
    }
  ];

  return (
    <section id="services" className="relative w-screen bottom-52 bg-background">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for commercial and governmental sectors, 
            delivering timely and detailed technology solutions.
          </p>
        </div> */}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <Card key={index} className={`relative group hover:shadow-card transition-smooth rounded-xs border-0 bg-white ${service.scale}`}>
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
                <Button className="mt-4 px-4 py-2 text-sm text-white bg-[#1A1787] hover:border hover:border-[#1A1787] rounded hover:bg-transparent hover:text-[#1A1787] transition-smooth">
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