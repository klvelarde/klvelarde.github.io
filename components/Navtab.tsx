export interface ItemProps {
  id?: any;
  active?: boolean;
  title: string;
  href?: string;
  onClick?: Function;
}

export interface Props {
  items: ItemProps[];
  tabActive: string;
  setTabActive: Function;
  customClass?: string;
}

const Item = ({
  active = false,
  title,
  href,
  onClick = () => {},
}: ItemProps) => (
  <a
    href={href}
    onClick={() => onClick()}
    className={`w-fit p-x-[12px] font-semibold cursor-pointer transition-colors duration-300 text-sm hover:text-camelia ${active ? "text-retama" : ""}`}
  >
    {title}
  </a>
);

export default function Navtab({
  items,
  tabActive,
  setTabActive,
  customClass = "",
}: Props) {
  return (
    <nav
      className={`flex flex-row items-center justify-center gap-x-[10px] px-[20px] py-[10px] rounded-full transition-colors duration-[400ms] ${customClass}`}
    >
      {items.map((tab, index) => (
        <div
          key={tab.id}
          className={`flex flex-row items-center justify-center gap-x-[10px]`}
        >
          <Item
            active={tabActive === tab.id}
            href={tab.href ? tab.href : `#${tab.id}`}
            title={tab.title}
            onClick={() => setTabActive(tab.id)}
          />
          {index + 1 !== items.length && (
            <div className="w-[3px] h-[3px] bg-white/50 rounded-full"></div>
          )}
        </div>
      ))}
    </nav>
  );
}
