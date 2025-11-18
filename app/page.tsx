import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ContactModal from "@/components/ContactModal";
import kateheader from "@/public/kateheader.jpeg";
import yogalates from "@/public/yogalates.svg";
import meal from "@/public/meal.svg";
import calendar from "@/public/calendar.svg";
import ClassSchedule from "@/components/ClassSchedule";
import kateballpose from "@/public/kateballpose.png";
import katepose from "@/public/katepose.jpeg";
import sculptstudios from "@/public/sculptstudioslogo.png";
import yoga6 from "@/public/yoga6logo.webp";
import class46 from "@/public/class46logo.webp";
import sculptedspace from "@/public/sculptedspace.jpeg";
import Link from "next/link";

function AboveTheFold() {
  return (
    <div className="bg-secondary font-body text-textPrimary">
      <div className="relative px-2 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl  grid grid-cols-1 lg:grid-cols-2">
          <div className="text-center lg:py-32 pt-32 pb-4 sm:py-48 ">
            <h1 className="text-5xl tracking-tight text-balance text-textPrimary sm:text-7xl font-heading ">
              Move with Intention. <br /> Nourish with Purpose.
            </h1>
            <p className="mt-8 text-lg font-medium text-textSecondary sm:text-xl/8 ">
              Private events and personalized meal plans
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#schedule"
                className=" bg-primary text-light px-6 py-3 rounded-full font-body font-medium hover:bg-accent transition"
              >
                Book a Class
              </a>
              <ContactModal
                style={
                  "border border-primary text-primary px-6 py-3 rounded-full font-body font-medium hover:bg-primary hover:text-light transition"
                }
                text={"Contact"}
              />
            </div>
          </div>
          <div className="lg:py-10 pb-5 flex justify-center items-center">
            <Image
              src={kateheader}
              alt={""}
              className="object-contain lg:rounded-l-4xl lg:border-b lg:border-l lg:border-t rounded-4xl lg:rounded-r-none lg:rounded-t-none border-neutral-200 "
              height={48}
              width={550}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

function BelowTheFold() {
  return (
    <div className="bg-primary font-body text-textPrimary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 items-stretch">
        <div className="bg-secondary rounded-2xl p-6 flex flex-col justify-between items-center shadow-2xl">
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-2xl font-heading mb-4">Class Schedule</h3>
            <div className="h-[90px] flex items-center justify-center mb-4">
              <Image src={calendar} alt="" height={90} width={120} />
            </div>
            <p className="text-textSecondary leading-relaxed px-2">
              Build strength and balance with weekly Mat Pilates and Yoga Sculpt
              classes. Check the schedule to join a session and move, tone, and
              feel your best.
            </p>
          </div>
          <Link
            href="#schedule"
            className="mt-6 bg-primary text-light px-6 py-3 rounded-full font-body font-medium hover:bg-accent transition"
          >
            Learn More
          </Link>
        </div>
        <div className="bg-secondary rounded-2xl p-6 flex flex-col justify-between items-center shadow-2xl">
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-2xl font-heading mb-4">Private Events</h3>
            <div className="h-[90px] flex items-center justify-center mb-4">
              <Image src={yogalates} alt="" height={75} />
            </div>
            <p className="text-textSecondary leading-relaxed px-2">
              I host private events that combine wellness and fitness, offering
              personalized Mat Pilates and Hot Yoga Sculpt sessions. Perfect for
              small groups, team-building, or special gatherings, each session
              is tailored to your group&apos;s energy and goals.
            </p>
          </div>
          <Link
            href="/events"
            className="mt-6 bg-primary text-light px-6 py-3 rounded-full font-body font-medium hover:bg-accent transition"
          >
            Learn More
          </Link>
        </div>

        <div className="bg-secondary rounded-2xl p-6 flex flex-col justify-between items-center shadow-2xl">
          <div className="flex flex-col items-center flex-1">
            <h3 className="text-2xl font-heading mb-4">Meal Plans</h3>
            <div className="h-[90px] flex items-center justify-center mb-4">
              <Image src={meal} alt="" width={150} height={90} />
            </div>
            <p className="text-textSecondary leading-relaxed px-2">
              I create personalized meal plans tailored to each
              individual&apos;s goals, preferences, and lifestyle. No two plans
              are the same, every plan is unique to help you eat well, feel your
              best, and achieve results that work for you.
            </p>
          </div>
          <Link
            href="/mealplans"
            className="mt-6 bg-primary text-light px-6 py-3 rounded-full font-body font-medium hover:bg-accent transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <section id="aboutme">
      <div className="bg-secondary font-body text-textPrimary relative py-10 z-1">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* IMAGE WRAPPER */}
          <div className="relative flex justify-center">
            {/* MAIN LARGE IMAGE (same as your original but responsive) */}
            <Image
              src={kateballpose}
              alt="Workout pose background"
              className="
              z-1 
              rounded-b-2xl 
              h-[300px] 
              md:h-[650px] 
              w-auto
            "
            />

            {/* SMALL OVERLAY IMAGE (same concept, responsive offset) */}
            <Image
              src={katepose}
              alt="Pose"
              height={260}
              className="
              absolute 
              z-2 
              rounded-2xl
              -bottom-40 
              left-30 
              -translate-x-1/2

              md:-bottom-40 
              md:left-[2%]
              md:translate-x-0
              
              shadow-lg
            "
            />
          </div>
          <div className="absolute inset-0 top-75 bg-linear-to-r from-secondary via-primary to-secondary rounded-b-2xl"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 pt-20 mt-40 md:mt-32 px-4 relative pb-16 gap-20">
            <div className=" ">
              <h2 className="text-4xl md:text-5xl font-heading mb-4">
                About Me
              </h2>
              <p className="text-textPrimary text-left max-w-3xl mx-auto leading-8">
                Hi, I&apos;m Kate! I specialize in Mat Pilates and Hot Yoga
                Sculpt, helping clients build strength, flexibility, and
                balance. I also create personalized meal plans to support your
                fitness journey.
                <br /> Whether you&apos;re looking to join a class, host a
                private event, or need guidance on nutrition, I&apos;m here to
                help you achieve your wellness goals. Let&apos;s move with
                intention and nourish with purpose together!
              </p>
            </div>
            <div className="bg-[#F3E8DA] rounded-l-2xl p-6 justify-center items-center shadow-2xl">
              <h3 className="font-heading text-textPrimary text-2xl mb-4 text-center">
                Gyms You Can Find Me At
              </h3>
              <div className="grid grid-cols-2 gap-10 justify-center items-center pt-2">
                <div className="items-center flex justify-center">
                  <Image src={yoga6} width={100} height={100} alt={""}></Image>
                </div>
                <div className="items-center flex justify-center">
                  <Image
                    src={sculptedspace}
                    width={140}
                    height={110}
                    alt={""}
                  ></Image>
                </div>
                <div className="items-center flex justify-center">
                  <Image
                    src={sculptstudios}
                    width={100}
                    height={100}
                    alt={""}
                  ></Image>
                </div>
                <div className="items-center flex justify-center">
                  <Image
                    src={class46}
                    width={100}
                    height={100}
                    alt={""}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <AboveTheFold />
      <BelowTheFold />
      <AboutMe />
      <ClassSchedule />
    </>
  );
}
