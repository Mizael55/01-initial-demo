
import Link from "next/link";
import MainLoyout from "../components/layouts/MainLoyout";

export default function Home() {
  return (
    <MainLoyout>
      <h1>Home page</h1>
        <h1 className={'title'}>
          ir a <Link href="/about">about</Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.js</code>
        </p>
    </MainLoyout>
  );
}
