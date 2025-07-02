
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, DollarSign, Wheat, Apple } from 'lucide-react';
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

  // Historical MSP data for major crops
  const historicalMSPData = [
    { year: '2001-02', paddy: 530, wheat: 620, maize: 485, tur: 1200, moong: 1320, urad: 1320, soybean: null },
    { year: '2002-03', paddy: 530, wheat: 620, maize: 485, tur: 1220, moong: 1320, urad: 1330, soybean: null },
    { year: '2003-04', paddy: 550, wheat: 630, maize: 505, tur: 1360, moong: 1370, urad: 1370, soybean: null },
    { year: '2004-05', paddy: 560, wheat: 640, maize: 515, tur: 1390, moong: 1410, urad: 1410, soybean: null },
    { year: '2005-06', paddy: 570, wheat: 650, maize: 525, tur: 1400, moong: 1520, urad: null, soybean: null },
    { year: '2006-07', paddy: 580, wheat: 850, maize: 540, tur: 1410, moong: 1520, urad: null, soybean: null },
    { year: '2007-08', paddy: 745, wheat: 1000, maize: 620, tur: 1550, moong: 1700, urad: null, soybean: null },
    { year: '2008-09', paddy: 900, wheat: 1080, maize: 840, tur: 2000, moong: 2520, urad: null, soybean: null },
    { year: '2009-10', paddy: 1050, wheat: 1100, maize: 840, tur: 2300, moong: 2760, urad: null, soybean: null },
    { year: '2010-11', paddy: 1000, wheat: 1170, maize: 880, tur: 3500, moong: 3670, urad: null, soybean: null },
    { year: '2011-12', paddy: 1080, wheat: 1285, maize: 980, tur: 3700, moong: 4000, urad: null, soybean: null },
    { year: '2012-13', paddy: 1250, wheat: 1350, maize: 1175, tur: 3850, moong: 4400, urad: null, soybean: null },
    { year: '2013-14', paddy: 1310, wheat: 1400, maize: 1310, tur: 4300, moong: 4500, urad: 4300, soybean: 2560 },
    { year: '2014-15', paddy: 1360, wheat: 1450, maize: 1310, tur: 4350, moong: 4600, urad: 4350, soybean: 2560 },
    { year: '2015-16', paddy: 1410, wheat: 1525, maize: 1325, tur: 4625, moong: 4850, urad: 4625, soybean: 4600 },
    { year: '2016-17', paddy: 1470, wheat: 1625, maize: 1365, tur: 5050, moong: 5225, urad: 5000, soybean: 4600 },
    { year: '2017-18', paddy: 1550, wheat: 1735, maize: 1425, tur: 5450, moong: 5575, urad: 5400, soybean: 4600 },
    { year: '2018-19', paddy: 1750, wheat: 1840, maize: 1700, tur: 5675, moong: 6975, urad: 5600, soybean: 4600 },
    { year: '2019-20', paddy: 1815, wheat: 1925, maize: 1760, tur: 5800, moong: 7050, urad: 5700, soybean: 4600 },
    { year: '2020-21', paddy: 1868, wheat: 1975, maize: 1850, tur: 6000, moong: 7196, urad: 6000, soybean: 4600 },
    { year: '2021-22', paddy: 1940, wheat: 2015, maize: 1870, tur: 6300, moong: 7275, urad: 6300, soybean: 4892 },
    { year: '2022-23', paddy: 2040, wheat: 2125, maize: 1962, tur: 6600, moong: 7755, urad: 6600, soybean: 4892 },
    { year: '2023-24', paddy: 2183, wheat: null, maize: 2090, tur: 7000, moong: 8558, urad: 6950, soybean: 4892 },
    { year: '2024-25', paddy: 2300, wheat: null, maize: 2225, tur: 7550, moong: 8682, urad: 7400, soybean: 4892 },
    { year: '2025-26', paddy: null, wheat: 2425, maize: null, tur: 7000, moong: 8558, urad: 7400, soybean: 4892 }
  ];

  // Get last 10 years of data for better visualization
  const recentMSPData = historicalMSPData.slice(-10);

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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="crops">Crops</TabsTrigger>
            <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
            <TabsTrigger value="fruits">Fruits</TabsTrigger>
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
                <CardTitle className="text-lg">Historical MSP Trends (Last 10 Years)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={recentMSPData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="paddy" stroke="#8884d8" strokeWidth={2} name="Paddy (Common)" connectNulls={false} />
                    <Line type="monotone" dataKey="wheat" stroke="#82ca9d" strokeWidth={2} name="Wheat" connectNulls={false} />
                    <Line type="monotone" dataKey="maize" stroke="#ffc658" strokeWidth={2} name="Maize" connectNulls={false} />
                    <Line type="monotone" dataKey="tur" stroke="#ff7300" strokeWidth={2} name="Tur (Arhar)" connectNulls={false} />
                    <Line type="monotone" dataKey="moong" stroke="#00ff7f" strokeWidth={2} name="Moong" connectNulls={false} />
                    <Line type="monotone" dataKey="soybean" stroke="#ff69b4" strokeWidth={2} name="Soybean" connectNulls={false} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">MSP Growth Comparison (2015-16 vs 2024-25)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { crop: 'Paddy', '2015-16': 1410, '2024-25': 2300, growth: 63.1 },
                    { crop: 'Wheat', '2015-16': 1525, '2025-26': 2425, growth: 59.0 },
                    { crop: 'Maize', '2015-16': 1325, '2024-25': 2225, growth: 67.9 },
                    { crop: 'Tur', '2015-16': 4625, '2024-25': 7550, growth: 63.2 },
                    { crop: 'Moong', '2015-16': 4850, '2024-25': 8682, growth: 79.0 },
                    { crop: 'Soybean', '2015-16': 4600, '2024-25': 4892, growth: 6.3 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="crop" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="2015-16" fill="#8884d8" name="2015-16 MSP" />
                    <Bar dataKey="2024-25" fill="#82ca9d" name="2024-25 MSP" />
                  </BarChart>
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
        </Tabs>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Government Initiatives & Market Dynamics</CardTitle>
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
      </CardContent>
    </Card>
  );
};

export default MarketPrices;
