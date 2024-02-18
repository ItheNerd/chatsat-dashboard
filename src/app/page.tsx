import Card from "@/components/taskCard";
import { response } from "@/lib/mock.json";

type Props = {};

const page = () => {
  return (
    <main className="flex h-full w-full flex-col items-center">
      <div>
        <header className="mb-10 text-4xl font-semibold">
          <h1 className="">
            Hey,<span className="ml-2 text-accent">{response.user.name}!</span>
          </h1>
          <p>
            How&apos;s your prep for the
            <span className="ml-2 text-accent">March SAT</span>
          </p>
        </header>
        <Card />
      </div>
    </main>
  );
};

export default page;
