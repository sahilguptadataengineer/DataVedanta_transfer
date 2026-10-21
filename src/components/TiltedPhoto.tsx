import Image from "next/image";
import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  // Tilt of the photo in degrees (negative = top leans left).
  rotateDeg: number;
  // true for pictures at the top of a page: load them first (they are the main content Google measures).
  priority?: boolean;
  className?: string;
};

/*
  Photo on an irregular sand "blob", slightly tilted, with coral accent circles.
  On hover (mouse) the photo straightens and lifts a little. Decorative shapes are hidden from screen readers.
*/
export function TiltedPhoto({ src, alt, width, height, rotateDeg, priority = false, className = "" }: Props) {
  return (
    <div className={`group relative px-4 py-6 sm:px-6 sm:py-8 ${className}`}>
      {/* Irregular background shape, stretched to fill the area behind the photo. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full text-sand transition-transform duration-500 group-hover:rotate-2"
      >
        <path
          fill="currentColor"
          d="M44.7,-58.5C57.2,-49.6,66.1,-35.3,70.4,-19.6C74.7,-3.9,74.4,13.2,67.4,26.9C60.4,40.6,46.7,50.9,31.8,58.6C16.9,66.3,0.8,71.4,-15.6,69.6C-32,67.8,-48.7,59.1,-59.3,45.6C-69.9,32.1,-74.4,13.8,-72.2,-3.5C-70,-20.8,-61.1,-37.1,-48.1,-46.3C-35.1,-55.5,-17.6,-57.6,-0.6,-56.8C16.3,-56,32.3,-67.4,44.7,-58.5Z"
          transform="translate(100 100) scale(1.38 1.4)"
        />
      </svg>

      {/* Coral accent circles. */}
      <span aria-hidden="true" className="absolute -top-1 right-[12%] size-10 rounded-full bg-coral sm:size-12" />
      <span aria-hidden="true" className="absolute bottom-[14%] -left-1 size-5 rounded-full bg-coral" />
      <span aria-hidden="true" className="absolute right-0 bottom-[6%] size-3 rounded-full bg-coral" />

      <Image
        priority={priority}
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ "--tilt": `${rotateDeg}deg` } as CSSProperties}
        className="relative w-full rotate-(--tilt) rounded-card border-4 border-white object-cover shadow-card transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-0"
      />
    </div>
  );
}
