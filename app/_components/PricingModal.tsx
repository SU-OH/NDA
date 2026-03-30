"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface PricingModalProps {
  open: boolean;
  onClose: () => void;
}

const pricingData = [
  {
    number: "01",
    title: "기업소개 웹사이트",
    subtitle: "Corporate Website",
    pages: "5 ~ 7 페이지",
    price: "약 50만원",
    extra: "+ α",
    details: [
      "회사 소개 / 연혁",
      "서비스 / 제품 안내",
      "오시는 길 / 연락처",
      "반응형 디자인",
      "SEO 기본 설정",
    ],
    note: "페이지 추가 시 1페이지당 ₩100,000",
  },
  {
    number: "02",
    title: "쇼핑몰",
    subtitle: "E-Commerce",
    pages: "15 ~ 20 페이지",
    price: "약 200만원",
    extra: "+ α",
    details: [
      "상품 등록 / 관리",
      "장바구니 / 결제 시스템",
      "회원 관리",
      "주문 / 배송 관리",
      "관리자 대시보드",
    ],
    note: "결제 연동, 기능 복잡도에 따라 변동",
  },
  {
    number: "03",
    title: "AI 서비스 개발",
    subtitle: "AI Service",
    pages: "10+ 페이지",
    price: "약 300만원",
    extra: "+ α",
    details: [
      "AI 모델 통합 / API 연동",
      "사용자 인터페이스",
      "데이터 처리 파이프라인",
      "사용량 대시보드",
      "AI 토큰 비용 별도",
    ],
    note: "AI 토큰 사용량에 비례하여 운영비 산정",
    highlighted: true,
  },
  {
    number: "04",
    title: "전자결재 시스템",
    subtitle: "Approval System",
    pages: "20+ 페이지",
    price: "약 400만원",
    extra: "+ α",
    details: [
      "결재 라인 / 워크플로우",
      "문서 템플릿 관리",
      "권한 / 조직도 설정",
      "알림 시스템",
      "통계 / 리포트",
    ],
    note: "조직 규모 및 워크플로우 복잡도에 따라 변동",
  },
];

export default function PricingModal({ open, onClose }: PricingModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9000] flex items-start justify-center overflow-y-auto"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-nda-black/80 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div className="relative w-full max-w-5xl mx-4 my-8 md:my-16 bg-nda-white rounded-sm animate-fade-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-nda-black/10">
          <div>
            <p className="text-nda-red text-xs font-semibold tracking-[0.3em] uppercase">
              Pricing
            </p>
            <h3 className="font-display text-nda-black text-2xl md:text-3xl tracking-wide mt-1">
              SERVICE PRICING GUIDE
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-nda-black/10 hover:border-nda-red hover:bg-nda-red hover:text-nda-white text-nda-muted transition-all duration-300 cursor-pointer"
            aria-label="Close pricing modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Pricing note */}
        <div className="px-6 md:px-10 py-4 bg-nda-surface border-b border-nda-black/5">
          <p className="text-nda-muted text-xs md:text-sm font-light tracking-wider">
            기본 산정 기준 : 페이지당 ₩100,000 &nbsp;/&nbsp; 기능 개발은 AI
            토큰 사용량에 비례하여 별도 산정
          </p>
        </div>

        {/* Cards */}
        <div className="px-6 md:px-10 py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingData.map((item) => (
              <div
                key={item.number}
                className={`group border rounded-sm p-6 transition-all duration-300 hover:shadow-lg ${
                  item.highlighted
                    ? "border-nda-red/30 bg-nda-red/[0.02]"
                    : "border-nda-black/10 hover:border-nda-red/20"
                }`}
              >
                {/* Card header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-nda-muted text-xs tracking-wider">
                      {item.number}
                    </span>
                    <h4 className="font-display text-xl md:text-2xl text-nda-black tracking-wide mt-1">
                      {item.title}
                    </h4>
                    <p className="text-nda-muted text-xs tracking-wider font-light">
                      {item.subtitle}
                    </p>
                  </div>
                  {item.highlighted && (
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase bg-nda-red text-nda-white px-2 py-1 rounded-sm">
                      Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mb-5 pb-5 border-b border-nda-black/5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl md:text-4xl text-nda-black">
                      {item.price}
                    </span>
                    <span className="text-nda-red font-semibold text-lg">
                      {item.extra}
                    </span>
                  </div>
                  <p className="text-nda-muted text-xs mt-1 font-light">
                    {item.pages}
                  </p>
                </div>

                {/* Details */}
                <ul className="space-y-2 mb-5">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm text-nda-black/70 font-light"
                    >
                      <span className="text-nda-red text-xs mt-0.5 flex-shrink-0">
                        +
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <p className="text-nda-muted text-[11px] font-light tracking-wider leading-relaxed border-t border-nda-black/5 pt-4">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 md:px-10 py-5 border-t border-nda-black/10 bg-nda-surface flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-nda-muted text-xs font-light tracking-wider">
            상기 금액은 예상 견적이며, 프로젝트 상세 협의 후 확정됩니다.
          </p>
          <a
            href="mailto:ndanaomi@gmail.com"
            className="text-nda-red text-xs font-semibold tracking-[0.15em] uppercase hover:text-nda-black transition-colors duration-300 cursor-pointer"
          >
            문의하기 &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
