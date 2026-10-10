import { Tag } from './ui/Tag'

type SkillBadgeProps = {
  skill: {
    id: number
    label: string
  }
}

function SkillBadge({ skill }: SkillBadgeProps) {
  return <Tag label={skill.label} />
}

export default SkillBadge