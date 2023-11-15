
import Link from 'next/link';
import React from 'react'
import MainLoyout from '../../components/layouts/MainLoyout';

const Pricing = () => {
    return (
        <MainLoyout>
            <h1>Pricing page</h1>
            <h1 className={'title'}>
              ir a <Link href="/">Home</Link>
            </h1>
            <p>
              Get started by editing&nbsp;
              <code className={'code'}>pages/index.js</code>
            </p>
        </MainLoyout>
      );
}

export default Pricing
