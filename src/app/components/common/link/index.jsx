import Link from "next/link";
import React from "react";

function Linking({ path, data }) {
  return <Link href={path}>{data}</Link>;
}

export default Linking;
