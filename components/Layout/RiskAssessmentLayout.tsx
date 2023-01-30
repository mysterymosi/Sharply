import { NavigationBar, Layout, ProgressBar } from "../../components";
import { useEffect } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface RiskAssessmentLayoutProps {
  children: React.ReactNode;
  level: number;
}
export const RiskAssessmentLayout = ({
  children,
  level,
}: RiskAssessmentLayoutProps) => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".text", {
      scrollTrigger: {
        trigger: ".text",
        start: "center center",
      },
      text: {
        value: "little steps",
      },
      duration: 0.3,
      delay: 0.5,
      ease: "none",
    });
  }, []);

  return (
    <>
      <Layout title="Home" showDownloadCard>
        <section className={`bg-white h-screen relative pb-[100px] relative`}>
          <NavigationBar page="risk-assessment" />
          <div
            style={{
              backgroundImage: "url('/images/risk-assessment.png')",
            }}
            className="grid absolute gap-4 md:grid-cols-2 grid-cols-1 h-screen w-full bg-no-repeat bg-contain bg-right"
          ></div>
          <div className="lg:container">
            <div className="flex flex-col justify-around h-screen">
              {children}
              <div className="flex justify-between items-center">
                <ProgressBar level={level} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
