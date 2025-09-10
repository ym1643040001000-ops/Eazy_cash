import Link from 'next/link';
export default function Home(){ return (<div className="py-8"><div className="card"><h1 className="text-2xl">EasyCash — سوق العملات</h1><p className="small">اشترِ، بيع، واستثمر — لوحة أدمن لإدارة 100 عملة</p><div style={{marginTop:12}}><Link href="/market" className="btn btn-primary">اذهب للسوق</Link></div></div></div>); }
