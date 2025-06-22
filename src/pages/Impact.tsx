
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Wheat,
  Target,
  Award,
  MapPin,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const Impact = () => {
  const metrics = [
    {
      icon: Users,
      value: '5,000+',
      label: 'Farmers Empowered',
      description: 'Active farmers using our platform across India'
    },
    {
      icon: MapPin,
      value: '150+',
      label: 'Villages Covered',
      description: 'Rural communities benefiting from our services'
    },
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Yield Increase',
      description: 'Average improvement in crop productivity'
    },
    {
      icon: DollarSign,
      value: '60%',
      label: 'Income Growth',
      description: 'Average increase in farmer income'
    },
    {
      icon: Wheat,
      value: '25,000+',
      label: 'Tons Produced',
      description: 'Additional crop production achieved'
    },
    {
      icon: Award,
      value: '95%',
      label: 'Satisfaction Rate',
      description: 'Farmers satisfied with our services'
    }
  ];

  const outcomes = [
    {
      title: 'Increased Agricultural Productivity',
      description: 'Our advisory services and modern farming techniques have helped farmers achieve significantly higher yields.',
      impact: '40% average increase in crop productivity'
    },
    {
      title: 'Enhanced Financial Stability',
      description: 'Better market access and financial services have improved the economic condition of farming families.',
      impact: '60% increase in average farmer income'
    },
    {
      title: 'Reduced Post-Harvest Losses',
      description: 'Improved storage and supply chain solutions have minimized crop wastage.',
      impact: '30% reduction in post-harvest losses'
    },
    {
      title: 'Technology Adoption',
      description: 'Digital literacy and modern farming practices have transformed traditional agriculture.',
      impact: '80% of farmers now use digital solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Impact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming lives and communities through sustainable agricultural solutions across rural India.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impact by Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Measurable outcomes that demonstrate real change in farmers' lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Outcomes
            </h2>
            <p className="text-xl text-gray-600">
              Specific improvements in farming practices and livelihoods
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {outcome.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {outcome.description}
                      </p>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-green-700 font-semibold text-sm">
                          {outcome.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Potential */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              10X Impact Potential
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Significant social and economic upliftment with scalable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scalable Model</h3>
              <p className="opacity-90">Our proven approach can be replicated across all agricultural regions of India</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Massive Reach</h3>
              <p className="opacity-90">Potential to impact millions of farmers across India's vast agricultural landscape</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Growth</h3>
              <p className="opacity-90">Long-term positive impact on rural economy and food security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Farmer Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from farmers whose lives have been transformed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=300&h=300&fit=crop&crop=face" 
                    alt="Farmer portrait" 
                    className="w-16 h-16 rounded-full object-cover mx-auto"
                  />
                </div>
                <blockquote className="text-gray-600 mb-4 italic">
                  "Kisan Mitra helped me increase my wheat yield by 45%. The weather alerts and expert advice saved my crop during the monsoon."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                  <div className="text-sm text-gray-500">Wheat Farmer, Punjab</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=300&h=300&fit=crop&crop=face" 
                    alt="Farmer portrait" 
                    className="w-16 h-16 rounded-full object-cover mx-auto"
                  />
                </div>
                <blockquote className="text-gray-600 mb-4 italic">
                  "The market linkage service helped me sell directly to buyers. I now earn 30% more for the same produce."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-gray-500">Vegetable Farmer, Maharashtra</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1501286353178-1ec881214838?w=300&h=300&fit=crop&crop=face" 
                    alt="Farmer portrait" 
                    className="w-16 h-16 rounded-full object-cover mx-auto"
                  />
                </div>
                <blockquote className="text-gray-600 mb-4 italic">
                  "The micro-loan facility helped me invest in better seeds and equipment. My income has doubled in two years."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Manoj Patel</div>
                  <div className="text-sm text-gray-500">Cotton Farmer, Gujarat</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
