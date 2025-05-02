import { ThemeToggleWithTooltip } from "@/components/ThemeToggle"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex-1">
        {/* Your logo or brand name */}
      </div>
      <div className="flex items-center gap-4">
        {/* Other navbar items */}
        <ThemeToggleWithTooltip />
      </div>
    </nav>
  )
}