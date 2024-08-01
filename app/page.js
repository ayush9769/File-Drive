"use client";
import React from 'react';
import SideNavBar from './components/SideNavBar';
import Home from './home/Home';
import { useData } from '@/context/DataProvider';
import Toast from './components/Toast';
import app from '@/Config/FirebaseConfig';
import { getFirestore } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Storage from './components/Storage/Storage';
import { useRefresh } from '@/context/ReloadContext';
import Image from 'next/image';
import Login from './components/Login';
import { Poppins, Pacifico } from 'next/font/google';

// Configure our font object
const poppins = Pacifico({
  subsets: ['latin'],
  display: 'swap',
  weight: "400", 
});

export default function Page() {
  const { state: toastMessage } = useData();
  const { data: session } = useSession();
  const db = getFirestore(app);
  const { state, setState } = useData();
  const { refresh, setRefresh } = useRefresh();

  return (
    <>
      {session ? (
        <div className="flex flex-col md:flex-row min-h-screen text-black">
          <SideNavBar />
          <div className="flex-1 flex flex-col md:grid md:grid-cols-3">
            <div className="col-span-2 p-4">
              <Home reload={refresh.reload} />
            </div>
            <div className="col-span-1 flex justify-center items-center bg-blue-500 p-4">
              <Storage />
            </div>
          </div>
          {toastMessage.preview ? <Toast msg={toastMessage.value} /> : null}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full md:h-[100vh]">
          <div className="flex flex-col items-center justify-center relative p-4">
            <Image src="/logo.png" alt="logo" width={300} height={300} />
            <div className="hidden md:block text-black text-2xl mt-8">
              <span className={poppins.className}>
                <span className="text-blue">File Drive:</span>
                <span className="text-red-600"> Your Cloud,</span>
                <span className="text-amber-400"> Your Files,</span>
                <span className="text-green"> Your Way</span>
              </span> 
            </div>
          </div>
          <div className="flex justify-center items-center bg-blue-500 p-4 min-h-full">
            <Login />
          </div>
        </div>
      )}
    </>
  );
}
