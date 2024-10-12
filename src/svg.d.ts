declare module '*.svg' {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  // eslint-disable-next-line no-restricted-exports
  export default value;
}
