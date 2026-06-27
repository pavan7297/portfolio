import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [FormsModule],
    template: `
<section class="relative min-h-screen overflow-hidden">

    <!-- Background Video -->
    <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover">

        <source src="assets/videos/contact-bg.mp4" type="video/mp4">

    </video>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/75 backdrop-blur-sm"></div>

    <!-- Content -->
    <div class="relative z-10 flex items-center justify-center min-h-screen px-6">

        <div class="w-full max-w-3xl rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-10 shadow-2xl">

            <p class="uppercase tracking-[6px] text-yellow-400 text-sm">
                Let's Connect
            </p>

            <h1 class="mt-3 text-5xl font-bold text-white">
                Let's Build Something Amazing
            </h1>

            <p class="mt-5 text-gray-300">
                Whether you're looking to hire a Java Backend Developer,
                need a freelance developer for your next project,
                or simply want to discuss an idea,
                I'd love to hear from you.
            </p>

            <form
                class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10"
                (ngSubmit)="sendMessage()">

                <!-- Name -->
                <input
                    type="text"
                    placeholder="Full Name"
                    [(ngModel)]="name"
                    name="name"
                    class="col-span-1 rounded-xl bg-black/30 px-5 py-4 text-white border border-white/20 outline-none"/>

                <!-- Email -->
                <input
                    type="email"
                    placeholder="Email Address"
                    [(ngModel)]="email"
                    name="email"
                    class="col-span-1 rounded-xl bg-black/30 px-5 py-4 text-white border border-white/20 outline-none"/>

                <!-- Phone -->
                <input
                    type="text"
                    placeholder="Phone Number"
                    [(ngModel)]="phone"
                    name="phone"
                    class="col-span-1 rounded-xl bg-black/30 px-5 py-4 text-white border border-white/20 outline-none"/>

                <!-- Company -->
                <input
                    type="text"
                    placeholder="Company / Organization"
                    [(ngModel)]="company"
                    name="company"
                    class="col-span-1 rounded-xl bg-black/30 px-5 py-4 text-white border border-white/20 outline-none"/>

                <!-- Inquiry Type -->
                <select
                    [(ngModel)]="type"
                    name="type"
                    class="md:col-span-2 rounded-xl bg-black/30 px-5 py-4 text-white border border-white/20 outline-none">

                    <option value="">Select Inquiry Type</option>
                    <option>Full-Time Job Opportunity</option>
                    <option>Freelance Project</option>
                    <option>Contract Work</option>
                    <option>Website Development</option>
                    <option>Spring Boot API Development</option>
                    <option>Angular Development</option>
                    <option>AI / MCP Development</option>
                    <option>Technical Consultation</option>
                    <option>Collaboration</option>
                    <option>Other</option>

                </select>

                <!-- Budget -->

                <input
                    type="text"
                    placeholder="Budget (Optional)"
                    [(ngModel)]="budget"
                    name="budget"
                    class="rounded-xl bg-black/30 px-5 py-4 text-white border border-white/20"/>

                <!-- Timeline -->

                <input
                    type="text"
                    placeholder="Project Timeline"
                    [(ngModel)]="timeline"
                    name="timeline"
                    class="rounded-xl bg-black/30 px-5 py-4 text-white border border-white/20"/>

                <!-- Message -->

                <textarea
                    rows="6"
                    [(ngModel)]="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    class="md:col-span-2 rounded-xl bg-black/30 px-5 py-4 text-white border border-white/20"></textarea>

                <button
                    class="md:col-span-2 mt-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl transition-all">

                    Send via WhatsApp →

                </button>

            </form>

        </div>

    </div>

</section>
  `
})
export class contact {

    // Replace with your WhatsApp number
    whatsappNumber = "9502214310";

    name = "";
    email = "";
    subject = "";
    message = "";
    phone = "";
    company = "";
    type = "";
    budget = "";
    timeline = "";


    sendMessage() {

        const text = `🚀 New Portfolio Enquiry

👤 Name: ${this.name}

📧 Email: ${this.email}

📱 Phone: ${this.phone}

🏢 Company: ${this.company}

📌 Inquiry: ${this.type}

💰 Budget: ${this.budget}

📅 Timeline: ${this.timeline}

📝 Message:
${this.message}`;

        window.open(
            `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(text)}`,
            '_blank'
        );

    }

}