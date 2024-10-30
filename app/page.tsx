import { Card } from "@/components/ui/card";
import { Brain, Cloud, Cog, Code2, Cpu, Database, MessageSquare } from "lucide-react";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const services = [
    {
      icon: <Cloud className="h-12 w-12 text-[#1c7293]" />,
      title: "Infrastructure Solutions",
      description: "Scalable cloud architecture and deployment strategies for enterprise applications"
    },
    {
      icon: <Brain className="h-12 w-12 text-[#1c7293]" />,
      title: "AI Integration",
      description: "Seamless integration of ChatGPT, Anthropic, and Gemini AI into existing systems"
    },
    {
      icon: <Cog className="h-12 w-12 text-[#1c7293]" />,
      title: "Process Automation",
      description: "Custom automation solutions using Python and advanced technologies"
    }
  ];

  const techStack = [
    { icon: <Code2 />, name: "Next.js" },
    { icon: <Cpu />, name: "Node.js" },
    { icon: <Database />, name: "Python" },
    { icon: <MessageSquare />, name: "AI Integration" }
  ];

  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#21295c] mb-4">Our Services</h2>
            <p className="text-gray-600">Comprehensive solutions for your technical needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#21295c]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-[#065a82] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Tech Stack</h2>
            <p className="text-gray-200">Powered by cutting-edge technologies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4 text-4xl">{tech.icon}</div>
                <span className="text-lg font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#21295c] mb-4">Featured Projects</h2>
            <p className="text-gray-600">Success stories from our portfolio</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
                alt="AI Integration Project"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#21295c]">AI-Powered Analytics Platform</h3>
                <p className="text-gray-600">Enterprise-scale data analytics with AI integration</p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3"
                alt="Cloud Infrastructure Project"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#21295c]">Cloud Migration Success</h3>
                <p className="text-gray-600">Seamless transition to cloud infrastructure</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1b3b6f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-200">Let's discuss how we can help transform your business</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#21295c] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TechForge Solutions</h3>
              <p className="text-gray-300">Transforming businesses through technology</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-300">info@techforge.com</p>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2024 TechForge Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}