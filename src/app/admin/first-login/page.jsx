"use client";

import dynamic from "next/dynamic";

const FirstLogin = dynamic(() => import("./FirstLoginClient"), { ssr: false });

export default FirstLogin;
