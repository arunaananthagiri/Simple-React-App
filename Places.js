// src/components/Places.js
import React from 'react';
import Place from './Place';

const Places = () => {
  const places = [
    {
      name: 'Shaolin Temple',
      description: 'The Shaolin Temple is a Chan Buddhist temple in Dengfeng, Henan Province, China. Known as the birthplace of Shaolin Kung Fu, it has a rich history dating back to 495 AD. The temple is famous for its association with martial arts and Buddhism, attracting visitors from around the world As the first Shaolin abbot, Batuo devoted himself to translating Buddhist scriptures and to preaching doctrines to hundreds of his followers. According to legend, Bodhidharma, the 28th patriarch of Mahayana Buddhism in India, arrived at the Shaolin Temple in 527. He spent nine years meditating in a cave of the Wuru Peak and initiated the Chinese Chan tradition at the Shaolin Temple. Thereafter, Bodhidharma was honored as the first patriarch of Chan Buddhism.',
      image: 'https://images.unsplash.com/photo-1543160058-bb08f2f22c21?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhb2xpbiUyMHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      name: 'Great Wall of China',
      description: 'The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials. Built along the northern borders of China, it is the longest wall in the world, stretching over 13,000 miles and showcasing China’s incredible engineering and history. Apart from defense, other purposes of the Great Wall have included border controls, allowing the imposition of duties on goods transported along the Silk Road, regulation or encouragement of trade and the control of immigration and emigration.[6] Furthermore, the defensive characteristics of the Great Wall were enhanced by the construction of watchtowers, troop barracks, garrison stations, signaling capabilities through the means of smoke or fire, and the fact that the path of the Great Wall also served as a transportation corridor.',
      image: 'https://www.tripsavvy.com/thmb/S6Daq_joeyN3xU0Bz3Qt7QGe0YM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-654013042-28f42fc82c544a9fb0f74458b85de713.jpg',
    },
    {
      name: 'Forbidden City',
      description: 'The Forbidden City is a palace complex in central Beijing, China. It houses the Palace Museum and was the former Chinese imperial palace. Built from 1406 to 1420, the complex consists of 980 buildings and covers 180 acres, representing the pinnacle of traditional Chinese architecture. The Forbidden City was constructed from 1406 to 1420, and was the former imperial palace and winter residence of the Emperor of China from the Ming dynasty (since the Yongle Emperor) to the end of the Qing dynasty, between 1420 and 1924. The Forbidden City served as the home of Chinese emperors and their households and was the ceremonial and political center of the Chinese government for over 500 years. Since 1925, the Forbidden City has been under the charge of the Palace Museum, whose extensive collection of artwork and artifacts was built upon the imperial collections of the Ming and Qing dynasties. The Forbidden City was declared a World Heritage Site in 1987.',
      image: 'https://data.trippest.com/images/info/beijing/870-10.jpg',
    },
  ];

  return (
    <section id="places">
      <h2>Places to Explore</h2>
      {places.map((place, index) => (
        <Place key={index} {...place} />
      ))}
    </section>
  );
};

export default Places;
