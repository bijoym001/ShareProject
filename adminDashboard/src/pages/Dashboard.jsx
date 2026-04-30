import RevenueChart from '../components/Charts/RevenueChart';
import UserGrowthChart from '../components/Charts/UserGrowthChart';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { currentUser, isAdmin } = useAuth();

  // API DATA FETCH WHEN GIVE USER API

  const stats = [
    { title: "Total Revenue", value: "$248,592", change: "+18.2%", color: "emerald" },
    { title: "Active Users", value: "12,459", change: "+8.4%", color: "sky" },
    { title: "Total Orders", value: "3,284", change: "-2.1%", color: "orange" },
    { title: "Conversion Rate", value: "3.24%", change: "+1.3%", color: "purple" },
  ];

  const recentActivity = [
    { time: "2 min ago", text: "New user registered: Sunny Leone", type: "user" },
    { time: "15 min ago", text: "Order #3921 completed ($239)", type: "order" },
    { time: "1 hour ago", text: "Revenue target reached for April", type: "revenue" },
    { time: "3 hours ago", text: "Rahul Verma promoted to Moderator", type: "role" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Welcome, {currentUser.name.split(" ")[0]}</h1>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-3xl p-6 card hover:scale-[1.02] transition-transform shadow-md border border-gray-100">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-4xl font-bold mt-3 text-gray-800">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${stat.color}-100 text-${stat.color}-600`}>
                <i className={`fa-solid fa-${stat.title.includes('Revenue') ? 'dollar' : stat.title.includes('Users') ? 'users' : 'cart-shopping'} text-2xl`}></i>
              </div>
            </div>
            <p className={`mt-6 text-sm flex items-center gap-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
              <i className={`fa-solid fa-arrow-trend-${stat.change.startsWith('+') ? 'up' : 'down'}`}></i>
              {stat.change} this month
            </p>
          </div>
        ))}
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold mb-6 flex items-center gap-2 text-gray-800">
            <span>Revenue Trend</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Last 6 months</span>
          </h3>
          <RevenueChart />
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold mb-6 text-gray-800">User Growth</h3>
          <UserGrowthChart />
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold mb-6 text-gray-800">Recent Activity</h3>
          <div className="space-y-6">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">{activity.text}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold mb-6 text-gray-800">Quick Stats</h3>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-500">TOTAL USERS</p>
              <p className="text-3xl font-bold mt-1 text-gray-800">12,459</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">MONTHLY REVENUE</p>
              <p className="text-3xl font-bold mt-1 text-green-600">$248k</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">AVG. SESSION</p>
              <p className="text-3xl font-bold mt-1 text-gray-800">4m 32s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}