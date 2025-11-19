"use client";
import { useState } from "react";
import ContactModal from "./ContactModal";

interface ClassItem {
  day: string;
  time: string;
  class: string;
  studio: string;
  link: string;
  location: string;
}

export default function ClassSchedule() {
  const classes: ClassItem[] = [
    {
      day: "Monday",
      time: "8:30 AM",
      class: "Yogalates",
      studio: "Class 46",
      link: "https://www.class46yoga.com/schedule-book?_mt=%2Fschedule%2Fdaily%2F48541%3Flocations%3D48717",
      location: " 5565 E Santa Ana Canyon Rd, Anaheim, CA 92807",
    },
    {
      day: "Monday",
      time: "5:30 PM",
      class: "Ass & Abs",
      studio: "Sculpt Studios",
      link: "https://www.sculptstudios-oc.com/",
      location: "872 North Tustin Street Orange, CA 92867",
    },
    {
      day: "Monday",
      time: "6:45 PM",
      class: "Ass & Abs",
      studio: "Sculpt Studios",
      link: "https://www.sculptstudios-oc.com/",
      location: "872 North Tustin Street Orange, CA 92867",
    },
    {
      day: "Tuesday",
      time: "8:30 AM",
      class: "Sculpt",
      studio: "Sculpted Space",
      link: "https://app.arketa.co/iframe/thesculptedspace/schedule",
      location: "1111 W Town and Country Rd STE 10, Orange, CA 92868",
    },
    {
      day: "Tuesday",
      time: "9:30 AM",
      class: "Sculpt",
      studio: "Sculpted Space",
      link: "https://app.arketa.co/iframe/thesculptedspace/schedule",
      location: "1111 W Town and Country Rd STE 10, Orange, CA 92868",
    },
    {
      day: "Tuesday",
      time: "10:30 AM",
      class: "Sculpt",
      studio: "Sculpted Space",
      link: "https://app.arketa.co/iframe/thesculptedspace/schedule",
      location: "1111 W Town and Country Rd STE 10, Orange, CA 92868",
    },
    {
      day: "Tuesday",
      time: "4:45 PM",
      class: "Yogalates",
      studio: "Class 46",
      link: "https://www.class46yoga.com/schedule-book?_mt=%2Fschedule%2Fdaily%2F48541%3Flocations%3D48717",
      location: " 5565 E Santa Ana Canyon Rd, Anaheim, CA 92807",
    },
    {
      day: "Wednesday",
      time: "9:45 AM",
      class: "Ass & Abs",
      studio: "Sculpt Studios",
      link: "https://www.sculptstudios-oc.com/",
      location: "872 North Tustin Street Orange, CA 92867",
    },
    {
      day: "Wednesday",
      time: "4:30 PM",
      class: "Yoga Sculpt",
      studio: "Class 46",
      link: "https://www.class46yoga.com/schedule-book?_mt=%2Fschedule%2Fdaily%2F48541%3Flocations%3D48717",
      location: " 5565 E Santa Ana Canyon Rd, Anaheim, CA 92807",
    },
    {
      day: "Wednesday",
      time: "6:00 PM",
      class: "Yogalates",
      studio: "Class 46",
      link: "https://www.class46yoga.com/schedule-book?_mt=%2Fschedule%2Fdaily%2F48541%3Flocations%3D48717",
      location: " 5565 E Santa Ana Canyon Rd, Anaheim, CA 92807",
    },
    {
      day: "Thursday",
      time: "8:30 AM",
      class: "Arms & Abs",
      studio: "Sculpt Studios",
      link: "https://www.sculptstudios-oc.com/",
      location: "872 North Tustin Street Orange, CA 92867",
    },
    {
      day: "Thursday",
      time: "9:30 AM",
      class: "Arms & Abs",
      studio: "Sculpt Studios",
      link: "https://www.sculptstudios-oc.com/",
      location: "872 North Tustin Street Orange, CA 92867",
    },
    {
      day: "Thursday",
      time: "12:00 PM",
      class: "Yogalates",
      studio: "Class 46",
      link: "https://www.class46yoga.com/schedule-book?_mt=%2Fschedule%2Fdaily%2F48541%3Flocations%3D48717",
      location: " 5565 E Santa Ana Canyon Rd, Anaheim, CA 92807",
    },
  ];

  const [selectedStudio, setSelectedStudio] = useState<string>("All");

  const studios: string[] = [
    "All",
    ...Array.from(new Set(classes.map((cls) => cls.studio))),
  ];

  // Studio color accents
  const studioColors: Record<string, string> = {
    "Class 46": "#C58A7A", // warm rose
    "Sculpt Studios": "#D9B5A0", // beige rose
    "Sculpted Space": "#E8D7C5", // soft cream
  };

  const filteredClasses =
    selectedStudio === "All"
      ? classes
      : classes.filter((cls) => cls.studio === selectedStudio);

  const grouped = filteredClasses.reduce<Record<string, ClassItem[]>>(
    (acc, cls) => {
      if (!acc[cls.day]) acc[cls.day] = [];
      acc[cls.day].push(cls);
      return acc;
    },
    {}
  );

  return (
    <section id="schedule" className="w-full bg-secondary py-16 px-6 relative">
      <div className="absolute inset-0 bg-linear-to-r from-primary via-secondary to-secondary "></div>
      <svg
        className="absolute top-0 inset-0 w-full h-full"
        viewBox="0 0 950 950"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="verticalGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffff" />
            <stop offset="50%" stopColor="#F6F1EB" />
            <stop offset="100%" stopColor="#ffff" />
          </linearGradient>
        </defs>
        <path
          fill="url(#verticalGradient)"
          fillOpacity="1"
          d="M0,0 L0,320 C360,240 1080,80 1440,320 L1440,0 Z"
        ></path>
      </svg>
      <div className="max-w-4xl mx-auto text-center relative">
        {/* <div className="absolute -inset-40 -top-10 rounded-2xl bg-linear-to-r from-primary via-secondary to-white rounded-b-2xl"></div> */}
        <div className="relative z-10">
          <h2 className="text-3xl font-heading text-textPrimary mb-2">
            Class Schedule
          </h2>
          <p className="text-textSecondary mb-6">
            Find me teaching at multiple studios across Orange County. Select a
            studio to see its classes.
          </p>
          {/* Studio Filter */}
          <div className="flex justify-center gap-3 flex-wrap mb-10 z-5">
            {studios.map((studio) => {
              const color = studioColors[studio] || "#E8E8E8";
              return (
                <button
                  key={studio}
                  onClick={() => setSelectedStudio(studio)}
                  style={{
                    backgroundColor:
                      selectedStudio === studio
                        ? "var(--color-primary)"
                        : color,
                    color: selectedStudio === studio ? "#FFFFFF" : "#2E2E2E",
                    borderColor:
                      selectedStudio === studio
                        ? "var(--color-primary)"
                        : color,
                  }}
                  className={`px-4 py-2 rounded-full border transition hover:opacity-80 shadow-sm`}
                >
                  {studio}
                </button>
              );
            })}
          </div>
        </div>

        {/* Schedule */}
        <div className="space-y-8 z-5 relative">
          {Object.entries(grouped).length === 0 ? (
            <p className="text-gray-600">
              No classes available for this studio.
            </p>
          ) : (
            Object.entries(grouped).map(([day, dayClasses]) => (
              <div
                key={day}
                className="bg-white shadow-sm rounded-xl p-6 border border-[#F0E8E4] z-5"
              >
                <h3 className="text-xl font-heading text-textPrimary mb-4">
                  {day}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dayClasses.map((cls, idx) => (
                    <div
                      key={idx}
                      className="p-4 border rounded-lg hover:shadow-md transition bg-light border-[#E9DDD7]"
                    >
                      <p className="font-medium text-textPrimary">
                        {cls.class}
                      </p>
                      <div className="flex items-center gap-2 text-textSecondary text-sm">
                        <span>{cls.time}</span>
                        <span className="flex items-center gap-1">
                          <span
                            className="inline-block w-2.5 h-2.5 rounded-full"
                            style={{
                              backgroundColor: studioColors[cls.studio],
                            }}
                          ></span>
                          {cls.studio}
                        </span>
                        <span className="text-xs">{cls.location}</span>
                      </div>
                      <a
                        href={cls.link}
                        className="text-sm text-textPrimary underline hover:opacity-70 mt-1 inline-block"
                        target="_blank"
                      >
                        View Schedule →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Private Sessions */}
        <div className="mt-10 text-center z-5 relative">
          <h3 className="text-xl font-heading text-textPrimary mb-2">
            Private Sessions
          </h3>
          <p className="text-textSecondary mb-4">
            Book a personalized Mat Pilates or Yoga Sculpt session tailored to
            your goals.
          </p>
          <ContactModal
            style={
              "inline-block bg-primary text-white px-6 py-2 rounded-full hover:opacity-80 transition"
            }
            text={"Inquire Here"}
          />
        </div>

        {/* Color Legend */}
        <div className="flex justify-center gap-6 mt-12 text-sm text-textSecondary">
          {Object.entries(studioColors).map(([studio, color]) => (
            <div key={studio} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              ></span>
              {studio}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
