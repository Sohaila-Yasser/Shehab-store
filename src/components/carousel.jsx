import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    name: "item",
    price: 0,
    priceTwo: 0,
    url:
      "https://i.pinimg.com/736x/0b/66/7f/0b667fb49c4a8679ea269c3a763e6f2d--room-kitchen-kitchen-reno.jpg"
  },
  {
    name: "item",
    price: 0,
    priceTwo: 0,
    url: "https://mutlumetal.com/wp-content/uploads/2021/12/3985168_fpx.jpeg"
  },
  //Second image url
  {
    name: "item",
    price: 0,
    priceTwo: 0,
    url:
      "https://m.media-amazon.com/images/I/41tgcNpCocL._AC_UF894,1000_QL80_DpWeblab_.jpg"
  },
  //Third image url
  {
    name: "item",
    price: 0,
    priceTwo: 0,
    url:
      "https://artelly.in/cdn/shop/products/mdfhanging07_4.jpg?v=1679143356&width=1445"
  },

  //Fourth image url

  {
    name: "item",
    price: 0,
    priceTwo: 0,
    url:
      "https://media.istockphoto.com/id/1155436794/photo/home-decorative-items.jpg?s=170667a&w=0&k=20&c=SbdkxR2-MzZVGCKmay8HtfHNbzD_imqjYFVzwqV4h7k="
  },
  {
    name: "item",
    price: 0,
    priceTwo: 0,
    url: "data:image/jpeg;base64,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"
  }, 
  {
    name: "item",
    price: 0,
    priceTwo: 0,
    url: "https://elmallwany.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-15-at-5.49.20-PM.jpeg"
  }, 
  {
    name: "item",
    price: 0,
    priceTwo: 0,
    url: "https://media.homecentre.com/i/homecentre/164079714-164079714-HC17022022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-sqr-pdp-2x$"
  },
  {
    name: "item",
    price: 0,
    priceTwo: 0,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgUfY01ez7au6wBTotAZTZ04FIZHHLCsdPA&usqp=CAU"
  }, 
  {
    name: "item",
    price: 0,
    priceTwo: 0,
    url: "https://media.zid.store/thumbs/95582541-9860-41cf-b6c9-f0db723d77e1/6953da26-368b-41a9-8a6f-f86b7f8653c2-thumbnail-770x770-70.jpg"
  },
  {
    name: "item",
    price: 0,
    priceTwo: 0,
    url: "https://i.pinimg.com/originals/22/8d/0b/228d0b07636b20ed966ee878b0c95a85.jpg"
  },
  {
    name: "item",
    price: 0,
    priceTwo: 0,
    url: "https://m.media-amazon.com/images/I/61WzR7GhazL._AC_UF894,1000_QL80_.jpg"
  }
];
export const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" className="image-slider" />
              <h4>{imageUrl.name}</h4>
              <p className="old-price">
                <b>{imageUrl.priceTwo}$</b>
              </p>
              <p className="price-one">
                <b>{imageUrl.price}$</b>
              </p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
