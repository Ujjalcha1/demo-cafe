export function openMail({
  to,
  subject,
  body
}: {
  to: string
  subject: string
  body: string
}) {
  const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = mailto
}

