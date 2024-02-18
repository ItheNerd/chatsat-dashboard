import { response } from "@/lib/mock.json";
import { TrendingUp } from "lucide-react";
import {
  ModuleCard,
  ModuleDescription,
  ModuleIcon,
  ModuleInfo,
  ModuleTitle,
} from "./ui/composableCards";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="grid max-w-screen-md grid-cols-1 gap-8 md:grid-cols-2">
      {response.TaskData.map((product) => (
        <ModuleCard key={product.id}>
          <ModuleInfo status={product.status} date={product.date} />
          <ModuleIcon
            iconType="lucidIcon"
            iconNode={
              <TrendingUp className="flex h-[50%] w-[50%] items-start justify-center" />
            }
          />
          <ModuleTitle title={product.title} />
          <ModuleDescription description={product.description} />
        </ModuleCard>
      ))}
    </div>
  );
};

export default Card;
