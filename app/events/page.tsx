import ContactModal from "@/components/ContactModal";
import katepose from "@/public/kateballpose.png";
import Image from "next/image";
import Link from "next/link";
export default function PrivateEventsPage() {
  return (
    <main className="">
      <section className="bg-secondary text-textPrimary font-body  pt-30 ">
        <div className="mx-auto max-w-5xl lg:max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className=" text-black text-center text-4xl md:text-5xl font-heading py-10">
              Private Events & Classes
            </h1>
            <p className="text-lg md:text-xl  mx-6 leading-8 text-center">
              Host your next private event with me! We tailor every session to
              your group’s size, skill level, and goals. Perfect for birthdays,
              corporate events, or a special day with friends.
            </p>
            <div className="flex justify-center mt-8 gap-5">
              <ContactModal
                style={
                  "inline-block bg-primary text-white px-6 py-2 rounded-full hover:opacity-80 transition"
                }
                text={"Inquire Here"}
              />
              <Link
                href="#calendar"
                className="border border-primary text-primary px-6 py-3 rounded-full font-body font-medium hover:bg-primary hover:text-light transition"
              >
                Calendar
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:pt-0 py-10">
            <Image
              src={katepose}
              alt=""
              className="rounded-4xl"
              height={600}
            ></Image>
          </div>
        </div>

        <div>
          <div className="max-w-7xl mx-auto"></div>
        </div>
      </section>
      <section className="bg-secondary text-textPrimary font-body relative flex justify-center items-center py-10">
        <div className="absolute inset-0 top-0 bg-linear-to-r from-secondary via-primary to-secondary rounded-b-2xl"></div>
        <div className="grid md:grid-cols-2 mx-auto grid-cols-1 z-20">
          <div className="flex justify-center">
            <video
              width="400"
              height="200"
              controls
              autoPlay
              muted
              playsInline
              loop
              className="rounded-2xl shadow-lg"
            >
              <source src="/pilatesbeachclass.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="pt-10 px-4 md:px-0">
            <h2 className="text-5xl mb-8 font-heading">Beach Pilates Event</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-10 font-body">
              This private beach Pilates session provided a personalized and
              engaging workout for the group. The class was designed to suit
              each participant’s skill level and fitness goals, combining
              core-strengthening exercises, flexibility work, and mindful
              movement. Practicing on the sand allowed for a natural challenge
              to balance and stability while participants enjoyed the fresh
              ocean breeze and the calming sounds of the waves. The session
              included a mix of Pilates mat exercises, gentle stretches, and
              focused breathing techniques to improve strength, posture, and
              overall body awareness. Every movement was guided to ensure proper
              form and maximize the benefits of the practice. By the end of the
              class, participants felt energized, centered, and rejuvenated,
              having experienced the perfect combination of physical exercise
              and the restorative power of the beach environment.
            </p>
            <div className="flex justify-center lg:justify-start pt-10">
              <ContactModal
                style={
                  "inline-block bg-secondary text-black px-6 py-2 rounded-full hover:opacity-80 transition"
                }
                text={"More Info"}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="calendar"
        className="bg-secondary text-textPrimary font-body  py-10"
      >
        <h2 className="text-5xl mb-8 font-heading text-center">
          Calendar and Upcoming Events
        </h2>
        <div className="flex justify-center md:px-0 px-4">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=3a556681e35facee5e6ae98bea2da7540d265eaed0b7337fe1e8ed00459fb87b%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div className="flex justify-center pt-10">
          <ContactModal
            style={
              "inline-block bg-primary text-white px-6 py-2 rounded-full hover:opacity-80 transition"
            }
            text={"Book Now"}
          />
        </div>
      </section>
    </main>
  );
}
