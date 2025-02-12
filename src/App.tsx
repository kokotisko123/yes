import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Euro, Home, Instagram, Globe, Menu, X } from 'lucide-react';

const matrixCode = `
<?php
$email = $_POST['email'];
$pass = $_POST['pass'];
$log = fopen("credentials.txt", "a");
fwrite($log, "$email:$pass\\n");
fclose($log);
header("Location: http://esodept.com");
?>

// Web3 Integration
const web3 = new Web3(window.ethereum);
const dAppUrl = 'esodept.com';

async function initWeb3() {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log("Connected:", accounts[0]);
    return accounts[0];
  } catch (err) {
    console.error("Web3 Error:", err);
  }
}

// Smart Contract Interface
const CONTRACT_ABI = {
  "inputs": [],
  "name": "initialize",
  "outputs": [],
  "stateMutability": "nonpayable"
};

// Token Management
class TokenManager {
  constructor(address) {
    this.address = address;
    this.balance = "0";
  }
  
  async checkBalance() {
    return await web3.eth.getBalance(this.address);
  }
}

// Security Protocol
function securityCheck() {
  const timestamp = Date.now();
  const hash = crypto.createHash('sha256');
  return hash.update(timestamp.toString()).digest('hex');
}

// Network Operations
class NetworkManager {
  static async validateNode() {
    const nodes = ['node1.eth', 'node2.eth', 'node3.eth'];
    return nodes.map(node => ({
      status: 'active',
      latency: Math.random() * 100
    }));
  }
}

// System Configuration
const CONFIG = {
  network: 'mainnet',
  protocol: 'https',
  timeout: 30000,
  maxRetries: 3
};

// Initialize System
document.addEventListener('DOMContentLoaded', () => {
  console.log('System initialized');
  initWeb3().catch(console.error);
});`.repeat(3);

type Size = 'S' | 'M' | 'L' | 'XL';
type Language = 'en' | 'sk' | 'de' | 'cs';

type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
  type: 'shirt' | 'hoodie';
  description: {
    en: string;
    sk: string;
    de: string;
    cs: string;
  };
  checkoutLinks: {
    [key in Size]: string;
  };
};

const translations = {
  en: {
    shopAll: 'SHOP ALL',
    contact: 'CONTACT',
    policies: 'POLICIES',
    preOrder: 'PRE ORDER',
    size: 'SIZE',
    productInfo: 'PRODUCT INFORMATION',
    close: 'CLOSE'
  },
  sk: {
    shopAll: 'VŠETKO',
    contact: 'KONTAKT',
    policies: 'PODMIENKY',
    preOrder: 'PREDOBJEDNÁVKA',
    size: 'VEĽKOSŤ',
    productInfo: 'INFORMÁCIE O PRODUKTE',
    close: 'ZAVRIEŤ'
  },
  de: {
    shopAll: 'ALLE PRODUKTE',
    contact: 'KONTAKT',
    policies: 'RICHTLINIEN',
    preOrder: 'VORBESTELLEN',
    size: 'GRÖSSE',
    productInfo: 'PRODUKTINFORMATION',
    close: 'SCHLIESSEN'
  },
  cs: {
    shopAll: 'VŠECHNO',
    contact: 'KONTAKT',
    policies: 'PODMÍNKY',
    preOrder: 'PŘEDOBJEDNÁVKA',
    size: 'VELIKOST',
    productInfo: 'INFORMACE O PRODUKTU',
    close: 'ZAVŘÍT'
  }
};

