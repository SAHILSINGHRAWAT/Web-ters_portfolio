import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10  text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! We’re Sahil Singh Rawat and Ayush Chamola, full-stack developers and the creators of <b>Web$ters</b>. We specialize in building fast, intuitive, and powerful web applications that deliver real-world impact.{" "}
                
              </p>
              <p className="text-white">
              With deep expertise in the MERN stack, we're passionate about turning complex problems into elegant solutions. Sahil has engineered platforms like ADITI (Hospital Management System) and Study Notion (EdTech Platform) — serving thousands of users with seamless UI, role-based dashboards, and scalable backend architecture. Ayush brings strong backend engineering and API expertise, ensuring every system we build is secure, optimized, and built to last.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                  From hackathon-winning solutions like AI Guardian to performance-focused tools, we've proven our ability to lead projects, innovate quickly, and build for scale.

Together, we help clients turn their ideas into production-ready products — with clean code, thoughtful design, and a developer-first mindset that delivers results.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      - Sahil , Ayush
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">Web$ters</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
