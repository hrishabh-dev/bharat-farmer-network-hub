
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calculator, Ruler, DollarSign, Droplets } from 'lucide-react';

const QuickTools = () => {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);
  const [results, setResults] = useState<{ [key: string]: number | null }>({});

  const calculateAreaProfit = (length: number, width: number, profitPerSqMeter: number) => {
    const area = length * width;
    const totalProfit = area * profitPerSqMeter;
    return { area, totalProfit };
  };

  const calculateSeedQuantity = (area: number, seedRate: number) => {
    return (area * seedRate) / 10000; // Convert to hectares
  };

  const calculateIrrigation = (area: number, cropWaterNeed: number, days: number) => {
    return (area * cropWaterNeed * days) / 1000; // Convert to liters
  };

  const tools = [
    {
      id: 'area',
      title: 'Area & Profit Calculator',
      icon: <Ruler className="h-5 w-5" />,
      description: 'Calculate field area and estimated profit'
    },
    {
      id: 'seed',
      title: 'Seed Quantity Calculator',
      icon: <Calculator className="h-5 w-5" />,
      description: 'Calculate required seed quantity'
    },
    {
      id: 'irrigation',
      title: 'Irrigation Calculator',
      icon: <Droplets className="h-5 w-5" />,
      description: 'Calculate water requirements'
    },
    {
      id: 'cost',
      title: 'Cost Estimator',
      icon: <DollarSign className="h-5 w-5" />,
      description: 'Estimate farming costs'
    }
  ];

  const renderCalculator = (toolId: string) => {
    switch (toolId) {
      case 'area':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Length (meters)" type="number" id="length" />
              <Input placeholder="Width (meters)" type="number" id="width" />
            </div>
            <Input placeholder="Profit per sq meter (₹)" type="number" id="profit" />
            <Button 
              onClick={() => {
                const length = parseFloat((document.getElementById('length') as HTMLInputElement).value);
                const width = parseFloat((document.getElementById('width') as HTMLInputElement).value);
                const profit = parseFloat((document.getElementById('profit') as HTMLInputElement).value);
                
                if (length && width && profit) {
                  const result = calculateAreaProfit(length, width, profit);
                  setResults({ area: result.area, totalProfit: result.totalProfit });
                }
              }}
              className="w-full"
            >
              Calculate
            </Button>
            {results.area && (
              <div className="bg-green-50 p-3 rounded">
                <p>Area: {results.area} sq meters</p>
                <p>Estimated Profit: ₹{results.totalProfit?.toLocaleString()}</p>
              </div>
            )}
          </div>
        );
      
      case 'seed':
        return (
          <div className="space-y-4">
            <Input placeholder="Field area (sq meters)" type="number" id="seedArea" />
            <Input placeholder="Seed rate (kg/hectare)" type="number" id="seedRate" />
            <Button 
              onClick={() => {
                const area = parseFloat((document.getElementById('seedArea') as HTMLInputElement).value);
                const rate = parseFloat((document.getElementById('seedRate') as HTMLInputElement).value);
                
                if (area && rate) {
                  const result = calculateSeedQuantity(area, rate);
                  setResults({ seedQuantity: result });
                }
              }}
              className="w-full"
            >
              Calculate
            </Button>
            {results.seedQuantity && (
              <div className="bg-green-50 p-3 rounded">
                <p>Required Seeds: {results.seedQuantity.toFixed(2)} kg</p>
              </div>
            )}
          </div>
        );

      default:
        return (
          <p className="text-gray-600 text-center py-4">
            Calculator coming soon!
          </p>
        );
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Quick Tools
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!activeCalculator ? (
          <div className="grid grid-cols-2 gap-3">
            {tools.map((tool) => (
              <Button
                key={tool.id}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center gap-2"
                onClick={() => setActiveCalculator(tool.id)}
              >
                {tool.icon}
                <span className="text-xs text-center font-medium">{tool.title}</span>
              </Button>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">
                {tools.find(t => t.id === activeCalculator)?.title}
              </h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setActiveCalculator(null);
                  setResults({});
                }}
              >
                Back
              </Button>
            </div>
            {renderCalculator(activeCalculator)}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuickTools;
