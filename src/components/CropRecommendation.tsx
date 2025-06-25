
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sprout, Loader2, Lock } from 'lucide-react';

const CropRecommendation = () => {
  const [soilData, setSoilData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isPremiumUser, setIsPremiumUser] = useState(false); // This would come from auth context

  const handleInputChange = (field: string, value: string) => {
    setSoilData(prev => ({ ...prev, [field]: value }));
  };

  const predictCrop = async () => {
    if (!isPremiumUser) {
      alert('This feature is available for premium users only. Please upgrade your account.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://croppredictionapp.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          N: parseFloat(soilData.nitrogen),
          P: parseFloat(soilData.phosphorus),
          K: parseFloat(soilData.potassium),
          temperature: parseFloat(soilData.temperature),
          humidity: parseFloat(soilData.humidity),
          ph: parseFloat(soilData.ph),
          rainfall: parseFloat(soilData.rainfall)
        })
      });

      if (response.ok) {
        const result = await response.json();
        setPrediction(result.prediction || result.crop || 'No prediction available');
      } else {
        throw new Error('Prediction failed');
      }
    } catch (error) {
      console.error('Error predicting crop:', error);
      alert('Failed to predict crop. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const seasonalRecommendations = {
    'Kharif (Monsoon)': ['Rice', 'Maize', 'Cotton', 'Sugarcane', 'Soybean', 'Groundnut'],
    'Rabi (Winter)': ['Wheat', 'Barley', 'Mustard', 'Peas', 'Gram', 'Lentil'],
    'Zaid (Summer)': ['Watermelon', 'Muskmelon', 'Cucumber', 'Fodder crops']
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sprout className="h-5 w-5" />
          Crop Recommendation System
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Seasonal Recommendations */}
          <div>
            <h3 className="font-semibold mb-3">Seasonal Crop Recommendations</h3>
            {Object.entries(seasonalRecommendations).map(([season, crops]) => (
              <div key={season} className="mb-3">
                <h4 className="text-sm font-medium text-gray-700 mb-2">{season}</h4>
                <div className="flex flex-wrap gap-1">
                  {crops.map((crop) => (
                    <Badge key={crop} variant="outline" className="text-xs">
                      {crop}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ML Prediction Section */}
          <div className="border-t pt-6">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-semibold">AI-Powered Crop Prediction</h3>
              {!isPremiumUser && <Lock className="h-4 w-4 text-orange-500" />}
              <Badge variant={isPremiumUser ? "default" : "secondary"}>
                {isPremiumUser ? "Premium" : "Premium Feature"}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <Input
                placeholder="Nitrogen (N)"
                type="number"
                value={soilData.nitrogen}
                onChange={(e) => handleInputChange('nitrogen', e.target.value)}
                disabled={!isPremiumUser}
              />
              <Input
                placeholder="Phosphorus (P)"
                type="number"
                value={soilData.phosphorus}
                onChange={(e) => handleInputChange('phosphorus', e.target.value)}
                disabled={!isPremiumUser}
              />
              <Input
                placeholder="Potassium (K)"
                type="number"
                value={soilData.potassium}
                onChange={(e) => handleInputChange('potassium', e.target.value)}
                disabled={!isPremiumUser}
              />
              <Input
                placeholder="Temperature (°C)"
                type="number"
                value={soilData.temperature}
                onChange={(e) => handleInputChange('temperature', e.target.value)}
                disabled={!isPremiumUser}
              />
              <Input
                placeholder="Humidity (%)"
                type="number"
                value={soilData.humidity}
                onChange={(e) => handleInputChange('humidity', e.target.value)}
                disabled={!isPremiumUser}
              />
              <Input
                placeholder="pH Level"
                type="number"
                step="0.1"
                value={soilData.ph}
                onChange={(e) => handleInputChange('ph', e.target.value)}
                disabled={!isPremiumUser}
              />
              <Input
                placeholder="Rainfall (mm)"
                type="number"
                value={soilData.rainfall}
                onChange={(e) => handleInputChange('rainfall', e.target.value)}
                disabled={!isPremiumUser}
                className="col-span-2"
              />
            </div>

            <Button
              onClick={predictCrop}
              className="w-full mb-4"
              disabled={loading || !isPremiumUser}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Predicting...
                </>
              ) : (
                'Predict Best Crop'
              )}
            </Button>

            {!isPremiumUser && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-orange-800">
                  🔒 Upgrade to Premium to access AI-powered crop prediction based on your soil parameters.
                </p>
              </div>
            )}

            {prediction && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Recommended Crop:</h4>
                <Badge className="bg-green-600 text-white text-sm">
                  {prediction}
                </Badge>
              </div>
            )}

            {/* Demo Mode Toggle for Development */}
            <div className="mt-4 pt-4 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPremiumUser(!isPremiumUser)}
                className="text-xs"
              >
                {isPremiumUser ? 'Switch to Free User' : 'Switch to Premium User'} (Demo)
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CropRecommendation;
