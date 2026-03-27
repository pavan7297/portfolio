import { Component } from "@angular/core";

@Component({
  selector: "app-about-us",
  template: `
<div class="min-h-screen bg-gray-100 flex justify-center p-6">

  <div class="max-w-6xl w-full flex flex-col gap-6">

    <!-- ================= TOP ROW ================= -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <!-- NAME CARD -->
      <div class="bg-white rounded-2xl p-6 shadow">
        <h1 class="text-3xl font-bold tracking-wide">
          MALLA PAVAN SRINIVAS
        </h1>
        <p class="text-gray-500 mt-2 text-sm tracking-widest">
          JAVA FULLSTACK DEVELOPER
        </p>

        <!-- ✅ MOBILE ONLY PROFILE IMAGE -->
        <div class="block md:hidden bg-white rounded-2xl overflow-hidden shadow mt-4">
          <img
            src="/assets/me.jpg"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- HORIZONTAL 3 CARDS -->
<div class="bg-white rounded-2xl p-4 shadow md:col-span-2">

  <p class="text-center text-xs text-purple-400 mb-3 tracking-widest">
    QUICK HIGHLIGHTS
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

    <!-- PROJECTS -->
    <div class="bg-gray-50 rounded-xl p-4 hover:shadow-md transition">
      <h3 class="text-sm font-semibold">PROJECTS</h3>
      <p class="text-xs text-gray-500 mt-1">
        Built E-commerce, Hospital & Portfolio apps using Angular, Tailwind & Spring Boot.
      </p>
    </div>

    <!-- SKILLS -->
    <div class="bg-gray-50 rounded-xl p-4 hover:shadow-md transition">
      <h3 class="text-sm font-semibold">SKILLS</h3>
      <p class="text-xs text-gray-500 mt-1">
        Angular, Java, Spring Boot, Node.js, TailwindCSS, REST APIs & MySQL/PostgreSQL.
      </p>
    </div>

    <!-- GOAL -->
    <div class="bg-gray-50 rounded-xl p-4 hover:shadow-md transition">
      <h3 class="text-sm font-semibold">GOAL</h3>
      <p class="text-xs text-gray-500 mt-1">
        Seeking opportunities to build scalable apps and grow as a Full Stack Developer.
      </p>
    </div>

  </div>
</div>

    </div>

    <!-- ================= MAIN GRID ================= -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <!-- LEFT -->
      <div class="flex flex-col gap-6">

        <!-- MINDSET -->
        <div class="bg-white rounded-2xl p-6 shadow flex flex-col gap-4">
          <h2 class="text-2xl font-semibold">Mindset</h2>

          <p class="text-gray-600">
            <span class="font-semibold">Building more than software.</span>
            My passions provide the discipline and focus I need to grow.
          </p>

          <div class="relative w-40 h-56 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              class="w-full h-full object-cover"
            />
            <div class="absolute bottom-0 w-full bg-black/50 text-white text-center py-1 text-sm">
              Travel
            </div>
          </div>

          <!-- <p class="text-gray-500 text-sm">
            Mastering body and mind is my path to excellence.
          </p> -->
        </div>

      </div>

      <!-- CENTER -->
      <div class="flex flex-col gap-6">

        <!-- ✅ PROFILE (DESKTOP ONLY) -->
        <div class="hidden md:block bg-white rounded-2xl overflow-hidden shadow">
          <img
            src="/assets/me.jpg"
            class="w-full h-[28rem] object-cover"
          />
        </div>

        <!-- LOCATION -->
        <div class="bg-white rounded-2xl p-6 shadow">
          <h2 class="text-xl font-bold">Andhra Pradesh, INDIA</h2>
          <p class="text-gray-500 text-sm mt-1">
            17.00517° N, 81.77784° E
          </p>
      <p class="text-purple-500 text-sm mt-1">IST (GMT+5:30)</p>
        </div>

      </div>

      <!-- RIGHT -->
      <div class="bg-white rounded-2xl p-6 shadow flex flex-col gap-4">

        <h2 class="text-2xl font-semibold">Craft</h2>

        <p class="text-gray-600">
          <span class="font-semibold">
            Building scalable apps, websites, and automations.
          </span>
        </p>

        <p class="text-gray-500 text-sm">
          I understand what advantages modern tech can provide,
          helping me advise on solutions a business actually needs.
        </p>

        <!-- TECH -->
        <div class="flex flex-wrap gap-2 mt-2 text-xs">

  <span class="bg-gray-200 px-2 py-1 rounded">Angular</span>
  <span class="bg-gray-200 px-2 py-1 rounded">TailwindCSS</span>
  <span class="bg-gray-200 px-2 py-1 rounded">TypeScript</span>
  <span class="bg-gray-200 px-2 py-1 rounded">Java</span>
  <span class="bg-gray-200 px-2 py-1 rounded">Spring Boot</span>
  <!-- <span class="bg-gray-200 px-2 py-1 rounded">Node.js</span> -->
  <span class="bg-gray-200 px-2 py-1 rounded">Express.ts</span>
  <!-- <span class="bg-gray-200 px-2 py-1 rounded">MySQL</span> -->
  <span class="bg-gray-200 px-2 py-1 rounded">PostgreSQL</span>
  <span class="bg-gray-200 px-2 py-1 rounded">Docker</span>

</div>

        <!-- <p class="text-gray-500 text-sm mt-4">
          Active Hackathon competitor & Science Club member.
        </p> -->

        <div class="flex items-center gap-2 text-green-500 text-sm mt-2">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          Open to collaboration & freelance
        </div>

      </div>

    </div>

  </div>

</div>
  `,
  imports: []
})

export class AboutUs {

}
