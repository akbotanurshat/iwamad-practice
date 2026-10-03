import { useLikes } from '../context/LikesContext';

export default function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button onClick={addLike}>
      ❤️ {likes}
    </button>
  );
}