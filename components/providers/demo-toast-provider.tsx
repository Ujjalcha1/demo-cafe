"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, Coffee, Info, TriangleAlert } from "lucide-react"

type ToastVariant = "success" | "info" | "warning"

type ToastPayload = {
  title: string
  description?: string
  variant?: ToastVariant
}

type ToastItem = ToastPayload & { id: number; variant: ToastVariant }

type ToastContextValue = {
  showToast: (payload: ToastPayload) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

const variantStyles: Record<ToastVariant, string> = {
  success: "border-emerald-500/35 bg-emerald-500/15 text-emerald-100",
  info: "border-cafe-gold/35 bg-cafe-espresso/85 text-cafe-cream",
  warning: "border-amber-500/35 bg-amber-500/20 text-amber-100"
}

const variantIcon = {
  success: CheckCircle2,
  info: Coffee,
  warning: TriangleAlert
}

export function DemoToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const showToast = useCallback((payload: ToastPayload) => {
    const id = Date.now() + Math.floor(Math.random() * 1000)
    const variant = payload.variant ?? "info"
    setToasts((prev) => [...prev, { id, ...payload, variant }])

    window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 3600)
  }, [])

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed right-4 top-24 z-[70] flex w-[min(92vw,390px)] flex-col gap-2">
        <AnimatePresence initial={false}>
          {toasts.map((toast) => {
            const Icon = variantIcon[toast.variant] ?? Info
            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: -10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className={`glass pointer-events-auto rounded-2xl border p-4 shadow-soft ${variantStyles[toast.variant]}`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-black/20 p-1">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold">{toast.title}</p>
                    {toast.description ? <p className="mt-0.5 text-sm text-current/80">{toast.description}</p> : null}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useDemoToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useDemoToast must be used inside DemoToastProvider")
  }
  return context
}

