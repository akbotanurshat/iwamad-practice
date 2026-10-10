import { Card } from './ui/Card'
import LikeButton from './LikeButton'

type ProfileCardProps = {
  name: string
  role: string
  avatarUrl?: string
}

function ProfileCard({ name, role, avatarUrl }: ProfileCardProps) {
  return (
    <Card>
      {avatarUrl && <img src={avatarUrl} alt={name} />}
      <div>
        <h2>{name}</h2>
        <p>{role}</p>
        <LikeButton />
      </div>
    </Card>
  )
}

export default ProfileCard