import { Input } from "@/components/ui/input";

import { useDebouncedCallback } from "use-debounce";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex items-center space-x-2 py-3 mb-4 w-full sticky top-[57px] z-50 bg-white border-b">
      <Input
        type="text"
        className="px-3 py-2 "
        placeholder="Введите имя или ключевые навыки..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};
