// import Link from "next/link";

// export default async function Hero() {
//   return (
//     <div>
//       <div className="max-h-screen w-full relative">
//         {/* Crimson Depth */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             background:
//               "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
//           }}
//         />

//         <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 text-white">
//           {/* Headline */}
//           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-tight">
//             Read. Learn. Share. <br className="hidden md:block" />
//             Ideas That Shape the Future
//           </h1>

//           {/* Subheadline */}
//           <p className="mt-6 text-lg md:text-xl max-w-2xl">
//             Discover in-depth articles, tutorials, and thought-provoking stories
//             from a global network of creators. Stay updated with fresh insights
//             on technology, design, productivity, and personal growth—all in one
//             place.
//           </p>

//           {/* CTA */}
//           <div className="mt-10 flex flex-col sm:flex-row gap-4">
//             <Link
//               href="/blogs"
//               className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-xl border border-input hover:bg-accent hover:text-accent-foreground transition"
//             >
//               Explore Blogs
//             </Link>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-green-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Hello, I’m <span className="text-primary">Sohel Rana</span>
          </h1>
          <h2 className="mt-2 text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-300">
            MERN Stack Developer
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg">
            I’m a Freelance <span className="font-medium">UI/UX Designer</span>
            and <span className="font-medium">Developer</span> based in London,
            England. I build immersive, user-centric web applications with
            clean, scalable code.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full"
            >
              Hire Me!
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Download CV
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <Card className="bg-primary/10 dark:bg-primary/20 text-center shadow-md">
              <CardContent className="py-6">
                <p className="text-2xl font-bold text-primary">3 Y.</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Experience
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/10 dark:bg-primary/20 text-center shadow-md">
              <CardContent className="py-6">
                <p className="text-2xl font-bold text-primary">25+</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Projects
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/10 dark:bg-primary/20 text-center shadow-md">
              <CardContent className="py-6">
                <p className="text-2xl font-bold text-primary">8</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Clients
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end animate-fadeInUp delay-700">
          <Image
            src="/profile.png"
            alt="Sohel Rana"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover animate-zoomInOut hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function Hero() {
//   return (
//     <section className="w-full min-h-[calc(100vh-230px)] bg-gradient-to-r from-green-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 px-6 md:px-12 overflow-x-hidden">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center h-full">
//         {/* Left Content */}
//         <div className="h-full flex flex-col justify-center">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
//             Hello, I’m <span className="text-primary">Sohel Rana</span>
//           </h1>
//           <h2 className="mt-2 text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-300">
//             MERN Stack Developer
//           </h2>

//           <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg">
//             I’m a Freelance <span className="font-medium">UI/UX Designer</span>{" "}
//             and <span className="font-medium">Developer</span> based in London,
//             England. I build immersive, user-centric web applications with
//             clean, scalable code.
//           </p>

//           {/* Buttons */}
//           <div className="mt-6 flex flex-wrap gap-4">
//             <Button
//               size="lg"
//               className="bg-primary hover:bg-primary/90 text-white rounded-full"
//             >
//               Hire Me!
//             </Button>
//             <Button size="lg" variant="outline" className="rounded-full">
//               Download CV
//             </Button>
//           </div>

//           {/* Stats */}
//           <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
//             <Card className="bg-primary/10 dark:bg-primary/20 text-center shadow-md">
//               <CardContent className="py-6">
//                 <p className="text-2xl font-bold text-primary">3 Y.</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">
//                   Experience
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="bg-primary/10 dark:bg-primary/20 text-center shadow-md">
//               <CardContent className="py-6">
//                 <p className="text-2xl font-bold text-primary">25+</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">
//                   Projects
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="bg-primary/10 dark:bg-primary/20 text-center shadow-md">
//               <CardContent className="py-6">
//                 <p className="text-2xl font-bold text-primary">8</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">
//                   Clients
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Right Side Image */}
//         <div className="h-full flex items-center justify-center md:justify-end animate-fadeInUp delay-700">
//           <Image
//             src="/profile.png"
//             alt="Sohel Rana"
//             width={350}
//             height={350}
//             className="rounded-2xl shadow-lg object-cover animate-zoomInOut hover:scale-105 transition-transform duration-500"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
