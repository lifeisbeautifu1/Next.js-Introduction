import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>The page is not found.</h2>
      <p>
        Go back to{' '}
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        page
      </p>
    </div>
  );
};

export default NotFound;
