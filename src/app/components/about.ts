import { Component } from "@angular/core";

@Component({
    selector:'app-about',
    template:`<section class="min-h-screen bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">

    <div class="max-w-7xl mx-auto">

        <!-- Heading -->
        <div class="text-center max-w-4xl mx-auto">

            <p class="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm">
                About Me
            </p>

            <h1 class="mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold">
                Building Modern &
                <span class="text-yellow-400">Scalable Applications</span>
            </h1>

            <p class="mt-6 text-gray-400 leading-7 text-sm sm:text-lg">
                I'm Pavan Srinivas, a Java Backend Developer with 3+ years of
                experience building enterprise applications, REST APIs,
                Angular applications, AI solutions, and cloud-ready systems.
            </p>

        </div>

        <!-- About -->
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-20">

            <!-- Image -->
            <div class="flex justify-center">

                <img
                    src="assets/profile/profile.jpg"
                    alt="Pavan Srinivas"
                    class="w-64 sm:w-80 lg:w-full max-w-md rounded-3xl object-cover shadow-2xl border border-yellow-400/20">

            </div>

            <!-- Right -->
            <div>

                <h2 class="text-3xl sm:text-4xl font-bold">
                    Hi, I'm
                    <span class="text-yellow-400">
                        Pavan Srinivas
                    </span>
                </h2>

                <p class="mt-6 text-gray-400 leading-8">
                    I specialize in Java, Spring Boot, Angular, PostgreSQL,
                    MongoDB, REST APIs, Docker, and modern frontend
                    development.
                </p>

                <p class="mt-4 text-gray-400 leading-8">
                    I enjoy building enterprise software, healthcare systems,
                    e-commerce platforms, AI-powered applications, and
                    responsive websites that solve real-world business
                    problems.
                </p>

                <!-- Information -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

                    <div>
                        <p class="text-yellow-400">Experience</p>
                        <h4 class="font-semibold text-lg">3.8 Years</h4>
                    </div>

                    <div>
                        <p class="text-yellow-400">Projects</p>
                        <h4 class="font-semibold text-lg">6</h4>
                    </div>

                    <div>
                        <p class="text-yellow-400">Specialization</p>
                        <h4 class="font-semibold text-lg">
                            Java Backend Developer
                        </h4>
                    </div>

                    <div>
                        <p class="text-yellow-400">Location</p>
                        <h4 class="font-semibold text-lg">
                            Andhra Pradesh, India
                        </h4>
                    </div>

                </div>

            </div>

        </div>

        <!-- Statistics -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-24">

            <div class="bg-zinc-900 rounded-2xl p-6 text-center">
                <h2 class="text-3xl lg:text-5xl font-bold text-yellow-400">
                    20+
                </h2>

                <p class="mt-2 text-gray-400 text-sm">
                    Projects
                </p>
            </div>

            <div class="bg-zinc-900 rounded-2xl p-6 text-center">
                <h2 class="text-3xl lg:text-5xl font-bold text-yellow-400">
                    3+
                </h2>

                <p class="mt-2 text-gray-400 text-sm">
                    Years Experience
                </p>
            </div>

            <div class="bg-zinc-900 rounded-2xl p-6 text-center">
                <h2 class="text-3xl lg:text-5xl font-bold text-yellow-400">
                    10+
                </h2>

                <p class="mt-2 text-gray-400 text-sm">
                    Technologies
                </p>
            </div>

            <div class="bg-zinc-900 rounded-2xl p-6 text-center">
                <h2 class="text-3xl lg:text-5xl font-bold text-yellow-400">
                    100%
                </h2>

                <p class="mt-2 text-gray-400 text-sm">
                    Client Satisfaction
                </p>
            </div>

        </div>

        <!-- Skills -->
        <div class="mt-24">

            <h2 class="text-3xl sm:text-4xl font-bold text-center">
                Technologies I Work With
            </h2>

            <div class="flex flex-wrap justify-center gap-3 mt-12">

                <span class="px-5 py-3 rounded-full bg-yellow-400 text-black font-semibold">Java</span>
                <span class="px-5 py-3 rounded-full bg-zinc-900">Spring Boot</span>
                <span class="px-5 py-3 rounded-full bg-zinc-900">Angular</span>
                <span class="px-5 py-3 rounded-full bg-zinc-900">TypeScript</span>
                <span class="px-5 py-3 rounded-full bg-zinc-900">Tailwind CSS</span>
                <span class="px-5 py-3 rounded-full bg-zinc-900">REST APIs</span>
                <span class="px-5 py-3 rounded-full bg-zinc-900">PostgreSQL</span>
                <span class="px-5 py-3 rounded-full bg-zinc-900">MongoDB</span>
                <span class="px-5 py-3 rounded-full bg-zinc-900">Hibernate</span>
                <span class="px-5 py-3 rounded-full bg-zinc-900">Docker</span>
                <span class="px-5 py-3 rounded-full bg-zinc-900">Git</span>
                <span class="px-5 py-3 rounded-full bg-zinc-900">Spring AI</span>

            </div>

        </div>

        <!-- Experience Cards -->
        <div class="grid md:grid-cols-2 gap-8 mt-24">

            <div class="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">

                <h3 class="text-2xl font-bold text-yellow-400">
                    Enterprise Applications
                </h3>

                <p class="mt-5 text-gray-400 leading-8">
                    Experience building ambulance management,
                    hospital management, business automation,
                    and enterprise web applications.
                </p>

            </div>

            <div class="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">

                <h3 class="text-2xl font-bold text-yellow-400">
                    Full Stack Development
                </h3>

                <p class="mt-5 text-gray-400 leading-8">
                    Developing scalable backend APIs with Spring Boot
                    and modern Angular frontends integrated with
                    PostgreSQL and MongoDB.
                </p>

            </div>

        </div>

    </div>

</section>`,
    imports:[]
})
export class about{
    
}