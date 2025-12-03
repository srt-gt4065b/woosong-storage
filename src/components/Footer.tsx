import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">가치공간</h3>
            <p className="text-gray-400 text-sm">
              프리미엄 셀프 스토리지 서비스로 
              당신의 삶을 더 풍요롭게 만듭니다.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition text-sm">
                  서비스 소개
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition text-sm">
                  요금 정보
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-400 hover:text-white transition text-sm">
                  오시는 길
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition text-sm">
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">회사정보</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  채용 정보
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  블로그
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                  뉴스
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start text-sm">
                <Phone size={16} className="flex-shrink-0 mt-1" />
                <span>042-XXX-XXXX</span>
              </li>
              <li className="flex gap-2 items-start text-sm">
                <Mail size={16} className="flex-shrink-0 mt-1" />
                <span>info@gachi.co.kr</span>
              </li>
              <li className="flex gap-2 items-start text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>
                  대전광역시 서구 문정로 193번길 15
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">
              이용약관
            </a>
            <a href="#" className="hover:text-white transition">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-white transition">
              쿠키정책
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2024 가치공간. All rights reserved.</p>
          </div>

          {/* Additional Info */}
          <div className="text-right text-sm text-gray-400">
            <p>사업자등록번호: XXX-XX-XXXXX</p>
            <p>통신판매신고번호: 제XXXX-대전서구-XXXX호</p>
          </div>
        </div>

        {/* Top Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition text-sm"
          >
            위로 올라가기 ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
