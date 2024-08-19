import dynamic from "next/dynamic"

const Page = dynamic(()=> import("advisor/pages/destinations"), { ssr: false});

export default Page;
