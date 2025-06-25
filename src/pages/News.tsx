
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, TrendingUp, Leaf, DollarSign } from 'lucide-react';

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
    }
  ]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Government': return <DollarSign className="h-4 w-4" />;
      case 'Weather': return <Calendar className="h-4 w-4" />;
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Agricultural News & Updates</h1>
          <p className="text-lg text-gray-600">Stay updated with the latest news in agriculture</p>
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
