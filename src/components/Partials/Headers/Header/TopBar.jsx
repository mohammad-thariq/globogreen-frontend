import Image from "next/image";
import Link from "next/link";
import Arrow from "../../../Helpers/icons/Arrow";
import Selectbox from "../../../Helpers/Selectbox";
// import ThinPeople from "../../../Helpers/icons/ThinPeople";
import auth from "../../../../../utils/auth";
import { useEffect, useState } from "react";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import Multivendor from "../../../Shared/Multivendor";
export default function TopBar({ className, contact }) {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("auth")));
  }, []);
  return (
    <>
     
    </>
  );
}
