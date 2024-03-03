import { TimelineLayout } from "./timelineLayout";

export interface TimelineProps {
  date: string;
  text: string;
  index: number;
  istop?: boolean;
  isbottom?: boolean;
}

export const Timeline = ({
  date,
  text,
  index,
  istop,
  isbottom,
}: TimelineProps) => (
  <TimelineLayout index={index} date={date} text={text}>
    {istop || (
      <div className="absolute bg-black w-2 top-0 mb-2 left-2 bottom-1/2" />
    )}
    <div className="absolute rounded-full border-black border-4 w-6 h-6 top-1/2 -mt-3 left-0" />
    <div
      className={`absolute w-2 top-1/2 mt-2 left-2 bg-black ${
        isbottom ? "bottom-1/4" : "bottom-0"
      }`}
    />
    {isbottom && (
      <div className="absolute w-2 top-3/4 h-16 md:h-20 left-2 from-black to-transparent bg-gradient-to-b" />
    )}
  </TimelineLayout>
);
