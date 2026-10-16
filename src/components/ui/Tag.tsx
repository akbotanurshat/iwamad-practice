type TagProps = {
  label: string
  className?: string
}

export function Tag({ label, className = '' }: TagProps) {
  return <span className={`tag ${className}`.trim()}>{label}</span>
}