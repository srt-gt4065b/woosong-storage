import React from 'react';
import { ArrowRight, Lock, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              안전하고 편리한
              <span className="text-primary-600"> 스토리지</span> 서비스
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              가치공간은 최첨단 보안 시스템과 편리한 접근성으로 
              당신의 소중한 물품을 완벽하게 보호합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-2">
                지금 예약하기
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition">
                자세히 알아보기
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary-600">24/7</p>
                <p className="text-sm text-gray-600">접근 가능</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">100%</p>
                <p className="text-sm text-gray-600">보안 보증</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">1000+</p>
                <p className="text-sm text-gray-600">고객 만족</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-primary-100 rounded-3xl p-8 min-h-400">
              <div className="bg-white rounded-2xl p-8 space-y-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <Lock size={32} className="text-primary-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">보안 잠금</h3>
                    <p className="text-sm text-gray-600">24시간 보호</p>
                  </div>
                </div>
                
                <div className="w-full h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg"></div>
                
                <div className="flex items-center gap-4">
                  <Shield size={32} className="text-primary-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">CCTV 감시</h3>
                    <p className="text-sm text-gray-600">완벽한 모니터링</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    ✓ 최첨단 보안 시스템<br/>
                    ✓ 온습도 관리<br/>
                    ✓ 접근 제한 시스템
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
