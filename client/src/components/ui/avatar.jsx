import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

function Avatar({ className, ...props }) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex w-10 h-10 shrink-0 overflow-hidden rounded-full", // Explicit size and shape
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "w-full h-full object-cover", // Ensures the image fills the container and maintains aspect ratio
        className
      )}
      {...props}
    />
  );
}

function AvatarFallback({ className, ...props }) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-gray-200 flex w-full h-full items-center justify-center rounded-full", // Fallback styling
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };