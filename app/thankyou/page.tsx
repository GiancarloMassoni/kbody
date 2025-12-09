import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="bg-secondary grid grid-cols-1 h-[550px] md:h-[1055px]">
      <section className="bg-secondary text-textPrimary font-body  pt-30 py-10">
        <div className="mx-auto max-w-5xl lg:max-w-7xl px-6 lg:px-8">
          <h1 className=" text-black text-center text-5xl md:text-7xl font-heading py-10">
            Thanks for <br className="lg:hidden flex" /> reaching out!
          </h1>
          <p className="text-lg md:text-xl  mx-6 leading-8 text-center">
            I will reach out to you shortly to discuss your inquiry.
          </p>
          <p className="text-lg md:text-xl py-8  mx-6 leading-8 text-center">
            In the meantime, you can learn more about me by returning to the{" "}
            <Link href="/" className="text-textSecondary">
              homepage
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
