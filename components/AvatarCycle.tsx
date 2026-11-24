import { withBase } from '@/lib/paths'
const AVATARS = [
  withBase('/images/avatar-1.webp'),
  withBase('/images/avatar-2.webp'),
  withBase('/images/avatar-3.webp'),
]

export default function AvatarCycle() {
  return (
    <div className="hero-avatar-stack">
      {AVATARS.map((src, i) => (
        <img key={i} src={src} alt="" width={600} height={400} decoding="async" />
      ))}
    </div>
  )
}
