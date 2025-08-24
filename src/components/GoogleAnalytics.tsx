import { GoogleAnalytics as GA } from '@next/third-parties/google'

interface GoogleAnalyticsProps {
  gaId: string
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  return <GA gaId={gaId} />
}