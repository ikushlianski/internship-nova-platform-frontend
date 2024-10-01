import { ChangeEvent, useState } from 'react';
import { useNotify } from 'react-admin';
// import { useDebounce } from '../logic/useDebounce';
import { TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

const classes = [
  {
    id: 1,
    name: 'Pavel',
    startDate: 'asdasd',
    endDate: 'dasdas',
  },
];

export const AssignToClassButton = () => {
  const notify = useNotify();
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const { isPending, error, data } = useQuery({
    queryKey: ['classesData'],
    queryFn: () => fetch(`http://localhost:3000/api/v1/users`).then((res) => res.json()),
  });

  function handleDropdownClick() {
    setIsDropdownActive(!isDropdownActive);
  }

  function handleClassClick() {
    try {
      // backend integration goes here
      notify(`Assigned to class!`, { type: 'success' });
    } catch (err) {
      notify(`An error occured..`, { type: 'error' });
    }
  }

  function handleInputChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    setSearchQuery(target.value);
  }

  // useEffect(() => {
  //   setClasses(getClass(debouncedSearchQuery));
  // }, [debouncedSearchQuery]);

  if (isPending) return <h2>Loading...</h2>;

  if (error) {
    notify(`An error occured.. ${error.message}`, { type: 'error' });
    return <h2>Unable to load classes</h2>;
  }

  return (
    <div className="relative">
      <button className="hover:cursor-pointer text-lg p-2" onClick={handleDropdownClick}>
        Select class to assign {isDropdownActive ? '▲' : '▼'}
      </button>
      <div
        className={`absolute flex flex-col left-0  p-2 rounded-lg border-2 ${isDropdownActive ? 'block' : 'hidden'} `}
      >
        <TextField
          variant="outlined"
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
                className="grid grid-cols-3 justify-items-start px-2 gap-2 hover:bg-neutral-500 cursor-pointer"
                onClick={handleClassClick}
              >
                <td>{item.name}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {searchQuery}
      {data}
    </div>
  );
};
