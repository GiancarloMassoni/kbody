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
      class: "Sculpt",
      studio: "The Sculpted Space",
      link: "https://app.arketa.co/iframe/thesculptedspace/schedule",
      location: "1111 W Town and Country Rd STE 10, Orange, CA 92868",
    },
    {
      day: "Monday",
      time: "6:30 PM",
      class: "Sculpt",
      studio: "The Sculpted Space",
      link: "https://app.arketa.co/iframe/thesculptedspace/schedule",
      location: "1111 W Town and Country Rd STE 10, Orange, CA 92868",
    },
    {
      day: "Monday",
      time: "7:30 PM",
      class: "Sculpt",
      studio: "The Sculpted Space",
      link: "https://app.arketa.co/iframe/thesculptedspace/schedule",
      location: "1111 W Town and Country Rd STE 10, Orange, CA 92868",
    },
    {
      day: "Tuesday",
      time: "6:00 AM",
      class: "Warrior Sculpt",
      studio: "Life Time",
      link: "https://www.lifetime.life/locations/ca/lakeshore-irvine/classes/signature-group-training.html",
      location: "18007 Von Karman Ave. Irvine, California 92612 ",
    },
    {
      day: "Tuesday",
      time: "8:30 AM",
      class: "Sculpt",
      studio: "The Sculpted Space",
      link: "https://app.arketa.co/iframe/thesculptedspace/schedule",
      location: "1111 W Town and Country Rd STE 10, Orange, CA 92868",
    },
    {
      day: "Tuesday",
      time: "9:30 AM",
      class: "Sculpt",
      studio: "The Sculpted Space",
      link: "https://app.arketa.co/iframe/thesculptedspace/schedule",
      location: "1111 W Town and Country Rd STE 10, Orange, CA 92868",
    },
    {
      day: "Tuesday",
      time: "10:30 AM",
      class: "Sculpt",
      studio: "The Sculpted Space",
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
      time: "12:00 PM",
      class: "Yogalates",
      studio: "Yoga Six",
      link: "https://lp.yogasix.com/try?amp_device_id=IZNPu9m4THPgtZgUYsNMxe",
      location: " 4889 Valencia Ave., Yorba Linda, CA 92886",
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
      time: "6:00 AM",
      class: "Warrior Sculpt",
      studio: "Life Time",
      link: "https://www.lifetime.life/locations/ca/lakeshore-irvine/classes/signature-group-training.html",
      location: "18007 Von Karman Ave. Irvine, California 92612 ",
    },
    {
      day: "Thursday",
      time: "12:00 PM",
      class: "Yogalates",
      studio: "Class 46",
      link: "https://www.class46yoga.com/schedule-book?_mt=%2Fschedule%2Fdaily%2F48541%3Flocations%3D48717",
      location: " 5565 E Santa Ana Canyon Rd, Anaheim, CA 92807",
    },
    {
      day: "Friday",
      time: "6:30 AM",
      class: "Yoga Sculpt & Pilates",
      studio: "Babe Yoga",
      link: "https://babe-thestudio.com/book",
      location: "2675 Irvine Ave suite e, Costa Mesa, CA 92627",
    },
    {
      day: "Friday",
      time: "7:30 AM",
      class: "Yoga Sculpt & Pilates",
      studio: "Babe Yoga",
      link: "https://babe-thestudio.com/book",
      location: "2675 Irvine Ave suite e, Costa Mesa, CA 92627",
    },
    {
      day: "Saturday",
      time: "10:00 AM",
      class: "Cycle AMP",
      studio: "Life Time",
      link: "https://www.lifetime.life/locations/ca/lakeshore-irvine/classes/signature-group-training.html",
      location: "18007 Von Karman Ave. Irvine, California 92612 ",
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
    "Yoga Six": "#D9B5A0", // beige rose
    "The Sculpted Space": "#D3D3D3", // light gray
    "Life Time": "#E8D7C5", // soft cream
    "Babe Yoga": "#F3E8DA", // light cream
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
        <div className="relative z-4">
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
                <div
                  className={
                    dayClasses.length === 1
                      ? "grid grid-cols-1 gap-4"
                      : "grid grid-cols-1 md:grid-cols-2 gap-4"
                  }
                >
                  {dayClasses.map((cls, idx) => (
                    <div
                      key={idx}
                      className="p-4 border rounded-lg hover:shadow-md transition bg-light border-[#E9DDD7]"
                    >
                      <p className="font-medium text-textPrimary">
                        {cls.class}
                      </p>
                      <div className="grid grid-cols-1 gap-0 text-textSecondary text-sm">
                        <div className="flex justify-center items-center w-full gap-2 text-center mb-1">
                          <span className="text-base">{cls.time}</span>
                          <div>
                            <span
                              className="inline-block w-2.5 h-2.5 rounded-full mt-1 shrink-0"
                              style={{
                                backgroundColor: studioColors[cls.studio],
                              }}
                            ></span>
                          </div>

                          <span className="text-base">{cls.studio}</span>
                        </div>
                        <div className="">
                          <span className="text-xs sm:flex-1">
                            {cls.location}
                          </span>
                        </div>
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
        <div className="mt-10 text-center z-10 relative">
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
