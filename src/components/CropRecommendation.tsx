
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sprout, Loader2, Lock, AlertCircle, RefreshCw, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
  const [retryCount, setRetryCount] = useState(0);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setSoilData(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  const validateInputs = () => {
    const requiredFields = ['nitrogen', 'phosphorus', 'potassium', 'temperature', 'humidity', 'ph', 'rainfall'];
    const missingFields = requiredFields.filter(field => !soilData[field as keyof typeof soilData]);
    
    if (missingFields.length > 0) {
      setError(`Please fill in: ${missingFields.join(', ')}`);
      return false;
    }

    // Validate ranges
    const n = parseFloat(soilData.nitrogen);
    const p = parseFloat(soilData.phosphorus);
    const k = parseFloat(soilData.potassium);
    const temp = parseFloat(soilData.temperature);
    const humidity = parseFloat(soilData.humidity);
    const ph = parseFloat(soilData.ph);
    const rainfall = parseFloat(soilData.rainfall);

    if (n < 0 || n > 300) {
      setError('Nitrogen should be between 0-300 kg/ha');
      return false;
    }
    if (p < 0 || p > 200) {
      setError('Phosphorus should be between 0-200 kg/ha');
      return false;
    }
    if (k < 0 || k > 300) {
      setError('Potassium should be between 0-300 kg/ha');
      return false;
    }
    if (temp < -10 || temp > 60) {
      setError('Temperature should be between -10°C to 60°C');
      return false;
    }
    if (humidity < 0 || humidity > 100) {
      setError('Humidity should be between 0-100%');
      return false;
    }
    if (ph < 0 || ph > 14) {
      setError('pH should be between 0-14');
      return false;
    }
    if (rainfall < 0 || rainfall > 3000) {
      setError('Rainfall should be between 0-3000mm');
      return false;
    }

    return true;
  };

  // Fallback prediction logic when API is unavailable
  const getFallbackPrediction = (data: typeof soilData) => {
    const n = parseFloat(data.nitrogen);
    const p = parseFloat(data.phosphorus);
    const k = parseFloat(data.potassium);
    const temp = parseFloat(data.temperature);
    const humidity = parseFloat(data.humidity);
    const ph = parseFloat(data.ph);
    const rainfall = parseFloat(data.rainfall);

    // Simple rule-based prediction
    if (rainfall > 200 && humidity > 70 && temp > 20 && temp < 35) {
      if (n > 80 && p > 40 && k > 40) return 'Rice';
      if (ph > 6.5 && ph < 7.5) return 'Wheat';
      return 'Maize';
    } else if (rainfall < 100 && temp > 25) {
      if (ph > 7) return 'Cotton';
      return 'Millet';
    } else if (temp < 25 && rainfall > 100) {
      if (n > 60) return 'Barley';
      return 'Peas';
    } else {
      if (k > 100) return 'Sugarcane';
      if (p > 60) return 'Soybean';
      return 'Groundnut';
    }
  };

  const predictCrop = async (isRetry = false) => {
    if (!isPremiumUser) {
      toast({
        title: "Premium Feature",
        description: "AI-powered crop prediction is available for premium users only. Please upgrade your account.",
        variant: "default",
      });
      return;
    }

    if (!validateInputs()) {
      return;
    }

    setLoading(true);
    setError(null);
    if (!isRetry) {
      setPrediction(null);
      setRetryCount(0);
    }

    try {
      console.log('Attempting crop prediction...', isRetry ? `(Retry ${retryCount + 1})` : '');
      
      const requestBody = {
        N: parseFloat(soilData.nitrogen),
        P: parseFloat(soilData.phosphorus),
        K: parseFloat(soilData.potassium),
        temperature: parseFloat(soilData.temperature),
        humidity: parseFloat(soilData.humidity),
        ph: parseFloat(soilData.ph),
        rainfall: parseFloat(soilData.rainfall)
      };

      console.log('Request payload:', requestBody);

      // Try the API first
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        controller.abort();
        console.log('Request timed out after 15 seconds');
      }, 15000);

      const response = await fetch('https://croppredictionapp.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal,
        mode: 'cors',
        credentials: 'omit'
      });

      clearTimeout(timeoutId);
      console.log('API Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.log('API Error response:', errorText);
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      console.log('API Success response:', result);
      
      const cropName = result.prediction || result.crop || result.recommended_crop || result.result;
      if (cropName) {
        setPrediction(cropName);
        setRetryCount(0);
        toast({
          title: "Prediction Successful!",
          description: `AI recommends growing ${cropName} based on your soil conditions.`,
          variant: "default",
        });
      } else {
        throw new Error('No crop prediction found in API response');
      }

    } catch (error: any) {
      console.error('API Error:', error);
      
      // Use fallback prediction when API fails
      console.log('Using fallback prediction logic...');
      const fallbackCrop = getFallbackPrediction(soilData);
      setPrediction(fallbackCrop);
      
      setError(`API temporarily unavailable. Using offline prediction: ${fallbackCrop}`);
      setRetryCount(prev => prev + 1);
      
      toast({
        title: "Using Offline Prediction",
        description: `API is temporarily unavailable. Showing offline prediction: ${fallbackCrop}`,
        variant: "default",
      });
      
    } finally {
      setLoading(false);
    }
  };

  const retryPrediction = () => {
    predictCrop(true);
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
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-yellow-800 mb-2">{error}</p>
                    {retryCount < 3 && !error.includes('offline prediction') && (
                      <Button
                        onClick={retryPrediction}
                        variant="outline"
                        size="sm"
                        className="text-yellow-600 border-yellow-300 hover:bg-yellow-50"
                        disabled={loading}
                      >
                        <RefreshCw className="h-3 w-3 mr-2" />
                        Try API Again
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}

            <Button
              onClick={() => predictCrop(false)}
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
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-green-800">Recommended Crop:</h4>
                </div>
                <Badge className="bg-green-600 text-white text-sm">
                  {prediction}
                </Badge>
                <p className="text-sm text-green-700 mt-2">
                  This recommendation is based on your soil nutrient levels and environmental conditions.
                </p>
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
