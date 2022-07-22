import { useRouter } from 'next/router';

import { useAuth } from '../hooks/useAuth';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  const router = useRouter()
  const { authContext } = useAuth(true)

  return (
    <div>
      <h1>Index {authContext?.user?.name} 2</h1>
    </div>
  );
};

export default Home;
