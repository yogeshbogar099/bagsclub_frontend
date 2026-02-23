import { useState, useEffect } from 'react';
import api from '../utils/api';
import { ShoppingBag, Users, UserCheck } from 'lucide-react';

const Stats = () => {
  const [stats, setStats] = useState({
    bagsPrinted: 0,
    clientsServed: 0,
    teamMembers: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
        try {
            const { data } = await api.get('/stats');
            setStats({
              bagsPrinted: Number(data?.bagsPrinted ?? 0),
              clientsServed: Number(data?.clientsServed ?? 0),
              teamMembers: Number(data?.teamMembers ?? 0)
            });
        } catch (error) {
            // Silent fallback for landing page
            setStats({ bagsPrinted: 12500, clientsServed: 450, teamMembers: 25 });
        }
    };
    fetchStats();
  }, []);

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Bags Printed */}
          <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag size={32} />
            </div>
            <div className="text-4xl font-bold font-heading mb-2">
              {Number(stats?.bagsPrinted ?? 0).toLocaleString()}+
            </div>
            <div className="text-green-200 uppercase tracking-wider font-medium">Printed Bags Count</div>
          </div>

          {/* Clients */}
          <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck size={32} />
            </div>
            <div className="text-4xl font-bold font-heading mb-2">
              {Number(stats?.clientsServed ?? 0).toLocaleString()}+
            </div>
            <div className="text-green-200 uppercase tracking-wider font-medium">Clients Served</div>
          </div>

          {/* Team */}
          <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} />
            </div>
            <div className="text-4xl font-bold font-heading mb-2">
              {Number(stats?.teamMembers ?? 0)}+
            </div>
            <div className="text-green-200 uppercase tracking-wider font-medium">Team Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
