import { footer } from "motion/react-client"
import PoweredByVercel from "powered-by-vercel"

const Footer = () => {
  return (
    <footer className="border-t border-zinc-300">
        <div className="flex items-center justify-center py-5 text-center text-xs text-zinc-600">
          <span className="mr-2">© 2025 MojiDev. All rights reserved. / © 2025 MojiDev. สงวนสิทธ์ประการ</span>
          <PoweredByVercel svgProps={{ width: 100 }} />
        </div>
    </footer>
  )
}
export default Footer
