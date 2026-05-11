"use client";

import { useState } from "react";

const reviews = [
  {
    name: "김○○",
    location: "서울 강남구",
    service: "주방 하수구 청소",
    rating: 5,
    date: "2024.03.15",
    text: "새벽 2시에 주방 하수구가 막혀서 급하게 전화했는데 30분 만에 오셨어요! 냄새도 없어지고 물도 잘 내려가네요. 가격도 합리적이고 기사님이 너무 친절하셨어요. 단골로 모실게요!",
  },
  {
    name: "박○○",
    location: "경기 수원시",
    service: "변기 막힘 해결",
    rating: 5,
    date: "2024.03.10",
    text: "아이가 장난감을 변기에 넣어서 완전히 막혀버렸어요. 다른 업체는 비용이 너무 비쌌는데 인성클린은 합리적인 가격에 깔끔하게 해결해 주셨습니다. 정말 감사합니다!",
  },
  {
    name: "이○○",
    location: "인천 부평구",
    service: "하수관 고압세척",
    rating: 5,
    date: "2024.02.28",
    text: "20년된 아파트라 하수관이 완전히 막혔었어요. 고압세척 후 물 내려가는 소리부터 달라졌습니다. 꼼꼼하게 작업하시고 정리도 깔끔하게 해주셔서 너무 좋았습니다.",
  },
  {
    name: "최○○",
    location: "서울 마포구",
    service: "욕실 배수구 청소",
    rating: 5,
    date: "2024.02.20",
    text: "욕실 배수구가 계속 막혀서 여러 번 시도했는데 안됐었어요. 기사님이 원인을 정확히 찾아주시고 해결해 주셨어요. 역시 전문가는 다르네요. 강력 추천합니다!",
  },
  {
    name: "정○○",
    location: "경기 고양시",
    service: "배관 누수 탐지",
    rating: 5,
    date: "2024.02.10",
    text: "수도 요금이 갑자기 많이 나와서 누수 탐지 의뢰했어요. 벽을 뜯지 않고도 정확한 위치를 찾아주셨고 수리까지 완벽하게 해주셨습니다. 전문 장비가 정말 대단하더라고요.",
  },
  {
    name: "윤○○",
    location: "서울 송파구",
    service: "정화조 청소",
    rating: 5,
    date: "2024.01.25",
    text: "매년 정기적으로 부탁드리는데 항상 냄새 없이 깔끔하게 처리해 주십니다. 직원분들도 모두 친절하시고 사후 관리도 잘 해주셔서 믿고 맡깁니다!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            ⭐ 실제 고객 후기
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            15,000명의 고객이 선택했습니다
          </h2>
          <p className="text-gray-500 text-lg">직접 서비스를 받은 고객분들의 생생한 후기를 확인해보세요.</p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm mt-6 border border-gray-100">
            <span className="text-4xl font-extrabold text-gray-900">4.9</span>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-500">후기 2,847개 기준</p>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, visibleCount).map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0073f5] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.location}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>

              <StarRating rating={review.rating} />

              <span className="inline-block mt-3 mb-3 bg-blue-50 text-[#0073f5] text-xs font-medium px-2.5 py-1 rounded-full">
                {review.service}
              </span>

              <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Load more */}
        {visibleCount < reviews.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount(reviews.length)}
              className="inline-flex items-center gap-2 border-2 border-[#0073f5] text-[#0073f5] hover:bg-[#0073f5] hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-200"
            >
              후기 더 보기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
