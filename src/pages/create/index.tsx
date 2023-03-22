import axios from "axios";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";

async function updateUser(url: string, { arg }: any) {
  await axios.post(url, arg);
}

export default function Create() {
  const router = useRouter();

  const { trigger, isMutating } = useSWRMutation(
    "https://wr-api.sl-tech-playground.com/create",
    updateUser /* options */
  );

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      eng: event.target.eng.value,
      ru: event.target.ru.value,
    };

    try {
      await trigger(data as any);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-lg p-3">
      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700" htmlFor="eng">
          Eng
        </label>
        <input
          id="eng"
          type="text"
          required
          className="focus:shadow-outline w-full appearance-none rounded border py-3 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block font-bold text-gray-700" htmlFor="ru">
          Ru
        </label>
        <input
          id="ru"
          type="text"
          required
          className="focus:shadow-outline w-full appearance-none rounded border py-3 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          {isMutating ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
