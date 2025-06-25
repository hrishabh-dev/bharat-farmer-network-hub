
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer } from 'lucide-react';

const WeatherWidget = () => {
  const [weather] = useState({
    location: "Delhi, India",
    temperature: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    forecast: [
      { day: "Today", high: 32, low: 22, condition: "sunny" },
      { day: "Tomorrow", high: 30, low: 20, condition: "cloudy" },
      { day: "Wed", high: 28, low: 18, condition: "rainy" },
      { day: "Thu", high: 29, low: 19, condition: "sunny" }
    ]
  });

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return <Sun className="h-6 w-6 text-yellow-500" />;
      case 'cloudy': return <Cloud className="h-6 w-6 text-gray-500" />;
      case 'rainy': return <CloudRain className="h-6 w-6 text-blue-500" />;
      default: return <Sun className="h-6 w-6 text-yellow-500" />;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Thermometer className="h-5 w-5" />
          Weather Update
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold">{weather.location}</h3>
            <div className="flex items-center justify-center gap-2 my-2">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="text-3xl font-bold">{weather.temperature}°C</span>
            </div>
            <p className="text-gray-600">{weather.condition}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-500" />
              <span className="text-sm">Humidity: {weather.humidity}%</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-gray-500" />
              <span className="text-sm">Wind: {weather.windSpeed} km/h</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">4-Day Forecast</h4>
            <div className="grid grid-cols-4 gap-2">
              {weather.forecast.map((day, index) => (
                <div key={index} className="text-center">
                  <p className="text-xs font-medium">{day.day}</p>
                  <div className="my-1 flex justify-center">
                    {getWeatherIcon(day.condition)}
                  </div>
                  <p className="text-xs">
                    <span className="font-semibold">{day.high}°</span>
                    <span className="text-gray-500">/{day.low}°</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
