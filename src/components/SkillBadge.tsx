type SkillBadgeProps = {
  skill: {
    id: number;
    label: string;
  };
};

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="skill-badge">
      {skill.label}
    </span>
  );
}

export default SkillBadge;