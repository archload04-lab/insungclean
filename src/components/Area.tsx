const areas = [
  "서울 전 지역",
  "경기 전 지역",
  "인천 전 지역",
  "부산 전 지역",
  "대구",
  "대전",
  "광주",
  "수원",
  "성남/분당",
  "고양/일산",
  "용인",
  "남양주",
];

export default function Area() {
  return (
    <section id="area" className="py-24 bg-gradient-to-br from-[#0073f5] to-[#003d99] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            서비스 지역
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            전국 어디든 출동합니다
          </h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            수도권 30분 내, 지방은 당일 출동을 원칙으로 합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-3 px-4 text-center font-medium text-sm hover:bg-white/20 transition-colors cursor-default"
            >
              {area}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-100 mb-6">지역이 보이지 않으신가요? 전화로 확인해 드립니다!</p>
          <a
            href="tel:1588-0000"
            className="inline-flex items-center gap-2 bg-white text-[#0073f5] hover:bg-blue-50 font-extrabold py-4 px-10 rounded-full transition-all duration-200 text-lg shadow-2xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            1588-0000 전화 문의
          </a>
        </div>
      </div>
    </section>
  );
}
