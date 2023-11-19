import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    return (
      <div
        className="fixed top-0 w-full h-14 border-b shadow-sm px-4
        bg-white flex items-center "
      >
        <div className="md:max-w-screen-2xl flex items-center justify-between w-full mx-auto">
          <Logo />
          <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
            <Button>Login</Button>
            <Button>Get Taskify for Free</Button>
          </div>
        </div>
      </div>
    );
}