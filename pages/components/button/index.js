import React from "react";
import Link from "next/link";

export default function CommonButton({
  buttonName,
  buttonIcon = "",
  buttonClass,
  buttonLink,
}) {
  return (
    <>
      <Link href={buttonLink} className={buttonClass}>
        {buttonName} {buttonIcon}
      </Link>
    </>
  );
}
