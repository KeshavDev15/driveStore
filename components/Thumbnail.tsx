import { cn, getFileIcon } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  type: string;
  extention: string;
  url?: string;
  imageClassName?: string;
  className?: string;
}

export const Thumbnail = ({
  type,
  extention,
  url = '',
  imageClassName,
  className,
}: Props) => {
  const isImage = type === 'image' && extention !== 'svg';
  return (
    <figure className={cn('thumbnail', className)}>
      <Image
        src={isImage ? url : getFileIcon(extention, type)}
        alt="thumbnail"
        width={100}
        height={100}
        className={cn(
          'size-8 object-contain',
          imageClassName,
          isImage && 'thumbnail-image',
        )}
      />
    </figure>
  );
};

export default Thumbnail;
