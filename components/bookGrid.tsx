import GridChildProps from '@/types/gridChildProp';

export default function BookGrid({ children }: GridChildProps) {
  return <div className="row justify-content-around m-0">{children}</div>;
}
