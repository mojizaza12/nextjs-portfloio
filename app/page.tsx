import{ HeroSection } from "@/components/HeroSection/HeroSection"
import PortFloioSection from "@/components/PortFloioSection/PortFloioSection"

const page = () => {
  return (
    <div className="scrollbar-hide h-full w-full overflow-auto">
        
      <HeroSection />
      
      {/* Portfloio Section */}
      <PortFloioSection />
      </div>
  )
}
export default page