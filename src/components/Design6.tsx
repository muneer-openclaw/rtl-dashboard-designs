import { Home, Users, BarChart3, Settings, FileText, Bell, Search, Filter, Calendar, Zap, PieChart, Layers, ArrowUpRight, ChevronDown, Download, Check, X } from 'lucide-react'
import { useState } from 'react'

const investors = [
  { id: 'INV-001', name: 'أحمد علي', status: 'Active', amount: '50,000', date: '2026-02-15' },
  { id: 'INV-002', name: 'سارة محمد', status: 'Pending', amount: '12,500', date: '2026-02-14' },
  { id: 'INV-003', name: 'شركة النور', status: 'Approved', amount: '120,000', date: '2026-02-14' },
  { id: 'INV-004', name: 'خالد عمر', status: 'Active', amount: '35,000', date: '2026-02-13' },
  { id: 'INV-005', name: 'مؤسسة الرافدين', status: 'Active', amount: '250,000', date: '2026-02-12' },
  { id: 'INV-006', name: 'ليلى حسن', status: 'Rejected', amount: '5,000', date: '2026-02-12' },
]

export default function Design6() {
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800" dir="rtl">
      {/* Top Bar */}
      <header className="h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-6 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="font-bold text-lg tracking-tight">System<span className="text-neutral-400">OS</span></span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 rounded-md text-sm font-medium text-neutral-600 hover:bg-neutral-200 transition-colors cursor-pointer">
            <Calendar className="w-4 h-4" />
            <span>Feb 2026</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm border border-indigo-200">
            JD
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-64px)] p-4 border-l border-neutral-200 bg-white hidden md:block">
          <div className="space-y-1">
            {[
              { icon: Home, label: 'Overview', active: true },
              { icon: Users, label: 'Investors' },
              { icon: FileText, label: 'Applications' },
              { icon: PieChart, label: 'Analytics' },
              { icon: Settings, label: 'Settings' },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  item.active
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-neutral-100">
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4 px-3">Quick Actions</h4>
            <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-indigo-200">
              <Zap className="w-4 h-4" />
              New Application
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">Investor Dashboard</h1>
              <p className="text-neutral-500">Manage your investment portfolio and applications.</p>
            </div>
            
            {/* Filter Popup Trigger */}
            <div className="relative">
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className={`flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:border-neutral-300 transition-all ${filterOpen ? 'ring-2 ring-indigo-100 border-indigo-300' : ''}`}
              >
                <Filter className="w-4 h-4" />
                Filters
                <ChevronDown className={`w-3 h-3 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Filter Popup */}
              {filterOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-neutral-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-sm">Filter Views</h3>
                    <button onClick={() => setFilterOpen(false)} className="text-neutral-400 hover:text-neutral-600"><X className="w-4 h-4" /></button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-medium text-neutral-500 mb-1.5 block">Status</label>
                      <div className="flex flex-wrap gap-2">
                        {['Active', 'Pending', 'Rejected'].map(status => (
                          <label key={status} className="flex items-center gap-2 px-3 py-1.5 border border-neutral-200 rounded-md text-xs cursor-pointer hover:bg-neutral-50">
                            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                            {status}
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-xs font-medium text-neutral-500 mb-1.5 block">Date Range</label>
                      <select className="w-full text-sm border-neutral-200 rounded-lg focus:border-indigo-500 focus:ring-indigo-500">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>This Year</option>
                      </select>
                    </div>

                    <div className="pt-2 border-t border-neutral-50 flex justify-end gap-2">
                      <button className="text-xs text-neutral-500 hover:text-neutral-900 px-3 py-2">Reset</button>
                      <button className="bg-neutral-900 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-neutral-800">Apply Filters</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Volume', val: '$2.4M', change: '+12%', up: true },
              { label: 'Active Users', val: '842', change: '+5%', up: true },
              { label: 'Pending Apps', val: '45', change: '-2%', up: false },
              { label: 'Rejection Rate', val: '3.2%', change: '-0.5%', up: true }, // Good thing
            ].map((stat, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-neutral-100 shadow-sm">
                <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-2">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-neutral-900">{stat.val}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${stat.up ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                    {stat.change}
                    <ArrowUpRight className={`w-3 h-3 ${!stat.up && 'rotate-90'}`} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center bg-neutral-50/30">
              <h3 className="font-bold text-neutral-800">Recent Transactions</h3>
              <div className="flex gap-2">
                <button className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-neutral-200">
                  <Search className="w-4 h-4" />
                </button>
                <button className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-neutral-200">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-neutral-100 bg-neutral-50/50">
                  <th className="px-6 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider w-16">
                    <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 border-neutral-300" />
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Investor</th>
                  <th className="px-6 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-50">
                {investors.map((item, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50 transition-colors group">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 border-neutral-300" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-600">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-neutral-900">{item.name}</p>
                          <p className="text-xs text-neutral-400 font-mono">{item.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-500">{item.date}</td>
                    <td className="px-6 py-4 text-sm font-bold text-neutral-900">{item.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${
                        item.status === 'Active' || item.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                        item.status === 'Pending' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-neutral-50 text-neutral-600 border-neutral-200'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          item.status === 'Active' || item.status === 'Approved' ? 'bg-emerald-500' :
                          item.status === 'Pending' ? 'bg-amber-500' : 'bg-neutral-400'
                        }`}></span>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-neutral-400 hover:text-emerald-600 hover:bg-emerald-50 rounded transition-colors"><Check className="w-4 h-4" /></button>
                        <button className="p-1.5 text-neutral-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors"><X className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
