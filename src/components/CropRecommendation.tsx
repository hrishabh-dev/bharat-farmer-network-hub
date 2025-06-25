
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sprout, Loader2, Lock, AlertCircle } from 'lucide-react';

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
  const [error, setError] = useState<string | null>(null);
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setSoilData(prev => ({ ...prev, [field]: value }));
    setError(null); // Clear error when user starts typing
  };

  const validateInputs = () => {
    const requiredFields = ['nitrogen', 'phosphorus', 'potassium', 'temperature', 'humidity', 'ph', 'rainfall'];
    return requiredFields.every(field => soilData[field as keyof typeof soilData] !== '');
  };

  const predictCrop = async () => {
    if (!isPremiumUser) {
      alert('This feature is available for premium users only. Please upgrade your account.');
      return;
    }

    if (!validateInputs()) {
      setError('Please fill in all soil parameters');
      return;
    }

    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      console.log('Sending request to crop prediction API...');
      
      // Create a timeout for the request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

      const response = await fetch('https://croppredictionapp.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          N: parseFloat(soilData.nitrogen),
          P: parseFloat(soilData.phosphorus),
          K: parseFloat(soilData.potassium),
          temperature: parseFloat(soilData.temperature),
          humidity: parseFloat(soilData.humidity),
          ph: parseFloat(soilData.ph),
          rainfall: parseFloat(soilData.rainfall)
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`API returned ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('API response:', result);
      
      const cropName = result.prediction || result.crop || result.recommended_crop;
      if (cropName) {
        setPrediction(cropName);
      } else {
        throw new Error('No crop prediction found in response');
      }

    } catch (error: any) {
      console.error('Error predicting crop:', error);
      
      if (error.name === 'AbortError') {
        setError('Request timed out. The prediction service may be temporarily unavailable.');
      } else if (error.message.includes('Failed to fetch')) {
        setError('Unable to connect to prediction service. Please check your internet connection or try again later.');
      } else {
        setError(`Prediction failed: ${error.message}`);
      }
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
                placeholder="Nitrogen (N) - kg/ha"
                type="number"
                value={soilData.nitrogen}
                onChange={(e) => handleInputChange('nitrogen', e.target.value)}
                disabled={!isPremiumUser}
              />
              <Input
                placeholder="Phosphorus (P) - kg/ha"
                type="number"
                value={soilData.phosphorus}
                onChange={(e) => handleInputChange('phosphorus', e.target.value)}
                disabled={!isPremiumUser}
              />
              <Input
                placeholder="Potassium (K) - kg/ha"
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
                placeholder="pH Level (0-14)"
                type="number"
                step="0.1"
                min="0"
                max="14"
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

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

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
