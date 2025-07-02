
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, DollarSign, Wheat, Apple, Beef } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const MarketPrices = () => {
  const [activeTab, setActiveTab] = useState('crops');

  const cropData = [
    {
      name: 'Wheat',
      avgPrice: 2526,
      priceRange: '₹825 - ₹6,520',
      msp: 2425,
      delhiRate: 3000,
      trend: 'up',
      trendPercent: 24,
      description: 'Delhi Mandi Rate ~24% above MSP'
    },
    {
      name: 'Rice (Common Paddy)',
      avgPrice: 2369,
      priceRange: 'MSP Rate',
      msp: 2369,
      delhiRate: 2369,
      trend: 'up',
      trendPercent: 3,
      description: 'Record 146.1 million tons production in 2025'
    },
    {
      name: 'Maize (Corn)',
      avgPrice: 2100,
      priceRange: 'Market Rate',
      msp: 2100,
      delhiRate: 2200,
      trend: 'up',
      trendPercent: 7.8,
      description: '12.26% YoY production increase expected'
    },
    {
      name: 'Soybean',
      avgPrice: 4500,
      priceRange: 'Under Pressure',
      msp: 4300,
      delhiRate: 4500,
      trend: 'down',
      trendPercent: -5,
      description: 'Declining acreage in Madhya Pradesh'
    }
  ];

  const vegetableData = [
    { name: 'Potatoes', price: 45, change: 35, trend: 'up' },
    { name: 'Tomatoes', price: 80, change: 40, trend: 'up' },
    { name: 'Onions', price: 60, change: 30, trend: 'up' },
    { name: 'Cauliflower', price: 50, change: 35, trend: 'up' },
    { name: 'Green Chilies', price: 120, change: 40, trend: 'up' }
  ];

  const fruitData = [
    { name: 'Mangoes (Badami)', price: 40, change: -60, trend: 'down' },
    { name: 'Jackfruit', price: 25, change: -45, trend: 'down' },
    { name: 'Indian Black Plum', price: 35, change: -50, trend: 'down' },
    { name: 'Pomegranates', price: 80, change: -40, trend: 'down' }
  ];

  const livestockData = [
    {
      name: 'Live Cattle',
      priceRange: '₹39.52 - ₹63.24',
      unit: 'per kg',
      location: 'Delhi & Mumbai',
      trend: 'stable',
      description: 'Wholesale prices in major markets'
    },
    {
      name: 'Beef (Carabeef)',
      priceRange: '₹180 - ₹220',
      unit: 'per kg',
      location: 'Wholesale',
      trend: 'up',
      description: 'Rising but lower than pork, mutton, fish'
    }
  ];

  const priceChartData = [
    { month: 'Jan', wheat: 2400, rice: 2300, maize: 2000 },
    { month: 'Feb', wheat: 2450, rice: 2320, maize: 2050 },
    { month: 'Mar', wheat: 2480, rice: 2340, maize: 2080 },
    { month: 'Apr', wheat: 2500, rice: 2360, maize: 2100 },
    { month: 'May', wheat: 2526, rice: 2369, maize: 2120 }
  ];

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? (
      <TrendingUp className="h-4 w-4 text-green-600" />
    ) : trend === 'down' ? (
      <TrendingDown className="h-4 w-4 text-red-600" />
    ) : (
      <DollarSign className="h-4 w-4 text-gray-600" />
    );
  };

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600';
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Market Prices & Trends
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="crops">Crops</TabsTrigger>
            <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
            <TabsTrigger value="fruits">Fruits</TabsTrigger>
            <TabsTrigger value="livestock">Livestock</TabsTrigger>
          </TabsList>

          <TabsContent value="crops" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cropData.map((crop) => (
                <Card key={crop.name}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Wheat className="h-4 w-4" />
                        {crop.name}
                      </CardTitle>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(crop.trend)}
                        <span className={`text-sm font-medium ${getTrendColor(crop.trend)}`}>
                          {crop.trend === 'up' ? '+' : ''}{crop.trendPercent}%
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Avg Price:</span>
                        <span className="font-semibold">₹{crop.avgPrice.toLocaleString()}/quintal</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Range:</span>
                        <span className="text-sm">{crop.priceRange}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">MSP:</span>
                        <span className="text-sm">₹{crop.msp.toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">{crop.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Price Trends (Last 5 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={priceChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="wheat" stroke="#8884d8" strokeWidth={2} name="Wheat" />
                    <Line type="monotone" dataKey="rice" stroke="#82ca9d" strokeWidth={2} name="Rice" />
                    <Line type="monotone" dataKey="maize" stroke="#ffc658" strokeWidth={2} name="Maize" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vegetables" className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Price Alert</h3>
              <p className="text-yellow-700 text-sm">
                Vegetable prices have surged 30-40% in Prayagraj due to heavy monsoon rains damaging crops and disrupting supply chains.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vegetableData.map((vegetable) => (
                <Card key={vegetable.name}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{vegetable.name}</h3>
                      <Badge variant={vegetable.trend === 'up' ? 'destructive' : 'default'}>
                        {getTrendIcon(vegetable.trend)}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">₹{vegetable.price}/kg</span>
                      <span className={`text-sm font-medium ${getTrendColor(vegetable.trend)}`}>
                        +{vegetable.change}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fruits" className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-red-800 mb-2">Price Crash Alert</h3>
              <p className="text-red-700 text-sm">
                Significant drop in fruit prices due to excessive supply and reduced quality from early rains.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fruitData.map((fruit) => (
                <Card key={fruit.name}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Apple className="h-4 w-4" />
                        {fruit.name}
                      </h3>
                      <Badge variant="secondary">
                        {getTrendIcon(fruit.trend)}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">₹{fruit.price}/kg</span>
                      <span className={`text-sm font-medium ${getTrendColor(fruit.trend)}`}>
                        {fruit.change}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="livestock" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {livestockData.map((livestock) => (
                <Card key={livestock.name}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Beef className="h-4 w-4" />
                      {livestock.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Price Range:</span>
                        <span className="font-semibold">{livestock.priceRange}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Unit:</span>
                        <span className="text-sm">{livestock.unit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Location:</span>
                        <span className="text-sm">{livestock.location}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Trend:</span>
                        <div className="flex items-center gap-1">
                          {getTrendIcon(livestock.trend)}
                          <span className="text-sm capitalize">{livestock.trend}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">{livestock.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Government Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">MSP Adjustments</h4>
                    <p className="text-blue-700 text-sm">
                      Government increased MSP for various Kharif crops for 2025-26 season to ensure remunerative prices.
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Farmer Training Initiative</h4>
                    <p className="text-green-700 text-sm">
                      Maharashtra launched hedging desk to train 3,000+ farmers in futures trading for cotton, maize, and turmeric.
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Basmati Export Promotion</h4>
                    <p className="text-purple-700 text-sm">
                      New Basmati Export Development Foundation center in Pilibhit, UP to enhance quality and export capacity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default MarketPrices;
