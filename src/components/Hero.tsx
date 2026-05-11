"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = 15000;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003d99] via-[#0073f5] to-[#00a8ff]" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      {/* Pipe illustration overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none">
          <path d="M0 400 Q360 200 720 400 Q1080 600 1440 400" stroke="white" strokeWidth="3" fill="none" strokeDasharray="10 5"/>
          <path d="M0 500 Q360 300 720 500 Q1080 700 1440 500" stroke="white" strokeWidth="2" fill="none" strokeDasharray="8 4"/>
          <circle cx="200" cy="400" r="20" stroke="white" strokeWidth="3" fill="none"/>
          <circle cx="720" cy="400" r="20" stroke="white" strokeWidth="3" fill="none"/>
          <circle cx="1240" cy="400" r="20" stroke="white" strokeWidth="3" fill="none"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          24시간 긴급출동 가능
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          배관 막힘?
          <br />
          <span className="text-yellow-300">지금 바로</span> 해결합니다
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          15년 경력의 전문 기술자가 <strong className="text-white">당일 출동</strong>으로 처리합니다.
          <br className="hidden sm:block" />
          주방·욕실·하수구·변기 막힘 완벽 해결 보장!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="tel:1588-0000"
            className="group flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-extrabold py-5 px-10 rounded-full text-xl transition-all duration-200 shadow-2xl hover:shadow-red-500/50 hover:-translate-y-1"
          >
            <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            긴급출동 전화하기
            <span className="text-yellow-200 text-lg">1588-0000</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-5 px-8 rounded-full text-lg border border-white/30 transition-all duration-200 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            무료 견적 문의
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: count.toLocaleString() + "+", label: "누적 시공 건수" },
            { value: "15년+", label: "업력" },
            { value: "4.9점", label: "고객 만족도" },
            { value: "30분", label: "평균 출동 시간" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <div className="text-2xl sm:text-3xl font-extrabold text-yellow-300">{stat.value}</div>
              <div className="text-blue-100 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs">스크롤</span>
        <div className="w-px h-10 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
