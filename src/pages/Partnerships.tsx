
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Building, 
  Users, 
  Target,
  CheckCircle2,
  Globe,
  TrendingUp,
  Heart,
  ArrowRight
} from 'lucide-react';

const Partnerships = () => {
  const partnerTypes = [
    {
      icon: Building,
      title: 'Government Agencies',
      description: 'Collaborate with agricultural departments and rural development ministries',
      benefits: ['Policy alignment', 'Wide reach', 'Subsidized programs', 'Regulatory support']
    },
    {
      icon: Heart,
      title: 'NGOs & Non-Profits',
      description: 'Work with organizations focused on rural development and farmer welfare',
      benefits: ['Community trust', 'Local knowledge', 'Sustainable impact', 'CSR alignment']
    },
    {
      icon: Globe,
      title: 'Agri-Businesses',
      description: 'Partner with companies across the agricultural value chain',
      benefits: ['Market access', 'Technology sharing', 'Resource pooling', 'Innovation']
    },
    {
      icon: Users,
      title: 'Financial Institutions',
      description: 'Collaborate with banks, microfinance institutions, and fintech companies',
      benefits: ['Credit access', 'Insurance products', 'Digital payments', 'Financial inclusion']
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Shared Mission Impact',
      description: 'Amplify your organization\'s impact on rural development and farmer welfare through our proven platform.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Leverage our technology and network to scale your agricultural initiatives across multiple states.'
    },
    {
      icon: Users,
      title: 'Direct Farmer Access',
      description: 'Connect directly with thousands of verified farmers through our established network and trust.'
    },
    {
      icon: CheckCircle2,
      title: 'Proven Track Record',
      description: 'Partner with a platform that has already demonstrated measurable impact and farmer satisfaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Partnership Opportunities
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join us in transforming Indian agriculture. Together, we can create sustainable impact 
                and empower millions of farmers across the country.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore Partnership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=600&h=400&fit=crop" 
                alt="Partnership collaboration" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Partner With
            </h2>
            <p className="text-xl text-gray-600">
              We welcome partnerships across the agricultural ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <partner.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {partner.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {partner.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {partner.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Partnering with Kisan Mitra
            </h2>
            <p className="text-xl text-gray-600">
              Why organizations choose to collaborate with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real examples of successful collaborations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Government of Maharashtra</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Collaborated to implement digital agriculture initiatives across 500 villages, 
                  reaching 25,000 farmers with weather alerts and market information.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-700 font-semibold text-sm">
                    Result: 35% increase in farmer income, 40% reduction in crop losses
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-6 w-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Rural Development Trust</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Partnered to provide financial literacy and microfinance access to women farmers 
                  in tribal areas of Jharkhand and Odisha.
                </p>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-red-700 font-semibold text-sm">
                    Result: 2,000 women farmers empowered, ₹50 lakhs in microloans disbursed
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Start a Partnership
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your organization and how we can collaborate
            </p>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Name *
                    </label>
                    <Input placeholder="Your organization name" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Type *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select type</option>
                      <option>Government Agency</option>
                      <option>NGO/Non-Profit</option>
                      <option>Agri-Business</option>
                      <option>Financial Institution</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person *
                    </label>
                    <Input placeholder="Your full name" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input placeholder="+91 98765 43210" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location/State *
                    </label>
                    <Input placeholder="State or region" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Partnership Interest *
                  </label>
                  <Textarea 
                    placeholder="Describe your partnership goals, target farmers, geographic focus, and how you'd like to collaborate with Kisan Mitra..."
                    rows={4}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Size/Reach
                  </label>
                  <Input placeholder="Number of beneficiaries, budget size, or other relevant metrics" />
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Handshake className="mr-2 h-5 w-5" />
                    Submit Partnership Inquiry
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make an Impact Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can collaborate to transform Indian agriculture and empower farmers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a Meeting
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnerships;
