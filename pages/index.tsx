import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from "../components/BaseLayout"

const Home: NextPage = () => {
  return (
    <div>
      <BaseLayout>
        <h1>Caffe Home</h1>

      </BaseLayout>





    </div>
  )
}

export default Home

/*
<form>
  <div>
    <input type="email" placeholder="E-mail" value={process.env.NEXT_PUBLIC_DO_NOT_USE_IN_PRODUCTION_LOGIN_EMAIL || ''} />
  </div>

  <div>
    <input type="password" placeholder="Password" value={process.env.NEXT_PUBLIC_DO_NOT_USE_IN_PRODUCTION_LOGIN_PASSWORD || ''} />
  </div>
  <div>
    <button>Login</button>
  </div>



</form>
*/