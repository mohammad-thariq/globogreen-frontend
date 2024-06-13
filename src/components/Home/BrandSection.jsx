/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function BrandSection({ className, sectionTitle, brands = [] }) {
  console.log(brands, "brands");
  const handleClick = () => {
    window.location.href = "https://dribbble.com/";
  };
  return (
    <div className="container-x mx-auto">
      <div className=" section-title flex justify-between items-center mb-5">
        <div>
          <h1 className="sm:text-3xl text-xl font-600 text-qblacktext">
            {sectionTitle}
          </h1>
        </div>
      </div>
      <div className="slider">
        <div className="slide-track pt-5">
          {brands?.map((i, index) => (
            <Link
            key={index}
              href={{
                pathname: "/products",
                query: { brand: i.slug },
              }}
            >
              <div className="slide">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${i?.logo}`}
                  height="70"
                  width="200"
                  alt=""
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
