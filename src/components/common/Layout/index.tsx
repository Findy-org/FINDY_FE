import { Props } from './Layout.types';

export const Layout = ({ children }: Props) => {
  return (
    <div className=" relative max-w-[480px] min-h-screen h-full bg-white py-0 px-4 m-auto">
      {children}
    </div>
  );
};