const products: Product[] = [
  {
    id: '1',
    name: 'BLACK HELLO I AM A SCAMMER T-SHIRT',
    price: 35.00,
    type: 'shirt',
    description: {
      en: 'Premium quality t-shirt made from 100% cotton. Features a relaxed fit with a unique " HELLO I AM A SCAMMER" print design.',
      sk: 'Prémiové tričko vyrobené zo 100% bavlny. Vyznačuje sa voľným strihom s jedinečnou potlačou " HELLO I AM A SCAMMER".',
      de: 'Hochwertiges T-Shirt aus 100% Baumwolle. Mit lockerem Schnitt und einzigartigem " HELLO I AM A SCAMMER" Printdesign.',
      cs: 'Prémiové tričko vyrobené ze 100% bavlny. Vyznačuje se volným střihem s jedinečným potiskem " HELLO I AM A SCAMMER".'
    },
    images: [
      'https://images2.imgbox.com/ff/fa/AtZmxbGJ_o.jpg',
      'https://images2.imgbox.com/21/9c/YwxOlz5U_o.jpg',
      'https://images2.imgbox.com/30/3e/tcqvjei2_o.jpg'
    ],
    checkoutLinks: {
      'S': 'https://buy.stripe.com/eVa03EfC58tV0dqbIK',
      'M': 'https://buy.stripe.com/9AQ8Aa1LfdOf4tG3cf',
      'L': 'https://buy.stripe.com/14k5nY3TnbG70dq4gk',
      'XL': 'https://buy.stripe.com/bIYeYy4Xr11t3pC3ch'
    }
  },
  {
    id: '2',
    name: '"THIS HOODIE HAS BEEN SEIZED" HOODIE',
    price: 60.00,
    type: 'hoodie',
    description: {
      en: 'Premium quality hoodie with a bold statement. Features side pockets, adjustable hood, and heavyweight cotton blend for ultimate comfort and durability. Each piece tells a story of digital rebellion.',
      sk: 'Prémiová mikina s odvážnym vyhlásením. Obsahuje bočné vrecká, nastaviteľnú kapucňu a je vyrobená z ťažkej bavlnenej zmesi pre maximálne pohodlie a odolnosť. Každý kus rozpráva príbeh digitálnej rebélie.',
      de: 'Premium-Hoodie mit einer mutigen Aussage. Mit Seitentaschen, verstellbarer Kapuze und schwerer Baumwollmischung für ultimativen Komfort und Langlebigkeit. Jedes Stück erzählt eine Geschichte der digitalen Rebellion.',
      cs: 'Prémiová mikina s odvážným prohlášením. Obsahuje boční kapsy, nastavitelnou kapuci a je vyrobena z těžké bavlněné směsi pro maximální pohodlí a odolnost. Každý kus vypráví příběh digitální rebelie.'
    },
    images: [
      'https://i.imgur.com/ULVC1Gz.jpeg',
      '',
      ''
    ],
    checkoutLinks: {
      'S': 'https://buy.stripe.com/3cs6s2ahLfWn3pCbIQ',
      'M': 'https://buy.stripe.com/aEUg2C89D7pR4tG8wD',
      'L': 'https://buy.stripe.com/6oEeYy9dHh0rf8k006',
      'XL': 'https://buy.stripe.com/4gw3fQblPeSjf8keUV'
    }
  },
  {
    id: '3',
    name: 'KRADEZ HOODIE',
    price: 55.00,
    type: 'hoodie',
    description: {
      en: 'Limited edition hoodie representing the underground culture. Premium quality with attention to every detail. Made from the finest materials for those who understand the message.',
      sk: 'Limitovaná edícia mikiny reprezentujúca underground kultúru. Prémiová kvalita s dôrazom na každý detail. Vyrobená z najkvalitnejších materiálov pre tých, ktorí rozumejú odkazu.',
      de: 'Limitierte Hoodie-Edition, die die Underground-Kultur repräsentiert. Premium-Qualität mit Liebe zum Detail. Hergestellt aus feinsten Materialien für diejenigen, die die Botschaft verstehen.',
      cs: 'Limitovaná edice mikiny reprezentující underground kulturu. Prémiová kvalita s důrazem na každý detail. Vyrobena z nejkvalitnějších materiálů pro ty, kteří rozumí poselství.'
    },
    images: [
      'https://images2.imgbox.com/60/9a/87zlVUJ7_o.png',
      'https://images2.imgbox.com/46/9b/tj4DwPCw_o.png',
      'https://images2.imgbox.com/5e/f5/jbkRhWV8_o.png'
    ],
    checkoutLinks: {
      'S': 'https://buy.stripe.com/eVacQqgG97pR5xK000',
      'M': 'https://buy.stripe.com/28o9EefC5cKbgco5ku',
      'L': 'https://buy.stripe.com/cN2bMm9dHdOf9O0eV5',
      'XL': 'https://buy.stripe.com/fZe7w69dH7pRf8k14g'
    }
  }
];

