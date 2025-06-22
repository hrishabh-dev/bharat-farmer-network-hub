
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Eye, 
  Users, 
  Handshake, 
  Lightbulb, 
  Leaf, 
  Heart,
  Trophy
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Farmer-Centric',
      description: 'Every decision is made with farmers\' best interests at heart'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging technology to solve agricultural challenges'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Promoting eco-friendly and sustainable farming practices'
    },
    {
      icon: Trophy,
      title: 'Empowerment',
      description: 'Building capacity and confidence in farming communities'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Kisan Mitra
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming Indian agriculture through innovation, technology, and unwavering commitment to farmer prosperity.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To create a comprehensive, integrated ecosystem that empowers every Indian farmer with the tools, 
                  knowledge, and opportunities needed to thrive in modern agriculture while preserving traditional wisdom.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Empowering Indian farmers with innovative, integrated services that bridge the gap between traditional 
                  farming and modern agricultural practices, ensuring sustainable growth and prosperity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced leadership with deep agricultural and technology expertise
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
            <Users className="h-16 w-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Experienced Leadership</h3>
            <p className="text-xl mb-6 opacity-90">
              Our team combines decades of agricultural expertise with cutting-edge technology knowledge, 
              ensuring we understand both the challenges farmers face and the solutions technology can provide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h4 className="font-semibold">Agricultural Experts</h4>
                <p className="text-sm opacity-90">Deep understanding of farming practices and challenges</p>
              </div>
              <div>
                <h4 className="font-semibold">Technology Leaders</h4>
                <p className="text-sm opacity-90">Innovation in digital solutions for agriculture</p>
              </div>
              <div>
                <h4 className="font-semibold">Community Builders</h4>
                <p className="text-sm opacity-90">Strong connections with farming communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Alliances */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Handshake className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Strategic Alliances</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                We believe in the power of collaboration. Our strategic partnerships with government agencies, 
                NGOs, and agricultural organizations help us extend our reach and impact across rural India.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Government Agricultural Departments</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Rural Development NGOs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Agricultural Research Institutions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Financial Service Providers</span>
                </li>
              </ul>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=600&h=400&fit=crop" 
                alt="Farmers working together" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Network */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Strong Farmer Network
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our strength lies in our deep connections with local farming communities. We work closely with 
            farmer groups, cooperatives, and individual farmers to understand their needs and deliver solutions that work.
          </p>
          
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-700">Active Farmers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-700">Villages Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-700">States Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
