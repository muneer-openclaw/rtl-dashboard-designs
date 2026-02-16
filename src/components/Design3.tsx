import { Home, Users, BarChart3, Settings, FileText, Bell, Search, Filter, Calendar, ChevronDown, MoreVertical } from 'lucide-react'

const investors = [
  { id: '#95F1F474', name: 'بنيستي بينستن', role: 'مستثمر ذهبي', status: 'قيد المراجعة', date: '14 شباط', amount: '250,000' },
  { id: '#B02D0505', name: 'لية للوجد', role: 'مؤسسة', status: 'معتمدة', date: '09 شباط', amount: '1,200,000' },
  { id: '#A102F255', name: 'محمد المحمدي', role: 'فرد', status: 'معتمدة', date: '09 شباط', amount: '850,000' },
  { id: '#99951D5A', name: 'حسن الشمري', role: 'مستثمر بلاتيني', status: 'نشطة', date: '09 شباط', amount: '420,000' },
  { id: '#019C3C3E', name: 'NULL طيبة', role: 'فرد', status: 'نشطة', date: '08 شباط', amount: '150,000' },
  { id: '#019C3C3D', name: 'NULL يحيى', role: 'مؤسسة', status: 'نشطة', date: '08 شباط', amount: '900,000' },
]

export default function Design3() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800" dir="rtl">
      {/* Sidebar - Icons Only */}
      <aside className="fixed right-0 top-0 bottom-0 w-20 border-l border-slate-100 flex flex-col items-center py-8 z-30 bg-white">
        <div className="mb-12">
          <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl">
            S
          </div>
        </div>

        <nav className="flex-1 space-y-8">
          {[Home, Users, FileText, BarChart3, Calendar].map((Icon, idx) => (
            <a key={idx} href="#" className={`block p-3 rounded-xl transition-all ${idx === 0 ? 'bg-slate-50 text-black' : 'text-slate-400 hover:text-black hover:bg-slate-50'}`}>
              <Icon strokeWidth={1.5} className="w-6 h-6" />
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <a href="#" className="block p-3 text-slate-400 hover:text-black hover:bg-slate-50 rounded-xl transition-all">
            <Settings strokeWidth={1.5} className="w-6 h-6" />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="mr-20 p-12 min-h-screen">
        {/* Minimal Header */}
        <header className="flex justify-between items-end mb-16">
          <div>
            <h1 className="text-4xl font-light text-slate-900 mb-2">الاستثمارات</h1>
            <p className="text-slate-500 font-light">إدارة وتتبع المحفظة الاستثمارية</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-500 hover:text-black cursor-pointer transition-colors">
              <span>تصفية حسب التاريخ</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="h-4 w-px bg-slate-200"></div>
            <div className="flex -space-x-2 space-x-reverse">
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=User+One&background=f1f5f9&color=64748b" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=User+Two&background=f1f5f9&color=64748b" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">+4</div>
            </div>
          </div>
        </header>

        {/* Minimal Stats */}
        <div className="grid grid-cols-3 gap-12 mb-16">
          {[
            { label: 'إجمالي المحفظة', value: '3.2M', unit: 'د.ع' },
            { label: 'الاستثمارات النشطة', value: '142', unit: 'ملف' },
            { label: 'العائد الشهري', value: '+12.5', unit: '%' },
          ].map((stat, idx) => (
            <div key={idx} className="group cursor-default">
              <p className="text-sm text-slate-400 mb-2 font-medium">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-light text-slate-900 group-hover:text-blue-600 transition-colors">{stat.value}</span>
                <span className="text-lg text-slate-400">{stat.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Table */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="relative group">
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-hover:text-slate-500 transition-colors" />
              <input 
                type="text" 
                placeholder="بحث في السجلات..." 
                className="pr-8 pl-4 py-2 w-64 border-b border-slate-200 focus:border-black outline-none bg-transparent placeholder-slate-300 transition-all"
              />
            </div>
            <button className="text-sm font-medium text-black border-b border-black pb-0.5 hover:opacity-70 transition-opacity">
              تنزيل CSV
            </button>
          </div>

          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-4 text-xs font-medium text-slate-400 w-24">ID</th>
                <th className="py-4 text-xs font-medium text-slate-400">المستفيد</th>
                <th className="py-4 text-xs font-medium text-slate-400">التصنيف</th>
                <th className="py-4 text-xs font-medium text-slate-400">التاريخ</th>
                <th className="py-4 text-xs font-medium text-slate-400">القيمة</th>
                <th className="py-4 text-xs font-medium text-slate-400">الحالة</th>
                <th className="py-4 text-xs font-medium text-slate-400"></th>
              </tr>
            </thead>
            <tbody>
              {investors.map((item, idx) => (
                <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 border-b border-slate-50 text-sm font-mono text-slate-400 group-hover:text-slate-600">{item.id}</td>
                  <td className="py-5 border-b border-slate-50">
                    <span className="text-base font-medium text-slate-900 block mb-0.5">{item.name}</span>
                  </td>
                  <td className="py-5 border-b border-slate-50 text-sm text-slate-500">{item.role}</td>
                  <td className="py-5 border-b border-slate-50 text-sm text-slate-500">{item.date}</td>
                  <td className="py-5 border-b border-slate-50 text-sm font-medium text-slate-900">{item.amount}</td>
                  <td className="py-5 border-b border-slate-50">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        item.status === 'نشطة' ? 'bg-emerald-500' : 
                        item.status === 'معتمدة' ? 'bg-blue-500' : 'bg-amber-400'
                      }`}></span>
                      <span className="text-sm text-slate-600">{item.status}</span>
                    </div>
                  </td>
                  <td className="py-5 border-b border-slate-50 text-left">
                    <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-slate-100 rounded-full transition-all">
                      <MoreVertical className="w-4 h-4 text-slate-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
