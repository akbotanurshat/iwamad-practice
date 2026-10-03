import SkillBadge from '../components/SkillBadge';

type Skill = {
  id: number;
  label: string;
};

export default function SkillsPage() {
  const skills: Skill[] = [
    { id: 1, label: 'HTML' },
    { id: 2, label: 'CSS' },
    { id: 3, label: 'JavaScript' },
    { id: 4, label: 'TypeScript' },
    { id: 5, label: 'React' },
  ];

  return (
    <div>
      <h1>My Skills</h1>
      <div className="skills">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}