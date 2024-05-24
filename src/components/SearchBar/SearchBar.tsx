import css from "./SearchBar.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  function saveInput(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setQuery(inputValue);
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Field can't be empty", {
        position: "top-left",
      });
      return;
    }
    onSubmit(query);
    setQuery("");
  }
  return (
    <div>
      <header className={css.header}>
        <form onSubmit={handleSubmit} className={css.bar}>
          <button type="submit" className={css.button}>
            <FiSearch size="18px" />
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={saveInput}
            value={query}
            className={css.input}
          />
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
