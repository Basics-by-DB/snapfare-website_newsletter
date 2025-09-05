import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Premium = () => {
  const handleTwintPayment = () => {
    // Hier würde der TWINT Business Zahlungslink aufgerufen werden
    window.open("https://pay.payrexx.com/YOUR_TWINT_LINK", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      <main className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                SnapFare Premium
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Unlock die vollständige Power von SnapFare und verpasse nie wieder einen Deal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Free</h3>
                <div className="text-4xl font-bold text-white mb-2">CHF 0</div>
                <p className="text-gray-300">Pro Monat</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Wöchentlicher Newsletter mit Top-Deals</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Grundlegende Deal-Alerts</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Community-Zugang</span>
                </li>
              </ul>
              
              <Button variant="secondary" className="w-full bg-white/10 text-gray-300 border-white/20" disabled>
                Aktueller Plan
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white/5 border-2 border-green-400 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Beliebt
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Premium</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">CHF 29</div>
                <p className="text-gray-300">Pro Monat</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Alles aus Free</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Echtzeit-Deal-Radar</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Preference-Match-Engine</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Smart-Alert System</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">1-Tap-Buchung</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Price-Guard Monitor</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Post-Trip-Assistent</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Prioritäts-Support</span>
                </li>
              </ul>
              
              <Button 
                onClick={handleTwintPayment}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg"
              >
                Jetzt mit TWINT bezahlen
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <a href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">SnapFare</a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
              <div className="flex gap-6 text-sm">
                <a href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                  Impressum
                </a>
                <a href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                  Datenschutzerklärung
                </a>
              </div>
              
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025 SnapFare. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Premium;