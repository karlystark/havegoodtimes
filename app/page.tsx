// app/page.tsx
import dynamic from 'next/dynamic';
import ScrollTextAnimation from '@/components/ScrollTextAnimation';
import Nav from '@/components/Nav';


export default function Home() {
  return (
    <div className="App bg-neutral-300 items-center justify-center min-h-screen">
      <Nav/>
      <ScrollTextAnimation/>
    </div>
  );
}
