import React, { useState } from "react";
import { services, Service, LucideIcon } from '../../../../assets/assets';

const ServicesDesktop: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(1);

  return (
    <main className="w-full h-screen text-white px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">


        {/* Services Layout */}
        <div className="h-full flex gap-10 items-center justify-center">
          {/* Left Side - Service Menu */}
          <div className="w-2/5 flex flex-col">
            <div className="space-y-4">
              {services.map((service: Service, index: number) => {
                const Icon: LucideIcon = service.icon;
                const isActive = activeService === service.id;

                return (
                  <div
                    key={service.id}
                    className={`
                      flex items-center p-6 cursor-pointer rounded-xl
                      border transition-all duration-300
                      ${isActive 
                        ? 'border-gray-400 bg-gradient-to-r from-gray-800 to-gray-700 scale-[1.02]' 
                        : 'border-gray-600 hover:border-gray-500 hover:bg-gray-800/30'
                      }
                    `}
                    onClick={() => setActiveService(service.id)}
                    style={{
                      animation: `slideInLeft 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className={`
                      p-3 rounded-lg mr-4 ${service.color}
                      ${isActive ? 'bg-white/20 scale-110' : 'bg-white/10'}
                      transition-all duration-300
                    `}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`
                        font-semibold text-lg mb-1 transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-gray-300'}
                      `}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        Service 0{service.id}
                      </p>
                    </div>
                    <div className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${isActive ? 'bg-white scale-125' : 'bg-gray-600'}
                    `} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Active Service Details */}
          <div className="w-3/5">
            {services
              .filter(service => service.id === activeService)
              .map((service: Service) => {
                const Icon: LucideIcon = service.icon;

                return (
                  <div
                    key={service.id}
                    className="transition-all duration-500 ease-in-out opacity-100 transform translate-y-0"
                  >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-600 p-10 h-full flex flex-col justify-center">
                      {/* Large Icon */}
                      <div className={`
                        inline-flex p-6 rounded-2xl ${service.color} bg-white/10 
                        mb-8 self-start transition-all duration-300
                      `}>
                        <Icon size={48} />
                      </div>

                      {/* Content */}
                      <h2 className="text-4xl font-bold mb-6 text-white">
                        {service.title}
                      </h2>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Additional Info */}
                      <div className="border-t border-gray-600 pt-6 mt-auto">
                        <h4 className="text-base font-semibold text-gray-300 mb-3">Details</h4>
                        <p className="text-gray-400 text-base leading-relaxed">
                          {service.description2}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>


      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </main>
  );
};

export default ServicesDesktop;