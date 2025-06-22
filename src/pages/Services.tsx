
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Wheat, 
  Users, 
  Shield, 
  Lightbulb, 
  Smartphone,
  BarChart3,
  CloudRain,
  Bug,
  TrendingUp,
  CreditCard,
  ArrowRight,
  Leaf
} from 'lucide-react';

const Services = () => {
  const advisoryServices = [
    {
      icon: Wheat,
      title: 'Crop Management Guidance',
      description: 'Expert advice on seed selection, planting techniques, and crop rotation strategies'
    },
    {
      icon: Bug,
      title: 'Pest & Disease Control',
      description: 'Early detection and treatment recommendations for crop protection'
    },
    {
      icon: CloudRain,
      title: 'Weather Alerts & Forecasts',
      description: 'Real-time weather information and farming advisories based on conditions'
    }
  ];

  const marketServices = [
    {
      icon: Users,
      title: 'Direct Buyer Connections',
      description: 'Connect directly with buyers, eliminating middlemen and ensuring better prices'
    },
    {
      icon: TrendingUp,
      title: 'Fair Price Discovery',
      description: 'Real-time market prices and trends to help farmers make informed selling decisions'
    },
    {
      icon: BarChart3,
      title: 'Supply Chain Optimization',
      description: 'Streamlined logistics and storage solutions to reduce post-harvest losses'
    }
  ];

  const financialServices = [
    {
      icon: CreditCard,
      title: 'Micro-loans for Farming',
      description: 'Quick and accessible credit solutions tailored for agricultural needs'
    },
    {
      icon: Shield,
      title: 'Crop Insurance Options',
      description: 'Comprehensive insurance coverage to protect against crop losses and natural disasters'
    },
    {
      icon: Smartphone,
      title: 'Digital Payment Solutions',
      description: 'Secure and convenient digital payment systems for all transactions'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to support farmers at every stage of their agricultural journey.
          </p>
        </div>
      </section>

      {/* Advisory Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wheat className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advisory Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert agricultural guidance to help farmers make informed decisions and improve productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisoryServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Linkages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Market Linkages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connecting farmers directly to markets for better prices and reduced dependency on intermediaries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Access */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financial Access
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simplified financial solutions to support farming operations and provide security against risks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financialServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Innovation & Sustainability
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Promoting sustainable farming practices through innovative technologies and methodologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Organic Farming</h3>
              <p className="text-sm opacity-90">Guidance on transitioning to organic and sustainable farming methods</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Farming</h3>
              <p className="text-sm opacity-90">IoT sensors and precision agriculture technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Analytics</h3>
              <p className="text-sm opacity-90">Farm performance insights and predictive analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Platform Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Tech-Driven Approach
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Smartphone className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Platform</h3>
                    <p className="text-gray-600">User-friendly mobile app providing access to all services in multiple regional languages</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Analytics</h3>
                    <p className="text-gray-600">Advanced analytics providing insights for better decision-making and improved outcomes</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&h=400&fit=crop" 
                alt="Technology in farming" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already benefiting from our comprehensive agricultural services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link to="/for-farmers">
                Join as a Farmer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
