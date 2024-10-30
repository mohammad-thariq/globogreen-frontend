import { useRouter } from "next/router";
import React from "react";
import CustomPageCom from "../../src/components/CustomPageCom";

export default function PageWrap() {
  const router = useRouter();
  return (
    <>
      <CustomPageCom slug={router.query.custom} />
    </>
  );
}
