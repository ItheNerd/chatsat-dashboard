import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { HTMLAttributes, Ref, forwardRef } from "react";

type DivProps = HTMLAttributes<HTMLDivElement>;

type ModuleCardProps = DivProps & {};

export const ModuleCard = forwardRef(function ModuleCard({
  children,
  className,
  ...props
}: ModuleCardProps) {
  return (
    <div
      className={cn(
        "group flex aspect-auto h-full w-full flex-col items-start justify-center gap-4 overflow-hidden text-wrap rounded-3xl border border-gray-100 border-opacity-35 bg-gray-400 bg-opacity-20 bg-clip-padding p-8 backdrop-blur-sm backdrop-filter",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

ModuleCard.displayName = "ModuleCard";

type ModuleIconProps = DivProps & {
  iconType: "lucidIcon" | "image";
  src?: string | StaticImport;
  iconNode?: React.ReactNode;
};

export const ModuleIcon = forwardRef<HTMLDivElement, ModuleIconProps>(
  ({ iconType, src, className, iconNode, ...props }, ref) => {
    return (
      <>
        {iconType === "lucidIcon" ? (
          iconNode
        ) : (
          <div
            ref={ref}
            className={cn("overflow-hidden rounded-t-lg", className)}
            {...props}
          >
            <Image
              src={src!}
              alt=""
              className="h-96 w-full scale-105 object-cover transition duration-700 group-hover:scale-100"
            />
          </div>
        )}
      </>
    );
  },
);

ModuleIcon.displayName = "ModuleIcon";

type ModuleTitleProps = DivProps & {
  title?: string;
};
export const ModuleTitle = forwardRef(function ModuleTitle(
  { title, className, ...props }: ModuleTitleProps,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <span
      ref={ref}
      className={cn(
        "text-4xl font-medium capitalize group-hover:underline group-hover:underline-offset-4",
        className,
      )}
      {...props}
    >
      {title}
    </span>
  );
});

ModuleTitle.displayName = "ModuleTitle";

type ModuleInfoProps = DivProps & {
  status?: string;
  date?: string;
};
export const ModuleInfo = forwardRef(function ModuleInfo(
  { status, date, className, ...props }: ModuleInfoProps,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={cn("font-medium capitalize text-muted-foreground", className)}
      {...props}
    >
      <div>{status}</div>
      <div>{date}</div>
    </div>
  );
});
ModuleInfo.displayName = "ModuleInfo";
type ModuleDescriptionProps = DivProps & {
  description: string;
};

export const ModuleDescription = forwardRef(function ModuleDescription(
  { description, className, ...props }: ModuleDescriptionProps,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={cn("font-light", className)} {...props}>
      {description}
    </div>
  );
});
ModuleDescription.displayName = "ModuleDescription";
