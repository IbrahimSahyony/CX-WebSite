import React from 'react';

const cardData = [
  {
    logo: 'Logo 1', // يمكنك وضع صورة بدلاً من النص
    title: 'Creative and Analytical',
    description: 'We combine creativity with data-driven strategies to craft compelling campaigns.'
  },
  {
    logo: 'Logo 2',
    title: 'Innovative and Practical',
    description: 'Our solutions are both creative and grounded in real-world business needs.'
  },
  {
    logo: 'Logo 2',
    title: 'Innovative and Practical',
    description: 'Our solutions are both creative and grounded in real-world business needs.'
  },
  {
    logo: 'Logo 2',
    title: 'Innovative and Practical',
    description: 'Our solutions are both creative and grounded in real-world business needs.'
  },
  // يمكنك إضافة المزيد من العناصر هنا
];

const CardData = () => {
  return (
    <div className="flex flex-col items-center mb-24 ">
    <div className="  py-8 px-4 rounded-3xl shadow-lg border-2 border-white">
          {cardData.map((card, index) => (
        <div key={index} >
          <div className="flex items-center mb-10 ">
            {/* الشعار (اللوغو) - يأخذ ربع العرض */}
            <div className="w-1/4">
              <div className="bg-gradient-to-bl from-pink-500  to-purple-300 p-4 rounded-full text-white size-32">
                {/* هنا يمكنك استبدال النص باللوغو الحقيقي */}
                {card.logo}
              </div>
            </div>

            {/* النص - يأخذ ثلاثة أرباع العرض */}
            <div className="w-3/4">
              <h3 className="text-4xl tracking-wider  font-bold text-black">{card.title}</h3>
              <p className="mt-4 text-gray-600 text-start">{card.description}</p>
            </div>
          </div>
        </div>
        
      ))}
    </div>
    </div>
  );
};

export default CardData;
