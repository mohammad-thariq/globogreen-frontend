/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";

function CategorySection({ sectionTitle, categories }) {
  return (
    <div data-aos="fade-up" className="category-section-wrapper w-full">
      <div className="container-x mx-auto mt-[70px] flex justify-evenly">
        {/*<div className="section-title flex justify-between items-center mb-5">*/}
        {/*    <div>*/}
        {/*        <h1 className="sm:text-3xl text-xl font-600 text-qblacktext">*/}
        {/*            {sectionTitle}*/}
        {/*        </h1>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className="w-full pt-5 pb-5 flex overflow-auto no-scrollbar gap-[5px]">
          {categories &&
            categories.length > 0 &&
            categories
              .slice(0, categories.length > 8 ? 8 : categories.length)
              .map((item, i) => (
                <div
                  data-aos="fade-left"
                  data-aos-delay={i + "00"}
                  key={i}
                  className="item w-full cursor-pointer group"
                >
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: item.slug },
                    }}
                    passhref
                  >
                    <a rel="noopener noreferrer">
                      <div className=" h-[55px]  relative rounded flex justify-center items-center">
                        <div className="w-full h-full justify-center relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out">
                          <Image
                            layout="fill"
                            objectFit="scale-down"
                            src={process.env.NEXT_PUBLIC_BASE_URL + item.image}
                            alt=""
                          />
                        </div>
                      </div>
                      <p className="text-[14px] text-center mt-3.5 group-hover:text-qyellow font-[600] trackin-wider transition duration-300 ease-in-out w-[160px]">
                        {item.name}
                      </p>
                    </a>
                  </Link>   
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
