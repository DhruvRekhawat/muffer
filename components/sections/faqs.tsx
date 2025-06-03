"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type FaqItem = {
  id: number
  question: string
  answer: string
}

const faqData: FaqItem[] = [
    {
      id: 1,
      question: "How fast will I receive my creative work from Muffer?",
      answer:
        "Most Muffer projects are delivered within 72 hours of submission. Our streamlined process eliminates traditional bottlenecks, allowing us to deliver premium creative work at unprecedented speed without sacrificing quality.",
    },
    {
      id: 2,
      question: "What happens if I'm not satisfied with the work?",
      answer:
        "Your satisfaction is our obsession. Muffer offers unlimited revisions until you're not just satisfied, but thrilled with the results. If we can't meet your standards after multiple revision attempts, we offer a 100% money-back guarantee.",
    },
    {
      id: 3,
      question: "How does the Muffer Buddy system work?",
      answer:
        "Upon project submission, you're matched with a dedicated Muffer Buddy who serves as your personal creative ally throughout the process. They handle everything from brief clarification to delivery coordination, available via chat for real-time updates and emergency revisions.",
    },
    {
      id: 4,
      question: "Can Muffer handle quick-turnaround or urgent projects?",
      answer:
        "Absolutely! While our standard delivery is 72 hours, we offer 24-hour and even same-day turnaround options for urgent projects at a premium rate. Your Muffer Buddy will work with you to determine if your timeline is achievable based on project scope.",
    },
    {
      id: 5,
      question: "How does Muffer maintain quality with such fast turnarounds?",
      answer:
        "Unlike traditional agencies that work sequentially, our specialized creator network operates in parallel workflows. We've also eliminated unnecessary administrative layers and meetings that typically slow down creative production without adding value.",
    },
   ]

export default function CurvedFaqSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [faqInView, setFaqInView] = useState<boolean[]>(faqData.map(() => false))
  const faqRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Store the current refs in a variable that's stable for the cleanup function
    const currentFaqRefs = faqRefs.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = currentFaqRefs.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setFaqInView((prev) => {
              const next = [...prev];
              next[index] = entry.isIntersecting;
              return next;
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    currentFaqRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Cleanup function uses the same refs that were observed
    return () => {
      currentFaqRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []); // Empty dependency array means this runs once on mount



  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-white to-blue-600 py-20 overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">Frequently Asked Questions</h2>

        <div className="relative">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={cn("mb-32 relative", index === faqData.length - 1 ? "mb-0" : "")}
              ref={(el) => {
                if (el) {
                  faqRefs.current[index] = el;
                }
              }}
            >
              {/* Question Card */}
              <div
                className={cn(
                  "bg-white rounded-2xl p-6 shadow-lg max-w-md transform transition-all duration-700 ease-in-out",
                  "relative z-10 mx-auto", // Updated to center the card
                  faqInView[index] ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0",
                )}
                style={{
                  transformOrigin: "center",
                  transform: faqInView[index]
                    ? `translateX(0) rotate(${index % 2 === 0 ? "-2" : "2"}deg)`
                    : `translateX(-100%) rotate(${index % 2 === 0 ? "-2" : "2"}deg)`,
                }}
              >
                <h3 className="text-xl font-bold text-blue-600 mb-2">Question:</h3>
                <p className="text-blue-800 text-lg">{faq.question}</p>
              </div>

              {/* Answer Card */}
              <div
                className={cn(
                  "bg-blue-800 text-white rounded-2xl p-6 shadow-lg max-w-md mx-auto transform transition-all duration-700 ease-in-out delay-300",
                  "relative z-10 mt-8", // Updated to center the card
                  faqInView[index] ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
                )}
                style={{
                  transformOrigin: "center",
                  transform: faqInView[index]
                    ? `translateX(0) rotate(${index % 2 === 0 ? "2" : "-2"}deg)`
                    : `translateX(100%) rotate(${index % 2 === 0 ? "2" : "-2"}deg)`,
                }}
              >
                <h3 className="text-xl font-bold mb-2">Answer:</h3>
                <p className="text-lg">{faq.answer}</p>
              </div>
            </div>
          ))}

          {/* Curved Path Visualization (optional) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2 z-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/40 rounded-full -translate-x-1/2"
                style={{
                  left: `${Math.sin(i * 0.5) * 50}px`,
                  top: `${i * 10}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}