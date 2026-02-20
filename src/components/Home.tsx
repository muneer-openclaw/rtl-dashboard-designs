import { Link } from '@tanstack/react-router'
import { LayoutDashboard, CreditCard, LayoutTemplate, Layers, Diamond, LayoutList, PieChart, BarChart2, Table, Layout } from 'lucide-react'

export default function Home() {
  const designs = [
    { id: 'design1', name: 'Glassmorphic Classic', desc: 'تأثيرات زجاجية مع ألوان متدرجة', icon: LayoutDashboard, color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 'design2', name: 'Clean Modern Cards', desc: 'بطاقات بيضاء نظيفة بأسلوب عصري', icon: CreditCard, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { id: 'design3', name: 'Ultra Minimalist', desc: 'تصميم بسيط جداً يعتمد على المساحات', icon: LayoutTemplate, color: 'text-slate-900', bg: 'bg-slate-100' },
    { id: 'design4', name: 'Bold Geometric', desc: 'أشكال هندسية وجريئة في الخلفية', icon: Layers, color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 'design5', name: 'Luxury Elegant', desc: 'لمسة ذهبية وفخامة في العرض', icon: Diamond, color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 'design6', name: 'Data Density', desc: 'عرض مكثف للبيانات للمحترفين', icon: LayoutList, color: 'text-teal-600', bg: 'bg-teal-50' },
    { id: 'design7', name: 'Soft Neumorphism', desc: 'تصميم ناعم بأسلوب نيومورفيك', icon: PieChart, color: 'text-rose-600', bg: 'bg-rose-50' },
    { id: 'design8', name: 'Floating Sidebar', desc: 'قائمة جانبية عائمة ومبتكرة', icon: BarChart2, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { id: 'design9', name: 'Integrated Panel', desc: 'لوحة تحكم مدمجة ومتصلة', icon: Table, color: 'text-orange-600', bg: 'bg-orange-50' },
    { id: 'design10', name: 'Monochrome Pro', desc: 'تصميم أحادي اللون للشركات', icon: Layout, color: 'text-neutral-600', bg: 'bg-neutral-100' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8" dir="rtl">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">معرض التصاميم</h1>
          <p className="text-slate-600 text-lg">اختر تصميماً لمعاينته (كلها تدعم الوضع النهاري)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {designs.map((design) => (
            <Link
              key={design.id}
              to={`/${design.id}`}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 flex flex-col items-center text-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${design.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <design.icon className={`w-7 h-7 ${design.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{design.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{design.desc}</p>
              <div className="w-full py-2 bg-slate-50 rounded-xl text-sm font-bold text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center gap-2">
                معاينة
                <span className="text-lg leading-none">←</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
