import { Props } from './Layout.types';

export const Layout = ({ children }: Props) => {
  return (
    <div className="max-w-[30rem] h-dvh bg-white shadow-sm py-0 px-2 m-auto border-x-[1px] border-gray-50">
      {children}
    </div>
  );
};
