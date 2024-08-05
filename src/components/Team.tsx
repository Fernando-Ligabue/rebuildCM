import { teamContent } from '@/lib/constants';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const NextArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <FaChevronRight
      className={`${className} text-black text-lg font-bold`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <FaChevronLeft
      className={`${className} text-black text-lg font-bold`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};
const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 779,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 569,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <section id="team" className='bg-white w-full py-28 flex flex-col justify-center items-center overflow-hidden'>
      <h2
        data-aos="fade-up" data-aos-duration="1500"
        className='text-4xl font-semibold text-black py-8'>EQUIPA</h2>
      <div
        data-aos="fade-right" data-aos-delay="100" data-aos-duration="1800"
        className="w-full max-w-[1200px] mx-auto overflow-hidden px-4">
        <Slider {...settings}>
          {teamContent.map((member) => (
            <div key={member.id} className='flex flex-col justify-center items-center w-full gap-2 mt-10 p-2 cursor-grab'>
              <img src={member.image} alt={member.name} className='w-[200px] h-[200px] rounded-full object-cover border border-x-zinc-200 hover:-rotate-90 transition-all duration-300' />
              <div className='flex flex-col justify-center items-center my-4'>
                <span className='text-black font-medium uppercase text-lg'>{member.name}</span>
                <small className='text-black font-light text-sx'>{member.role}</small>
              </div>
              <p className='text-black font-light text-sx text-center w-full max-w-[250px] mx-auto mt-2 p-2'>{member.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Team;
