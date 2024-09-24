import { ChangeEvent, useEffect, useState } from 'react';
import { useNotify } from 'react-admin';
import { classes as mockClasses } from 'src/mocks/handlers';

export const AssignToClassButton = () => {
  const notify = useNotify();
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [classes, setClasses] = useState(mockClasses);
  const [searchQuery, setSearchQuery] = useState('');

  // const { isPending, error, data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     fetch(
  //       `https://${import.meta.env.VITE_GATEWAY_HOST}:${import.meta.env.VITE_GATEWAY_PORT}/c`,
  //     ).then((res) => res.json()),
  // });

  // useEffect(() => {
  //   setClasses(data);
  // }, [data]);

  // if (isPending) return 'Loading...';

  // if (error) return <h2>An error has occured: {error.message}</h2>;

  function handleDropdownClick() {
    setIsDropdownClicked(!isDropdownClicked);
  }

  function handleClassClick() {
    try {
      notify(`Enlisted to class!`, { type: 'success' });
    } catch (err) {
      notify(`An error occured..`, { type: 'error' });
    }
  }

  function handleInputChange(e: ChangeEvent) {
    let target = e.target as HTMLInputElement;
    setSearchQuery(target.value);
  }

  // debounce?
  useEffect(() => {
    setClasses(mockClasses.filter((item) => item.name.includes(searchQuery)));
  }, [searchQuery]);

  return (
    <div className="relative">
      <button
        className="hover:bg-neutral-700 hover:cursor-pointer text-lg p-2"
        onClick={handleDropdownClick}
      >
        Select class to assign {isDropdownClicked ? '▲' : '▼'}
      </button>
      <div
        className={`absolute flex flex-col left-0 bg-neutral-800 p-2 rounded-b-lg border-neutral-900 ${isDropdownClicked ? 'block' : 'hidden'}`}
      >
        <input
          onChange={handleInputChange}
          className="bg-neutral-900 px-2 py-1 m-2 "
          type="text"
          placeholder="Search classes.."
        />
        <table className={`grid grid-cols-1`}>
          <thead>
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
              // notifify use when he joined the class
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
