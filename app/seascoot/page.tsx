import Image from 'next/image';

export default function seascoot (){
    return (
        <div className="seascoot flex justify-center items-center pt-20 rounded">
            <Image className="rounded hover:rotate-6 duration-400 ease-in-out" src="/skirtskirt.png" alt="sea scooter fun" width="500" height="500"></Image>
        </div>
    )
}