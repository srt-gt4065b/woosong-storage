import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            찾아오시는 길
          </h2>
          <p className="text-lg text-gray-600">
            대전의 중심부에 위치한 가치공간
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Area */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.8679634820066!2d127.3846853!3d36.3504689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7fb9a2e9b9b9%3A0x1!2z66as7JeB7JuV67OEIOu2gOu5hOydtCDrlpzroZzrr7w!5e0!3m2!1sko!2skr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                가치공간 대전우송대점
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">주소</h4>
                    <p className="text-gray-600">
                      대전광역시 서구 문정로 193번길 15<br/>
                      (가까운 지하철: 중앙로역)
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">연락처</h4>
                    <p className="text-gray-600">
                      042-XXX-XXXX<br/>
                      평일 09:00 ~ 18:00
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <Clock className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">운영시간</h4>
                    <p className="text-gray-600">
                      평일: 09:00 - 18:00<br/>
                      토요일: 10:00 - 16:00<br/>
                      일요일: 휴무
                    </p>
                  </div>
                </div>

                {/* Parking */}
                <div className="flex gap-4">
                  <Navigation className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">주차</h4>
                    <p className="text-gray-600">
                      무료 주차장 완비<br/>
                      20대 이상 주차 가능
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-primary-600 text-white py-4 rounded-lg hover:bg-primary-700 transition font-semibold text-lg">
              방문 예약하기
            </button>

            {/* Public Transportation */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-slate-900 mb-4">대중교통</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>🚇 지하철: 중앙로역 2번 출구 도보 10분</p>
                <p>🚌 버스: 65, 101, 201번 정류소 근처</p>
                <p>🚗 자차: 네비게이션에 주소 입력하시면 안내됩니다</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-primary-50 p-6 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">근처 시설</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ GS편의점</li>
              <li>✓ 카페</li>
              <li>✓ 식당</li>
            </ul>
          </div>
          <div className="bg-primary-50 p-6 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">주변 학교</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ 우송대학교</li>
              <li>✓ 대전고등학교</li>
              <li>✓ 중앙초등학교</li>
            </ul>
          </div>
          <div className="bg-primary-50 p-6 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">접근성</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✓ 휠체어 접근 가능</li>
              <li>✓ 엘리베이터</li>
              <li>✓ 장애인 화장실</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
