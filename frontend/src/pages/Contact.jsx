function Contact() {
  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-center font-bold text-3xl text-gray-950">Contact Us</h1>
      <label className="text-lg font-semibold">Name</label>
      <input
        type="text"
        placeholder="Enter your Name"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="text-lg font-semibold">Email</label>
      <input
        type="email"
        placeholder="Enter your Email"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="text-lg font-semibold">Subject</label>
      <input
        type="text"
        placeholder="Enter subject"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="text-lg font-semibold">Message</label>
      <textarea
        placeholder="Enter your message..."
        rows="3"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Contact;
