import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: '기본형',
      size: '3평',
      price: '49,900',
      period: '월',
      description: '개인용 물품 보관에 최적',
      features: [
        '3평 규모의 보관 공간',
        '24/7 출입 가능',
        '기본 보안 시스템',
        'CCTV 감시',
        '온습도 관리'
      ],
      highlighted: false
    },
    {
      name: '프리미엄',
      size: '5평',
      price: '79,900',
      period: '월',
      description: '소규모 사업용에 추천',
      features: [
        '5평 규모의 보관 공간',
        '24/7 출입 가능',
        '고급 보안 시스템',
        'CCTV 감시',
        '온습도 관리',
        '출입 기록 앱 조회',
        '우선 고객 지원'
      ],
      highlighted: true
    },
    {
      name: '엔터프라이즈',
      size: '10평',
      price: '139,900',
      period: '월',
      description: '대규모 보관에 최적',
      features: [
        '10평 규모의 보관 공간',
        '24/7 출입 가능',
        'VIP 보안 시스템',
        'CCTV 감시',
        '온습도 관리',
        '출입 기록 앱 조회',
        '전담 매니저 배정',
        '무료 배송 서비스'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            합리적인 가격으로 시작하세요
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            당신의 필요에 맞는 완벽한 요금제를 선택하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition ${
                plan.highlighted
                  ? 'bg-primary-600 text-white shadow-xl scale-105'
                  : 'bg-white text-slate-900 shadow-md'
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={plan.highlighted ? 'text-primary-100' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">₩{plan.price}</span>
                  <span className={plan.highlighted ? 'text-primary-100' : 'text-gray-600'}>/{plan.period}</span>
                </div>
                <p className={`text-sm mt-2 ${plan.highlighted ? 'text-primary-100' : 'text-gray-600'}`}>
                  {plan.size} 보관 공간
                </p>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plan.highlighted
                    ? 'bg-white text-primary-600 hover:bg-gray-100'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                지금 가입하기
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check size={20} className={plan.highlighted ? 'text-primary-100' : 'text-primary-600'} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            자주 묻는 질문
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">계약 기간은?</h4>
              <p className="text-gray-600">최소 1개월부터 시작하며, 언제든지 해지할 수 있습니다.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">보증금은?</h4>
              <p className="text-gray-600">보증금 없이 월 요금만으로 시작할 수 있습니다.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">추가 요금이 있나요?</h4>
              <p className="text-gray-600">숨겨진 비용 없이 명시된 가격이 전부입니다.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">언제부터 사용 가능?</h4>
              <p className="text-gray-600">가입 후 즉시 보관 공간을 이용할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
