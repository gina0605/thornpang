import data from "@/data/video";

export const generateStaticParams = () => data.map(({ slug }) => ({ slug }));
export const dynamicParams = false;

export default () => <></>;
