import './avatar.css'

function Avatar({ name, size = 44 }) {
  const initial = name.trim().charAt(0).toUpperCase()

  return (
    <div className="avatar" style={{ width: size, height: size, fontSize: size * 0.4 }}>
      {initial}
    </div>
  )
}

export default Avatar
