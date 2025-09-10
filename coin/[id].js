import { useRouter } from 'next/router';
import coins from '../../data/coins.json';
import { useState } from 'react';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
export default function Coin(){ const r = useRouter(); const {id} = r.query; const coin = coins.find(c=>c.id===id)||{}; const [amt,setAmt]=useState(''); const [user,setUser]=useState(null); onAuthStateChanged(auth,u=>setUser(u)); const buy=async()=>{ if(!user){alert('سجل دخول');return;} await addDoc(collection(db,'orders'),{userId:user.uid,coinId:coin.id,amount:Number(amt),price:coin.price,type:'buy',status:'pending',createdAt:serverTimestamp()}); alert('طلب شراء انعمل'); }; return (<div className='py-8'><div className='card'><h2 className='text-xl'>{coin.name}</h2><div className='small'>{coin.symbol}</div><div style={{fontSize:24,fontWeight:700,marginTop:8}}>{coin.price} E£</div><div style={{marginTop:10}}><input className='input' placeholder='كمية' value={amt} onChange={e=>setAmt(e.target.value)}/><div style={{marginTop:8}}><button className='btn btn-primary' onClick={buy}>اشترِ</button></div></div></div></div>); }
