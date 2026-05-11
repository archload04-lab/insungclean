"use client";

import { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Mode = "login" | "signup" | "forgot";

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [mode, setMode] = useState<Mode>("login");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", name: "", phone: "", confirmPw: "" });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    if (mode === "forgot") { setDone(true); return; }
    onClose();
  };

  const change = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Top gradient bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#0073f5] via-blue-400 to-cyan-400" />

        <div className="p-8">
          {/* Close button */}
          <button onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 bg-[#0073f5] rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <span className="font-extrabold text-[#0073f5] text-lg">인성클린</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-extrabold text-gray-900 mb-1">
            {mode === "login" ? "로그인" : mode === "signup" ? "회원가입" : "비밀번호 찾기"}
          </h2>
          <p className="text-gray-400 text-sm mb-7">
            {mode === "login" ? "인성클린 서비스에 오신 것을 환영합니다" :
             mode === "signup" ? "가입하고 견적 내역을 편리하게 관리하세요" :
             "가입하신 이메일로 재설정 링크를 보내드립니다"}
          </p>

          {/* Forgot — done state */}
          {done ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0073f5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-bold text-gray-900 mb-2">이메일을 전송했습니다!</p>
              <p className="text-gray-400 text-sm mb-6">{form.email}로 재설정 링크를 보냈습니다.</p>
              <button onClick={() => { setMode("login"); setDone(false); }}
                className="text-[#0073f5] font-bold hover:underline text-sm">로그인으로 돌아가기</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Social login */}
              {mode !== "forgot" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <button type="button"
                      className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-2xl py-3 text-sm font-medium text-gray-700 transition-all">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Google
                    </button>
                    <button type="button"
                      className="flex items-center justify-center gap-2 bg-[#FEE500] hover:bg-yellow-300 rounded-2xl py-3 text-sm font-bold text-gray-900 transition-all">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3C6.48 3 2 6.48 2 10.8c0 2.7 1.5 5.1 3.8 6.6-.1.4-.7 2.4-.7 2.4s-.05.2.1.28a.37.37 0 00.35-.07l2.9-1.9A11 11 0 0012 18.6c5.52 0 10-3.48 10-7.8S17.52 3 12 3z"/>
                      </svg>
                      카카오 로그인
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-gray-400 font-medium">또는 이메일로</span>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                </>
              )}

              {/* Name (signup only) */}
              {mode === "signup" && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">이름</label>
                  <input type="text" required value={form.name} onChange={change("name")}
                    placeholder="홍길동"
                    className="w-full border-2 border-gray-200 focus:border-[#0073f5] rounded-2xl px-4 py-3 outline-none transition-colors text-gray-800 placeholder-gray-400 text-sm" />
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">이메일</label>
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input type="email" required value={form.email} onChange={change("email")}
                    placeholder="example@email.com"
                    className="w-full border-2 border-gray-200 focus:border-[#0073f5] rounded-2xl pl-10 pr-4 py-3 outline-none transition-colors text-gray-800 placeholder-gray-400 text-sm" />
                </div>
              </div>

              {/* Phone (signup only) */}
              {mode === "signup" && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">휴대폰</label>
                  <input type="tel" value={form.phone} onChange={change("phone")}
                    placeholder="010-0000-0000"
                    className="w-full border-2 border-gray-200 focus:border-[#0073f5] rounded-2xl px-4 py-3 outline-none transition-colors text-gray-800 placeholder-gray-400 text-sm" />
                </div>
              )}

              {/* Password */}
              {mode !== "forgot" && (
                <div>
                  <div className="flex justify-between mb-1.5">
                    <label className="text-sm font-bold text-gray-700">비밀번호</label>
                    {mode === "login" && (
                      <button type="button" onClick={() => setMode("forgot")}
                        className="text-xs text-[#0073f5] hover:underline">비밀번호 찾기</button>
                    )}
                  </div>
                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <input type={showPw ? "text" : "password"} required value={form.password} onChange={change("password")}
                      placeholder="비밀번호 입력"
                      className="w-full border-2 border-gray-200 focus:border-[#0073f5] rounded-2xl pl-10 pr-10 py-3 outline-none transition-colors text-gray-800 placeholder-gray-400 text-sm" />
                    <button type="button" onClick={() => setShowPw(v => !v)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showPw ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Confirm password (signup) */}
              {mode === "signup" && (
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">비밀번호 확인</label>
                  <input type="password" required value={form.confirmPw} onChange={change("confirmPw")}
                    placeholder="비밀번호 재입력"
                    className={`w-full border-2 rounded-2xl px-4 py-3 outline-none transition-colors text-gray-800 placeholder-gray-400 text-sm ${
                      form.confirmPw && form.confirmPw !== form.password ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-[#0073f5]"
                    }`} />
                  {form.confirmPw && form.confirmPw !== form.password && (
                    <p className="text-red-500 text-xs mt-1">비밀번호가 일치하지 않습니다.</p>
                  )}
                </div>
              )}

              {/* Submit */}
              <button type="submit" disabled={loading || (mode === "signup" && form.confirmPw !== form.password && form.confirmPw !== "")}
                className="w-full bg-[#0073f5] hover:bg-[#0058c4] disabled:bg-gray-200 disabled:text-gray-400 text-white font-extrabold py-3.5 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-2">
                {loading ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
                ) : mode === "login" ? "로그인" : mode === "signup" ? "가입하기" : "재설정 링크 보내기"}
              </button>

              {/* Mode switch */}
              <p className="text-center text-sm text-gray-500 mt-4">
                {mode === "login" ? (
                  <>계정이 없으신가요?{" "}
                    <button type="button" onClick={() => setMode("signup")} className="text-[#0073f5] font-bold hover:underline">회원가입</button>
                  </>
                ) : (
                  <>이미 계정이 있으신가요?{" "}
                    <button type="button" onClick={() => setMode("login")} className="text-[#0073f5] font-bold hover:underline">로그인</button>
                  </>
                )}
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
