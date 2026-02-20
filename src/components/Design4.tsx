import { Home, Users, BarChart3, Settings, FileText, Bell, Search, Filter, Calendar, Zap, PieChart, Layers } from 'lucide-react'

const investors = [
  { id: 'TRX-9432', name: 'بنيستي بينستن', company: 'مجموعة الرافدين', status: 'pending', date: '2026-02-14', amount: '250,000' },
  { id: 'TRX-2849', name: 'لية للوجد', company: 'الأفق الجديد', status: 'approved', date: '2026-02-09', amount: '1,200,000' },
  { id: 'TRX-1029', name: 'محمد المحمدي', company: 'النور تك', status: 'approved', date: '2026-02-09', amount: '850,000' },
  { id: 'TRX-5832', name: 'حسن الشمري', company: 'بغداد سوفت', status: 'active', date: '2026-02-09', amount: '420,000' },
  { id: 'TRX-9932', name: 'NULL طيبة', company: 'الخليج العربي', status: 'active', date: '2026-02-08', amount: '150,000' },
  { id: 'TRX-7482', name: 'NULL يحيى', company: 'الاستثمار الوطني', status: 'active', date: '2026-02-08', amount: '900,000' },
]

export default function Design4() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans relative overflow-hidden" dir="rtl">
      {/* Geometric Background Elements - Light Theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 flex h-screen p-4 gap-4">
        {/* Sidebar - Light Card Style */}
        <aside className="w-20 lg:w-72 bg-white text-slate-800 rounded-3xl flex flex-col p-6 shadow-xl shadow-slate-200/60 border border-slate-100">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center rotate-3 hover:rotate-6 transition-transform shadow-lg shadow-indigo-200">
              <Zap className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <span className="text-2xl font-black tracking-tight hidden lg:block text-slate-900">NEXUS</span>
          </div>

          <nav className="flex-1 space-y-2">
            {[
              { icon: Home, label: 'الرئيسية', active: true },
              { icon: PieChart, label: 'التحليلات' },
              { icon: Users, label: 'الفريق' },
              { icon: Layers, label: 'المشاريع' },
              { icon: Settings, label: 'الإعدادات' },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all ${
                  item.active
                    ? 'bg-indigo-50 text-indigo-700 shadow-inner'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <item.icon className={`w-6 h-6 ${item.active ? 'text-indigo-600' : ''}`} strokeWidth={2} />
                <span className="font-bold hidden lg:block">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-slate-100 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-100 to-purple-100 border border-indigo-200"></div>
              <div>
                <p className="font-bold text-sm text-slate-900">أدمن النظام</p>
                <p className="text-xs text-slate-500">مشرف عام</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl shadow-slate-200/40 overflow-hidden">
          {/* Header */}
          <header className="h-20 flex items-center justify-between px-8 bg-white/40 sticky top-0 z-20">
            <h2 className="text-2xl font-black text-slate-800">نظرة عامة</h2>
            <div className="flex gap-4">
              <div className="relative group">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                <input 
                  className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 pr-10 w-64 focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all font-medium outline-none"
                  placeholder="بحث..."
                />
              </div>
              <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-auto p-8">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl p-6 text-white shadow-xl shadow-indigo-200">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md">+24%</span>
                </div>
                <h3 className="text-4xl font-black mb-1">8,432</h3>
                <p className="text-indigo-100 font-medium opacity-80">إجمالي المعاملات</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-slate-50 rounded-2xl text-slate-600">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-4xl font-black text-slate-800 mb-1">1,240</h3>
                <p className="text-slate-500 font-medium">مستفيد نشط</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-slate-50 rounded-2xl">
                    <FileText className="w-6 h-6 text-indigo-500" />
                  </div>
                </div>
                <h3 className="text-4xl font-black text-slate-800 mb-1">45</h3>
                <p className="text-slate-400 font-medium">طلب معلق</p>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-[1.5rem] p-1 border border-slate-200 shadow-sm">
              <div className="rounded-[1.2rem] overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <h3 className="font-bold text-xl text-slate-800">سجل المعاملات</h3>
                  <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">عرض الكل</button>
                </div>
                
                <table className="w-full text-right">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">الشركة</th>
                      <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">الشخص</th>
                      <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">التاريخ</th>
                      <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">المبلغ</th>
                      <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">الحالة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {investors.map((item, idx) => (
                      <tr key={idx} className="group hover:bg-indigo-50/30 transition-colors">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-sm group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                              {item.company.charAt(0)}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900 text-sm">{item.company}</p>
                              <p className="text-xs text-slate-400 font-mono mt-0.5">{item.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm font-medium text-slate-600">{item.name}</td>
                        <td className="px-6 py-5 text-sm font-bold text-slate-400">{item.date}</td>
                        <td className="px-6 py-5 text-sm font-black text-slate-900">{item.amount} د.ع</td>
                        <td className="px-6 py-5">
                          <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider ${
                            item.status === 'active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                            item.status === 'approved' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-amber-50 text-amber-600 border border-amber-100'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
