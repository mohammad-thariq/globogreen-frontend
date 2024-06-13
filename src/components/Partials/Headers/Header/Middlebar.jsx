import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiRequest from "../../../../../utils/apiRequest";
import { fetchWishlist } from "../../../../store/wishlistData";
import LoginContext from "../../../Contexts/LoginContext";
import SearchBox from "../../../Helpers/SearchBox";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import Compair from "../../../Helpers/icons/Compair";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
export default function Middlebar({ className, settings }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const getLoginContexts = useContext(LoginContext);
  const { wishlistData } = useSelector((state) => state.wishlistData);
  const wishlists = wishlistData && wishlistData.wishlists;
  const [profile, setProfile] = useState(false);
  const [auth, setAuth] = useState(null);
  const { compareProducts } = useSelector((state) => state.compareProducts);
  useEffect(() => {
    if (getLoginContexts.loginPopup === false) {
      setAuth(() => JSON.parse(localStorage.getItem("auth")));
    }
  }, [getLoginContexts.loginPopup]);
  const profilehandler = () => {
    setProfile(!profile);
  };
  const logout = () => {
    if (auth) {
      apiRequest.logout(auth.access_token);
      localStorage.removeItem("auth");
      dispatch(fetchWishlist());
      router.push("/login");
    }
  };
  //cart
  const { cart } = useSelector((state) => state.cart);
  const [cartItems, setCartItem] = useState(null);
  useEffect(() => {
    cart && setCartItem(cart.cartProducts);
  }, [cart]);
  return (
    <div className={`w-full h-[86px] bg-white z-10 ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div className="relative flex items-center gap-3.5">
              <Link href="/" passHref>
                <a rel="noopener noreferrer">
                  {settings && (
                    <Image
                      width="153"
                      height="44"
                      objectFit="scale-down"
                      src={`${process.env.NEXT_PUBLIC_BASE_URL + settings.logo
                        }`}
                      alt="logo"
                    />
                  )}
                </a>
              </Link>
            </div>
            <div className="w-[450px] h-[40px]">
              <SearchBox className="search-com" />
            </div>
            <div className="flex space-x-6 rtl:space-x-reverse items-center relative gap-2.5">
              <div>
                {auth ? (
                  <button onClick={profilehandler} type="button">

                    <span className="text-qblack flex gap-3 font-bold text-sm block border-solid hover:border pt-2 pb-2 pl-3 pr-3 border-slate-400 hover:bg-slate-100 rounded-lg">
                      <span className="cursor-pointer">
                        <ThinPeople />
                      </span>
                      {auth && auth.user.name}
                    </span>
                    {/* <span className="text-qgray font-medium text-sm block">
                      {auth && auth.user.phon
                    </span> */}
                  </button>
                ) : (
                  <div className="border-solid hover:border  pt-2 pb-2 pl-3 pr-3 border-slate-400 hover:bg-slate-100 rounded-lg">  <Link href="/login" passHref>
                    <a rel="noopener noreferrer" className="module-flex">
                      <span className="cursor-pointer">
                        <ThinPeople />
                      </span>
                      <span>Login</span>
                    </a>
                  </Link> </div>

                )}
              </div>
              {/* <div className="favorite relative">
                <Link href="/wishlist" passHref>
                  <a rel="noopener noreferrer">
                    <span className="cursor-pointer">
                      <ThinLove className="fill-current" />
                    </span>
                  </a>
                </Link>
                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  {wishlists ? wishlists.data.length : 0}
                </span>
              </div> */}
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <Link href="/cart" passHref>
                    <a rel="noopener noreferrer" className="module-flex">
                      <span className="cursor-pointer">
                        <ThinBag />
                      </span>
                      <span>Cart</span>
                    </a>
                  </Link>
                  <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                    {cartItems ? cartItems.length : 0}
                  </span>
                </div>

                {/* <Cart className="absolute ltr:-right-[45px] rtl:-left-[45px] top-11 z-50 hidden group-hover:block" /> */}
              </div>

              <div className="compaire relative" style={{ width: "140px" }}>
            
                  <Link href="/become-seller" passHref>
                    <a rel="noopener noreferrer" className="module-flex">
                      <span className="cursor-pointer">
                        <Compair className="fill-current" />
                      </span>
                      <span>Became Seller</span>
                    </a>
                  </Link>

                {/* <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                  {compareProducts ? compareProducts.products.length : 0}
                </span> */}
              </div>

              {profile && (
                <>
                  <div
                    onClick={() => setProfile(false)}
                    className="w-full h-full fixed top-0 left-0 z-30"
                    style={{ zIndex: "35", margin: "0" }}
                  ></div>
                  <div
                    className="w-[208px] h-[215px] bg-white absolute right-[140px] top-[4.5rem] z-40 border-t-[3px] primary-border flex flex-col justify-between rounded-lg"
                    style={{
                      boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                    }}
                  >
                    <div className="menu-item-area w-full  p-5">
                      <ul className="w-full  flex flex-col space-y-7">
                        {/* <li className="text-base text-qgraytwo">
                          <span>
                            {ServeLangItem()?.Hi}, {auth && auth.user.name}{" "}
                          </span>
                        </li> */}
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/profile#dashboard" passHref>
                            <a rel="noopener noreferrer" className="flex items-center gap-[15px]">
                              <FontAwesomeIcon icon="fa-user" />
                              <span className="capitalize">
                                {ServeLangItem()?.profile}
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/contact" passHref>
                            <a rel="noopener noreferrer" className="flex items-center gap-[15px]">
                              <FontAwesomeIcon icon="fa-phone" />
                              <span className="capitalize">
                                {ServeLangItem()?.Support}
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/faq" passHref>
                            <a rel="noopener noreferrer" className="flex items-center gap-[15px]">
                              <FontAwesomeIcon icon="fa-circle-question"/>
                              <span className="capitalize">
                                {ServeLangItem()?.FAQ}
                              </span>
                            </a>
                          </Link>
                        </li>
                          <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                            <a rel="noopener noreferrer" className="flex items-center gap-[15px]" onClick={logout}>
                            <FontAwesomeIcon icon="fa-arrow-right-from-bracket" style={{color: "#ff0000"}}/>
                              <span className="capitalize text-[#ff0000]">
                                {ServeLangItem()?.Sign_Out}
                              </span>
                            </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
