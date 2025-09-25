interface listItemProps {
  active: string;
  setActive: (active: string) => void;
  label: string;
}

const ListItem = ({ active, setActive, label }: listItemProps) => {
  const isActive = active === label;
  return (
    <div className="relative">
      <li
        className={`text-[var(--color-dark-grayish-blue)] cursor-pointer`}
        onClick={() => setActive(label)}
      >
        {label}
      </li>
      {isActive && (
        <span className="absolute bottom-[-160%] left-0 w-full h-1 rounded-md bg-[var(--color-orange)] z-10"></span>
      )}
    </div>
  );
};

export default ListItem;
