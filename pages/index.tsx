import { useEffect } from "react";
import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from "../components/BaseLayout"
import axios from "axios";

const Home: NextPage = () => {

  useEffect(() => {
    //onMount
    //onUpdate
    console.log(window);
    fetch('/menu.csv')
      .then(res => { return res.text(); })
      .then(text => {
        const result = text.split('\n').map(
          line => line.split(',')
        );
        console.log(result);
      });
  }, []);;

  axios.get('/api/proxy').then(res => {
    console.log(res);
  });

  axios.get('https://google.com')
    .then(res => console.log('loaded google'))
    .catch(() => console.warn('load error'));




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