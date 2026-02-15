import { 
  Home, 
  Users, 
  BarChart3, 
  Settings, 
  FileText, 
  Bell,
  Search,
  Filter,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Eye,
  Download
} from 'lucide-react'
import { cn } from '@/lib/utils'

const investors = [
  { id: '#95F1F474', name: 'بنيستي بينستن', nationalId: '201042142344', status: 'قيد المراجعة', date: '2026-02-14' },
  { id: '#B02D0505', name: 'لية للوجد', nationalId: '201642337435', status: 'معتمدة', date: '2026-02-09' },
  { id: '#A102F255', name: 'محمد المحمدي', nationalId: '201900000000', status: 'معتمدة', date: '2026-02-09' },
  { id: '#99951D5A', name: 'حسن الشمري', nationalId: '202676897965', status: 'نشطة', date: '2026-02-09' },
  { id: '#019C3C3E', name: 'NULL طيبة', nationalId: '201131970050', status: 'نشطة', date: '2026-02-08' },
  { id: '#019C3C3D', name: 'NULL يحيى', nationalId: '197960035794', status: 'نشطة', date: '2026-02-08' },
  { id: '#019C3C3D', name: 'زينب جواد', nationalId: 'IID:D0217398', status: 'نشطة', date: '2026-02-08' },
  { id: '#019C3C3D', name: 'NULL عدنان', nationalId: '199180625100', status: 'نشطة', date: '2026-02-08' },
  { id: '#019C3C3D', name: 'كاظم زورة', nationalId: '201362808200', status: 'نشطة', date: '2026-02-08' },
  { id: '#019C3C3D', name: 'NULL صادق', nationalId: '200984318309', status: 'نشطة', date: '2026-02-08' },
]

const statusColors = {
  'نشطة': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'معتمدة': 'bg-blue-100 text-blue-700 border-blue-200',
  'قيد المراجعة': 'bg-amber-100 text-amber-700 border-amber-200',
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Top Header */}
      <header className="glass border-b sticky top-0 z-50 shadow-elegant">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-primary-50 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-slate-600" />
            </button>
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="بحث..."
                className="pr-10 pl-4 py-2 w-64 rounded-lg border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-left">
              <div className="text-sm font-semibold text-slate-700">System Admin</div>
              <div className="text-xs text-slate-500">admin@alkhibra.local</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold shadow-lg">
              SA
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Right Side for RTL */}
        <aside className="w-72 glass border-l min-h-[calc(100vh-73px)] p-6 sticky top-[73px]">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">🏛️</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">وزارة العمل</h1>
                <p className="text-xs text-slate-500">عيدة حقوق ذوى الاعاقة</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-3">والاحتياجات الخاصة</p>
          </div>

          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-500 text-white shadow-lg transition-all">
              <Home className="w-5 h-5" />
              <span className="font-medium">لوحة التحكم</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all">
              <FileText className="w-5 h-5" />
              <span className="font-medium">الاستثمارات</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all">
              <Users className="w-5 h-5" />
              <span className="font-medium">المستفيدين</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all">
              <FileText className="w-5 h-5" />
              <span className="font-medium">انواع الاعاقات</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all">
              <FileText className="w-5 h-5" />
              <span className="font-medium">انواع فرعية للعاقات</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all">
              <FileText className="w-5 h-5" />
              <span className="font-medium">الاصابات</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all">
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">التقارير الطبية</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all">
              <FileText className="w-5 h-5" />
              <span className="font-medium">انواع القرارات</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all">
              <Users className="w-5 h-5" />
              <span className="font-medium">المستخدمين</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all">
              <FileText className="w-5 h-5" />
              <span className="font-medium">المناطق</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all">
              <FileText className="w-5 h-5" />
              <span className="font-medium">المشفيات</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all">
              <FileText className="w-5 h-5" />
              <span className="font-medium">الاطباء الخارجية</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-all">
              <Settings className="w-5 h-5" />
              <span className="font-medium">الاعدادات</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
              <Home className="w-4 h-4" />
              <ChevronLeft className="w-4 h-4" />
              <span>لوحة التحكم</span>
            </div>
            <h2 className="text-3xl font-bold text-gradient mb-2">الاستثمارات</h2>
            <p className="text-slate-600">إدارة استثمارات طلبات المستفيدين وبياناتهم الشخصية</p>
          </div>

          {/* Filters Section */}
          <div className="glass rounded-2xl p-6 mb-6 shadow-elegant">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="w-5 h-5 text-primary-600" />
              <h3 className="font-semibold text-slate-700">فلاتر البحث</h3>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">اسم المستفيد</label>
                <input
                  type="text"
                  placeholder="ادخل النص هنا"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">الهوية الوطنية للمستفيد</label>
                <input
                  type="text"
                  placeholder="ادخل النص هنا"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">الحالة</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all">
                  <option>اختيار</option>
                  <option>نشطة</option>
                  <option>معتمدة</option>
                  <option>قيد المراجعة</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">نطاق التاريخ</label>
                <div className="relative">
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="اختر نطاق التاريخ"
                    className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between mb-6">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all">
              <span className="text-xl">+</span>
              اضافة استثمارة
            </button>
            <div className="text-sm text-slate-600">
              اظهار 1 إلى 10 من <span className="font-semibold text-slate-900">65008</span>
            </div>
          </div>

          {/* Table */}
          <div className="glass rounded-2xl overflow-hidden shadow-elegant">
            <div className="overflow-x-auto">
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
                    <tr 
                      key={idx}
                      className="hover:bg-primary-50/30 transition-colors group"
                    >
                      <td className="px-6 py-4 text-sm text-slate-600">{investor.date}</td>
                      <td className="px-6 py-4 text-sm font-mono text-slate-700">{investor.nationalId}</td>
                      <td className="px-6 py-4 text-sm font-mono text-primary-600 font-medium">{investor.id}</td>
                      <td className="px-6 py-4">
                        <span className={cn(
                          "inline-flex px-3 py-1 rounded-full text-xs font-medium border",
                          statusColors[investor.status as keyof typeof statusColors]
                        )}>
                          {investor.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">{investor.name}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-2 hover:bg-primary-100 rounded-lg transition-colors">
                            <Eye className="w-4 h-4 text-primary-600" />
                          </button>
                          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                            <Download className="w-4 h-4 text-slate-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="border-t border-slate-200 px-6 py-4 bg-slate-50/50">
              <div className="flex items-center justify-center gap-2">
                <button className="p-2 rounded-lg hover:bg-white border border-slate-200 transition-all">
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </button>
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    className={cn(
                      "w-9 h-9 rounded-lg font-medium transition-all",
                      page === 1
                        ? "bg-primary-500 text-white shadow-lg"
                        : "hover:bg-white border border-slate-200 text-slate-600"
                    )}
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
