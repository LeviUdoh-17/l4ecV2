import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-hero">
        <Navbar/>
      <div className="container py-20  mx-auto px-4">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your technology goals 
            and drive your business forward.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@company.com" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                />
              </div>
              
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Company
                </label>
                <Input 
                  placeholder="Your Company Name" 
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                />
              </div>
              
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                />
              </div>
              
              <Button variant="outline" size="lg" className="w-full bg-transparent border-blue-400 text-blue-400 cursor-pointer">
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <LuMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-white/80">info.l4ecllc@l4ecllc.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <LuPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <div className="space-y-1">
                      <p className="text-white/80">469-714-4477</p>
                      <p className="text-white/80">301-655-7662</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <LuMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-white/80">Aubrey, TX 76227</p>
                    <p className="text-white/80 text-sm mt-1">Available for remote and on-site consultations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;