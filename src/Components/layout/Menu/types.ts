type MenuProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

interface MenuSectionProps {
  title: string;
  icon: string;
  items: { text: string; link: string }[];
}

export { MenuProps, MenuSectionProps };
