import React, { useState } from 'react';
import './Gallery.css'

const images = [
    {
        url: 'https://i.ibb.co/n6Fh476/2511713-edit.jpg',
        foodName: 'Şiş Kebap',
        price: '$10.99'
    },
    {
        url: 'https://i.ibb.co/YWyF8Fm/turkishfood8-1024x640-Custom.jpg',
        foodName: 'Lahmacun',
        price: '$12.49'
    },
    {
        url: 'https://i.ibb.co/qRdpN3V/HX6-SUSSM33-RUJ4-D2-VYBD6-CC3-RU.jpg',
        foodName: 'Köfte',
        price: '$14.99'
    },
    {
        url: 'https://i.ibb.co/R6bv0S3/Screenshot-2023-07-22-144423.jpg',
        foodName: 'Borek',
        price: '$9.99'
    },
    {
        url: 'https://i.ibb.co/R2QjT9x/Screenshot-2023-07-22-155344-Custom-2.jpg',
        foodName: 'Kunefe',
        price: '$18.99'
    },
    {
        url: 'https://i.ibb.co/QvWn6K2/imam-bayildi-b9911d4c-b18e-491d-9fc8-092a96a8ec84.jpg',
        foodName: 'İmam Bayıldı',
        price: '$6.99'
    }
];


// const Gallery = () => {
//     const [selectedImage, setSelectedImage] = useState(null);

//     const handleClick = (image) => {
//         setSelectedImage(image);
//     };

//     return (
//         <div className="grid w-full grid-cols-2 gap-1 p-4 m-1 box-shadow md:grid-cols-2 lg:grid-cols-3 ">
//             {images.map((image, index) => (
//                 <div
//                     key={index}
//                     className="relative w-full overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg cursor-pointer box-shadow hover:scale-110"
//                     onClick={() => handleClick(image)}
//                 >
//                     <img
//                         src={image.url}
//                         alt={`Image ${index + 1}`}
//                         className="w-full h-auto"
//                     />
//                     {selectedImage && selectedImage === image && (
//                         <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
//                             <div className="text-center">
//                                 <h3 className="text-lg font-semibold">{image.foodName}</h3>
//                                 <p className="text-gray-200">{image.price}</p>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };


// export default Gallery;

const Gallery = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (image) => {
        setHoveredImage(image);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    return (
        <div className="grid w-full grid-cols-2 gap-1 p-4 m-1 box-shadow md:grid-cols-2 lg:grid-cols-3 ">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="relative w-full overflow-hidden transition-transform duration-300 transform rounded-lg shadow-lg cursor-pointer box-shadow hover:scale-105"
                    onMouseEnter={() => handleMouseEnter(image)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src={image.url}
                        alt={`Image ${index + 1}`}
                        className="w-full h-auto"
                    />
                    {hoveredImage === image && (
                        <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold">{image.foodName}</h3>
                                <p className="text-gray-200">{image.price}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Gallery;