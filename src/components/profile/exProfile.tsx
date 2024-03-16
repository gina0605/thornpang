import { DivIntersection } from "../common/divIntersection";

export interface ExProfileProps {
  name: string;
  session: string;
  duration: string;
}

export const ExProfile = ({ name, session, duration }: ExProfileProps) => (
  <DivIntersection
    className="flex flex-col font-sunbatang items-center transition-opacity duration-1000 ease-out "
    activatedClassName="opacity-100"
    deactivatedClassName="opacity-0"
  >
    <p className="font-bold text-lg md:text-xl">{name}</p>
    <p className="font-bold">{session}</p>
    <p className="text-sm md:text-base">{duration}</p>
  </DivIntersection>
);
