interface PartBadgeProps {
  color: string
  size?: 'sm' | 'md' | 'lg'
  label?: string
}

const sizeMap = {
  sm: 'h-2 w-2',
  md: 'h-3 w-3',
  lg: 'h-4 w-4',
}

const PartBadge = ({ color, size = 'md', label }: PartBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2">
      <span className={`${sizeMap[size]} inline-block rounded-full`} style={{ backgroundColor: color }} />
      {label ? <span className="text-sm font-medium text-foreground">{label}</span> : null}
    </div>
  )
}

export default PartBadge
