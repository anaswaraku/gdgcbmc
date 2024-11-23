import { assets } from "../assets/assets";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="bg-gray-100">
        <section className="py-16">
          <div className="container mx-auto p-8 border-dashed border-2 border-gray-400 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <div className="relative">
                  <img
                    src={assets.coretem}
                    alt="Background"
                    className="inset-0 h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-70 z-[1]"></div>
                  <div className="absolute inset-0 flex justify-center items-center z-[2]">
                    <img
                      src={assets.gdsclogo}
                      alt="Centered Image"
                      className="w-[70%] h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-semibold text-gray-800">
                  What is Google Developer Groups?
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  Google Developer Groups (GDG) is a platform for budding and
                  aspiring developers aiming to bridge the gap between theory and
                  practice. Our goal is to help them broaden their understanding
                  of emerging technologies and shape their skills into a better
                  version. The club intends to provide students with hands-on
                  technology through Google's curated resources.
                </p>
                <p className="mt-4 text-gray-600 text-lg">
                  GDGs host events, workshops, and meetups to share the latest
                  updates on Google technologies, best practices, and development
                  trends, empowering developers to create better solutions and
                  expand their networks.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
