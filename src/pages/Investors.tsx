
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Zap,
  Target,
  BarChart3,
  DollarSign,
  Award,
  ArrowRight,
  Mail
} from 'lucide-react';

const Investors = () => {
  const opportunities = [
    {
      icon: Globe,
      title: 'Massive Market',
      value: '1.5B',
      description: 'Serving a vast agricultural community across India with untapped potential'
    },
    {
      icon: TrendingUp,
      title: 'Projected Growth',
      value: '20%',
      description: 'Annual user base increase with expanding service portfolio and geographic reach'
    },
    {
      icon: Users,
      title: 'Current Impact',
      value: '5,000+',
      description: 'Active farmers already benefiting from our integrated platform'
    },
    {
      icon: Award,
      title: 'Market Leadership',
      value: '10X',
      description: 'Impact potential with scalable, proven solutions for agricultural challenges'
    }
  ];

  const usps = [
    {
      icon: Zap,
      title: 'Innovative Technology',
      description: 'Cutting-edge digital solutions addressing real agricultural problems with proven results'
    },
    {
      icon: Globe,
      title: 'Massive Market Opportunity',
      description: 'Serving India\'s $400B+ agricultural market with significant untapped potential'
    },
    {
      icon: Target,
      title: 'Social Impact Focus',
      description: 'Empowering millions of farmers while generating sustainable returns for investors'
    },
    {
      icon: BarChart3,
      title: 'Scalable Business Model',
      description: 'Proven model ready for rapid expansion across India and other emerging markets'
    }
  ];

  const financials = [
    {
      metric: 'Revenue Growth',
      value: '300%',
      period: 'Year-over-Year',
      description: 'Consistent growth across all service verticals'
    },
    {
      metric: 'Farmer Retention',
      value: '85%',
      period: 'Annual',
      description: 'High customer satisfaction and repeat usage'
    },
    {
      metric: 'Market Expansion',
      value: '15',
      period: 'States',
      description: 'Rapid geographic expansion with local partnerships'
    },
    {
      metric: 'Service Portfolio',
      value: '4',
      period: 'Core Verticals',
      description: 'Integrated platform reducing customer acquisition costs'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Investment Opportunity
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Kisan Mitra offers a unique investment opportunity to transform Indian agriculture 
                while generating sustainable returns through our proven, scalable platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Request Investment Deck
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Meeting
                </Button>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=600&h=400&fit=crop" 
                alt="Agricultural investment opportunity" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Market Opportunity
            </h2>
            <p className="text-xl text-gray-600">
              Compelling numbers that demonstrate the scale and potential of our market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <opportunity.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {opportunity.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {opportunity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Invest in Kisan Mitra?
            </h2>
            <p className="text-xl text-gray-600">
              Our unique value propositions that set us apart in the agricultural technology space
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {usps.map((usp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <usp.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {usp.title}
                      </h3>
                      <p className="text-gray-600">
                        {usp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Performance Metrics
            </h2>
            <p className="text-xl text-gray-600">
              Strong fundamentals demonstrating sustainable growth and market traction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financials.map((financial, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {financial.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {financial.metric}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {financial.period}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {financial.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us in Transforming Rural India
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Partner with us to create lasting impact while building a sustainable, 
              high-growth business in one of the world's largest agricultural markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Strong Returns</h3>
              <p className="opacity-90">Sustainable revenue model with multiple monetization streams</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Social Impact</h3>
              <p className="opacity-90">Direct positive impact on millions of farming families across India</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scalable Platform</h3>
              <p className="opacity-90">Technology-driven approach enabling rapid expansion and growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Inquiry */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Inquiry
            </h2>
            <p className="text-xl text-gray-600">
              Interested in learning more? Get in touch with our investor relations team.
            </p>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input placeholder="Your full name" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization/Fund *
                    </label>
                    <Input placeholder="Investment firm or organization" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input placeholder="+91 98765 43210" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Interest *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Select investment type</option>
                    <option>Seed Funding</option>
                    <option>Series A</option>
                    <option>Series B</option>
                    <option>Strategic Investment</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Range (Optional)
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Select range</option>
                    <option>₹1-5 Crores</option>
                    <option>₹5-10 Crores</option>
                    <option>₹10-25 Crores</option>
                    <option>₹25+ Crores</option>
                    <option>Prefer not to disclose</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your investment focus, timeline, and any specific questions you have about Kisan Mitra..."
                    rows={4}
                  />
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Mail className="mr-2 h-5 w-5" />
                    Submit Investment Inquiry
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Discuss Investment?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our investor relations team is ready to provide detailed information and answer your questions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Mail className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">investors@kisanmitra.in</p>
            </div>
            
            <div className="text-center">
              <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Investment Deck</h3>
              <p className="text-gray-600">Request detailed presentation</p>
            </div>
            
            <div className="text-center">
              <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Due Diligence</h3>
              <p className="text-gray-600">Financial & operational data</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Request Investment Deck
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;
