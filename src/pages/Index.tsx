import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Wheat, 
  TrendingUp, 
  Users, 
  Shield, 
  Lightbulb, 
  CloudRain, 
  DollarSign, 
  BookOpen,
  ArrowRight,
  CheckCircle,
  Calculator
} from 'lucide-react';

const Index = () => {
  const challenges = [
    {
      icon: CloudRain,
      title: 'Climate Volatility',
      description: 'Unpredictable weather impacting crop yields'
    },
    {
      icon: DollarSign,
      title: 'Market Access',
      description: 'Struggles to get fair prices for produce'
    },
    {
      icon: Shield,
      title: 'Financial Strain',
      description: 'Limited credit access and debt concerns'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Gap',
      description: 'Lack of modern farming techniques'
    }
  ];

  const services = [
    {
      icon: Wheat,
      title: 'Agronomy',
      description: 'Expert advice on crop health and management'
    },
    {
      icon: Users,
      title: 'Market Linkage',
      description: 'Direct access to buyers and fair pricing'
    },
    {
      icon: Shield,
      title: 'Financial Inclusion',
      description: 'Simplified credit and insurance solutions'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Promoting sustainable farming practices'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Kisan Mitra: 
                  <span className="text-green-600"> Revolutionizing</span> 
                  <br />Farmer Support in 
                  <span className="text-orange-500"> Bharat</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Empowering Indian farmers with innovative, integrated services to create a sustainable and prosperous agricultural ecosystem.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                  <Link to="/services">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/for-farmers">For Farmers</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop" 
                alt="Happy farmers in field" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Creating a Holistic Support System
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Kisan Mitra aims to create a comprehensive support ecosystem, connecting farmers to vital resources, 
            information, and opportunities that drive sustainable agricultural growth across India.
          </p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Addressing the Farmer's Challenges
            </h2>
            <p className="text-xl text-gray-600">
              Understanding and solving the core issues facing Indian agriculture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <challenge.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link to="/services">
                How We Help
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Integrated Ecosystem
            </h2>
            <p className="text-xl text-gray-600">
              Four pillars supporting comprehensive farmer empowerment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential Farming Tools
            </h2>
            <p className="text-xl text-gray-600">
              Smart tools and resources to boost your farming success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calculator className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Farming Tools & Calculators
                </h3>
                <p className="text-gray-600 mb-6">
                  Calculate field area, seed requirements, irrigation needs, and profit estimates with our smart tools.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/tools">
                    Explore Tools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Latest Agricultural News
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with government schemes, weather alerts, market prices, and farming innovations.
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700" asChild>
                  <Link to="/news">
                    Read News
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact Snapshot
            </h2>
            <p className="text-xl opacity-90">
              Transforming lives through sustainable agricultural solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Increased Yields</h3>
              <p className="opacity-90">Improved productivity and crop quality for thousands of farmers</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <DollarSign className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Higher Incomes</h3>
              <p className="opacity-90">Better financial stability and livelihood security</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-2">10X Impact Potential</h3>
              <p className="opacity-90">Significant social and economic upliftment across rural India</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/impact">
                See Our Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Agricultural Revolution
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Whether you're a farmer, partner, or investor, there's a place for you in our mission to transform Indian agriculture.
          </p>
          
          <div className="flex justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link to="/for-farmers">I'm a Farmer</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
