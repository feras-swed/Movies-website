import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export default function CardActor({ result }) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      <Link href={`/actors/${result.id}`}>
         <Image
      src={result.imageUrl}
          width={500}
          height={300} 
          alt=''
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
        ></Image>
        <div className='p-2'>
          <p className='line-clamp-2 text-md'>{result.overview}</p>
          <h2 className='text-lg font-bold truncate'>
            {result.title || result.name}
          </h2>
        </div>
      </Link>
    </div>
  );
}