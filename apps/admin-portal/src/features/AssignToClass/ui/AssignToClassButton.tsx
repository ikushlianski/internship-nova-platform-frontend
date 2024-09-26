import { ChangeEvent, useEffect, useState } from 'react';
import { useNotify } from 'react-admin';
import { classes as mockClasses } from 'src/mocks/handlers';
import { getClass } from '../logic/getClass';
import { useDebounce } from '../logic/useDebounce';

export const AssignToClassButton = () => {
  const notify = useNotify();

  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [classes, setClasses] = useState(mockClasses);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  function handleDropdownClick() {
    setIsDropdownActive(!isDropdownActive);
  }

  function handleClassClick() {
    try {
      // backend integration goes here
      notify(`Enlisted to class!`, { type: 'success' });
    } catch (err) {
      notify(`An error occured..`, { type: 'error' });
    }
  }

  function handleInputChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    setSearchQuery(target.value);
  }

  useEffect(() => {
    setClasses(getClass(debouncedSearchQuery));
  }, [debouncedSearchQuery]);

  return (
    <div className="relative">
      <button
        className="hover:bg-neutral-700 hover:cursor-pointer text-lg p-2"
        onClick={handleDropdownClick}
      >
        Select class to assign {isDropdownActive ? '▲' : '▼'}
      </button>
      <div
        className={`absolute flex flex-col left-0  p-2 rounded-lg border-2 ${isDropdownActive ? 'block' : 'hidden'}`}
      >
        <input
          onChange={handleInputChange}
          className="px-2 py-1 m-2 "
          type="text"
          placeholder="Search classes.."
        />
        <table className={`grid grid-cols-1 min-w-52`}>
          <thead className="after:content-center after:block after:mx-auto after:my-2 after:w-full after:border-b-2">
            <tr className="grid grid-cols-3 justify-items-start gap-2">
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item) => (
              // class item here
              // some classes needs to be highlighted
              <tr
                key={item.id}
                className="grid grid-cols-3 justify-items-start gap-2 hover:bg-neutral-700 cursor-pointer"
                onClick={handleClassClick}
              >
                {/* column with all people in class is needed */}
                <td>{item.name}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
