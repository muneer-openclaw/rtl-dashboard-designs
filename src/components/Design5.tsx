import { Home, Users, BarChart3, Settings, FileText, Bell, Search, Filter, Calendar, Crown, Gem, ChevronLeft } from 'lucide-react'

const investors = [
  { id: 'INV-001', name: 'بنيستي بينستن', tier: 'VIP Gold', status: 'Under Review', date: 'Feb 14, 2026', amount: '250,000' },
  { id: 'INV-002', name: 'لية للوجد', tier: 'Platinum', status: 'Approved', date: 'Feb 09, 2026', amount: '1,200,000' },
  { id: 'INV-003', name: 'محمد المحمدي', tier: 'Standard', status: 'Approved', date: 'Feb 09, 2026', amount: '850,000' },
  { id: 'INV-004', name: 'حسن الشمري', tier: 'VIP Gold', status: 'Active', date: 'Feb 09, 2026', amount: '420,000' },
  { id: 'INV-005', name: 'NULL طيبة', tier: 'Standard', status: 'Active', date: 'Feb 08, 2026', amount: '150,000' },
  { id: 'INV-006', name: 'NULL يحيى', tier: 'Platinum', status: 'Active', date: 'Feb 08, 2026', amount: '900,000' },
]

export default function Design5() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-serif text-slate-800" dir="rtl">
      {/* Top Navigation - Elegant & Centered */}
      <nav className="bg-white border-b border-stone-200 px-12 py-6 flex items-center justify-between sticky top-0 z-50 shadow-sm shadow-stone-100">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-amber-200">
              <Crown className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold text-stone-800 tracking-wide">ROYAL<span className="text-amber-600">INVEST</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {['الرئيسية', 'المحفظة', 'الأسواق', 'التحليلات', 'التقارير'].map((item, idx) => (
              <a key={idx} href="#" className={`pb-1 border-b-2 transition-all ${idx === 0 ? 'text-amber-700 border-amber-600' : 'text-stone-500 border-transparent hover:text-amber-600'}`}>
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute right-0 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="بحث..." 
              className="bg-transparent border-b border-stone-300 pr-6 py-1 w-32 focus:w-48 focus:border-amber-500 outline-none text-sm transition-all placeholder-stone-300 font-sans"
            />
          </div>
          <button className="text-stone-400 hover:text-amber-600 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden border border-stone-300">
            <img src="https://ui-avatars.com/api/?name=Royal+User&background=d6d3d1&color=fff" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-12">
        {/* Hero Section */}
        <div className="flex justify-between items-end mb-16 border-b border-stone-200 pb-8">
          <div>
            <h6 className="text-amber-600 uppercase tracking-widest text-xs font-bold mb-2 font-sans">نظرة عامة على المحفظة</h6>
            <h1 className="text-5xl font-medium text-stone-900">أهلاً بك، سيدي.</h1>
          </div>
          <div className="text-left font-sans">
            <p className="text-stone-500 text-sm mb-1">صافي الأصول</p>
            <p className="text-3xl font-bold text-stone-800">2,450,000 <span className="text-base font-normal text-stone-400">د.ع</span></p>
          </div>
        </div>

        {/* Elegant Cards */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {[
            { title: 'الاستثمارات النشطة', value: '142', icon: Gem },
            { title: 'العوائد المستحقة', value: '34%', icon: BarChart3 },
            { title: 'الرصيد المتاح', value: '850K', icon: FileText },
          ].map((card, idx) => (
            <div key={idx} className="bg-white p-8 rounded-sm border border-stone-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:transform hover:-translate-y-1 transition-all duration-500 group">
              <div className="flex justify-between items-start mb-6">
                <card.icon className="w-6 h-6 text-stone-300 group-hover:text-amber-500 transition-colors" strokeWidth={1} />
                <span className="w-2 h-2 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
              <h3 className="text-4xl font-medium text-stone-800 mb-2 font-sans">{card.value}</h3>
              <p className="text-stone-500 text-sm tracking-wide">{card.title}</p>
            </div>
          ))}
        </div>

        {/* The Table */}
        <div className="bg-white rounded-sm border border-stone-200 shadow-sm">
          <div className="px-8 py-6 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
            <h3 className="text-xl font-medium text-stone-800">سجل المعاملات الأخيرة</h3>
            <button className="text-xs font-bold text-amber-700 uppercase tracking-widest hover:underline underline-offset-4 font-sans">عرض الكافة</button>
          </div>

          <table className="w-full text-right">
            <thead>
              <tr className="border-b border-stone-100">
                <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest font-sans">رقم المرجع</th>
                <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest font-sans">المستفيد</th>
                <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest font-sans">المستوى</th>
                <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest font-sans">التاريخ</th>
                <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest font-sans">المبلغ</th>
                <th className="px-8 py-5 text-xs font-bold text-stone-400 uppercase tracking-widest font-sans">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50 font-sans">
              {investors.map((item, idx) => (
                <tr key={idx} className="hover:bg-amber-50/30 transition-colors group">
                  <td className="px-8 py-5 text-sm text-stone-500 font-mono">{item.id}</td>
                  <td className="px-8 py-5">
                    <span className="font-serif text-lg text-stone-800">{item.name}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`text-xs px-2 py-1 border rounded uppercase tracking-wider ${
                      item.tier.includes('Gold') ? 'border-amber-200 text-amber-700 bg-amber-50' : 
                      item.tier.includes('Platinum') ? 'border-slate-200 text-slate-600 bg-slate-50' : 'border-stone-200 text-stone-500'
                    }`}>
                      {item.tier}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm text-stone-500">{item.date}</td>
                  <td className="px-8 py-5 text-base font-medium text-stone-800">{item.amount}</td>
                  <td className="px-8 py-5">
                    <span className="text-xs font-bold text-stone-400 group-hover:text-stone-600 uppercase tracking-wide transition-colors">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="px-8 py-4 bg-stone-50 border-t border-stone-200 flex justify-center">
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-amber-700 hover:bg-white rounded-full transition-all">
                <ChevronLeft className="w-4 h-4 rotate-180" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white text-amber-700 font-bold shadow-sm rounded-full text-sm font-sans">1</button>
              <button className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-700 hover:bg-white rounded-full text-sm font-sans">2</button>
              <button className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-amber-700 hover:bg-white rounded-full text-sm font-sans">3</button>
              <button className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-amber-700 hover:bg-white rounded-full transition-all">
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
