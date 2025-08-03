import { Spinner } from "@ui";

function loading() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <p className="text-lg text-secondary-500">در حال بارگذاری</p>
      <Spinner />
    </div>
  );
}

export default loading;
