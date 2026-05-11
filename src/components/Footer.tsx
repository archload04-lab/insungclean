export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#0073f5] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div>
                <span className="text-white text-xl font-extrabold">인성클린</span>
                <p className="text-gray-500 text-xs">배관청소 전문업체</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              15년 경력의 배관청소 전문업체 인성클린입니다.
              <br />
              365일 24시간 전국 어디든 출동합니다.
            </p>
            <a
              href="tel:1588-0000"
              className="inline-flex items-center gap-2 bg-[#0073f5] text-white font-bold py-2.5 px-6 rounded-full text-sm transition-all hover:bg-[#0058c4]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              1588-0000
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              {[
                "주방 하수구 청소",
                "욕실 배수구 청소",
                "변기 막힘 해결",
                "하수관 고압세척",
                "옥상 방수 공사",
                "배관 누수 탐지",
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-bold mb-4">회사 정보</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-gray-500 block text-xs">상호명</span>
                인성클린
              </li>
              <li>
                <span className="text-gray-500 block text-xs">대표자</span>
                홍길동
              </li>
              <li>
                <span className="text-gray-500 block text-xs">사업자등록번호</span>
                000-00-00000
              </li>
              <li>
                <span className="text-gray-500 block text-xs">주소</span>
                서울특별시 강남구 테헤란로 123
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {currentYear} 인성클린. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:1588-0000"
          className="flex items-center justify-center w-14 h-14 bg-[#0073f5] hover:bg-[#0058c4] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1"
          aria-label="전화하기"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1"
          aria-label="문의하기"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
