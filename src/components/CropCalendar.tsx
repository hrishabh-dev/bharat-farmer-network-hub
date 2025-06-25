
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Sprout, Scissors, Wheat } from 'lucide-react';

const CropCalendar = () => {
  const currentMonth = new Date().getMonth();
  
  const cropSchedule = [
    {
      crop: "Wheat",
      icon: <Wheat className="h-4 w-4" />,
      plantingMonths: [10, 11], // Nov-Dec
      harvestMonths: [3, 4], // Apr-May
      currentStage: currentMonth >= 10 || currentMonth <= 4 ? "active" : "inactive"
    },
    {
      crop: "Rice",
      icon: <Sprout className="h-4 w-4" />,
      plantingMonths: [5, 6], // Jun-Jul
      harvestMonths: [9, 10], // Oct-Nov
      currentStage: currentMonth >= 5 && currentMonth <= 10 ? "active" : "inactive"
    },
    {
      crop: "Maize",
      icon: <Sprout className="h-4 w-4" />,
      plantingMonths: [5, 6, 7], // Jun-Aug
      harvestMonths: [9, 10, 11], // Oct-Dec
      currentStage: currentMonth >= 5 && currentMonth <= 11 ? "active" : "inactive"
    },
    {
      crop: "Cotton",
      icon: <Sprout className="h-4 w-4" />,
      plantingMonths: [3, 4, 5], // Apr-Jun
      harvestMonths: [9, 10, 11], // Oct-Dec
      currentStage: currentMonth >= 3 && currentMonth <= 11 ? "active" : "inactive"
    },
    {
      crop: "Sugarcane",
      icon: <Sprout className="h-4 w-4" />,
      plantingMonths: [1, 2, 10, 11], // Feb-Mar, Nov-Dec
      harvestMonths: [11, 0, 1], // Dec-Feb
      currentStage: "active" // Year-round crop
    },
    {
      crop: "Soybean",
      icon: <Sprout className="h-4 w-4" />,
      plantingMonths: [5, 6, 7], // Jun-Aug
      harvestMonths: [9, 10], // Oct-Nov
      currentStage: currentMonth >= 5 && currentMonth <= 10 ? "active" : "inactive"
    },
    {
      crop: "Mustard",
      icon: <Sprout className="h-4 w-4" />,
      plantingMonths: [9, 10, 11], // Oct-Dec
      harvestMonths: [2, 3, 4], // Mar-May
      currentStage: (currentMonth >= 9 && currentMonth <= 11) || (currentMonth >= 2 && currentMonth <= 4) ? "active" : "inactive"
    },
    {
      crop: "Sunflower",
      icon: <Sprout className="h-4 w-4" />,
      plantingMonths: [1, 2, 6, 7], // Feb-Mar, Jul-Aug
      harvestMonths: [5, 6, 10, 11], // Jun-Jul, Nov-Dec
      currentStage: (currentMonth >= 1 && currentMonth <= 2) || (currentMonth >= 5 && currentMonth <= 7) || (currentMonth >= 10 && currentMonth <= 11) ? "active" : "inactive"
    },
    {
      crop: "Groundnut",
      icon: <Sprout className="h-4 w-4" />,
      plantingMonths: [5, 6, 7], // Jun-Aug
      harvestMonths: [9, 10, 11], // Oct-Dec
      currentStage: currentMonth >= 5 && currentMonth <= 11 ? "active" : "inactive"
    },
    {
      crop: "Barley",
      icon: <Wheat className="h-4 w-4" />,
      plantingMonths: [10, 11, 0], // Nov-Jan
      harvestMonths: [3, 4, 5], // Apr-Jun
      currentStage: (currentMonth >= 10 && currentMonth <= 11) || currentMonth === 0 || (currentMonth >= 3 && currentMonth <= 5) ? "active" : "inactive"
    }
  ];

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const getStageForMonth = (crop: any, month: number) => {
    if (crop.plantingMonths.includes(month)) return "planting";
    if (crop.harvestMonths.includes(month)) return "harvest";
    return "growing";
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "planting": return "bg-green-100 text-green-800";
      case "harvest": return "bg-yellow-100 text-yellow-800";
      case "growing": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Crop Calendar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {cropSchedule.map((crop, index) => (
            <div key={index} className="border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {crop.icon}
                  <span className="font-semibold text-sm">{crop.crop}</span>
                </div>
                <Badge variant={crop.currentStage === "active" ? "default" : "secondary"} className="text-xs">
                  {crop.currentStage === "active" ? "In Season" : "Off Season"}
                </Badge>
              </div>
              
              <div className="grid grid-cols-6 gap-1 text-xs">
                {monthNames.slice(0, 6).map((month, monthIndex) => {
                  const stage = getStageForMonth(crop, monthIndex);
                  const isActive = crop.plantingMonths.includes(monthIndex) || 
                                 crop.harvestMonths.includes(monthIndex);
                  
                  return (
                    <div key={monthIndex} className="text-center">
                      <div className="font-medium mb-1">{month}</div>
                      {isActive && (
                        <Badge className={`text-xs px-1 py-0 ${getStageColor(stage)}`}>
                          {stage === "planting" ? "🌱" : stage === "harvest" ? "✂️" : "🌾"}
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <div className="grid grid-cols-6 gap-1 text-xs mt-2">
                {monthNames.slice(6).map((month, monthIndex) => {
                  const actualMonth = monthIndex + 6;
                  const stage = getStageForMonth(crop, actualMonth);
                  const isActive = crop.plantingMonths.includes(actualMonth) || 
                                 crop.harvestMonths.includes(actualMonth);
                  
                  return (
                    <div key={monthIndex} className="text-center">
                      <div className="font-medium mb-1">{month}</div>
                      {isActive && (
                        <Badge className={`text-xs px-1 py-0 ${getStageColor(stage)}`}>
                          {stage === "planting" ? "🌱" : stage === "harvest" ? "✂️" : "🌾"}
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          <div className="mt-4 flex gap-2 text-xs justify-center">
            <div className="flex items-center gap-1">
              <span>🌱</span>
              <span>Planting</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🌾</span>
              <span>Growing</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✂️</span>
              <span>Harvest</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CropCalendar;
