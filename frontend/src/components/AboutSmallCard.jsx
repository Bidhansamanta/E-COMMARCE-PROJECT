function AboutSmallCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 transition duration-300">
      <div className="text-3xl mb-4">{icon}</div>

      <h3 className="font-bold text-xl text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-500 text-sm leading-6">
        {description}
      </p>
    </div>
  );
}

export default AboutSmallCard;