"use client"

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
//import clsx from 'clsx';

const links = [
{
    name: "Manage Users",
    href: "/dashboard/users",
},
{
    name: "Manage Features",
    href: "/dashboard/features",
},
{
    name: "Manage Posts",
    href: "/dashboard/posts",
},
{
    name: "Manage Spotlights",
    href: "/dashboard/spotlights",
},
{
    name: "Manage Misc",
    href: "/dashboard/misc",
},
]

export default function NavLinks() {
    const pathname = usePathname();

  return (
        links.map((link) => (
            <Link key={link.name} href={link.href} style={pathname === link.href ? {backgroundColor: "#4b4e63"} : {backgroundColor: "#4b4e55"}}>
            <button>{link.name}</button>
            </Link> 
        ))
  )
}