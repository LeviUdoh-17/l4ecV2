import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle, Users, Target, Award, TrendingUp, Shield } from "lucide-react";
import aboutTeamImage from "../assets/about-team.jpg";
import cybersecurityImage from "../assets/cybersecurity.jpg";
import digitalTransformationImage from "../assets/digital-transformation.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const About = () => {
  const expertise = [
    "Business Consulting",
    "Digital Transformation", 
    "Technical Delivery",
    "Technology Management"
  ];

  const capabilities = [
    "Infrastructure monitoring, maintenance & management",
    "End-to-end project lifecycle management",
    "Advanced cybersecurity solutions & compliance",
    "Custom mobile app & software development",
    "Strategic procurement & supply chain operations",
    "Data protection & business continuity planning"
  ];

  return (
    <div className="min-h-screen w-screen">
      <section className="bg-gradient-hero text-white">
        <Navbar/>
      {/* Hero Section */}
        <div className="container py-20 mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Driving Innovation, <span className="text-accent">Delivering Excellence</span>
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Transformative Solutions for Modern Business Challenges
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-accent rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Transformative Solutions
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  L4 Enterprise Consulting is a purpose-driven small business specializing in Business Consulting, 
                  Digital Transformation, Technical Delivery, and Technology Management. We partner with commercial 
                  and government sectors to assess organizational needs, implement cutting-edge industry-standard 
                  technologies, and deliver timely, tailored technical solutions.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Core Expertise</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-20 transform rotate-3"></div>
              <img 
                src={aboutTeamImage} 
                alt="Professional team collaborating"
                className="relative rounded-3xl shadow-elegant w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Impact */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-card border border-border group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to transform client experiences, unlock new opportunities, 
                  and turn potential into extraordinary success.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent text-white border-0 group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Expertise & Impact</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Solution-focused strategies to enhance productivity, optimize business outcomes, 
                  and elevate customer experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-white border-0 group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">15+ Years</h3>
                  <p className="text-white/90">Of Technical Excellence</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities Statement */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-center lg:text-left mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Capability Statement
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  Comprehensive technical capabilities backed by enterprise consulting expertise 
                  and proven delivery methodologies.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                  <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-card hover:bg-muted/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                        <p className="text-muted-foreground leading-relaxed text-sm">{capability}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center lg:text-left mt-12">
                <Button variant="default" size="lg" className="hover:scale-105  text-white  transition-transform duration-200">
                  Download Full Capability Statement
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-xl opacity-20 transform -rotate-3"></div>
              <img 
                src={cybersecurityImage} 
                alt="Advanced cybersecurity infrastructure"
                className="relative rounded-3xl shadow-elegant w-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Visual Impact */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Transforming Businesses Through Technology</h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center group">
                  <div className="text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-200">500+</div>
                  <div className="text-xl text-white/90">Projects Delivered</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-200">98%</div>
                  <div className="text-xl text-white/90">Client Satisfaction</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-200">15+</div>
                  <div className="text-xl text-white/90">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-200">24/7</div>
                  <div className="text-xl text-white/90">Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={digitalTransformationImage} 
                alt="Digital transformation visualization"
                className="rounded-3xl shadow-elegant w-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/30 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;