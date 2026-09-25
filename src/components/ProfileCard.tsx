import { useState } from 'react';
import SkillBadge from './SkillBadge';

type Skill = {
  id: number;
  label: string;
};

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
};

function ProfileCard({ name, role, avatarUrl }: ProfileCardProps) {
  const [liked, setLiked] = useState(false);

  const skills: Skill[] = [
    { id: 1, label: 'HTML' },
    { id: 2, label: 'CSS' },
    { id: 3, label: 'JavaScript' },
    { id: 4, label: 'TypeScript' },
    { id: 5, label: 'React' },
  ];

  return (
    <section className={`card ${liked ? 'liked' : ''}`}>
      {avatarUrl && <img src={avatarUrl} alt={name} />}
      <div>
        <h2>{name}</h2>
        <p>{role}</p>

        <div className="skills">
          {skills.length === 0 ? (
            <p>No skills yet</p>
          ) : (
            skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))
          )}
        </div>

        <button onClick={() => setLiked(!liked)}>
          {liked ? '❤️ Liked' : '🤍 Like'}
        </button>
      </div>
    </section>
  );
}

export default ProfileCard;