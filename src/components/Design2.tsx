import { Home, Users, BarChart3, Settings, FileText, Bell, Search, Filter, Calendar, ChevronLeft, ChevronRight, Eye, MoreHorizontal, Download, ArrowUpRight } from 'lucide-react'

const investors = [
  { id: '#95F1F474', name: 'بنيستي بينستن', nationalId: '201042142344', status: 'قيد المراجعة', date: '2026-02-14', amount: '250,000 د.ع' },
  { id: '#B02D0505', name: 'لية للوجد', nationalId: '201642337435', status: 'معتمدة', date: '2026-02-09', amount: '1,200,000 د.ع' },
  { id: '#A102F255', name: 'محمد المحمدي', nationalId: '201900000000', status: 'معتمدة', date: '2026-02-09', amount: '850,000 د.ع' },
  { id: '#99951D5A', name: 'حسن الشمري', nationalId: '202676897965', status: 'نشطة', date: '2026-02-09', amount: '420,000 د.ع' },
  { id: '#019C3C3E', name: 'NULL طيبة', nationalId: '201131970050', status: 'نشطة', date: '2026-02-08', amount: '150,000 د.ع' },
  { id: '#019C3C3D', name: 'NULL يحيى', nationalId: '197960035794', status: 'نشطة', date: '2026-02-08', amount: '900,000 د.ع' },
  { id: '#019C3C3D', name: 'زينب جواد', nationalId: 'IID:D0217398', status: 'نشطة', date: '2026-02-08', amount: '600,000 د.ع' },
  { id: '#019C3C3D', name: 'NULL عدنان', nationalId: '199180625100', status: 'نشطة', date: '2026-02-08', amount: '350,000 د.ع' },
]

const statusColors: Record<string, string> = {
  'نشطة': 'bg-emerald-50 text-emerald-600 border border-emerald-100',
  'معتمدة': 'bg-blue-50 text-blue-600 border border-blue-100',
  'قيد المراجعة': 'bg-amber-50 text-amber-600 border border-amber-100',
}

export default function Design2() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      <div className="flex">
        {/* Sidebar - Compact & Modern */}
        <aside className="w-64 bg-white border-l border-gray-100 min-h-screen fixed right-0 top-0 z-30">
          <div className="p-6 border-b border-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <BarChart3 className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg text-gray-800">نظام المتابعة</span>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            {[
              { icon: Home, label: 'الرئيسية', active: true },
              { icon: Users, label: 'المستفيدين', count: 12 },
              { icon: FileText, label: 'الطلبات', count: 5 },
              { icon: BarChart3, label: 'التقارير' },
              { icon: Calendar, label: 'المواعيد' },
              { icon: Settings, label: 'الاعدادات' },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all group ${
                  item.active
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${item.active ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
                {item.count && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    item.active ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {item.count}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="absolute bottom-0 w-full p-4 border-t border-gray-50">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  <img src="https://ui-avatars.com/api/?name=Admin+User&background=random" alt="Admin" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">المسؤول</p>
                  <p className="text-xs text-gray-500 truncate">admin@system.com</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 mr-64 p-8">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">لوحة المعلومات</h1>
              <p className="text-gray-500 text-sm">أهلاً بك، إليك نظرة عامة على البيانات اليوم.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2.5 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-all relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 left-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all shadow-sm">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">تصدير التقرير</span>
              </button>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { label: 'إجمالي الطلبات', value: '2,450', trend: '+12.5%', trendUp: true },
              { label: 'المراجعات المعلقة', value: '45', trend: '-2.4%', trendUp: false },
              { label: 'المستفيدين الجدد', value: '120', trend: '+8.1%', trendUp: true },
              { label: 'نسبة الإنجاز', value: '94%', trend: '+1.2%', trendUp: true },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm text-gray-500 mb-2">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <span className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                    stat.trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                  }`}>
                    {stat.trend}
                    <ArrowUpRight className={`w-3 h-3 ${!stat.trendUp && 'rotate-90'}`} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-900 text-lg">أحدث الاستثمارات</h3>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="بحث سريع..."
                    className="pr-10 pl-4 py-2 w-64 rounded-lg bg-gray-50 border-none focus:ring-2 focus:ring-indigo-100 text-sm"
                  />
                </div>
                <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-lg">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">رقم المعاملة</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">المستفيد</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">التاريخ</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">المبلغ</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">الحالة</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {investors.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-6 py-4 text-sm font-mono text-gray-600">{item.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs">
                            {item.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{item.name}</p>
                            <p className="text-xs text-gray-400">{item.nationalId}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[item.status]}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            item.status === 'نشطة' ? 'bg-emerald-500' : 
                            item.status === 'معتمدة' ? 'bg-blue-500' : 'bg-amber-500'
                          }`}></span>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-gray-100 bg-gray-50/30 flex items-center justify-between">
              <span className="text-sm text-gray-500">عرض 1-8 من 120</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-white disabled:opacity-50">السابق</button>
                <button className="px-3 py-1 text-sm border border-gray-200 rounded-md hover:bg-white">التالي</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
