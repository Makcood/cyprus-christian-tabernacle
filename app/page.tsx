import { GitBranch } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <section className="flex h-svh items-center justify-center">
      <div>
        {/*<h1 className="text-body-md font-semibold">Hello world !</h1>*/}
        <Button size="lg">
          <GitBranch data-icon="inline-start" /> New Branch
        </Button>
      </div>
    </section>
  );
}
