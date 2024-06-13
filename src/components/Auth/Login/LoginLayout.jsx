import React from "react";
import Layout from "../../Partials/Layout";

function LoginLayout({ imgThumb, children }) {
  return (
    // <Layout childrenClasses="pt-0 pb-0 mt-[50px]">
    //   <div className="login-page-wrapper w-full py-10">
    //     <div className="container-x mx-auto">
    //       <div className="lg:flex items-center relative">
    //         <div className="lg:w-[572px] w-full h-[625px] mt-[40px] p-[20px] pbg-white flex flex-col justify-center rounded-xl border border-[#E0E0E0]">
    //           {/*login Widget*/}
    //           {children && children}
    //         </div>
    //         <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100   xl:justify-center ">
    //           <div
    //             // className="absolute ltr:xl:-right-20 ltr:-right-[138px] rtl::xl:-left-20 rtl:-left-[138px]"
    //             // style={{ top: "calc(50% - 258px)" }}
    //             className="flex justify-items-end"
    //           >
    //             {imgThumb && (
    //               <Image
    //                 width={400}
    //                 height={300}
    //                 src={`${process.env.NEXT_PUBLIC_BASE_URL + imgThumb}`}
    //                 alt="login"
    //               />
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
    <Layout childrenClasses="mt-[50px]">
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          {/*login Widget*/}
          <div className="flex h-full items-center justify-center">
            <div className="lg:w-[572px] w-full h-[600px] mt-[40px] p-[20px] bg-white rounded-xl border border-[#E0E0E0]">
              {children && children}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginLayout;
