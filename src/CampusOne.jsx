import React, { useState, useEffect } from 'react';

// Inline icon wrapper and small SVG icons (keeps this file self-contained)
const Icon = ({ children, className = '' }) => (
  <span className={"inline-flex items-center justify-center " + className} aria-hidden>
    {children}
  </span>
);
const HomeIcon = (props) => (
  <Icon {...props}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5"/><path d="M9 22V12h6v10"/></svg></Icon>
);
const BellIcon = (props) => (
  <Icon {...props}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 0 0-5-5.917V4a1 1 0 0 0-2 0v1.083A6 6 0 0 0 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></Icon>
);
const UserIcon = (props) => (
  <Icon {...props}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-3-3.87"/><path d="M4 21v-2a4 4 0 0 1 3-3.87"/><circle cx="12" cy="7" r="4"/></svg></Icon>
);

function daysUntil(dateStr) {
  const due = new Date(dateStr);
  const now = new Date();
  const diff = Math.ceil((due - now) / (1000 * 60 * 60 * 24));
  return diff;
}

export default function CampusOne() {
  const [activeTab, setActiveTab] = useState('home');
  const [gpa, setGpa] = useState(() => {
    const stored = localStorage.getItem('campusone_gpa');
    return stored ? parseFloat(stored) : 3.45;
  });
  const [gpaTarget, setGpaTarget] = useState(3.6);
  const [budget] = useState({ spent: 320, limit: 500 });
  const [safeWalkActive, setSafeWalkActive] = useState(() => localStorage.getItem('campusone_safewalk') === 'true');

  // Courses (Fall 2025)
  const [courses, setCourses] = useState(() => {
    const stored = localStorage.getItem('campusone_courses');
    if (stored) return JSON.parse(stored);
    return [
      { name: 'IST 263 - Web Design', grade: 3.7, credits: 3 },
      { name: 'IST 346 - Information Technology', grade: 3.3, credits: 3 },
      { name: 'IST 387 - Intro to Blockchain', grade: 4.0, credits: 3 },
      { name: 'IST 411 - Information Security', grade: 3.7, credits: 3 },
    ];
  });

  // Upcoming assignments
  const [assignments, setAssignments] = useState(() => {
    const stored = localStorage.getItem('campusone_assignments');
    if (stored) return JSON.parse(stored);
    return [
      { title: 'Database Project', due: '2025-11-18' },
      { title: 'Security Essay', due: '2025-11-21' },
      { title: 'Web Portfolio', due: '2025-11-25' },
    ];
  });

  // Social feed (simulated live notifications)
  const [feed, setFeed] = useState(() => {
    const stored = localStorage.getItem('campusone_feed');
    return stored ? JSON.parse(stored) : [
      { id: 1, source: 'Tech Club', text: 'Hackathon this weekend! Sign up now 🚀', time: '2h ago' },
      { id: 2, source: 'Student Union', text: 'Free pizza at the Schine Center today!', time: '4h ago' },
    ];
  });

  // Groups and joined groups
  const [groups, setGroups] = useState([
    'Tech Club', 'IST Study Group', 'Basketball Fans', 'Entrepreneurs'
  ]);
  const [joined, setJoined] = useState(() => {
    const stored = localStorage.getItem('campusone_joined');
    return stored ? JSON.parse(stored) : ['Tech Club'];
  });

  // Profile
  const [profileOpen, setProfileOpen] = useState(false);
  const [profile, setProfile] = useState(() => {
    const stored = localStorage.getItem('campusone_profile');
    return stored ? JSON.parse(stored) : { name: 'Natee Okrahist', major: 'Information Technology', classYear: 'Senior (2026)', connections: ['Alice', 'Marcus'] };
  });
  const [newConnection, setNewConnection] = useState('');

  // Persist to localStorage
  useEffect(() => { localStorage.setItem('campusone_gpa', String(gpa)); }, [gpa]);
  useEffect(() => { localStorage.setItem('campusone_safewalk', String(safeWalkActive)); }, [safeWalkActive]);
  useEffect(() => { localStorage.setItem('campusone_courses', JSON.stringify(courses)); }, [courses]);
  useEffect(() => { localStorage.setItem('campusone_assignments', JSON.stringify(assignments)); }, [assignments]);
  useEffect(() => { localStorage.setItem('campusone_feed', JSON.stringify(feed)); }, [feed]);
  useEffect(() => { localStorage.setItem('campusone_joined', JSON.stringify(joined)); }, [joined]);
  useEffect(() => { localStorage.setItem('campusone_profile', JSON.stringify(profile)); }, [profile]);

  // Simulate live feed notifications (every 20s)
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const samples = [
        { source: 'Campus Events', text: 'Career fair booth opening at Schine - now' },
        { source: 'Athletics', text: 'Ticket giveaway at the Dome - limited supply' },
        { source: 'Library', text: 'Study room availability updated' }
      ];
      const sample = samples[Math.floor(Math.random() * samples.length)];
      setFeed(prev => [{ id, source: sample.source, text: sample.text, time: 'just now' }, ...prev].slice(0, 20));
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  // GPA progress visual (percentage toward target)
  const gpaPercent = Math.min(100, Math.round((gpa / gpaTarget) * 100));

  // Helpers
  function joinGroup(name) {
    if (!joined.includes(name)) setJoined(prev => [...prev, name]);
  }
  function leaveGroup(name) {
    setJoined(prev => prev.filter(g => g !== name));
  }
  function addAssignment(title, due) {
    setAssignments(prev => [...prev, { title, due }]);
  }
  function addConnection(name) {
    if (!name) return;
    setProfile(prev => ({ ...prev, connections: [...prev.connections, name] }));
    setNewConnection('');
  }

  // Views
  const HomeView = () => (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Good Morning, {profile.name.split(' ')[0]}! 🌤️</h1>
          <p className="text-gray-600">Friday, November 14, 2025</p>
        </div>
        <div className="flex gap-3">
          <BellIcon className="w-6 h-6 text-gray-600 cursor-pointer" onClick={() => setActiveTab('social')} />
          <UserIcon className="w-6 h-6 text-gray-600 cursor-pointer" onClick={() => setProfileOpen(true)} />
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
        <h2 className="text-lg font-semibold mb-2">Today's Schedule</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span>IST 263 - Web Design</span>
            <span>9:30 AM - 10:50 AM</span>
          </div>
          <div className="flex justify-between items-center">
            <span>IST 346 - Information Technology</span>
            <span>2:00 PM - 3:20 PM</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-sm">Current GPA</span>
            <span className="text-green-500">▲</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">{gpa.toFixed(2)}</p>
          <div className="w-full bg-gray-100 rounded-full h-3 mt-3">
            <div className="bg-green-400 h-3 rounded-full" style={{ width: `${gpaPercent}%` }} />
          </div>
          <p className="text-xs text-gray-500 mt-2">Target: {gpaTarget.toFixed(2)} ({gpaPercent}%)</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-sm">Budget Left</span>
            <span className="text-blue-500">$</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">${budget.limit - budget.spent}</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">📢 Campus Events Today</h3>
        <ul className="space-y-2 text-sm text-blue-800 list-disc list-inside">
          {feed.slice(0,3).map(item => (
            <li key={item.id}>{item.source} - {item.text} <span className="text-xs text-gray-500">({item.time})</span></li>
          ))}
        </ul>
      </div>

    </div>
  );

  const AcademicsView = () => (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Academic Hub</h2>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">Current GPA</h3>
        <p className="text-4xl font-bold">{gpa.toFixed(2)}</p>
        <p className="text-sm mt-2 opacity-90">Target: {gpaTarget.toFixed(2)} | You're close! 🎯</p>
      </div>

      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-3">Current Courses (Fall 2025)</h3>
        <div className="space-y-3">
          {courses.map((course, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">{course.name}</p>
                <p className="text-sm text-gray-600">{course.credits} Credits</p>
              </div>
              <span className="font-bold text-lg text-orange-600">{(course.grade).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
        <h3 className="font-semibold text-yellow-900 mb-2">📝 Upcoming Assignments</h3>
        <ul className="space-y-2 text-sm text-yellow-800">
          {assignments.map((a, i) => (
            <li key={i}>• {a.title} - Due {a.due} ({daysUntil(a.due)} days)</li>
          ))}
        </ul>
      </div>

    </div>
  );

  const SocialView = () => (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Social Hub</h2>

      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">Campus Feed <span className="text-xs text-green-600 ml-2">Live</span></h3>
        </div>
        <div className="space-y-4">
          {feed.map((item) => (
            <div key={item.id} className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">{item.source[0]}</div>
                <div>
                  <p className="font-semibold text-gray-800">{item.source}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-3">Your Groups</h3>
        <div className="grid grid-cols-2 gap-3">
          {groups.map((group, i) => (
            <div key={i} className="p-3 bg-blue-50 rounded-lg text-center">
              <p className="font-medium text-blue-900 text-sm mb-2">{group}</p>
              {joined.includes(group) ? (
                <button onClick={() => leaveGroup(group)} className="text-sm py-1 px-3 bg-white rounded-lg border">Leave</button>
              ) : (
                <button onClick={() => joinGroup(group)} className="text-sm py-1 px-3 bg-orange-500 text-white rounded-lg">Join</button>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );

  const FinancialView = () => (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Financial Center</h2>
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">Monthly Budget</h3>
        <div className="flex justify-between items-end mb-3">
          <div>
            <p className="text-sm opacity-90">Spent</p>
            <p className="text-3xl font-bold">${budget.spent}</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-90">Remaining</p>
            <p className="text-3xl font-bold">${budget.limit - budget.spent}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const WellnessView = () => (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Wellness Hub</h2>
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">How are you feeling today?</h3>
      </div>
    </div>
  );

  const SafetyView = () => (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Safety Center</h2>
      <div className={`rounded-xl p-6 text-white transition-all ${
        safeWalkActive ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-orange-500 to-orange-600'
      }`}> 
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="2" /></svg>
            <h3 className="text-lg font-semibold">SafeWalk</h3>
          </div>
          <div className={`w-4 h-4 rounded-full ${safeWalkActive ? 'bg-white animate-pulse' : 'bg-white/50'}`} />
        </div>
        {safeWalkActive ? (
          <div>
            <p className="text-sm mb-3">🟢 Active - Your location is being shared</p>
            <p className="text-sm mb-4">Emergency contacts notified. Estimated arrival: 15 min</p>
            <button 
              onClick={() => setSafeWalkActive(false)}
              className="w-full bg-white text-green-600 py-3 rounded-lg font-medium hover:bg-gray-100"
            >
              End SafeWalk
            </button>
          </div>
        ) : (
          <div>
            <p className="text-sm mb-4">Activate GPS tracking and share your location with trusted contacts for safe travel.</p>
            <button 
              onClick={() => setSafeWalkActive(true)}
              className="w-full bg-white text-orange-600 py-3 rounded-lg font-medium hover:bg-gray-100"
            >
              Start SafeWalk
            </button>
          </div>
        )}
      </div>

    </div>
  );

  const ProfileModal = () => (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Profile</h3>
          <button onClick={() => setProfileOpen(false)} className="text-sm text-gray-600">Close</button>
        </div>
        <div className="space-y-3">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Major:</strong> {profile.major}</p>
          <p><strong>Class:</strong> {profile.classYear}</p>
          <div>
            <p className="font-semibold mt-3">Connections</p>
            <ul className="space-y-2 mt-2">
              {profile.connections.map((c, i) => <li key={i} className="bg-gray-50 p-2 rounded">{c}</li>)}
            </ul>
            <div className="flex gap-2 mt-3">
              <input value={newConnection} onChange={e => setNewConnection(e.target.value)} className="border p-2 rounded flex-1" placeholder="Add connection name" />
              <button onClick={() => addConnection(newConnection)} className="bg-orange-500 text-white px-3 rounded">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderView = () => {
    switch (activeTab) {
      case 'home': return <HomeView />;
      case 'academics': return <AcademicsView />;
      case 'social': return <SocialView />;
      case 'financial': return <FinancialView />;
      case 'wellness': return <WellnessView />;
      case 'safety': return <SafetyView />;
      default: return <HomeView />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HomeIcon className="w-6 h-6" />
            <span className="text-xl font-bold">CampusOne</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Syracuse</span>
            <BellIcon className="w-5 h-5 cursor-pointer" onClick={() => setActiveTab('social')} />
            <UserIcon className="w-5 h-5 cursor-pointer" onClick={() => setProfileOpen(true)} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {renderView()}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around py-2">
          {[{id:'home',label:'Home'},{id:'academics',label:'Academics'},{id:'social',label:'Social'},{id:'financial',label:'Finance'},{id:'wellness',label:'Wellness'},{id:'safety',label:'Safety'}].map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${isActive ? 'text-orange-600' : 'text-gray-500 hover:text-gray-700'}`}> 
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {profileOpen && <ProfileModal />}
    </div>
  );
}
