import Image from 'next/image';

const Boxes = () => {
  const boxes = [
    {
      heading: 'Next day as standard',
      paragraph: 'Order before 3pm and get, your order the next day as, standard',
      image: '/Delivery.png', // Replace with actual image path
    },
    {
      heading: 'Made by true artisans',
      paragraph: 'Handmade crafted goods, made with real passion and, craftmanship',
      image: '/Sprout (1).png', // Replace with actual image path
    },
    {
      heading: 'Unbeatable prices',
      paragraph: 'For our materials and, quality you won’t find better, prices anywhere',
      image: '/Checkmark--Outline.png', // Replace with actual image path
    },
    {
      heading: 'Recycled packaging',
      paragraph: 'We use 100% recycled to ensure our footprint is more manageable',
      image: '/Purchase (2).png', // Replace with actual image path
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-xl font-bold mb-6 text-color-black">What makes our Brand Different</h1>
      <div className="flex gap-4">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="flex items-start bg-[#F9F9F9] w-[309.45px] h-[244px] p-4 rounded-lg shadow-md"
          >
            <Image
              src={box.image}
              alt={`Image for ${box.heading}`}
              width={100}
              height={100}
              className="rounded-full mr-4"
            />
            <div>
              <h2 className="text-[#007580] text-lg font-bold mb-2">{box.heading}</h2>
              <p className="text-[#007580]">{box.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxes;
