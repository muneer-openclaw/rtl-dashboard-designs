import { Home, Users, BarChart3, Settings, FileText, Bell, Search, Filter, Calendar, Zap, PieChart, Layers, ArrowUpRight, ChevronDown, Download, Check, X, MoreVertical } from 'lucide-react'
import { useState } from 'react'

const investors = [
  { id: 'INV-001', name: 'أحمد علي', status: 'Active', amount: '50,000', date: '2026-02-15' },
  { id: 'INV-002', name: 'سارة محمد', status: 'Pending', amount: '12,500', date: '2026-02-14' },
  { id: 'INV-003', name: 'شركة النور', status: 'Approved', amount: '120,000', date: '2026-02-14' },
  { id: 'INV-004', name: 'خالد عمر', status: 'Active', amount: '35,000', date: '2026-02-13' },
  { id: 'INV-005', name: 'مؤسسة الرافدين', status: 'Active', amount: '250,000', date: '2026-02-12' },
]

export default function Design8() {
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800" dir="rtl">
      {/* Sidebar - Floating */}
      <aside className="fixed right-6 top-6 bottom-6 w-64 bg-slate-900 text-slate-100 rounded-3xl shadow-2xl flex flex-col p-6 z-30">
        <div className="mb-10 flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold">I</div>
          <span className="font-bold text-xl tracking-wide">Investify</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          {[Home, Users, FileText, BarChart3, Settings].map((Icon, idx) => (
            <a key={idx} href="#" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${idx === 0 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
              <Icon className="w-5 h-5" strokeWidth={2} />
              <span className="font-medium">{['Dashboard', 'Investors', 'Reports', 'Analytics', 'Settings'][idx]}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto bg-slate-800 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white text-sm">UA</div>
          <div>
            <p className="font-bold text-sm text-white">User Admin</p>
            <p className="text-xs text-slate-400">Pro Account</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="mr-80 p-10 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-1">Portfolio Overview</h1>
            <p className="text-slate-500 text-sm">Welcome back, here's what's happening today.</p>
          </div>
          
          <div className="flex gap-4">
            <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-600 shadow-sm border border-slate-200 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 text-sm flex items-center gap-2">
              <Zap className="w-4 h-4" />
              New Investment
            </button>
          </div>
        </div>

        {/* Stats - Colorful Cards */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Total Assets', value: '$1.2M', color: 'bg-indigo-500 text-white' },
            { label: 'Active Deals', value: '24', color: 'bg-white text-slate-900 border border-slate-200' },
            { label: 'Pending', value: '5', color: 'bg-white text-slate-900 border border-slate-200' },
            { label: 'ROI', value: '+18%', color: 'bg-emerald-500 text-white' },
          ].map((stat, idx) => (
            <div key={idx} className={`p-6 rounded-2xl shadow-sm flex flex-col justify-between h-32 ${stat.color}`}>
              <span className={`text-xs font-bold uppercase tracking-wider ${stat.color.includes('text-white') ? 'text-white/70' : 'text-slate-400'}`}>{stat.label}</span>
              <h3 className="text-3xl font-black">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Table Container with Integrated Filter */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-slate-800 text-lg">Investments</h3>
            
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  className="pl-4 pr-10 py-2 w-64 bg-white border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all outline-none text-sm font-medium"
                  placeholder="Search..."
                />
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => setFilterOpen(!filterOpen)}
                  className={`flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors ${filterOpen ? 'ring-2 ring-indigo-100 border-indigo-300' : ''}`}
                >
                  <Filter className="w-4 h-4" />
                  Filter
                </button>

                {/* Filter Popup - Right Aligned */}
                {filterOpen && (
                  <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                    <h4 className="font-bold text-slate-900 text-sm mb-3">Filter Options</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Status</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['Active', 'Pending', 'Closed', 'Draft'].map(status => (
                            <label key={status} className="flex items-center gap-2 p-2 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
                              <input type="checkbox" className="rounded text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                              <span className="text-sm font-medium text-slate-600">{status}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2 flex justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-600">Clear</button>
                        <button className="px-4 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700">Apply</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <table className="w-full text-right">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/30">
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider w-16">#</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Name</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-left">Amount</th>
                <th className="px-8 py-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {investors.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-8 py-5 text-sm font-mono text-slate-400 font-bold">0{idx + 1}</td>
                  <td className="px-8 py-5">
                    <span className="font-bold text-slate-900">{item.name}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                      item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-slate-500">{item.date}</td>
                  <td className="px-8 py-5 text-left font-mono font-bold text-slate-900">{item.amount}</td>
                  <td className="px-8 py-5">
                    <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all opacity-0 group-hover:opacity-100">
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