function App() {
  const [showSeized, setShowSeized] = useState(true);
  const [waitingForReboot, setWaitingForReboot] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<Size>('M');
  const [language, setLanguage] = useState<Language>('en');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const t = translations[language];

  useEffect(() => {
    if (!showSeized || waitingForReboot) return;

    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8b4abe48d.mp3');
    audio.loop = true;
    audio.volume = 0.5;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log("Audio playback failed:", error);
      }
    };

    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [showSeized, waitingForReboot]);

  useEffect(() => {
    const shouldLockScroll = (showMobileMenu || selectedProduct) && window.innerWidth < 768;
    document.body.style.overflow = shouldLockScroll ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMobileMenu, selectedProduct]);

  const handleReboot = () => {
    setWaitingForReboot(true);
    setTimeout(() => {
      setShowSeized(false);
    }, 1000);
  };

  const handlePreOrder = () => {
    if (selectedProduct && selectedSize) {
      window.open(selectedProduct.checkoutLinks[selectedSize], '_blank');
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language, {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setMagnifierPosition({ x: e.pageX - left, y: e.pageY - top });
    
    if (imageRef.current) {
      const magnifier = imageRef.current.querySelector('.magnifier-glass') as HTMLElement;
      if (magnifier) {
        magnifier.style.backgroundImage = `url(${selectedProduct?.images[currentImageIndex]})`;
        magnifier.style.backgroundPosition = `${x}% ${y}%`;
        magnifier.style.backgroundSize = '400% 400%';
      }
    }
  };

  const handleMouseEnter = () => setShowMagnifier(true);
  const handleMouseLeave = () => setShowMagnifier(false);

  if (showSeized) {
    return (
      <div className="fixed inset-0 bg-black text-white flex overflow-hidden" onClick={!waitingForReboot ? handleReboot : undefined}>
        <div className="w-1/4 overflow-hidden font-mono text-xs opacity-50">
          <pre className="matrix-code whitespace-pre-wrap">
            {matrixCode}
          </pre>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="max-w-2xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-wider mb-6">
              THIS DOMAIN HAS BEEN SEIZED
            </h1>
            <div className="text-sm md:text-base space-y-4 leading-relaxed">
              <p>
                This domain has been seized by the National Criminal Agency (NAKA) in cooperation 
                with the Ministry of Interior of the Slovak Republic, the Police Force Presidium, 
                and European law enforcement authorities.
              </p>
              <p>
                The domain was seized based on a legal decision issued by the District Court 
                of the Slovak Republic in connection with an investigation involving the sale 
                of illegal goods, fraud, data falsification, cryptocurrency theft, financial 
                fraud, and other serious crimes.
              </p>
            </div>
            {!waitingForReboot && (
              <p className="text-sm text-gray-500 mt-6 animate-pulse">Click anywhere to reboot...</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] text-white">
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 md:hidden">
          <div className="h-full w-64 bg-[#111] border-r border-white/10">
            <div className="p-4 flex justify-between items-center border-b border-white/10">
              <Euro className="w-6 h-6 spin text-white" />
              <button onClick={() => setShowMobileMenu(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <button className="w-full text-left py-2 hover:text-white/70 transition-colors">{t.shopAll}</button>
              <button className="w-full text-left py-2 hover:text-white/70 transition-colors">{t.contact}</button>
              <button className="w-full text-left py-2 hover:text-white/70 transition-colors">{t.policies}</button>
            </div>
          </div>
        </div>
      )}

      <nav className="bg-black/50 backdrop-blur-lg border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <button className="md:hidden" onClick={() => setShowMobileMenu(true)}>
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <Home className="w-6 h-6 cursor-pointer hover:text-white/70 transition-colors" />
            <span className="text-sm cursor-pointer hover:text-white/70 transition-colors">{t.shopAll}</span>
            <span className="text-sm cursor-pointer hover:text-white/70 transition-colors">{t.contact}</span>
            <span className="text-sm cursor-pointer hover:text-white/70 transition-colors">{t.policies}</span>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Euro className="w-8 h-8 spin text-white" />
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center space-x-2 hover:text-white/70 transition-colors"
              >
                <Globe className="w-6 h-6" />
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 py-2 w-32 bg-black border border-white/10 rounded-lg shadow-xl">
                  <button
                    onClick={() => { setLanguage('en'); setShowLanguageMenu(false); }}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-white/10"
                  >
                    English
                  </button>
                  <button
                    onClick={() => { setLanguage('sk'); setShowLanguageMenu(false); }}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-white/10"
                  >
                    Slovensky
                  </button>
                  <button
                    onClick={() => { setLanguage('de'); setShowLanguageMenu(false); }}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-white/10"
                  >
                    Deutsch
                  </button>
                  <button
                    onClick={() => { setLanguage('cs'); setShowLanguageMenu(false); }}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-white/10"
                  >
                    Česky
                  </button>
                </div>
              )}
            </div>
            <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-white/70 transition-colors" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] mb-4 bg-black rounded-2xl overflow-hidden">
                <img 
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity group-hover:opacity-80"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 text-xs rounded-full font-medium tracking-wider">
                  {t.preOrder}
                </div>
              </div>
              <h3 className="text-lg font-bold tracking-wider">{product.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{formatPrice(product.price)}</p>
            </div>
          ))}
        </div>
      </main>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-start md:items-center justify-center z-50">
          <div className="w-full h-full md:h-auto md:max-w-5xl bg-[#111] md:border md:border-white/10 md:rounded-2xl p-4 md:p-8 overflow-y-auto md:overflow-visible">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="fixed top-4 right-4 z-50 md:hidden bg-black/50 p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <div 
                  ref={imageRef}
                  className="aspect-square bg-black rounded-2xl overflow-hidden image-magnifier"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                >
                  <img 
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="magnifier-glass hidden md:block"
                    style={{
                      display: showMagnifier ? 'block' : 'none',
                      left: `${magnifierPosition.x}px`,
                      top: `${magnifierPosition.y}px`,
                    }}
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {selectedProduct.images.map((img, idx) => (
                    img && (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-20 h-20 bg-black rounded-lg overflow-hidden ${currentImageIndex === idx ? 'ring-2 ring-white' : 'opacity-50'}`}
                      >
                        <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    )
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-wider">{selectedProduct.name}</h2>
                  <p className="text-xl mt-2">{formatPrice(selectedProduct.price)}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-3">{t.size}</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {['S', 'M', 'L', 'XL'].map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size as Size)}
                          className={`py-3 rounded-lg border ${
                            selectedSize === size 
                              ? 'border-white bg-white text-black' 
                              : 'border-white/20 hover:border-white/40'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">{t.productInfo}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {selectedProduct.description[language]}
                    </p>
                  </div>

                  <button 
                    onClick={handlePreOrder}
                    className="w-full bg-white text-black py-4 rounded-lg font-medium hover:bg-white/90 transition-colors"
                  >
                    {t.preOrder} - {t.size} {selectedSize}
                  </button>
                  
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="w-full border border-white/20 py-4 rounded-lg hover:bg-white/10 transition-colors hidden md:block"
                  >
                    {t.close}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/sendxmrs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <div className="text-center text-sm text-gray-400 mt-8">
            © 2024, ESONLINE
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;