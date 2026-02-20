import { Home, Users, BarChart3, Settings, FileText, Bell, Search, Filter, Calendar, Zap, PieChart, Layers, ArrowUpRight, ChevronDown, Download, Check, X, MoreVertical } from 'lucide-react'
import { useState } from 'react'

const investors = [
  { id: 'INV-001', name: 'أحمد علي', status: 'Active', amount: '50,000', date: '2026-02-15' },
  { id: 'INV-002', name: 'سارة محمد', status: 'Pending', amount: '12,500', date: '2026-02-14' },
  { id: 'INV-003', name: 'شركة النور', status: 'Approved', amount: '120,000', date: '2026-02-14' },
  { id: 'INV-004', name: 'خالد عمر', status: 'Active', amount: '35,000', date: '2026-02-13' },
  { id: 'INV-005', name: 'مؤسسة الرافدين', status: 'Active', amount: '250,000', date: '2026-02-12' },
]

export default function Design10() {
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-800" dir="rtl">
      {/* Sidebar - Integrated */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 z-30">
        <div className="h-16 flex items-center justify-center border-b border-slate-100">
          <span className="font-black text-xl text-slate-900 tracking-tight">DASHBOARD</span>
        </div>
        
        <nav className="p-4 space-y-1">
          {[Home, Users, FileText, BarChart3, Settings].map((Icon, idx) => (
            <a key={idx} href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${idx === 0 ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
              <Icon className="w-5 h-5" />
              <span className="font-medium text-sm">{['Overview', 'Investors', 'Applications', 'Analytics', 'Settings'][idx]}</span>
            </a>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-200" />
            <div>
              <p className="text-sm font-bold text-slate-900">John Doe</p>
              <p className="text-xs text-slate-500">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-1">Overview</h1>
            <p className="text-slate-500 text-sm">Welcome back, John.</p>
          </div>
          
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <Calendar className="w-4 h-4 inline-block mr-2" />
              Feb 2026
            </button>
            <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
              New Report
            </button>
          </div>
        </div>

        {/* Stats - Minimal Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Revenue', value: '$24.5k', change: '+12%', up: true },
            { label: 'Expenses', value: '$12.2k', change: '-2%', up: false },
            { label: 'Profit', value: '$12.3k', change: '+24%', up: true },
            { label: 'Users', value: '1,240', change: '+5%', up: true },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">{stat.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                <span className={`text-xs font-bold px-2 py-1 rounded-md ${stat.up ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Bar & Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
            <div className="flex gap-2">
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className={`px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2 ${filterOpen ? 'bg-slate-100 border-slate-300' : ''}`}
              >
                <Filter className="w-3 h-3" />
                Filter
              </button>
              
              {/* Filter Popup - Inline */}
              {filterOpen && (
                <div className="absolute left-64 mt-8 w-48 bg-white rounded-lg shadow-lg border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-1 space-y-1">
                    {['Last 7 Days', 'Last 30 Days', 'Custom Range'].map(opt => (
                      <button key={opt} className="w-full text-left px-3 py-1.5 rounded-md text-xs text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
              <input 
                className="pl-8 pr-4 py-1.5 bg-white border border-slate-200 rounded-lg focus:border-slate-300 transition-all outline-none text-xs w-48"
                placeholder="Search..."
              />
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/30">
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider w-16">#</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider text-right">Amount</th>
                <th className="px-6 py-3 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {investors.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-xs font-mono text-slate-400">{idx + 1}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.name}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      item.status === 'Active' ? 'bg-emerald-50 text-emerald-700' :
                      item.status === 'Pending' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">{item.date}</td>
                  <td className="px-6 py-4 text-right text-sm font-medium text-slate-900">{item.amount}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 transition-colors opacity-0 group-hover:opacity-100">
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
