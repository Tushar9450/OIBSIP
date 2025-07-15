import React, { useState } from 'react';
import { Thermometer, RotateCcw, CheckCircle, AlertCircle } from 'lucide-react';

interface ConversionResult {
  celsius: number;
  fahrenheit: number;
  kelvin: number;
}

function App() {
  const [temperature, setTemperature] = useState<string>('');
  const [inputUnit, setInputUnit] = useState<'celsius' | 'fahrenheit' | 'kelvin'>('celsius');
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState<string>('');
  const [isConverting, setIsConverting] = useState(false);

  const convertTemperature = (value: number, from: string): ConversionResult => {
    let celsius: number;
    
    // Convert input to Celsius first
    switch (from) {
      case 'celsius':
        celsius = value;
        break;
      case 'fahrenheit':
        celsius = (value - 32) * 5/9;
        break;
      case 'kelvin':
        celsius = value - 273.15;
        break;
      default:
        celsius = value;
    }

    // Convert from Celsius to all units
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    return {
      celsius: Math.round(celsius * 100) / 100,
      fahrenheit: Math.round(fahrenheit * 100) / 100,
      kelvin: Math.round(kelvin * 100) / 100
    };
  };

  const handleConvert = () => {
    setError('');
    
    if (!temperature.trim()) {
      setError('Please enter a temperature value');
      return;
    }

    const numValue = parseFloat(temperature);
    
    if (isNaN(numValue)) {
      setError('Please enter a valid number');
      return;
    }

    // Check for absolute zero violations
    if (inputUnit === 'kelvin' && numValue < 0) {
      setError('Temperature cannot be below 0 Kelvin (absolute zero)');
      return;
    }
    
    if (inputUnit === 'celsius' && numValue < -273.15) {
      setError('Temperature cannot be below -273.15°C (absolute zero)');
      return;
    }
    
    if (inputUnit === 'fahrenheit' && numValue < -459.67) {
      setError('Temperature cannot be below -459.67°F (absolute zero)');
      return;
    }

    setIsConverting(true);
    
    // Add a small delay for better UX
    setTimeout(() => {
      const convertedResult = convertTemperature(numValue, inputUnit);
      setResult(convertedResult);
      setIsConverting(false);
    }, 300);
  };

  const handleReset = () => {
    setTemperature('');
    setResult(null);
    setError('');
    setInputUnit('celsius');
  };

  const getUnitLabel = (unit: string): string => {
    switch (unit) {
      case 'celsius': return '°C';
      case 'fahrenheit': return '°F';
      case 'kelvin': return 'K';
      default: return '';
    }
  };

  const getUnitColor = (unit: string): string => {
    switch (unit) {
      case 'celsius': return 'text-blue-600';
      case 'fahrenheit': return 'text-red-600';
      case 'kelvin': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  const getUnitBgColor = (unit: string): string => {
    switch (unit) {
      case 'celsius': return 'bg-blue-50 border-blue-200';
      case 'fahrenheit': return 'bg-red-50 border-red-200';
      case 'kelvin': return 'bg-purple-50 border-purple-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
              <Thermometer className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Temperature Converter</h1>
            <p className="text-gray-600">Convert between Celsius, Fahrenheit, and Kelvin</p>
          </div>

          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label htmlFor="temperature" className="block text-sm font-medium text-gray-700 mb-2">
                Enter Temperature
              </label>
              <input
                type="number"
                id="temperature"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                placeholder="Enter temperature value"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                onKeyPress={(e) => e.key === 'Enter' && handleConvert()}
              />
            </div>

            <div>
              <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-2">
                Input Unit
              </label>
              <select
                id="unit"
                value={inputUnit}
                onChange={(e) => setInputUnit(e.target.value as 'celsius' | 'fahrenheit' | 'kelvin')}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg bg-white"
              >
                <option value="celsius">Celsius (°C)</option>
                <option value="fahrenheit">Fahrenheit (°F)</option>
                <option value="kelvin">Kelvin (K)</option>
              </select>
            </div>

            {/* Error Display */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-red-700 text-sm">{error}</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleConvert}
                disabled={isConverting}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isConverting ? 'Converting...' : 'Convert'}
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Section */}
          {result && (
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <h2 className="text-lg font-semibold text-gray-900">Conversion Results</h2>
              </div>
              
              <div className="grid gap-3">
                <div className={`p-4 rounded-lg border-2 ${getUnitBgColor('celsius')}`}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Celsius</span>
                    <span className={`text-xl font-bold ${getUnitColor('celsius')}`}>
                      {result.celsius}°C
                    </span>
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg border-2 ${getUnitBgColor('fahrenheit')}`}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Fahrenheit</span>
                    <span className={`text-xl font-bold ${getUnitColor('fahrenheit')}`}>
                      {result.fahrenheit}°F
                    </span>
                  </div>
                </div>
                
                <div className={`p-4 rounded-lg border-2 ${getUnitBgColor('kelvin')}`}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Kelvin</span>
                    <span className={`text-xl font-bold ${getUnitColor('kelvin')}`}>
                      {result.kelvin}K
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Supports conversion between all three temperature scales</p>
        </div>
      </div>
    </div>
  );
}

export default App;