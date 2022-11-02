import GridChildProps from '@/types/gridChildProp';
import style from '@/styles/bookGrid.module.scss';

export default function BookGrid({ children }: GridChildProps) {
  return <div className="row justify-content-around m-0">{children}</div>;
}
