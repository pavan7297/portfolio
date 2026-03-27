import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">

  <div class="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-2xl p-8">

    <!-- LEFT SIDE -->
    <div class="flex flex-col justify-center gap-6">
      <h1 class="text-4xl font-bold text-gray-800">Contact Me</h1>
      <p class="text-gray-600">
        Have a project in mind or looking for a freelancer? Feel free to reach out.
        I’d love to help you build something amazing 🚀
      </p>

      <div class="space-y-4">
        <div>
          <h3 class="font-semibold text-gray-700">📧 Email</h3>
          <p class="text-gray-600">mallapavansrinivas@gmail.com</p>
        </div>

        <div>
          <h3 class="font-semibold text-gray-700">📞 Phone</h3>
          <p class="text-gray-600">+91 9502214310</p>
        </div>

        <div>
          <h3 class="font-semibold text-gray-700">📍 Location</h3>
          <p class="text-gray-600">Rajahmundry, AP, India</p>
        </div>
      </div>
    </div>

    <!-- RIGHT SIDE FORM -->
    <form class="space-y-5">

      <div>
        <label class="block text-gray-700 font-medium mb-1">Name</label>
        <input type="text" placeholder="Enter your name"
          class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"/>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">Email</label>
        <input type="email" placeholder="Enter your email"
          class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"/>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">Subject</label>
        <input type="text" placeholder="Project subject"
          class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"/>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">Message</label>
        <textarea rows="4" placeholder="Describe your project..."
          class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"></textarea>
      </div>

      <button
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
        Send Message
      </button>

    </form>

  </div>
</div>
  `
})
export class ContactComponent {}
