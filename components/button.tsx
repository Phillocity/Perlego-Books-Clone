import style from '@/styles/button.module.scss';

export function CTAButton() {
  return <button className={style.signUp}>Sign Up</button>;
}

export function RefreshButton() {
  return <button className={`${style.refresh} h-100`}>Refresh</button>;
}

export function ExploreButton() {
  return <button className={`${style.explore} h-100`}>Explore</button>;
}
