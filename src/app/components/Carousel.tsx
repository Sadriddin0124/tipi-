import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { NewsType } from "@/app/types/all.types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Carousel = ({
  data,
  category,
}: {
  data: NewsType[];
  category: string;
}) => {
  const locale = usePathname().split("/")[1];

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const t = useTranslations();
  
  return (
    <Slider {...(settings as React.ComponentProps<typeof Slider>)}>
      {data
        ?.filter((item) => item?.category === category)
        ?.map(
          (item, index) =>
            item?.active && (
              <div className="px-[6px] py-[30px]" key={index}>
                <div className="rounded-[10px] overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-[#D9D9D9] min-h-[180px] h-full flex justify-center items-center">
                    <Image
                      src={item.image.file}
                      alt={`Slide ${index + 1}`}
                      className="w-full object-cover h-[180px]"
                      priority
                      width={500}
                      height={400}
                    />
                  </div>
                  <div className="pt-[26px] px-[18px] pb-[20px] text_main flex flex-col gap-4">
                    <span className="text-[20px] font-[600]">
                      {item?.created_at?.slice(0, 10)}
                    </span>
                    <p className="text-[17px] max-h-[50px] min-h-[60px] font-[600] line-clamp-3 overflow-hidden text-center leading-5">
                      {locale === "ru"
                        ? item?.name_ru
                        : locale === "uz"
                        ? item?.name_uz
                        : item?.name_ru}
                    </p>
                    <Link
                      href={`/${locale}/news?id=${item?.id}`}
                      className="hover:bg-white self-end text-white px-6 py-3 rounded-lg border-2 border-transparent hover:border-[#404B7C] ease-linear duration-200 bg-[#404B7C] hover:text-[#404B7C]"
                    >
                      {t("pedagogue.btn")}
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
    </Slider>
  );
};

export default Carousel;
