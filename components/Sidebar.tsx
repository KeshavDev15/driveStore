'use client';
import { navItems } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({fullName,avatar,email} : Props) => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Link href="/">
        <Image
          src="/assets/icons/logo-full-brand.svg"
          width={160}
          height={50}
          alt="logo"
          className="hidden h-auto lg:block"
        />
        <Image
          src="/assets/icons/logo-brand.svg"
          width={52}
          height={52}
          alt="logo"
          className="lg:hidden"
        />
      </Link>
      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => (
            <Link key={name} href={url} className="lg:w-full">
              <li
                className={cn(
                  'sidebar-nav-item',
                  pathname === url && 'shad-active',
                )}
              >
                <Image
                  src={icon}
                  width={24}
                  height={24}
                  alt="name"
                  className={cn(
                    'nav-icon',
                    pathname === url && 'nav-icon-active',
                  )}
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Image
        src="/assets/images/files-2.png"
        width={506}
        height={418}
        alt="logo"
        className="w-full"
      />
      <div className="sidebar-user-info">
        <Image
          src={avatar}
          alt="avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className='hidden lg:block'>
          <p className='subtitle-2 capitalize'>{fullName}</p>
          <p className="caption">{email}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
