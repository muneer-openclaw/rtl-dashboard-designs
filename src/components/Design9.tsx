import { Home, Users, BarChart3, Settings, FileText, Bell, Search, Filter, Calendar, Zap, PieChart, Layers, ArrowUpRight, ChevronDown, Download, Check, X, MoreVertical } from 'lucide-react'
import { useState } from 'react'

const investors = [
  { id: 'INV-001', name: 'أحمد علي', status: 'Active', amount: '50,000', date: '2026-02-15' },
  { id: 'INV-002', name: 'سارة محمد', status: 'Pending', amount: '12,500', date: '2026-02-14' },
  { id: 'INV-003', name: 'شركة النور', status: 'Approved', amount: '120,000', date: '2026-02-14' },
  { id: 'INV-004', name: 'خالد عمر', status: 'Active', amount: '35,000', date: '2026-02-13' },
  { id: 'INV-005', name: 'مؤسسة الرافدين', status: 'Active', amount: '250,000', date: '2026-02-12' },
]

export default function Design9() {
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800" dir="rtl">
      {/* Sidebar - Compact & Integrated */}
      <aside className="fixed left-6 top-6 bottom-6 w-20 bg-white rounded-2xl shadow-sm flex flex-col items-center py-6 border border-slate-200 z-30">
        <div className="mb-8 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl">
          F
        </div>
        
        <nav className="flex-1 space-y-4">
          {[Home, Users, FileText, BarChart3, Settings].map((Icon, idx) => (
            <a key={idx} href="#" className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${idx === 0 ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}>
              <Icon className="w-5 h-5" strokeWidth={2} />
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <img src="https://ui-avatars.com/api/?name=User&background=random" className="w-10 h-10 rounded-full border border-slate-200" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-32 mr-6 p-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">Portfolio Analysis</h1>
            <p className="text-slate-500 text-sm">Review your latest investment performance.</p>
          </div>
          
          <div className="flex gap-4">
            <div className="relative">
              <input 
                className="pl-4 pr-10 py-2.5 w-64 bg-white border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-50 transition-all outline-none text-sm"
                placeholder="Search..."
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Stats - Soft Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Value', value: '$2.4M', change: '+5.2%', up: true },
            { label: 'Active Deals', value: '142', change: '+12%', up: true },
            { label: 'Pending', value: '8', change: '-2%', up: false },
            { label: 'Returns', value: '$450k', change: '+8.4%', up: true },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1 ${stat.up ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                  {stat.change}
                  <ArrowUpRight className={`w-3 h-3 ${!stat.up && 'rotate-90'}`} />
                </span>
              </div>
              <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Filter Bar & Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 ml-4">Investments</h3>
            
            <div className="flex gap-2">
              <div className="relative">
                <button 
                  onClick={() => setFilterOpen(!filterOpen)}
                  className={`flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors ${filterOpen ? 'bg-slate-100 border-slate-300' : ''}`}
                >
                  <Filter className="w-3 h-3" />
                  Filter
                  <ChevronDown className={`w-3 h-3 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Filter Popup - Minimal */}
                {filterOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                    <div className="p-2 space-y-1">
                      {['Active', 'Pending', 'Closed'].map(status => (
                        <button key={status} className="w-full text-right px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 flex justify-between group">
                          {status}
                          <Check className="w-3 h-3 opacity-0 group-hover:opacity-100 text-blue-600 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <Download className="w-3 h-3" />
                Export
              </button>
            </div>
          </div>

          <table className="w-full text-right">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/30">
                <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider w-16">#</th>
                <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Investor</th>
                <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider text-left">Amount</th>
                <th className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {investors.map((item, idx) => (
                <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-6 py-4 text-xs font-mono text-slate-400">{idx + 1}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-slate-900">{item.name}</span>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-500">{item.date}</td>
                  <td className="px-6 py-4 text-left font-mono text-sm font-bold text-slate-900">{item.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                      item.status === 'Active' ? 'bg-emerald-500' :
                      item.status === 'Pending' ? 'bg-amber-500' : 'bg-slate-400'
                    }`}></span>
                    <span className="text-xs font-medium text-slate-600">{item.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-slate-300 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-4 h-4" />
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
