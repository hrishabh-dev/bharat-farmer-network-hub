
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WeatherWidget from '@/components/WeatherWidget';
import QuickTools from '@/components/QuickTools';
import CropCalendar from '@/components/CropCalendar';
import CropRecommendation from '@/components/CropRecommendation';
import MarketPrices from '@/components/MarketPrices';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Calendar, CloudSun, BookOpen, Phone, MapPin } from 'lucide-react';

const Tools = () => {
  const quickLinks = [
    {
      title: "Agricultural Helpline",
      description: "24/7 support for farming queries",
      icon: <Phone className="h-6 w-6" />,
      action: "Call Now"
    },
    {
      title: "Nearest Market",
      description: "Find markets and current prices",
      icon: <MapPin className="h-6 w-6" />,
      action: "Find Markets"
    },
    {
      title: "Farming Guide",
      description: "Step-by-step farming instructions",
      icon: <BookOpen className="h-6 w-6" />,
      action: "Read Guide"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Farming Tools & Resources</h1>
          <p className="text-lg text-gray-600">Essential tools to help you make informed farming decisions</p>
        </div>

        {/* Main Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="space-y-6">
            <WeatherWidget />
            <QuickTools />
          </div>
          <div className="space-y-6">
            <CropRecommendation />
            <CropCalendar />
          </div>
        </div>

        {/* Market Prices Section */}
        <div className="mb-8">
          <MarketPrices />
        </div>

        {/* Quick Access Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{link.title}</h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    {link.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Tools;
