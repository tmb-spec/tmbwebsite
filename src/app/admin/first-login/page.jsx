// admin/first-login/page.jsx
import dynamic from "next/dynamic";

const FirstLogin = dynamic(() => import("./FirstLoginClient"), { ssr: false });

export default FirstLogin;
