import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { GraduationCap, Building, CheckCircle, Users, Shield, Network } from "lucide-react";
import higherEdImage from "../assets/higher-education.jpg";
import governmentImage from "../assets/government.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Sectors = () => {
  const higherEdOfferings = [
    "Digital Transformation – Modernization roadmaps and hybrid learning infrastructure",
    "Infrastructure Assessment – Campus-wide network and systems evaluation",
    "Cybersecurity & Compliance – NIST alignment, FERPA, HIPAA, and GDPR consulting",
    "Strategic Procurement – Cooperative purchasing (DIR, TIPS, etc.)",
    "Staff Development & Training – Leadership coaching, LMS integration, and tech workshops"
  ];

  const higherEdBenefits = [
    "Decades of enterprise consulting scaled for campus needs",
    "Balanced focus on academic and operational performance", 
    "Proven success with multi-campus systems and shared services"
  ];

  const govOfferings = [
    "Cybersecurity Risk Assessments – Vulnerability analysis, incident response planning, SOC audits",
    "IT Modernization – Legacy system transformation and data migration to secure cloud platforms",
    "Public Sector Staff Training – Digital literacy, compliance, and operational resilience",
    "Continuity of Operations (COOP) – Disaster recovery planning and system resilience design"
  ];

  const govBenefits = [
    "Big 4-trained leadership familiar with federal and state procurement",
    "Extensive experience with FEMA, DOE, and local municipalities",
    "Compliance-aligned methodologies and documentation readiness"
  ];

  return (
    <div className="min-h-screen w-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white">
        <Navbar/>
        <div className="container py-20 mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Sectors <span className="text-accent">We Serve</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Specialized technology solutions tailored for Higher Education and Government sectors, 
              understanding their unique challenges and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Higher Education Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group hover:scale-110 transition-transform duration-200">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-foreground">Higher Education</h2>
                  <p className="text-muted-foreground">Colleges & Universities</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                L4 Enterprise Consulting LLC partners with colleges and universities to streamline operations, 
                modernize campus infrastructure, and safeguard digital environments. Whether you're a community 
                college or a four-year institution, we help bridge the gap between IT strategy and institutional mission.
              </p>

              <Card className="bg-muted/30 border-0 group hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-200" />
                    Why Universities Choose Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {higherEdBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-20 transform rotate-2"></div>
              <img 
                src={higherEdImage} 
                alt="University campus with modern technology"
                className="relative rounded-3xl shadow-elegant w-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Key Offerings for Higher Education</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {higherEdOfferings.map((offering, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-card hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                      <p className="text-muted-foreground leading-relaxed">{offering}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government Agencies Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative lg:order-2">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-xl opacity-20 transform -rotate-2"></div>
              <img 
                src={governmentImage} 
                alt="Government building with digital transformation"
                className="relative rounded-3xl shadow-elegant w-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl"></div>
            </div>
            
            <div className="space-y-8 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group hover:scale-110 transition-transform duration-200">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-foreground">Government Agencies</h2>
                  <p className="text-muted-foreground">Local & State Government</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                L4 Enterprise Consulting LLC delivers IT strategy, cybersecurity, procurement, and project management 
                services to local and state government agencies. We understand the public sector's unique demands: 
                tight timelines, funding constraints, and the need for secure, scalable systems.
              </p>
              
              <Card className="bg-card border border-border group hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                    <Shield className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-200" />
                    Why Government Agencies Trust Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {govBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Key Offerings for Government Agencies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {govOfferings.map((offering, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-card hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200"></div>
                      <p className="text-muted-foreground leading-relaxed">{offering}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/6 w-24 h-24 bg-accent/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
              <Network className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Compliance & Standards Excellence</h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Our sector-specific expertise ensures compliance with industry standards including NIST, FERPA, 
              HIPAA, GDPR, and federal procurement requirements. We deliver solutions that meet regulatory 
              demands while driving operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="hover:scale-105 transition-transform duration-200">
                Discuss Your Sector Needs
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-200">
                Download Sector Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default Sectors;