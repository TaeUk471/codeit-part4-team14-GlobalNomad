"use client";
import Image from "next/image";
import React, { useState } from "react";

interface SubImages {
  id: number;
  imageUrl: string;
}

interface BannerImageProps {
  banner: string;
  subImages: SubImages[];
}

const BannerImage = ({ banner, subImages }: BannerImageProps) => {
  const [currentBanner, setCurrentBanner] = useState(banner);
  const [isMainBannerDisappear, setIsMainBannerDisappear] = useState(false);

  return (
    <section className="max-h-[50rem] w-full">
      <div className="relative mb-2 h-[25rem] w-full overflow-hidden rounded-xl xl:h-[31.25rem]">
        <Image
          src={currentBanner}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center"
        />
        <Image
          src={banner}
          alt="mainImage"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover object-center duration-500 ${isMainBannerDisappear ? "opacity-0" : "opacity-100"}`}
        />
      </div>
      <section className="flex h-[8.4rem] grid-cols-4 gap-2 overflow-x-scroll md:grid xl:h-[14rem]">
        {subImages.length !== 0 &&
          subImages.map((item, i) => (
            <div
              key={`subImage-${item.id}`}
              className="relative w-full min-w-[10.9375rem] overflow-hidden rounded-xl "
              onMouseOver={() => {
                setCurrentBanner(item.imageUrl);
                setIsMainBannerDisappear(true);
              }}
              onMouseOut={() => setIsMainBannerDisappear(false)}
            >
              <Image
                src={item.imageUrl}
                alt={`subBanner-${i + 1}`}
                fill
                sizes="33vw"
                className="object-cover object-center"
              />
            </div>
          ))}
      </section>
    </section>
  );
};

export default BannerImage;
