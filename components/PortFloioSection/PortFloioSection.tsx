import DaysLived from "../DaysLived/page";
import HaveFriends from "../HaveFriends/Friends";
import { BlurFade } from "../magicui/blur-fade";
import TrynotToBug from "../Try-not-to-have-Bug/trynottohavebug";

const PortFloioSection = () => {
  return (
    <BlurFade delay={0.15} inView>
      <section id="Portfolio">
      
      <div className="flex justify-center w-full p-4">
        <div className="flex flex-col md:flex-row max-w-4xl w-full">
          <div className="flex-1 text-center md:border-r border-gray-200 dark:border-gray-700 px-4 md:px-8 py-6 md:py-0">
            <h2 className="text-base md:text-lg">มีชีวิตมาแล้ว</h2>
            <div className="text-8xl md:text-6xl font-bold my-2">
              <DaysLived />
            </div>
            <p className="text-base md:text-lg">วัน</p>
          </div>
            
          <div className="flex-1 text-center md:border-r border-gray-200 dark:border-gray-700 px-4 md:px-8 py-6 md:py-0 border-t md:border-t-0">
            <h2 className="text-base md:text-lg">มีเพื่อนมาแล้ว</h2>
            <div className="text-5xl md:text-6xl font-bold my-2">
              <HaveFriends />
              </div>
            <p className="text-base md:text-lg">คน</p>
          </div>

          <div className="flex-1 text-center px-4 md:px-8 py-6 md:py-0 border-t md:border-t-0">
            <h2 className="text-base md:text-lg">พยายามไม่ให้บัค</h2>
            <div className="text-5xl md:text-6xl font-bold my-2">
              <TrynotToBug />
            </div>
            <p className="text-base md:text-lg">ครั้ง</p>
          </div>
        </div>
      </div>
      </section>
    </BlurFade>
  );
};

export default PortFloioSection;
