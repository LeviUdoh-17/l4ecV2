import React from "react";
import { Card, CardContent } from "../ui/card";
import { LuShield, LuCloud } from "react-icons/lu";
import appDevImage from "../../assets/app-development.jpg";
import networkImage from "../../assets/network-infrastructure.jpg";

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Cutting-Edge Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From custom software development to enterprise-grade
              cybersecurity, we deliver comprehensive technology services that
              drive innovation and growth.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative">
                <img
                  src={appDevImage}
                  alt="Mobile app development"
                  className="rounded-2xl shadow-card w-full hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="relative">
                <img
                  src={networkImage}
                  alt="Network infrastructure"
                  className="rounded-2xl shadow-card w-full hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <Card className="bg-gradient-primary text-white border-0 group hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <LuShield className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="text-2xl font-bold">Enterprise Security</h3>
                </div>
                <p className="text-white/90">
                  Advanced cybersecurity solutions with 24/7 monitoring and
                  compliance management.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-accent text-white border-0 group hover:shadow-card transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <LuCloud className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="text-2xl font-bold">Cloud Migration</h3>
                </div>
                <p className="text-white/90">
                  Seamless transition to cloud platforms with zero downtime and
                  enhanced performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
