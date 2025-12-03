import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 실제 전송 로직을 추가할 수 있습니다
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            문의하기
          </h2>
          <p className="text-lg text-gray-600">
            무엇이든 물어보세요. 저희 팀이 즉시 답변해드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-2xl p-8 shadow-md text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-primary-600" size={28} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">전화</h3>
            <p className="text-gray-600 mb-4">042-XXX-XXXX</p>
            <p className="text-sm text-gray-600">평일 09:00 ~ 18:00</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-primary-600" size={28} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">이메일</h3>
            <p className="text-gray-600 mb-4">info@gachi.co.kr</p>
            <p className="text-sm text-gray-600">24시간 내 답변</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="text-primary-600" size={28} />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">카톡 상담</h3>
            <p className="text-gray-600 mb-4">@gachigonggan</p>
            <p className="text-sm text-gray-600">실시간 채팅</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                전송되었습니다!
              </h3>
              <p className="text-gray-600">
                빠른 시간 내에 연락드리겠습니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                    placeholder="성함을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  연락처 *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                  placeholder="010-1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  문의 유형 *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                >
                  <option value="">선택하세요</option>
                  <option value="reservation">예약 관련</option>
                  <option value="pricing">요금 문의</option>
                  <option value="service">서비스 문의</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  문의 내용 *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                  placeholder="문의 내용을 입력하세요"
                ></textarea>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="agree" required className="w-4 h-4" />
                <label htmlFor="agree" className="text-sm text-gray-600">
                  개인정보 수집 및 이용에 동의합니다
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
              >
                문의 전송하기
              </button>
            </form>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            빠른 상담이 필요하신가요?
          </h3>
          <p className="text-gray-600 mb-6">
            전화로 바로 상담받으실 수 있습니다.
          </p>
          <a
            href="tel:042XXXXXXX"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
          >
            전화로 상담받기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
