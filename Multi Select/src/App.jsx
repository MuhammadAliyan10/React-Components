import { useRef, useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Pills from "./Components/Pills";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUsersSet, setSelectedUsersSet] = useState(new Set());
  const inputRef = useRef(null);
  const [currentSuggestUser, setCurrentSuggestUser] = useState(0);

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSelectedUsersSet(new Set([...selectedUsersSet, user.email]));
    setSearchTerm("");
    setSuggestion([]);
    inputRef.current.focus();
  };
  useEffect(() => {
    setCurrentSuggestUser(0);
    const fetchUser = async () => {
      if (searchTerm.trim() === "") {
        setSuggestion([]);
        setSearchTerm("");
        return;
      } else {
        const api = `https://dummyjson.com/users/search?q=${searchTerm}`;
        const data = await fetch(api);
        const res = await data.json();
        setSuggestion(res);
      }
    };
    fetchUser();
  }, [searchTerm]);

  const handleRemove = (user) => {
    const UpdatedUser = selectedUsers.filter(
      (selectUser) => selectUser.id !== user.id
    );
    setSelectedUsers(UpdatedUser);
    const updatedSetUser = new Set(selectedUsersSet);
    updatedSetUser.delete(user.email);
    setSelectedUsersSet(updatedSetUser);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemove(lastUser);
      setSuggestion([]);
    } else if (e.key === "ArrowDown" && suggestion?.users?.length > 0) {
      e.preventDefault();
      setCurrentSuggestUser((prevIndex) =>
        prevIndex < suggestion.users.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp" && suggestion?.users?.length > 0) {
      e.preventDefault();
      setCurrentSuggestUser((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (
      e.key === "Enter" &&
      currentSuggestUser >= 0 &&
      currentSuggestUser < suggestion.users.length
    ) {
      handleSelectUser(suggestion.users[currentSuggestUser]);
    }
  };

  return (
    <>
      <div className="search__input__field">
        <h2>Search for User</h2>
        <input
          onKeyDown={handleKeyDown}
          ref={inputRef}
          type="text"
          placeholder="Enter to search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <div className="pills_user">
          {selectedUsers &&
            selectedUsers.map((user) => {
              return (
                <Pills
                  name={`${user.firstName} ${user.lastName}`}
                  image={user.image}
                  handleRemove={() => handleRemove(user)}
                />
              );
            })}
        </div>

        {searchTerm && (
          <ul className="suggestion">
            {suggestion?.users?.map((user, index) => {
              return !selectedUsersSet.has(user.email) ? (
                <div key={user.id}>
                  <li
                    className="user_info"
                    onClick={() => {
                      handleSelectUser(user);
                    }}
                  >
                    <img src={user.image} alt={user.firstNames} />
                    <p>
                      {user.firstName} {user.lastName}
                    </p>
                  </li>
                </div>
              ) : (
                <></>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
