import { useMemo } from "react";

import "./GalleryList.css";

import pic1 from "../../assets/images/art-gallery/pic1.webp";
import pic2 from "../../assets/images/art-gallery/pic2.webp";
import pic3 from "../../assets/images/art-gallery/pic3.webp";
import pic4 from "../../assets/images/art-gallery/pic4.webp";
import pic5 from "../../assets/images/art-gallery/pic5.webp";
import pic6 from "../../assets/images/art-gallery/pic6.webp";
import pic7 from "../../assets/images/art-gallery/pic7.webp";
import pic8 from "../../assets/images/art-gallery/pic8.webp";
import pic9 from "../../assets/images/art-gallery/pic9.webp";
import pic10 from "../../assets/images/art-gallery/pic10.webp";
import pic11 from "../../assets/images/art-gallery/pic11.webp";
import pic12 from "../../assets/images/art-gallery/pic12.webp";
import pic13 from "../../assets/images/art-gallery/pic13.webp";
import ImageList from "../../components/image-list/ImageList";


const GalleryList = () => {

  const artList = useMemo(() => [
    {
      url: pic1, label: 'Sunset Harmony', description: '60 x 80 cm / 23.62 x 31.50 in, oil / canvas by Ivan Petrov', price: 278500
    },
    {
      url: pic2,
      label: 'Misty Forest',
      description: '50 x 70 cm / 19.69 x 27.56 in, acrylic / canvas by Maria Ivanova',
      price: 320000
    },
    {
      url: pic3,
      label: 'Ocean Breeze',
      description: '70 x 90 cm / 27.56 x 35.43 in, watercolor / paper by Alexei Smirnov',
      price: 285000
    },
    {
      url: pic4,
      label: 'Golden Fields',
      description: '55 x 75 cm / 21.65 x 29.53 in, oil / canvas by Elena Sergeeva',
      price: 315700
    },
    {
      url: pic5,
      label: 'Winter Silence',
      description: '60 x 80 cm / 23.62 x 31.50 in, pastel / paper by Oleg Kuznetsov',
      price: 298000
    },
    {
      url: pic6,
      label: 'Mountain Peaks',
      description: '80 x 100 cm / 31.50 x 39.37 in, oil / canvas by Sergey Andreev',
      price: 415700
    },
    {
      url: pic7,
      label: 'Autumn Path',
      description: '65 x 85 cm / 25.59 x 33.46 in, acrylic / canvas by Natalia Volkova',
      price: 299900
    },
    {
      url: pic8,
      label: 'City Lights',
      description: '70 x 100 cm / 27.56 x 39.37 in, oil / canvas by Viktor Lebedev',
      price: 335000
    },
    {
      url: pic9,
      label: 'Calm Waters',
      description: '60 x 80 cm / 23.62 x 31.50 in, watercolor / paper by Anastasia Markova',
      price: 270000
    },
    {
      url: pic10,
      label: 'Desert Mirage',
      description: '75 x 100 cm / 29.53 x 39.37 in, oil / canvas by Dmitry Ivanov',
      price: 389500
    },
    {
      url: pic11,
      label: 'Spring Meadow',
      description: '50 x 70 cm / 19.69 x 27.56 in, pastel / paper by Olga Sokolova',
      price: 315700
    },
    {
      url: pic12,
      label: 'Night Sky',
      description: '80 x 120 cm / 31.50 x 47.24 in, acrylic / canvas by Pavel Kravtsov',
      price: 450000
    },
    {
      url: pic13,
      label: 'Forest Whisper',
      description: '60 x 90 cm / 23.62 x 35.43 in, oil / canvas by Irina Smirnova',
      price: 340000
    }
  ], [])

  return (
    <section id="gallery-list">
      <ImageList list={artList} />
    </section>
  );

}

export default GalleryList;