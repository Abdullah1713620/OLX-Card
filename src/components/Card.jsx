import React from 'react';
import './Card.css';

export const Card = () => {
  return (
    <div className="card-container">
      {cardData.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-inner">
            <img src={item.imgSrc} alt={item.alt} className="card-image" />
            <div className="card-body">
              <h2 className="card-title">{item.price}</h2>
              <h3 className="card-subtitle">{item.title}</h3>
              <p className="card-location">{item.location}</p>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const cardData = [
  {
    imgSrc: "https://propakistani.pk/price/wp-content/uploads/2021/02/Samsung-Galaxy-A32-price-200x300.png",
    alt: "Samsung Galaxy A32",
    price: "Rs 28,000",
    title: "Samsung Galaxy A32 5G",
    location: "Naimabad No 2, Karachi"
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RWXjwLuAH7yfsUF0rs1AkcAd077tQlqOyg&s",
    alt: "Iphone 8",
    price: "Rs 26,500",
    title: "Iphone 8",
    location: "Saddar Mobile Market, Karachi"
  },
  {
    imgSrc: "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot12-pro.jpg",
    alt: "Infinix Hot 12",
    price: "Rs 30,000",
    title: "Infinix Hot 12",
    location: "Gulshan-e-Iqbal Block 6, Karachi"
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqoqqTU-u8AgbJWZin9gF6g-dQ69tzsN1A7A&s",
    alt: "Iphone 15 Pro Max",
    price: "Rs 320,000",
    title: "Iphone 15 Pro Max",
    location: "Defence Phase 2, Karachi"
  },
  {
    imgSrc: "https://cache2.pakwheels.com/system/bike_model_pictures/971/original/Unique_UD70.jpg?1448607011",
    alt: "Unique Xtreme UD 70",
    price: "Rs 35,000",
    title: "Unique Xtreme UD 70",
    location: "Hyderi, Karachi"
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9ZZnK9dOwQ3E3z8WI-7mChbl8Jneq6jjrw&s",
    alt: "Honda CG 125",
    price: "Rs 234,900",
    title: "Honda CG 125",
    location: "Bahadurabad, Karachi"
  },
  {
    imgSrc: "https://images.medialinksonline.com/imagestream/23187/6322006x1024x0_FFFFFF_L_.jpg",
    alt: "Yamaha R125",
    price: "Rs 315,000",
    title: "Yamaha R125",
    location: "Clifton, Karachi"
  },
  {
    imgSrc: "https://cache3.pakwheels.com/system/bike_model_pictures/1090/original/Vespa_Primavera.jpg?1519827646",
    alt: "Vespa Primavera 150",
    price: "Rs 80,000",
    title: "Vespa Primavera 150",
    location: "Chor Bazar, Karachi"
  },
  {
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTYmXndbx5o1eqANQj0M1Sy9ClgklEAuMEw&s",
    alt: "Mehran VXR 2007",
    price: "Rs 510,000",
    title: "Mehran VXR 2007",
    location: "Hyderi, Karachi"
  },
  {
    imgSrc: "https://cache4.pakwheels.com/system/car_generation_pictures/7370/original/Cover.jpg?1677570254",
    alt: "Honda Civic 2024",
    price: "Rs 8,300,000",
    title: "Honda Civic 2024",
    location: "Bahadurabad, Karachi"
  },
  {
    imgSrc: "https://i.ytimg.com/vi/MB47g8bdOpM/maxresdefault.jpg",
    alt: "Suzuki Alto 2023",
    price: "Rs 2,700,000",
    title: "Suzuki Alto 2023",
    location: "Clifton, Karachi"
  },
  {
    imgSrc: "https://cache2.pakwheels.com/system/car_generation_pictures/4744/original/Ford_F150_.jpg?1515498628",
    alt: "Ford F 150 Raptor",
    price: "Rs 23,400,000",
    title: "Ford F 150 Raptor",
    location: "Chor Bazar, Karachi"
  }
  
  
];

export default Card;
