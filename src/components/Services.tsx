"use client";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "주방 하수구 청소",
    description: "기름때, 음식물 찌꺼기로 막힌 주방 배수구를 고압 세척으로 완벽히 뚫어드립니다.",
    price: "30,000원~",
    tag: "인기",
    tagColor: "bg-orange-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "욕실 배수구 청소",
    description: "머리카락, 비누찌꺼기 등으로 막힌 욕실 배수구 전문 청소 서비스입니다.",
    price: "25,000원~",
    tag: "빠른출동",
    tagColor: "bg-blue-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: "변기 막힘 해결",
    description: "이물질, 물티슈 등으로 막힌 변기를 전문 장비로 신속하게 해결합니다.",
    price: "35,000원~",
    tag: "긴급",
    tagColor: "bg-red-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: "하수관 고압세척",
    description: "노후화된 하수관 내부를 고압 워터젯으로 완벽하게 세척합니다.",
    price: "80,000원~",
    tag: "전문",
    tagColor: "bg-purple-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "옥상 방수 공사",
    description: "빗물 누수, 크랙으로 인한 옥상 누수를 방수 시공으로 완벽히 차단합니다.",
    price: "견적 후 결정",
    tag: "시공",
    tagColor: "bg-green-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "배관 누수 탐지",
    description: "비파괴 장비를 활용해 벽체 속 누수 위치를 정밀하게 탐지합니다.",
    price: "50,000원~",
    tag: "정밀",
    tagColor: "bg-teal-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "건물 하수관 준설",
    description: "상가, 빌딩, 아파트 등 대형 건물의 하수관 준설 공사를 진행합니다.",
    price: "견적 후 결정",
    tag: "기업",
    tagColor: "bg-indigo-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "배수펌프 설치/수리",
    description: "지하 침수 예방을 위한 배수 펌프 설치 및 수리 서비스를 제공합니다.",
    price: "70,000원~",
    tag: "설치",
    tagColor: "bg-yellow-600",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "정화조 청소",
    description: "법정 정화조 청소 주기에 맞춰 전문 장비로 위생적으로 처리합니다.",
    price: "150,000원~",
    tag: "위생",
    tagColor: "bg-cyan-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-[#0073f5] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            전문 서비스
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            모든 배관 문제, 인성클린이 해결합니다
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            첨단 장비와 15년 노하우로 어떤 배관 문제도 당일 해결. 투명한 견적, 깔끔한 마무리.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden"
            >
              {/* Tag */}
              <span className={`absolute top-4 right-4 ${service.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                {service.tag}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-[#0073f5] text-[#0073f5] group-hover:text-white rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>

              {/* Price & CTA */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-[#0073f5] font-bold text-sm">{service.price}</span>
                <a
                  href="tel:1588-0000"
                  className="text-sm font-medium text-gray-500 hover:text-[#0073f5] flex items-center gap-1 transition-colors"
                >
                  문의하기
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">원하는 서비스가 없으신가요?</p>
          <a
            href="tel:1588-0000"
            className="inline-flex items-center gap-2 bg-[#0073f5] hover:bg-[#0058c4] text-white font-bold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            전화로 문의하기 1588-0000
          </a>
        </div>
      </div>
    </section>
  );
}
