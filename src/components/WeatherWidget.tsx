
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer, MapPin } from 'lucide-react';

const WeatherWidget = () => {
  const [selectedLocation, setSelectedLocation] = useState("delhi");
  
  // Only include locations with complete weather data
  const locations = [
    { value: "delhi", label: "Delhi", state: "Delhi" },
    { value: "mumbai", label: "Mumbai", state: "Maharashtra" },
    { value: "bangalore", label: "Bangalore", state: "Karnataka" },
    { value: "hyderabad", label: "Hyderabad", state: "Telangana" },
    { value: "pune", label: "Pune", state: "Maharashtra" },
    { value: "chennai", label: "Chennai", state: "Tamil Nadu" },
    { value: "kolkata", label: "Kolkata", state: "West Bengal" },
    { value: "jaipur", label: "Jaipur", state: "Rajasthan" },
    { value: "ahmedabad", label: "Ahmedabad", state: "Gujarat" },
    { value: "lucknow", label: "Lucknow", state: "Uttar Pradesh" }
  ];

  const weatherData = {
    delhi: {
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
    },
    mumbai: {
      location: "Mumbai, Maharashtra",
      temperature: 31,
      condition: "Humid",
      humidity: 78,
      windSpeed: 15,
      forecast: [
        { day: "Today", high: 33, low: 26, condition: "cloudy" },
        { day: "Tomorrow", high: 32, low: 25, condition: "rainy" },
        { day: "Wed", high: 30, low: 24, condition: "rainy" },
        { day: "Thu", high: 31, low: 25, condition: "cloudy" }
      ]
    },
    bangalore: {
      location: "Bangalore, Karnataka",
      temperature: 24,
      condition: "Pleasant",
      humidity: 60,
      windSpeed: 8,
      forecast: [
        { day: "Today", high: 27, low: 18, condition: "sunny" },
        { day: "Tomorrow", high: 26, low: 17, condition: "cloudy" },
        { day: "Wed", high: 25, low: 16, condition: "sunny" },
        { day: "Thu", high: 28, low: 19, condition: "sunny" }
      ]
    },
    hyderabad: {
      location: "Hyderabad, Telangana",
      temperature: 29,
      condition: "Warm",
      humidity: 55,
      windSpeed: 10,
      forecast: [
        { day: "Today", high: 33, low: 23, condition: "sunny" },
        { day: "Tomorrow", high: 32, low: 22, condition: "sunny" },
        { day: "Wed", high: 31, low: 21, condition: "cloudy" },
        { day: "Thu", high: 34, low: 24, condition: "sunny" }
      ]
    },
    pune: {
      location: "Pune, Maharashtra",
      temperature: 26,
      condition: "Moderate",
      humidity: 62,
      windSpeed: 9,
      forecast: [
        { day: "Today", high: 29, low: 20, condition: "sunny" },
        { day: "Tomorrow", high: 28, low: 19, condition: "cloudy" },
        { day: "Wed", high: 27, low: 18, condition: "sunny" },
        { day: "Thu", high: 30, low: 21, condition: "sunny" }
      ]
    },
    chennai: {
      location: "Chennai, Tamil Nadu",
      temperature: 32,
      condition: "Hot & Humid",
      humidity: 75,
      windSpeed: 14,
      forecast: [
        { day: "Today", high: 35, low: 27, condition: "sunny" },
        { day: "Tomorrow", high: 34, low: 26, condition: "cloudy" },
        { day: "Wed", high: 33, low: 25, condition: "rainy" },
        { day: "Thu", high: 35, low: 27, condition: "sunny" }
      ]
    },
    kolkata: {
      location: "Kolkata, West Bengal",
      temperature: 30,
      condition: "Humid",
      humidity: 72,
      windSpeed: 11,
      forecast: [
        { day: "Today", high: 33, low: 25, condition: "cloudy" },
        { day: "Tomorrow", high: 31, low: 24, condition: "rainy" },
        { day: "Wed", high: 29, low: 23, condition: "rainy" },
        { day: "Thu", high: 32, low: 25, condition: "cloudy" }
      ]
    },
    jaipur: {
      location: "Jaipur, Rajasthan",
      temperature: 35,
      condition: "Hot & Dry",
      humidity: 40,
      windSpeed: 13,
      forecast: [
        { day: "Today", high: 38, low: 28, condition: "sunny" },
        { day: "Tomorrow", high: 37, low: 27, condition: "sunny" },
        { day: "Wed", high: 36, low: 26, condition: "cloudy" },
        { day: "Thu", high: 39, low: 29, condition: "sunny" }
      ]
    },
    ahmedabad: {
      location: "Ahmedabad, Gujarat",
      temperature: 33,
      condition: "Hot",
      humidity: 50,
      windSpeed: 12,
      forecast: [
        { day: "Today", high: 36, low: 26, condition: "sunny" },
        { day: "Tomorrow", high: 35, low: 25, condition: "sunny" },
        { day: "Wed", high: 34, low: 24, condition: "cloudy" },
        { day: "Thu", high: 37, low: 27, condition: "sunny" }
      ]
    },
    lucknow: {
      location: "Lucknow, Uttar Pradesh",
      temperature: 27,
      condition: "Moderate",
      humidity: 58,
      windSpeed: 9,
      forecast: [
        { day: "Today", high: 31, low: 21, condition: "sunny" },
        { day: "Tomorrow", high: 29, low: 20, condition: "cloudy" },
        { day: "Wed", high: 28, low: 19, condition: "rainy" },
        { day: "Thu", high: 30, low: 21, condition: "sunny" }
      ]
    }
  };

  const getCurrentWeather = () => {
    return weatherData[selectedLocation as keyof typeof weatherData] || weatherData.delhi;
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny': return <Sun className="h-6 w-6 text-yellow-500" />;
      case 'cloudy': return <Cloud className="h-6 w-6 text-gray-500" />;
      case 'rainy': return <CloudRain className="h-6 w-6 text-blue-500" />;
      default: return <Sun className="h-6 w-6 text-yellow-500" />;
    }
  };

  const weather = getCurrentWeather();

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
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="h-4 w-4 text-gray-500" />
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}, {location.state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

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
