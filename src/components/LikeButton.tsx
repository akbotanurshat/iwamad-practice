import { Button } from './ui/Button'
import { useLikes } from '../context/LikesContext'

export default function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <Button onClick={addLike} aria-label={`Like (${likes} likes)`}>
      ❤️ {likes}
    </Button>
  )
}