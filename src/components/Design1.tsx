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
  'نشطة': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'معتمدة': 'bg-blue-100 text-blue-700 border-blue-200',
  'قيد المراجعة': 'bg-amber-100 text-amber-700 border-amber-200',
}

export default function Design1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b sticky top-0 z-50 shadow-lg shadow-primary/10">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-slate-600" />
            </button>
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="بحث..."
                className="pr-10 pl-4 py-2 w-64 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-left">
              <div className="text-sm font-semibold text-slate-700">System Admin</div>
              <div className="text-xs text-slate-500">admin@alkhibra.local</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
              SA
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-white/80 backdrop-blur-xl border-l min-h-[calc(100vh-73px)] p-6 sticky top-[73px]">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">🏛️</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-l from-blue-600 to-blue-400 bg-clip-text text-transparent">وزارة العمل</h1>
                <p className="text-xs text-slate-500">عيدة حقوق ذوى الاعاقة</p>
              </div>
            </div>
          </div>

          <nav className="space-y-2">
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
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  item.active
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-l from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
              الاستثمارات
            </h2>
            <p className="text-slate-600">إدارة استثمارات طلبات المستفيدين وبياناتهم الشخصية</p>
          </div>

          {/* Filters */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 mb-6 shadow-lg shadow-blue-100/20 border border-white/40">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-slate-700">فلاتر البحث</h3>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">اسم المستفيد</label>
                <input
                  type="text"
                  placeholder="ادخل النص هنا"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">الهوية الوطنية</label>
                <input
                  type="text"
                  placeholder="ادخل النص هنا"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">الحالة</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none">
                  <option>اختيار</option>
                  <option>نشطة</option>
                  <option>معتمدة</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">نطاق التاريخ</label>
                <div className="relative">
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="اختر نطاق التاريخ"
                    className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between mb-6">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all">
              <span className="text-xl">+</span>
              اضافة استثمارة
            </button>
            <div className="text-sm text-slate-600">
              اظهار 1 إلى 8 من <span className="font-semibold text-slate-900">65008</span>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg shadow-blue-100/20 border border-white/40">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-l from-slate-50 to-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">تاريخ التقديم</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">الهوية الوطنية</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">رقم الاستثمارة</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">الحالة</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">اسم المستفيد</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {investors.map((investor, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4 text-sm text-slate-600">{investor.date}</td>
                    <td className="px-6 py-4 text-sm font-mono text-slate-700">{investor.nationalId}</td>
                    <td className="px-6 py-4 text-sm font-mono text-blue-600 font-medium">{investor.id}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${statusColors[investor.status]}`}>
                        {investor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">{investor.name}</td>
                    <td className="px-6 py-4">
                      <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-blue-100 rounded-lg transition-all">
                        <Eye className="w-4 h-4 text-blue-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="border-t border-slate-200 px-6 py-4 bg-slate-50/50">
              <div className="flex items-center justify-center gap-2">
                <button className="p-2 rounded-lg hover:bg-white border border-slate-200 transition-all">
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    className={`w-9 h-9 rounded-lg font-medium transition-all ${
                      page === 1
                        ? 'bg-blue-500 text-white shadow-lg'
                        : 'hover:bg-white border border-slate-200 text-slate-600'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="p-2 rounded-lg hover:bg-white border border-slate-200 transition-all">
                  <ChevronLeft className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
