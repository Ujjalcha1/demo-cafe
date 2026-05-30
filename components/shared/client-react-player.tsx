"use client"

import dynamic from "next/dynamic"
import type { ComponentProps } from "react"

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-cafe-espresso/20" />
})

export type ClientReactPlayerProps = ComponentProps<typeof ReactPlayer>

export function ClientReactPlayer(props: ClientReactPlayerProps) {
  return <ReactPlayer {...props} />
}
