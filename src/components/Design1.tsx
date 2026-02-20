import { Home, Users, BarChart3, Settings, FileText, Bell, Search, Filter, Calendar, ChevronLeft, ChevronRight, Eye } from 'lucide-react'

const investors = [
  { id: '#95F1F474', name: 'بنيستي بينستن', nationalId: '201042142344', status: 'قيد المراجعة', date: '2026-02-14' },
  { id: '#B02D0505', name: 'لية للوجد', nationalId: '201642337435', status: 'معتمدة', date: '2026-02-09' },
  { id: '#A102F255', name: 'محمد المحمدي', nationalId: '201900000000', status: 'معتمدة', date: '2026-02-09' },
  { id: '#99951D5A', name: 'حسن الشمري', nationalId: '202676897965', status: 'نشطة', date: '2026-02-09' },
  { id: '#019C3C3E', name: 'NULL طيبة', nationalId: '201131970050', status: 'نشطة', date: '2026-02-08' },
  { id: '#019C3C3D', name: 'NULL يحيى', nationalId: '197960035794', status: 'نشطة', date: '2026-02-08' },
  { id: '#019C3C3D', name: 'زينب جواد', nationalId: 'IID:D0217398', status: 'نشطة', date: '2026-02-08' },
  { id: '#019C3C3D', name: 'NULL عدنان', nationalId: '199180625100', status: 'نشطة', date: '2026-02-08' },
]

const statusColors: Record<string, string> = {
  'نشطة': 'bg-emerald-50 text-emerald-600 border border-emerald-100',
  'معتمدة': 'bg-blue-50 text-blue-600 border border-blue-100',
  'قيد المراجعة': 'bg-amber-50 text-amber-600 border border-amber-100',
}

export default function Design1() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
              <Bell className="w-5 h-5 text-slate-500" />
            </button>
            <div className="relative group">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="بحث..."
                className="pr-10 pl-4 py-2 w-64 rounded-lg bg-slate-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-50 outline-none transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-left">
              <div className="text-sm font-bold text-slate-800">System Admin</div>
              <div className="text-xs text-slate-500">admin@alkhibra.local</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold shadow-sm">
              SA
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-l border-slate-100 min-h-[calc(100vh-73px)] p-6 sticky top-[73px]">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2 p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">🏛️</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-blue-900">وزارة العمل</h1>
                <p className="text-[10px] text-blue-600 font-medium">هيئة حقوق ذوى الاعاقة</p>
              </div>
            </div>
          </div>

          <nav className="space-y-1">
            {[
              { icon: Home, label: 'لوحة التحكم', active: true },
              { icon: FileText, label: 'الاستثمارات' },
              { icon: Users, label: 'المستفيدين' },
              { icon: BarChart3, label: 'التقارير' },
              { icon: Settings, label: 'الاعدادات' },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                  item.active
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <item.icon className={`w-5 h-5 ${item.active ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-slate-50/50">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              الاستثمارات
            </h2>
            <p className="text-slate-500">إدارة استثمارات طلبات المستفيدين وبياناتهم الشخصية</p>
          </div>

          {/* Filters - Popup Style */}
          <div className="bg-white rounded-2xl p-1 mb-6 border border-slate-200 shadow-sm inline-flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-xl text-slate-700 font-medium transition-colors border border-slate-200/50">
              <Filter className="w-4 h-4" />
              <span>تصفية</span>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full ml-1">2</span>
            </button>
            <div className="h-6 w-px bg-slate-200 mx-2"></div>
            
            {/* Filter Chips */}
            <div className="flex gap-2 pr-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100">
                <span>الحالة: نشطة</span>
                <button className="hover:bg-blue-200 rounded p-0.5 transition-colors">×</button>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100">
                <span>التاريخ: هذا الشهر</span>
                <button className="hover:bg-blue-200 rounded p-0.5 transition-colors">×</button>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between mb-6">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5">
              <span className="text-lg leading-none">+</span>
              اضافة استثمارة
            </button>
            <div className="text-sm text-slate-500 font-medium bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
              اجمالي السجلات: <span className="font-bold text-slate-900">65,008</span>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">تاريخ التقديم</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">الهوية الوطنية</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">رقم الاستثمارة</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">الحالة</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">اسم المستفيد</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {investors.map((investor, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/50 transition-colors group">
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">{investor.date}</td>
                    <td className="px-6 py-4 text-sm font-mono text-slate-500 bg-slate-50 w-fit rounded px-2 py-1 mx-6 my-2">{investor.nationalId}</td>
                    <td className="px-6 py-4 text-sm font-mono text-blue-600 font-bold">{investor.id}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[investor.status]}`}>
                        {investor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-800">{investor.name}</td>
                    <td className="px-6 py-4 text-left">
                      <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-blue-100 rounded-lg transition-all text-blue-600">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="border-t border-slate-200 px-6 py-4 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">عرض 1-8 من 65008</span>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 text-slate-400 hover:text-slate-600 transition-all disabled:opacity-50">
                  <ChevronRight className="w-4 h-4" />
                </button>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`w-8 h-8 rounded-lg text-sm font-bold transition-all ${
                      page === 1
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                        : 'text-slate-500 hover:bg-white hover:text-blue-600 border border-transparent hover:border-slate-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <span className="text-slate-400 text-sm">...</span>
                <button className="p-2 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 text-slate-400 hover:text-slate-600 transition-all">
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
