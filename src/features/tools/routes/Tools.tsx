import { useEffect, useState } from 'react';
import { Chat } from '../components/Chat';

export function Tools() {
  useEffect(() => {
    // async function fetchData() {
    //   const data = {
    //     model: 'gpt-3.5-turbo',
    //     messages: [{ role: 'user', content: 'Hello' }],
    //     max_tokens: 50,
    //   };
    //   const res = await axiosClient.post('', data);
    //   console.log(res);
    // }
    //fetchData();
  }, []);

  return (
    <div className="ml-[35px] flex w-full h-screen flex-col items-center">
      <h1 className="mb-[50px] place-self-start font-playfairDisplay text-xl italic text-secondary">
        Tools
      </h1>
      <div className="h-screen w-[60%]">
        <Chat />
      </div>
    </div>
  );
}
