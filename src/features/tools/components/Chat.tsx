import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { axiosClient } from '@/lib/axios';

export function Chat() {
  const [message, setMessage] = useState('');
  const [userMessages, setUserMessages] = useState<string[]>([]);
  const [chatResponses, setChatResponses] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    setIsLoading(true);
    setMessage('');
    setUserMessages((prevMessages) => [...prevMessages, message]);

    const data = {
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: message }],
      max_tokens: 50,
    };

    const res = await axiosClient.post('', data);
    const responseMessage = res.data.choices[0].message.content;
    console.log(responseMessage);
    setIsLoading(false);
    setChatResponses((prevResponses) => [...prevResponses, responseMessage]);
  };

  return (
    <>
      <ScrollArea className="h-[50%] rounded bg mb-5 rounded-2xl border-[2px] border-primary p-5">
        {userMessages.map((userMessage, index) => {
          return (
            <div className="mb-4 flex flex-col space-y-4" key={index}>
              <p className="max-w-[75%] place-self-end whitespace-pre-wrap rounded-2xl bg-blue-200 px-5 py-3 font-darkerGrotesque text-[20px]">
                {userMessage}
              </p>
              <p className="whitespace-pre-wrap rounded-lg px-2 py-1 font-darkerGrotesque text-[20px]">
                {chatResponses[index]}
              </p>
            </div>
          );
        })}
        {isLoading ? <p>Loading...</p> : ''}
      </ScrollArea>
      <div className="grid w-full gap-2">
        <Textarea
          onChange={handleMessageChange}
          className="rounded-2xl border-[2px] border-primary bg-slate-50"
          value={message}
        />
        <Button onClick={handleSendMessage}>Send message</Button>
      </div>
    </>
  );
}
