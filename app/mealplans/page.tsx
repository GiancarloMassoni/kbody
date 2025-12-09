import ContactModal from "@/components/ContactModal";
import Image from "next/image";
import pancakes from "@/public/pancakes.png";
import wrap from "@/public/wrap.png";
import beefbowl from "@/public/beefbowl.png";
export default function MealPlansPage() {
  return (
    <main className="min-h-screen bg-secondary text-textPrimary px-6 py-12 font-body">
      {/* Hero Section */}
      <section className="text-center my-12">
        <h1 className="text-4xl md:text-5xl font-heading mb-4">
          Personalized Meal Plans
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-body">
          Every plan is tailored to your goals, preferences, and lifestyle.
          Whether you’re building strength, losing weight, or boosting energy,
          we create the perfect plan for you.
        </p>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto mb-16 grid md:grid-cols-3 gap-8">
        <div className="bg-light p-6 rounded-2xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Step 1: Consultation</h3>
          <p>We discuss your goals, dietary preferences, and schedule.</p>
        </div>
        <div className="bg-light p-6 rounded-2xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">
            Step 2: Customized Plan
          </h3>
          <p>Receive a meal plan designed specifically for your needs.</p>
        </div>
        <div className="bg-light p-6 rounded-2xl shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Step 3: Support</h3>
          <p>Ongoing guidance, adjustments, and tips to help you succeed.</p>
        </div>
      </section>

      {/* Sample Meals */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-heading text-center mb-8">Sample Meals</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-light rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={pancakes}
              alt="Grilled Chicken Salad"
              className="w-full h-78 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">
                Protein Pancakes with PB Drizzle
              </h3>
              <p>Protein-packed, fresh vegetables, and healthy fats.</p>
            </div>
          </div>
          <div className="bg-light rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={beefbowl}
              alt="Quinoa Bowl with Veggies"
              className="w-full h-78 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">
                Beef, Avocado, Sweet potato and Cottage Cheese Bowl
              </h3>
              <p>High-fiber, nutrient-dense meal option.</p>
            </div>
          </div>
          <div className="bg-light rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={wrap}
              alt="Smoothie Bowl"
              className="w-full h-78 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">
                Chicken Lettuce Wrap
              </h3>
              <p>High protein, quick, and delicious.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your plan?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Click below to contact me and get a meal plan tailored just for you!
        </p>
        <ContactModal
          style={
            "inline-block bg-primary text-white px-6 py-2 rounded-full hover:opacity-80 transition"
          }
          text={"Inquire Here"}
        />
      </section>
    </main>
  );
}
