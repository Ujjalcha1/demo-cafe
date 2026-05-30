"use client"

import Link from "next/link"
import { FormEvent } from "react"

import { useDemoToast } from "@/components/providers/demo-toast-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Mode = "login" | "signup" | "forgot"

const titleByMode: Record<Mode, string> = {
  login: "Welcome Back",
  signup: "Create Your Account",
  forgot: "Reset Password"
}

const subtitleByMode: Record<Mode, string> = {
  login: "Sign in to manage reservations, rewards, and orders.",
  signup: "Join Velvet Pour for curated offers and member experiences.",
  forgot: "Enter your email and we will send a secure reset link."
}

export function AuthFormCard({ mode }: { mode: Mode }) {
  const { showToast } = useDemoToast()

  const modeMessage = {
    login: {
      title: "Welcome back",
      description: "Demo sign-in complete. Authentication backend is intentionally disabled."
    },
    signup: {
      title: "Account created in demo mode",
      description: "Signup is frontend-only for brand showcase purposes."
    },
    forgot: {
      title: "Reset link simulated",
      description: "Password recovery is shown as a UX flow only."
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    showToast({
      title: modeMessage[mode].title,
      description: modeMessage[mode].description,
      variant: "info"
    })
  }

  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-cafe-gold/30 bg-white/10 p-8 shadow-soft backdrop-blur-2xl dark:bg-cafe-espresso/45">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cafe-gold/25 blur-3xl" />
      <div className="relative z-10">
        <p className="font-cinzel text-xs uppercase tracking-[0.35em] text-cafe-gold">Velvet Pour Members</p>
        <h1 className="mt-3 font-heading text-4xl text-cafe-espresso dark:text-cafe-cream">{titleByMode[mode]}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{subtitleByMode[mode]}</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {mode === "signup" ? <Input placeholder="Full Name" required /> : null}
          <Input type="email" placeholder="Email Address" required />
          {mode !== "forgot" ? <Input type="password" placeholder="Password" required /> : null}
          {mode === "signup" ? <Input type="password" placeholder="Confirm Password" required /> : null}

          <Button className="w-full" type="submit">
            {mode === "login" ? "Sign In" : mode === "signup" ? "Create Account" : "Send Reset Link"}
          </Button>
        </form>

        <div className="mt-5 text-sm text-muted-foreground">
          {mode === "login" ? (
            <>
              <p>
                No account yet?{" "}
                <Link href="/auth/signup" className="text-cafe-gold hover:underline">
                  Sign up
                </Link>
              </p>
              <p className="mt-2">
                Forgot password?{" "}
                <Link href="/auth/forgot-password" className="text-cafe-gold hover:underline">
                  Reset now
                </Link>
              </p>
            </>
          ) : mode === "signup" ? (
            <p>
              Already a member?{" "}
              <Link href="/auth/login" className="text-cafe-gold hover:underline">
                Login
              </Link>
            </p>
          ) : (
            <p>
              Remembered your password?{" "}
              <Link href="/auth/login" className="text-cafe-gold hover:underline">
                Go to login
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}


