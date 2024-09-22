import { useState } from 'react';
import { classes as mockClasses } from 'src/mocks/handlers';

export const AssignToClassButton = () => {
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [classes, setClasses] = useState(mockClasses);

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
    setClasses(mockClasses);
    setIsDropdownClicked(!isDropdownClicked);
  }

  return (
    <div>
      <button className="hover:bg-neutral-700 hover:cursor-pointer" onClick={handleDropdownClick}>
        Dropdown
      </button>
      <div className={`${isDropdownClicked ? 'block' : 'hidden'}`}>
        <input type="text" placeholder="Search.." id="myInput" />
        {/* class item here */}

        {classes.map((item) => (
          <div
            key={item.id}
            className={`flex justify-evenly gap-4 hover:bg-neutral-700 cursor-pointer }`}
          >
            {/* the classes which user is enlisted in should be highlighted */}
            <h2>{item.name}</h2>
            <h2>{item.startDate}</h2>
            <h2>{item.endDate}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
