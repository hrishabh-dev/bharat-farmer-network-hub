
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, TrendingUp, Leaf, DollarSign, Cloud, Truck } from 'lucide-react';

const News = () => {
  const [news] = useState([
    {
      id: 1,
      title: "New Government Subsidy Scheme for Organic Farming",
      content: "The government has announced a new subsidy scheme providing up to ₹50,000 per hectare for farmers transitioning to organic farming methods.",
      category: "Government",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Weather Alert: Heavy Rainfall Expected",
      content: "Meteorological department forecasts heavy rainfall in northern states. Farmers advised to take precautionary measures for standing crops.",
      category: "Weather",
      date: "2024-01-14",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Wheat Prices Rise by 15% in Major Markets",
      content: "Wheat prices have shown significant increase across major agricultural markets due to increased demand and reduced supply.",
      category: "Market",
      date: "2024-01-13",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "New Drought-Resistant Crop Varieties Released",
      content: "Agricultural research institutes have developed new varieties of rice and wheat that can withstand drought conditions better.",
      category: "Technology",
      date: "2024-01-12",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      title: "PM-KISAN Scheme: Direct Benefit Transfer to 11 Crore Farmers",
      content: "The government has transferred ₹2,000 crore directly to farmers' accounts under the PM-KISAN scheme, benefiting over 11 crore farmers across India.",
      category: "Government",
      date: "2024-01-11",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      title: "Monsoon Forecast: Above Normal Rainfall Expected",
      content: "India Meteorological Department predicts above-normal monsoon rainfall this year, bringing relief to farmers after last year's drought conditions.",
      category: "Weather",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=200&fit=crop"
    },
    {
      id: 7,
      title: "Rice Export Ban Lifted: Global Markets Respond Positively",
      content: "India has lifted the ban on rice exports, leading to positive response from global markets and increased income prospects for Indian farmers.",
      category: "Market",
      date: "2024-01-09",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=200&fit=crop"
    },
    {
      id: 8,
      title: "Digital Agriculture: AI-Powered Crop Monitoring System Launched",
      content: "Government launches AI-powered crop monitoring system to help farmers track crop health, predict diseases, and optimize irrigation schedules.",
      category: "Technology",
      date: "2024-01-08",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop"
    },
    {
      id: 9,
      title: "Sugarcane Farmers Get Higher MSP: ₹315 per quintal",
      content: "Government announces increased Minimum Support Price for sugarcane at ₹315 per quintal, providing better income security to sugarcane farmers.",
      category: "Government",
      date: "2024-01-07",
      image: "https://images.unsplash.com/photo-1569150429703-2ddb2c85e04e?w=400&h=200&fit=crop"
    },
    {
      id: 10,
      title: "Cold Wave Warning: Protect Your Rabi Crops",
      content: "Severe cold wave conditions expected in northern plains. Farmers advised to protect wheat, mustard, and other rabi crops with appropriate measures.",
      category: "Weather",
      date: "2024-01-06",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=200&fit=crop"
    },
    {
      id: 11,
      title: "Organic Farming Expo 2024: Record Participation",
      content: "National Organic Farming Expo witnesses record participation with over 500 exhibitors showcasing latest organic farming techniques and products.",
      category: "Technology",
      date: "2024-01-05",
      image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=200&fit=crop"
    },
    {
      id: 12,
      title: "Farm Mechanization: Subsidy on Tractors and Equipment",
      content: "Government announces 50% subsidy on purchase of tractors and farming equipment to promote mechanization in agriculture sector.",
      category: "Government",
      date: "2024-01-04",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=200&fit=crop"
    },
    {
      id: 13,
      title: "Cotton Prices Surge: Farmers Benefit from Global Demand",
      content: "International cotton prices hit 5-year high, benefiting Indian cotton farmers with better returns on their produce.",
      category: "Market",
      date: "2024-01-03",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop"
    },
    {
      id: 14,
      title: "Soil Health Cards: 90% Coverage Achieved Nationwide",
      content: "Soil Health Card scheme achieves 90% coverage across India, helping farmers understand soil nutrients and apply fertilizers efficiently.",
      category: "Technology",
      date: "2024-01-02",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop"
    },
    {
      id: 15,
      title: "Dairy Sector Boom: Milk Production Increases by 8%",
      content: "India's milk production increases by 8% year-on-year, strengthening the country's position as the world's largest milk producer.",
      category: "Market",
      date: "2024-01-01",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=200&fit=crop"
    },
    {
      id: 16,
      title: "Kisan Credit Card: Digital Processing for Faster Approvals",
      content: "Banks implement digital processing for Kisan Credit Cards, reducing approval time from 15 days to 3 days for farmers.",
      category: "Technology",
      date: "2023-12-31",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=200&fit=crop"
    }
  ]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Government': return <DollarSign className="h-4 w-4" />;
      case 'Weather': return <Cloud className="h-4 w-4" />;
      case 'Market': return <TrendingUp className="h-4 w-4" />;
      case 'Technology': return <Leaf className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Government': return 'bg-blue-100 text-blue-800';
      case 'Weather': return 'bg-orange-100 text-orange-800';
      case 'Market': return 'bg-green-100 text-green-800';
      case 'Technology': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Agricultural News & Updates from India</h1>
          <p className="text-lg text-gray-600">Stay updated with the latest news in Indian agriculture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className={`absolute top-3 left-3 ${getCategoryColor(article.category)}`}>
                  <div className="flex items-center gap-1">
                    {getCategoryIcon(article.category)}
                    {article.category}
                  </div>
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{article.title}</CardTitle>
                <p className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString()}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{article.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
