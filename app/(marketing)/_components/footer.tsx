import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
    return (
      <div className="fixed bottom-0 w-full border-t p-4 bg-slate-100">
        <div className="md:max-w-screen-2xl flex items-center justify-between w-full mx-auto">
          <Logo />
          <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
            <Button size="sm" variant="ghost">
              privacy policy
            </Button>
            <Button size="sm" variant="ghost">
              Terms of service
            </Button>
          </div>
        </div>
      </div>
    );
}