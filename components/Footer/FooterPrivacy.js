import React from "react";
import Link from "next/link";

export function FooterPrivacy() {
  return (
    <div className="row justify-content-between">
      <div className="col-auto">2021 © All rights reserved</div>
      <div className="col-auto">
        <Link href="">
          <a className="mr-2">Privacy</a>
        </Link>
        <Link href="">Terms</Link>
      </div>
    </div>
  );
}
