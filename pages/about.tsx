import Link from "next/link";
import MainLoyout from "../components/layouts/MainLoyout";
import DarkLoyout from "../components/layouts/DarkLoyout";


export default function About() {
  return (
    <>
      <h1>About page</h1>
      <h1 className={"title"}>
        ir a <Link href="/contact">Contact</Link>
      </h1>
      <p>
        Get started by editing&nbsp;
        <code className={"code"}>pages/index.js</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page: any) {
  return (
    <MainLoyout>
      <DarkLoyout>{page}</DarkLoyout>
    </MainLoyout>
  );
};
