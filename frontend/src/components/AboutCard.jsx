function AboutCard(item) {
  const { icon, heading, text } = item;

  return (
    <div className="bg-white p-7 sm:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{heading}</h3>

      <p className="text-gray-600 leading-7">{text}</p>
    </div>
  );
}

export default AboutCard;
