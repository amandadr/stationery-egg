import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useIsMobile from "../utils/hooks/useIsMobile.js";
import FeaturedCard from "./FeaturedCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Featured = () => {
  const isMobile = useIsMobile();

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={false}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={isMobile ? false : true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      deviceType={isMobile ? "mobile" : "desktop"}
      removeArrowOnDeviceType={["mobile"]}
      containerClass="bg-[#fff] h-[35em] w-[100%] flex flex-row items-center"
      itemClass="flex items-center justify-center"
    >
      <FeaturedCard
        img="https://www.semikolon.ca/media/cms/files/design-ohne-titel-(12)-kwwk7u-piw81p.png"
        title="Crafted by hand"
        price={22.99}
      />
      <FeaturedCard
        img="https://www.semikolon.ca/media/cms/files/design-ohne-titel-(10)-393ogb-cglbst.png"
        title="Swedish fine paper"
        price={14.99}
      />
      <FeaturedCard
        img="https://www.semikolon.ca/media/cms/files/design-ohne-titel-(11)-blj5ec-fsxcaq.png"
        title="Bookbinding linen"
        price={33.99}
      />
      <FeaturedCard
        img="https://www.semikolon.ca/media/cms/files/design-ohne-titel-(14)-ix3aev.png"
        title="FSC certified"
        price={55.99}
      />
      <FeaturedCard
        img="https://www.semikolon.ca/media/cms/files/design-ohne-titel-(12)-kwwk7u-piw81p.png"
        title="Crafted by hand"
        price={22.99}
      />
      <FeaturedCard
        img="https://www.semikolon.ca/media/cms/files/design-ohne-titel-(10)-393ogb-cglbst.png"
        title="Swedish fine paper"
        price={14.99}
      />
      <FeaturedCard
        img="https://www.semikolon.ca/media/cms/files/design-ohne-titel-(11)-blj5ec-fsxcaq.png"
        title="Bookbinding linen"
        price={33.99}
      />
      <FeaturedCard
        img="https://www.semikolon.ca/media/cms/files/design-ohne-titel-(14)-ix3aev.png"
        title="FSC certified"
        price={55.99}
      />
    </Carousel>
  );
};

export default Featured;
