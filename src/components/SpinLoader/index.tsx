import { clsx } from "clsx";

// Tipagem da propriedade (props) que receberá o higth e o bg dos componentes

type SpinLoaderProps = {
  classeName?: string;
};

// Uso de váriável e do clsx para centralizar as classes Tailwinds junto com o

export function SpinLoader({classeName = ""}: SpinLoaderProps) {
  const classes = clsx("flex", "items-center", "justify-center", "container", classeName);
  return (
    <div className=
    {classes}
    >
      <div className="
        w-10 h-10
        border-5
        border-t-transparent
        border-slate-900
        rounded-full
        animate-spin
        ">
      </div>
    </div>
  );
}