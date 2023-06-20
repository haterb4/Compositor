import React, { useState } from 'react';

interface Granule {
  title: string;
  content: string;
}

const MyComponent: React.FC = () => {
  const [granules, setGranules] = useState<Granule[]>([]);
  const tableauDeGranules: Granule[] = [
    { title: 'Granule 1', content: 'Contenu du granule 1' },
    { title: 'Granule 2', content: 'Contenu du granule 2' },
    { title: 'Granule 3', content: 'Contenu du granule 3' },
  ];

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, granule: Granule) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(granule));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedGranule = JSON.parse(e.dataTransfer.getData('text/plain'));
    setGranules([...granules, droppedGranule]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className='flex w-full'>
      <div
        className="w-[500px] border-2 border-green-500"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {/* Affichez les granules de la div de gauche ici */}
        {granules.map((granule, index) => (
          <div
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, granule)}
          >
            <h3>{granule.title}</h3>
            <p>{granule.content}</p>
          </div>
        ))}
      </div>

      <div className="w-[300] border-2 border-yellow-500">
        {/* Affichez les granules de la div de droite ici */}
        {tableauDeGranules.map((granule, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, granule)}
          >
            <h3>{granule.title}</h3>
            <p>{granule.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
