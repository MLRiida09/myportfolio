import React, { useState } from "react";
import {services ,Service ,LucideIcon} from '../../../../assets/assets';


const ServicesPage: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (serviceId: number): void => {
    setFlippedCards((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <main className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen pt-16 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            خدماتي المهنية
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            مجموعة متنوعة من الخدمات الاحترافية التي أقدمها • اضغط على أي بطاقة لمشاهدة التفاصيل
          </p>
          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">متاح للعمل</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-4 gap-8">
          {services.map((service: Service, index: number) => {
            const Icon: LucideIcon = service.icon;
            const isFlipped: boolean = flippedCards.includes(service.id);

            return (
              <div
                key={service.id}
                className="group perspective-1000 cursor-pointer"
                onClick={() => toggleFlip(service.id)}
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div
                  className={`relative w-full h-80 transform-style-preserve-3d transition-transform duration-700 ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* الوجه الأمامي للبطاقة */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className={`h-full bg-gradient-to-br ${service.bgGradient} backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20`}>
                      {/* رأس البطاقة */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-white/10 ${service.color} backdrop-blur-sm`}>
                          <Icon size={28} />
                        </div>
                      </div>

                      {/* محتوى البطاقة */}
                      <div className="flex flex-col h-full">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                          {service.description}
                        </p>
                        {/* مؤشر القلب */}
                        <div className="text-center mt-4">
                          <span className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                            Click for details
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* الوجه الخلفي للبطاقة */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className={`h-full bg-gradient-to-br ${service.bgGradient} backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl`}>
                      {/* رأس البطاقة الخلفية */}
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-lg font-bold text-white">{service.title}</h4>
                      </div>
                      {/* الوصف الكامل */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {service.description2}
                      </p>
                      {/* معلومات إضافية */}
                      <div className="mt-auto">
                        <div className="text-center mt-4">
                          <span className="text-xs text-gray-500">
                            اضغط للعودة ←
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">
            مهتم بأحد الخدمات؟ تواصل معي لمناقشة مشروعك
          </p>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </main>
  );
};

export default ServicesPage;