import Image, { type ImageProps } from "next/image";
import { clsx } from "clsx";

type SafeImageProps = Omit<ImageProps, "alt" | "sizes"> & {
  alt: string;
  sizes?: string;
};

export default function SafeImage({
  alt,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className,
  ...rest
}: SafeImageProps) {
  return (
    <Image
      alt={alt}
      sizes={sizes}
      className={clsx("object-cover", className)}
      {...rest}
    />
  );
}
