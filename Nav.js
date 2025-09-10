import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
export default function Nav(){
  const [user,setUser]=useState(null);
  useEffect(()=>onAuthStateChanged(auth,u=>setUser(u)),[]);
  return (<header className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><Link href="/"><strong>EasyCash</strong></Link></div><nav><Link href="/market" className="small">السوق</Link> {' '}<Link href="/dashboard" className="small">لوحتي</Link></nav><div>{user? <button className="btn" onClick={()=>signOut(auth)}>خروج</button> : <Link href="/login" className="btn btn-primary">دخول</Link>}</div></header>);
}
