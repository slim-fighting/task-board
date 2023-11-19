import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});
const textFont = Poppins({
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"]
})
const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div
          className="flex items-center border shadow-sm bg-amber-100
         text-amber-700 rounded-full p-4 uppercase mb-4"
        >
          <Medal className="w-6 h-6 mr-2" />
          No 1 task management
        </div>
        <h1
          className={cn(
            "text-3xl md:text-6xl text-center mb-6",
            headingFont.className
          )}
        >
          Taskify helps to team move
        </h1>
        <div
          className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 
        text-white px-4 p-2 pb-4 rounded-md w-fit"
        >
          Work forward
        </div>
        <div
          className={cn(
            "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto mb-4",
            textFont.className
          )}
        >
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia
        </div>
        <Button>
          <Link href="/sing-up">get Taskify for free</Link>
        </Button>
      </div>
    </div>
  );
};
export default MarketingPage;
