import { redirect } from "next/navigation";

export default () => {
  const d = new Date(Date.now() + 32400000);
  redirect(`/schedule/${d.getUTCFullYear()}/${d.getUTCMonth() + 1}`);
};
