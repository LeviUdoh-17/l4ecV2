import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {LuMonitor, LuSettings, LuShield, LuSmartphone, LuUsers, LuTrendingUp, LuWrench, LuNetwork, LuHardDrive, LuShoppingCart, LuCloud, LuCode} from 'react-icons/lu'

const ServicesGrid = () => {
  const services = [
    {
      icon: LuMonitor,
      title: "Information Technology",
      description:
        "Comprehensive IT support tailored for businesses of all sizes, covering infrastructure monitoring, maintenance, management, and data protection.",
      features: [
        "Infrastructure Monitoring",
        "System Maintenance",
        "Data Protection",
        "Security Management",
      ],
    },
    {
      icon: LuSettings,
      title: "Program & Project Management",
      description:
        "Seamless execution of initiatives, aligning business goals with strategic planning, execution, and delivery using industry best practices.",
      features: [
        "Project Lifecycle Management",
        "Risk Mitigation",
        "Strategic Planning",
        "Timely Delivery",
      ],
    },
    {
      icon: LuShield,
      title: "Cyber Security",
      description:
        "Advanced cybersecurity solutions designed to detect, prevent, and mitigate cyber threats, ensuring continuous protection and compliance.",
      features: [
        "Threat Detection",
        "Compliance Management",
        "Risk Assessment",
        "Incident Response",
      ],
    },
    {
      icon: LuSmartphone,
      title: "Mobile App & Software Development",
      description:
        "Custom mobile app and software development, delivering innovative, scalable, and user-friendly solutions tailored to your business needs.",
      features: [
        "Custom Development",
        "Cross-Platform Apps",
        "Scalable Solutions",
        "User Experience Focus",
      ],
    },
    {
      icon: LuUsers,
      title: "Computer Training",
      description:
        "Computer software training, job skills development seminars, and technical training for businesses and individual users with flexible scheduling.",
      features: [
        "Software Training",
        "Skills Development",
        "On-site Training",
        "Off-site Training",
      ],
    },
    {
      icon: LuTrendingUp,
      title: "Strategy & Business Development",
      description:
        "Crafting winning strategies through identifying opportunities, optimizing operations, and leveraging market insights for sustainable growth.",
      features: [
        "Strategic Planning",
        "Market Analysis",
        "Operations Optimization",
        "Growth Strategies",
      ],
    },
    {
      icon: LuWrench,
      title: "Technical Analysis & Support",
      description:
        "Expert technical analysis to diagnose issues, optimize system performance, and maintain seamless operations with proactive maintenance.",
      features: [
        "System Diagnostics",
        "Performance Optimization",
        "Proactive Maintenance",
        "Technical Support",
      ],
    },
    {
      icon: LuNetwork,
      title: "Network Device Deployment & Management",
      description:
        "Deploying, configuring, and managing network devices to enhance connectivity, security, and efficiency with proactive monitoring.",
      features: [
        "Device Configuration",
        "Network Security",
        "Performance Monitoring",
        "Infrastructure Management",
      ],
    },
    {
      icon: LuHardDrive,
      title: "Computer Repair & Replacement",
      description:
        "Professional repair and replacement services addressing hardware and software issues to restore functionality and optimize performance.",
      features: [
        "Hardware Repair",
        "Software Troubleshooting",
        "Device Replacement",
        "Performance Optimization",
      ],
    },
    {
      icon: LuShoppingCart,
      title: "Computer & Device Procurement",
      description:
        "Strategic sourcing of high-quality computers and devices at competitive prices with tailored procurement strategies for your needs.",
      features: [
        "Strategic Sourcing",
        "Cost Optimization",
        "Quality Assurance",
        "Vendor Management",
      ],
    },
    {
      icon: LuCloud,
      title: "Digital Transformation",
      description:
        "Leveraging technology to modernize operations, enhance efficiency, and drive innovation through cloud adoption and process automation.",
      features: [
        "Cloud Migration",
        "Process Automation",
        "Legacy Modernization",
        "Digital Innovation",
      ],
    },
    {
      icon: LuCode,
      title: "Data & Application Migration",
      description:
        "Secure and efficient migration services facilitating smooth transitions between platforms while preserving data integrity and minimizing downtime.",
      features: [
        "Data Migration",
        "Platform Transitions",
        "Zero Downtime",
        "Integrity Assurance",
      ],
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Service Offerings
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering timely and detailed technology solutions for commercial
            and governmental sectors with proven expertise and industry best
            practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative group-hover:shadow-card transition-all duration-300 border-0 bg-card h-full hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:bg-gradient-accent">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 text-xs text-muted-foreground flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 group-hover:bg-accent transition-colors duration-200"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
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

export default ServicesGrid;
