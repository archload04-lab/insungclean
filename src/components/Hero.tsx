"use client";

import { useState, useEffect } from "react";

const badges = ["주방 막힘", "변기 막힘", "하수구 악취", "누수 탐지", "정화조 청소"];

export default function Hero() {
  const [count, setCount] = useState(0);
  const [activeBadge, setActiveBadge] = useState(0);

  useEffect(() => {
    const target = 15000;
    const step = target / (2000 / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveBadge(v => (v + 1) % badges.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-[#020e2b]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a5e] via-[#0073f5]/80 to-[#001a5e] opacity-90" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          지금 출동 가능 &nbsp;·&nbsp;
          <span className="text-yellow-300 font-bold">평균 출동 30분</span>
        </div>

        {/* Rotating problem badges */}
        <div className="flex justify-center mb-6">
          <div className="relative h-10 overflow-hidden">
            {badges.map((b, i) => (
              <div key={b} className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                i === activeBadge ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                <span className="bg-red-500/80 backdrop-blur-sm text-white text-sm font-bold px-4 py-1.5 rounded-full">
                  🚨 {b} 해결
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          배관 막힘?
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-white">
            지금 바로 해결
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          15년 경력 전문 기술자가 <strong className="text-white">30분 내 출동</strong>,
          <br className="hidden sm:block" />
          당일 해결 보장 · 투명 견적 · 3개월 A/S 보증
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="tel:1588-0000"
            className="group relative flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-extrabold py-5 px-10 rounded-full text-xl transition-all duration-200 shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            긴급출동
            <span className="text-yellow-200">1588-0000</span>
          </a>
          <a href="#contact"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-5 px-8 rounded-full text-lg border border-white/20 transition-all duration-200 hover:-translate-y-1">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            무료 견적 신청
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: count.toLocaleString() + "+", label: "누적 시공 건수" },
            { value: "15년+", label: "업계 경력" },
            { value: "4.9 ⭐", label: "고객 만족도" },
            { value: "30분", label: "평균 출동" },
          ].map((s, i) => (
            <div key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
              <div className="text-2xl sm:text-3xl font-extrabold text-yellow-300">{s.value}</div>
              <div className="text-blue-200/70 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs tracking-widest uppercase">scroll</span>
        <div className="w-5 h-9 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
