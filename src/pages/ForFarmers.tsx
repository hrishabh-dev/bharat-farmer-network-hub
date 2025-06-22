
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Phone, 
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  Users,
  Calendar,
  Bell,
  ArrowRight
} from 'lucide-react';

const ForFarmers = () => {
  const benefits = [
    {
      icon: CheckCircle2,
      title: 'Expert Agricultural Guidance',
      description: 'Get personalized advice from agricultural experts on crop management, pest control, and best practices.'
    },
    {
      icon: CheckCircle2,
      title: 'Direct Market Access',
      description: 'Connect directly with buyers and get fair prices for your produce without middlemen.'
    },
    {
      icon: CheckCircle2,
      title: 'Financial Support',
      description: 'Access micro-loans, crop insurance, and digital payment solutions tailored for farmers.'
    },
    {
      icon: CheckCircle2,
      title: 'Weather & Climate Alerts',
      description: 'Receive timely weather updates and farming advisories to protect your crops.'
    },
    {
      icon: CheckCircle2,
      title: 'Community Support',
      description: 'Connect with fellow farmers, share experiences, and learn from each other.'
    },
    {
      icon: CheckCircle2,
      title: 'Technology Training',
      description: 'Learn to use modern farming technologies and digital tools to improve productivity.'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Visit Our Website',
      description: 'Access all our services directly through our web platform - no app needed!',
      icon: Globe
    },
    {
      number: '2',
      title: 'Create Your Profile',
      description: 'Set up your farmer profile with details about your farm, crops, and location.',
      icon: Users
    },
    {
      number: '3',
      title: 'Start Using Services',
      description: 'Access advisory services, market linkages, and financial solutions immediately.',
      icon: Calendar
    },
    {
      number: '4',
      title: 'Get Notifications',
      description: 'Receive personalized alerts about weather, market prices, and farming tips.',
      icon: Bell
    }
  ];

  const faqs = [
    {
      question: 'Is Kisan Mitra free to use?',
      answer: 'Yes, basic services are free. Some premium features like detailed market analysis may have minimal charges.'
    },
    {
      question: 'Do I need to download an app?',
      answer: 'No! Our complete platform is available through your web browser. Just visit our website on any device.'
    },
    {
      question: 'What languages is the platform available in?',
      answer: 'Our platform supports Hindi, English, and major regional languages including Punjabi, Marathi, Gujarati, and Tamil.'
    },
    {
      question: 'How do I get weather alerts for my area?',
      answer: 'Once you register and provide your location, you automatically receive weather alerts and farming advisories.'
    },
    {
      question: 'Can I sell my produce through Kisan Mitra?',
      answer: 'Yes, our market linkage service connects you directly with verified buyers for better prices.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome, Farmers!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of farmers across India who are increasing their yields, income, and knowledge with Kisan Mitra's integrated agricultural services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                  <Link to="/services">
                    <Globe className="mr-2 h-5 w-5" />
                    Access Our Platform
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </Link>
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=600&h=400&fit=crop" 
                alt="Happy farmers" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You Get with Kisan Mitra
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support designed specifically for Indian farmers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <benefit.icon className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Join Kisan Mitra
            </h2>
            <p className="text-xl text-gray-600">
              Getting started is simple and takes just a few minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link to="/services">
                <Globe className="mr-2 h-5 w-5" />
                Start Your Journey Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Web Platform Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kisan Mitra Web Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our comprehensive web platform puts all agricultural services at your fingertips. 
                Access from any device with internet - no downloads required!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Real-time weather updates and alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Expert agricultural advice via chat/call</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Market prices and buyer connections</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Financial services and loan applications</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                  <Link to="/services">
                    <Globe className="mr-2 h-5 w-5" />
                    Access Web Platform
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-900 rounded-3xl p-8 inline-block">
                <Globe className="h-32 w-32 text-green-400 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from farmers about our services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Getting Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our support team is here to help you every step of the way. We speak your language and understand your needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm opacity-90">+91 8874443283</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <MessageCircle className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm opacity-90">+91 8874443283</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Local Support</h3>
              <p className="text-sm opacity-90">Field officers in your area</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Get Support Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForFarmers;
