import React from 'react';
import { Smartphone, Clock, Users, Zap, MapPin, Award } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: '스마트 접근',
      description: '앱을 통해 언제 어디서나 쉽게 출입 관리'
    },
    {
      icon: Clock,
      title: '24시간 운영',
      description: '시간 제약 없이 자유롭게 이용 가능'
    },
    {
      icon: Users,
      title: '친절한 상담',
      description: '전문가 팀이 항상 준비되어 있습니다'
    },
    {
      icon: Zap,
      title: '빠른 설치',
      description: '간단한 절차로 신속하게 시작 가능'
    },
    {
      icon: MapPin,
      title: '편리한 위치',
      description: '대전시 중심부에 위치한 최적의 장소'
    },
    {
      icon: Award,
      title: '우수 평가',
      description: '업계 최고의 서비스 만족도 달성'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            왜 가치공간을 선택할까요?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            프리미엄 셀프 스토리지 서비스로 당신의 삶을 더 편리하게 만들어보세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition hover:-translate-y-1"
              >
                <div className="bg-primary-600 text-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold mb-2">2,000+</h4>
              <p>이용 중인 고객</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">4.9/5</h4>
              <p>평균 만족도</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-2">10년+</h4>
              <p>운영 경력</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
