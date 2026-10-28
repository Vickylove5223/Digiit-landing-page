const AVATARS = [
  "https://img.magnific.com/free-photo/portrait-african-american-man_23-2149072178.jpg?t=st=1793012532~exp=1793016132~hmac=42583aed2bbe7dfe7be468ee08b523b60548e3088c22161ed9db3fc0cbfda5b4&w=2000",
  "https://img.magnific.com/free-photo/african-teenage-girl-portrait-happy-smiling-face_53876-146757.jpg?t=st=1793012341~exp=1793015941~hmac=d9d06c79995dd6a7441ab63a36fccba30191840e899284b2eca90959a248b65e&w=2000",
  "https://img.magnific.com/free-photo/portrait-afro-business-woman-standing-outdoors-street_58466-16303.jpg?t=st=1793012371~exp=1793015971~hmac=caf489756b033e5b0d5cffecf5992d7327627ded7881f9402b26cb8b4929a347&w=2000",
]

export default function AvatarCycle() {
  return (
    <div className="hero-avatar-stack">
      {AVATARS.map((src, i) => (
        <img key={i} src={src} alt="" />
      ))}
    </div>
  )
}
