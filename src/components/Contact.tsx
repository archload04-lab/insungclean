"use client";

import { useState } from "react";

const serviceOptions = [
  { id: "drain", label: "하수구 막힘", icon: "🚰" },
  { id: "leak", label: "누수 탐지", icon: "💧" },
  { id: "sink", label: "싱크대 막힘", icon: "🍽️" },
  { id: "toilet", label: "변기 막힘", icon: "🚽" },
  { id: "bath", label: "욕실 배수구", icon: "🛁" },
  { id: "pipe", label: "배관 고압세척", icon: "🔧" },
  { id: "waterproof", label: "옥상 방수", icon: "🏠" },
  { id: "pump", label: "배수펌프", icon: "⚡" },
  { id: "septic", label: "정화조 청소", icon: "🧹" },
];

const placeTypes = ["아파트", "빌라", "주택", "오피스텔", "상가", "공장/창고", "기타"];
const regions = ["서울", "경기", "인천", "부산", "대구", "대전", "광주", "기타"];

type Step = 1 | 2 | 3;

export default function Contact() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    isFirstVisit: "" as "yes" | "no" | "",
    services: [] as string[],
    placeType: "",
    region: "",
    address: "",
    isUrgent: "" as "yes" | "no" | "",
    phone: "",
    visitDate: "",
    requestedTech: "",
    message: "",
    eventAccount: "",
    eventName: "",
  });

  const toggleService = (id: string) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(id)
        ? f.services.filter(s => s !== id)
        : [...f.services, id],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const canNext1 = form.isFirstVisit && form.services.length > 0 && form.placeType && form.region;
  const canNext2 = form.address && form.isUrgent && form.phone.length >= 10;

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-blue-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3">견적 요청이 완료됐습니다!</h3>
            <p className="text-gray-500 mb-2">담당자가 <strong className="text-[#0073f5]">10분 이내</strong>로 연락드립니다.</p>
            <p className="text-gray-400 text-sm mb-8">급하시면 <a href="tel:1588-0000" className="text-[#0073f5] font-bold underline">1588-0000</a>으로 바로 전화해 주세요.</p>
            <button
              onClick={() => { setSubmitted(false); setStep(1); setForm({ isFirstVisit: "", services: [], placeType: "", region: "", address: "", isUrgent: "", phone: "", visitDate: "", requestedTech: "", message: "", eventAccount: "", eventName: "" }); }}
              className="bg-[#0073f5] hover:bg-[#0058c4] text-white font-bold py-3 px-8 rounded-full transition-all"
            >
              새 견적 요청
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-[#0073f5] text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            무료 견적 문의
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            지금 바로 견적을 받아보세요
          </h2>
          <p className="text-gray-500 text-lg">접수 후 <strong className="text-[#0073f5]">10분 이내</strong> 담당자가 연락드립니다</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {([1, 2, 3] as Step[]).map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                step === s ? "bg-[#0073f5] text-white shadow-lg shadow-blue-300 scale-110"
                : step > s ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-500"
              }`}>
                {step > s ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : s}
              </div>
              <span className={`text-sm font-medium hidden sm:block ${step === s ? "text-[#0073f5]" : "text-gray-400"}`}>
                {s === 1 ? "서비스 선택" : s === 2 ? "방문 정보" : "상세 정보"}
              </span>
              {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-green-400" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

            {/* ─── STEP 1 ─── */}
            {step === 1 && (
              <div className="p-8 sm:p-10 space-y-8">
                {/* First visit */}
                <div>
                  <label className="block text-base font-bold text-gray-800 mb-3">
                    처음 이용하시나요? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { val: "yes", label: "처음 이용합니다", icon: "👋" },
                      { val: "no", label: "이전에도 이용했어요", icon: "😊" },
                    ].map(opt => (
                      <button key={opt.val} type="button"
                        onClick={() => setForm(f => ({ ...f, isFirstVisit: opt.val as "yes" | "no" }))}
                        className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all font-medium text-sm ${
                          form.isFirstVisit === opt.val
                            ? "border-[#0073f5] bg-blue-50 text-[#0073f5]"
                            : "border-gray-200 hover:border-gray-300 text-gray-600"
                        }`}>
                        <span className="text-xl">{opt.icon}</span>{opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service selection */}
                <div>
                  <label className="block text-base font-bold text-gray-800 mb-3">
                    서비스 선택 <span className="text-red-500">*</span>
                    <span className="ml-2 text-sm font-normal text-gray-400">(복수 선택 가능)</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {serviceOptions.map(opt => (
                      <button key={opt.id} type="button"
                        onClick={() => toggleService(opt.id)}
                        className={`flex flex-col items-center gap-1.5 p-3 sm:p-4 rounded-2xl border-2 transition-all text-xs sm:text-sm font-medium ${
                          form.services.includes(opt.id)
                            ? "border-[#0073f5] bg-blue-50 text-[#0073f5] shadow-md"
                            : "border-gray-200 hover:border-gray-300 text-gray-600"
                        }`}>
                        <span className="text-2xl">{opt.icon}</span>
                        <span className="text-center leading-tight">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Place type */}
                <div>
                  <label className="block text-base font-bold text-gray-800 mb-3">
                    장소 유형 <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {placeTypes.map(p => (
                      <button key={p} type="button"
                        onClick={() => setForm(f => ({ ...f, placeType: p }))}
                        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                          form.placeType === p
                            ? "border-[#0073f5] bg-[#0073f5] text-white"
                            : "border-gray-200 hover:border-gray-300 text-gray-600"
                        }`}>{p}</button>
                    ))}
                  </div>
                </div>

                {/* Region */}
                <div>
                  <label className="block text-base font-bold text-gray-800 mb-3">
                    지역 <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {regions.map(r => (
                      <button key={r} type="button"
                        onClick={() => setForm(f => ({ ...f, region: r }))}
                        className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                          form.region === r
                            ? "border-[#0073f5] bg-[#0073f5] text-white"
                            : "border-gray-200 hover:border-gray-300 text-gray-600"
                        }`}>{r}</button>
                    ))}
                  </div>
                </div>

                <button type="button" onClick={() => setStep(2)} disabled={!canNext1}
                  className="w-full bg-[#0073f5] hover:bg-[#0058c4] disabled:bg-gray-200 disabled:text-gray-400 text-white font-extrabold py-4 rounded-2xl text-lg transition-all shadow-lg hover:shadow-xl disabled:shadow-none">
                  다음 단계 →
                </button>
              </div>
            )}

            {/* ─── STEP 2 ─── */}
            {step === 2 && (
              <div className="p-8 sm:p-10 space-y-7">
                <div>
                  <label className="block text-base font-bold text-gray-800 mb-1.5">
                    상세 주소 <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={form.address}
                    onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
                    placeholder={`${form.region || "서울"} · ${form.placeType || "아파트"} 상세 주소 입력`}
                    className="w-full border-2 border-gray-200 focus:border-[#0073f5] rounded-2xl px-5 py-3.5 outline-none transition-colors text-gray-800 placeholder-gray-400" />
                </div>

                <div>
                  <label className="block text-base font-bold text-gray-800 mb-3">
                    즉시 방문이 필요하신가요? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { val: "yes", label: "네, 즉시 방문해주세요!", icon: "🚨", sub: "30분 내 출동" },
                      { val: "no", label: "아니요, 날짜 지정할게요", icon: "📅", sub: "원하는 일정에" },
                    ].map(opt => (
                      <button key={opt.val} type="button"
                        onClick={() => setForm(f => ({ ...f, isUrgent: opt.val as "yes" | "no" }))}
                        className={`flex flex-col items-start gap-1 p-5 rounded-2xl border-2 transition-all ${
                          form.isUrgent === opt.val
                            ? "border-[#0073f5] bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}>
                        <span className="text-2xl">{opt.icon}</span>
                        <span className={`font-bold text-sm ${form.isUrgent === opt.val ? "text-[#0073f5]" : "text-gray-700"}`}>{opt.label}</span>
                        <span className="text-xs text-gray-400">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                  {form.isUrgent === "no" && (
                    <div className="mt-3">
                      <input type="date" value={form.visitDate}
                        onChange={e => setForm(f => ({ ...f, visitDate: e.target.value }))}
                        className="w-full border-2 border-gray-200 focus:border-[#0073f5] rounded-2xl px-5 py-3.5 outline-none transition-colors text-gray-800" />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-base font-bold text-gray-800 mb-1.5">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <input type="tel" value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    placeholder="010-0000-0000"
                    className="w-full border-2 border-gray-200 focus:border-[#0073f5] rounded-2xl px-5 py-3.5 outline-none transition-colors text-gray-800 placeholder-gray-400" />
                </div>

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)}
                    className="flex-1 border-2 border-gray-200 hover:border-gray-300 text-gray-600 font-bold py-4 rounded-2xl transition-all">
                    ← 이전
                  </button>
                  <button type="button" onClick={() => setStep(3)} disabled={!canNext2}
                    className="flex-[2] bg-[#0073f5] hover:bg-[#0058c4] disabled:bg-gray-200 disabled:text-gray-400 text-white font-extrabold py-4 rounded-2xl transition-all shadow-lg">
                    다음 단계 →
                  </button>
                </div>
              </div>
            )}

            {/* ─── STEP 3 ─── */}
            {step === 3 && (
              <div className="p-8 sm:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">담당 기사 요청 (선택)</label>
                    <input type="text" value={form.requestedTech}
                      onChange={e => setForm(f => ({ ...f, requestedTech: e.target.value }))}
                      placeholder="기사님 성함"
                      className="w-full border-2 border-gray-200 focus:border-[#0073f5] rounded-2xl px-5 py-3.5 outline-none transition-colors text-gray-800 placeholder-gray-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">문의 및 요청사항 (선택)</label>
                    <input type="text" value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="증상, 요청사항 등"
                      className="w-full border-2 border-gray-200 focus:border-[#0073f5] rounded-2xl px-5 py-3.5 outline-none transition-colors text-gray-800 placeholder-gray-400" />
                  </div>
                </div>

                {/* Event section */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">🎉</span>
                    <span className="font-extrabold text-orange-600">5% 페이백 이벤트 진행 중!</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">계좌번호와 성함을 입력하시면 시공 완료 후 5%를 돌려드립니다.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input type="text" value={form.eventAccount}
                      onChange={e => setForm(f => ({ ...f, eventAccount: e.target.value }))}
                      placeholder="입금받을 계좌번호"
                      className="border-2 border-yellow-200 focus:border-orange-400 rounded-xl px-4 py-3 outline-none text-sm bg-white placeholder-gray-400 text-gray-800" />
                    <input type="text" value={form.eventName}
                      onChange={e => setForm(f => ({ ...f, eventName: e.target.value }))}
                      placeholder="예금주 성함"
                      className="border-2 border-yellow-200 focus:border-orange-400 rounded-xl px-4 py-3 outline-none text-sm bg-white placeholder-gray-400 text-gray-800" />
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 rounded-2xl p-5 space-y-2 text-sm">
                  <p className="font-bold text-gray-700 mb-3">📋 요청 내용 확인</p>
                  <div className="grid grid-cols-2 gap-y-2 text-gray-600">
                    <span className="text-gray-400">서비스</span>
                    <span className="font-medium">{form.services.map(id => serviceOptions.find(s => s.id === id)?.label).join(", ") || "-"}</span>
                    <span className="text-gray-400">장소</span>
                    <span className="font-medium">{form.placeType} · {form.region}</span>
                    <span className="text-gray-400">긴급출동</span>
                    <span className="font-medium">{form.isUrgent === "yes" ? "🚨 즉시 출동" : `📅 ${form.visitDate || "날짜 미정"}`}</span>
                    <span className="text-gray-400">연락처</span>
                    <span className="font-medium">{form.phone}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)}
                    className="flex-1 border-2 border-gray-200 hover:border-gray-300 text-gray-600 font-bold py-4 rounded-2xl transition-all">
                    ← 이전
                  </button>
                  <button type="submit" disabled={loading}
                    className="flex-[2] bg-[#0073f5] hover:bg-[#0058c4] disabled:bg-gray-300 text-white font-extrabold py-4 rounded-2xl text-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                    {loading ? (
                      <><svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>접수 중...</>
                    ) : "견적 요청하기 ✓"}
                  </button>
                </div>
                <p className="text-center text-xs text-gray-400">개인정보는 견적 목적으로만 사용되며 제3자에게 제공되지 않습니다.</p>
              </div>
            )}
          </div>
        </form>

        {/* Emergency CTA */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-red-600 text-lg">🚨 지금 당장 막혔나요?</p>
            <p className="text-red-400 text-sm">양식보다 전화가 훨씬 빠릅니다!</p>
          </div>
          <a href="tel:1588-0000"
            className="bg-red-500 hover:bg-red-600 text-white font-extrabold py-3 px-8 rounded-full transition-all shadow-lg whitespace-nowrap">
            📞 1588-0000 바로 전화
          </a>
        </div>
      </div>
    </section>
  );
}
