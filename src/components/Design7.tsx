import { Home, Users, BarChart3, Settings, FileText, Bell, Search, Filter, Calendar, Zap, PieChart, Layers, ArrowUpRight, ChevronDown, Download, Check, X, MoreVertical } from 'lucide-react'
import { useState } from 'react'

const investors = [
  { id: 'INV-001', name: 'أحمد علي', status: 'Active', amount: '50,000', date: '2026-02-15' },
  { id: 'INV-002', name: 'سارة محمد', status: 'Pending', amount: '12,500', date: '2026-02-14' },
  { id: 'INV-003', name: 'شركة النور', status: 'Approved', amount: '120,000', date: '2026-02-14' },
  { id: 'INV-004', name: 'خالد عمر', status: 'Active', amount: '35,000', date: '2026-02-13' },
  { id: 'INV-005', name: 'مؤسسة الرافدين', status: 'Active', amount: '250,000', date: '2026-02-12' },
]

export default function Design7() {
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800" dir="rtl">
      {/* Sidebar - Collapsed */}
      <aside className="fixed right-0 top-0 bottom-0 w-20 border-l border-neutral-100 bg-white flex flex-col items-center py-6 z-30">
        <div className="mb-8 p-3 rounded-xl bg-indigo-50 text-indigo-600">
          <Zap className="w-6 h-6" fill="currentColor" />
        </div>
        
        <nav className="flex-1 w-full px-2 space-y-2">
          {[Home, Users, FileText, BarChart3, Settings].map((Icon, idx) => (
            <a key={idx} href="#" className={`flex justify-center p-3 rounded-xl transition-all ${idx === 0 ? 'bg-neutral-900 text-white shadow-lg shadow-neutral-200' : 'text-neutral-400 hover:bg-neutral-50 hover:text-neutral-900'}`}>
              <Icon className="w-5 h-5" strokeWidth={idx === 0 ? 2 : 1.5} />
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <img src="https://ui-avatars.com/api/?name=User&background=random" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="mr-20 p-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-black text-neutral-900 mb-1 tracking-tight">Investments</h1>
            <p className="text-neutral-500 font-medium">Tuesday, 16 Feb 2026</p>
          </div>
          
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-neutral-900 text-white rounded-xl font-bold hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200 flex items-center gap-2">
              <Zap className="w-4 h-4" fill="currentColor" />
              <span>Quick Action</span>
            </button>
          </div>
        </div>

        {/* Stats - Brutalist Cards */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Revenue', value: '$84,392', trend: '+12%', color: 'bg-indigo-50 text-indigo-900 border-indigo-100' },
            { label: 'Expenses', value: '$32,100', trend: '-2.4%', color: 'bg-rose-50 text-rose-900 border-rose-100' },
            { label: 'Net Profit', value: '$52,292', trend: '+8.1%', color: 'bg-emerald-50 text-emerald-900 border-emerald-100' },
          ].map((stat, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border ${stat.color} transition-transform hover:-translate-y-1`}>
              <div className="flex justify-between items-start mb-4">
                <span className="font-bold text-sm opacity-60 uppercase tracking-wider">{stat.label}</span>
                <span className={`px-2 py-1 rounded-lg text-xs font-bold bg-white/50 backdrop-blur-sm border border-white/20`}>{stat.trend}</span>
              </div>
              <h3 className="text-4xl font-black tracking-tight">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Action Bar & Filter */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative group">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-indigo-600 transition-colors" />
            <input 
              className="pl-4 pr-12 py-3 w-80 bg-neutral-50 border border-neutral-100 rounded-xl focus:bg-white focus:border-indigo-200 focus:ring-4 focus:ring-indigo-50 transition-all outline-none font-medium text-neutral-700 placeholder-neutral-400"
              placeholder="Search investments..."
            />
          </div>

          <div className="relative">
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-5 py-3 bg-white border border-neutral-200 rounded-xl font-bold text-neutral-700 hover:bg-neutral-50 transition-colors shadow-sm"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {filterOpen ? <ChevronDown className="w-4 h-4 rotate-180 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
            </button>
            
            {/* Filter Dropdown */}
            {filterOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-neutral-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-left">
                <div className="p-2 space-y-1">
                  {['Active', 'Pending', 'Archived'].map(status => (
                    <button key={status} className="w-full text-right px-4 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 flex items-center justify-between group">
                      {status}
                      <Check className="w-4 h-4 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
                <div className="h-px bg-neutral-100 my-1"></div>
                <div className="p-2">
                  <button className="w-full bg-neutral-900 text-white rounded-lg py-2 text-sm font-bold hover:bg-neutral-800 transition-colors">Apply</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Clean Table */}
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
          <table className="w-full text-right">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50/50">
                <th className="px-8 py-4 text-xs font-bold text-neutral-400 uppercase tracking-wider w-20">#</th>
                <th className="px-8 py-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Investor Name</th>
                <th className="px-8 py-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Date</th>
                <th className="px-8 py-4 text-xs font-bold text-neutral-400 uppercase tracking-wider text-left">Amount</th>
                <th className="px-8 py-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-50">
              {investors.map((item, idx) => (
                <tr key={idx} className="hover:bg-neutral-50 transition-colors group">
                  <td className="px-8 py-5 text-sm font-mono text-neutral-400">0{idx + 1}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs">
                        {item.name.charAt(0)}
                      </div>
                      <span className="font-bold text-neutral-900">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border ${
                      item.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                      item.status === 'Pending' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-neutral-50 text-neutral-600 border-neutral-200'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-neutral-500">{item.date}</td>
                  <td className="px-8 py-5 text-left font-mono font-bold text-neutral-900">{item.amount}</td>
                  <td className="px-8 py-5">
                    <button className="p-2 text-neutral-300 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 border-t border-neutral-100 bg-neutral-50/30 flex justify-center">
            <button className="text-xs font-bold text-neutral-500 hover:text-neutral-900 uppercase tracking-wider transition-colors">View All Transactions</button>
          </div>
        </div>
      </main>
    </div>
  )
}
