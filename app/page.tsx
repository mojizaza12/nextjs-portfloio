import AboutMe from "@/components/AboutMe/AboutMe"
import { DockComponent } from "@/components/Dock/Dock"
import Footer from "@/components/Footer/Footer"
import{ HeroSection } from "@/components/HeroSection/HeroSection"
import PortFloioSection from "@/components/PortFloioSection/PortFloioSection"

const page = () => {
  return (
    <div className="h-full w-full overflow-visible">
      <HeroSection />
      
      {/* Portfolio Section */}
      <PortFloioSection />
      <AboutMe />
      <DockComponent />
      <Footer />
    </div>
  )
}
export default page
