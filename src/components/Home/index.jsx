import { useEffect, useState } from "react";
import settings from "../../../utils/settings";
import SectionStyleOne from "../Helpers/SectionStyleOne";
import SectionStyleThree from "../Helpers/SectionStyleThree";
import SectionStyleTwo from "../Helpers/SectionStyleTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import Layout from "../Partials/Layout";
import Ads from "./Ads";
import Banner from "./Banner";
import BrandSection from "./BrandSection";
// import ProductsAds from "./ProductsAds";
import CategorySection from "./CategorySection";
import OneColumnAdsTwo from "./ProductAds/OneColumnAdsTwo";
import TwoColumnAds from "./ProductAds/TwoColumnAds";

export default function Home({ homepageData }) {
  const getsectionTitles = homepageData.section_title;
  const [sectionTitles, setSectionTitles] = useState(null);
  useEffect(() => {
    if (!sectionTitles) {
      let tem =
        getsectionTitles &&
        getsectionTitles.map((item, i) => {
          return {
            [item.key]: item.custom ? item.custom : item.default,
          };
        });
      setSectionTitles(Object.assign.apply(Object, tem));
    }
  }, [sectionTitles]);

  const [homepage] = useState(homepageData);
  const { enable_multivendor } = settings();
  const [isMultivendor, setIsMultivendor] = useState(false);
  useEffect(() => {
    if (!isMultivendor) {
      setIsMultivendor(enable_multivendor && parseInt(enable_multivendor));
    }
  }, [isMultivendor]);
  return (
    <>
      <Layout childrenClasses="pt-[30px] pb-[60px]">
        <Ads />
        {homepage && (
          <CategorySection
            categories={homepage.homepage_categories}
            sectionTitle={sectionTitles && sectionTitles.Trending_Category}
          />
        )}
        {/* {homepage && homepage.sliders.length > 0 && ( */}
        <Banner
          images={homepage.sliders}
          services={homepage.services}
          // sidebarImgOne={homepage.sliderBannerOne && parseInt(homepage.sliderBannerOne.status) === 1 ? homepage.sliderBannerOne : null}
          // sidebarImgTwo={homepage.sliderBannerTwo && parseInt(homepage.sliderBannerTwo.status) === 1 ? homepage.sliderBannerTwo : null}
          className="banner-wrapper md:mb-[30px] mb-[30px] container-x"
        />

        {homepage && (
          <SectionStyleOne
            products={homepage.popularCategoryProducts}
            categories={homepage.popularCategories}
            categoryBackground={
              process.env.NEXT_PUBLIC_BASE_URL +
              homepage.popularCategorySidebarBanner
            }
            categoryTitle={sectionTitles && sectionTitles.Popular_Category}
            sectionTitle={sectionTitles && sectionTitles.Popular_Category}
            seeMoreUrl={`/products?highlight=popular_category`}
            className="category-products md:mb-[20px] mb-[10px]"
          />
        )}

        {/* {homepage && (
          <CampaignCountDown
            className="md:mb-[60px] mb-[30px]"
            flashSaleData={homepage.flashSale}
            downloadData={homepage.flashSaleSidebarBanner}
            lastDate={homepage.flashSale.end_time}
          />
        )} */}
        {/* {homepage && (
          <ViewMoreTitle
            className="top-selling-product md:mb-[60px] mb-[30px]"
            seeMoreUrl={`/products?highlight=top_product`}
            categoryTitle={sectionTitles && sectionTitles.Top_Rated_Products}
          >
           <ProductCard />
          </ViewMoreTitle>
        )} */}
        {homepage && (
          <ViewMoreTitle
            className="top-selling-product md:mb-[20px] mb-[20px]"
            seeMoreUrl={`/products?highlight=top_product`}
            categoryTitle={sectionTitles && sectionTitles.Top_Rated_Products}
          >
            <SectionStyleTwo
              products={
                homepage.topRatedProducts.length && homepage.topRatedProducts.length > 0
                  ? homepage.topRatedProducts
                  : []
              }
            />
          </ViewMoreTitle>
        )}

        {/* {homepage && isMultivendor === 1 && (
          <ViewMoreTitle
            className="best-sallers-section md:mb-[60px] mb-[30px]"
            seeMoreUrl="/sellers"
            categoryTitle={sectionTitles && sectionTitles.Best_Seller}
          >
            <BestSellers
              sallers={homepage.sellers.length > 0 ? homepage.sellers : []}
            />
          </ViewMoreTitle>
        )} */}

        {homepage && (
          <TwoColumnAds
            bannerOne={homepage.twoColumnBannerOne && parseInt(homepage.twoColumnBannerOne.status) === 1 ? homepage.twoColumnBannerOne : null}
            bannerTwo={homepage.twoColumnBannerTwo && parseInt(homepage.twoColumnBannerTwo.status) === 1 ? homepage.twoColumnBannerTwo : null}
          />
        )}
        {homepage && (
          <SectionStyleOne
            categories={
              homepage.featuredCategories.length > 0
                ? homepage.featuredCategories
                : []
            }
            categoryBackground={
              process.env.NEXT_PUBLIC_BASE_URL +
              homepage.featuredCategorySidebarBanner
            }
            categoryTitle={sectionTitles && sectionTitles.Featured_Products}
            products={ homepage.featuredCategoryProducts}
            sectionTitle={sectionTitles && sectionTitles.Featured_Products}
            seeMoreUrl={`/products?highlight=featured_product`}
            className="category-products md:mb-[20px] mb-[20px]"
          />
        )}
        {/* {homepage && <OneColumnAdsOne data={homepage.singleBannerOne && parseInt(homepage.singleBannerOne.status) === 1 ? homepage.singleBannerOne : null} />} */}
        {homepage && (
          <SectionStyleThree
            products={
              homepage.newArrivalProducts.length > 0
                ? homepage.newArrivalProducts.slice(
                  0,
                  homepage.newArrivalProducts.length > 21
                    ? 21
                    : homepage.newArrivalProducts.length
                )
                : []
            }
            sectionTitle={sectionTitles && sectionTitles.New_Arrivals}
            seeMoreUrl={`/products?highlight=new_arrival`}
            className="new-products md:mb-[60px] mb-[30px]"
          />
        )}

        {homepage && (
          <div className="w-full text-white md:mb-[60px] mb-[30px]">
            <div className="container-x mx-auto">
              <OneColumnAdsTwo data={homepage.singleBannerTwo && parseInt(homepage.singleBannerTwo.status) === 1 ? homepage.singleBannerTwo : null} />
            </div>
          </div>
        )}

        {homepage && (
          <BrandSection
            brands={homepage.brands.length > 0 ? homepage.brands : []}
            sectionTitle={sectionTitles && sectionTitles.Shop_by_Brand}
            className="brand-section-wrapper md:mb-[10px] mb-[10px]"
          />
        )}
        {/* {homepage && (
          <SectionStyleFour
            products={
              homepage.bestProducts.length > 0 ? homepage.bestProducts : []
            }
            sectionTitle={sectionTitles && sectionTitles.Best_Products}
            seeMoreUrl={`/products?highlight=best_product`}
            className="category-products md:mb-[60px] mb-[30px]"
          />
        )} */}
      </Layout>
    </>
  );
}
