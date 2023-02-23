import container from "../components/container";
import Footer from "../components/Footer";
const ContactPage = ()=>{
    return `
    ${container()}
    <h1 class="text-center">Contact</h1>
    <div class = "flex">
  <div class="max-w-lg   mr-7 rounded-lg shadow p-10">
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="name"
        >Họ tên</label
      >
      <input
        class="w-full px-3 py-2 border rounded-md"
        id="name"
        name="name"
        type="text"
        placeholder="Nhập họ tên của bạn"
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="email">
        Email
      </label>
      <input
        class="w-full px-3 py-2 border rounded-md"
        id="email"
        name="email"
        type="email"
        placeholder="Nhập email của bạn"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="message">
        Tin nhắn
      </label>
      <textarea
        class="w-full px-3 py-2 border rounded-md"
        id="message"
        name="message"
        rows="5"
        placeholder="Nhập tin nhắn của bạn"
      ></textarea>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="address">
        Địa chỉ
      </label>
      <input
        class="w-full px-3 py-2 border rounded-md"
        id="address"
        name="address"
        type="text"
        placeholder="Nhập địa chỉ của bạn"
      />
      </div>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-md"
        type="submit"
      >
        Gửi
      </button>

  </div>
  <div class="mb-4 w-full h-full flex justify-center">

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8660159083156!2d105.74466651485452!3d21.038046385993315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2sus!4v1676698042802!5m2!1svi!2sus"
    width="100%"
    height="600"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
    class = "shadow p-2"
    ></iframe>
  </div>
</div>
    ${Footer()}
    `;
}

export default ContactPage;
