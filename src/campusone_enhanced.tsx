import React, { useState } from 'react';
import { Home, BookOpen, Users, DollarSign, Heart, Shield, Menu, Bell, User, Calendar, TrendingUp, MessageCircle, MapPin, Plus } from 'lucide-react';

export default function CampusOne() {
  const [activeTab, setActiveTab] = useState('home');
  const [gpa, setGpa] = useState(3.45);
  const [budget, setBudget] = useState({ spent: 320, limit: 500 });
  const [safeWalkActive, setSafeWalkActive] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  const userProfile = {
    name: 'Natee',
    major: 'Information Management & Technology',
    year: 'Junior',
    connections: 47,
    groups: 4
  };

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'academics', icon: BookOpen, label: 'Academics' },
    { id: 'social', icon: Users, label: 'Social' },
    { id: 'financial', icon: DollarSign, label: 'Finance' },
    { id: 'wellness', icon: Heart, label: 'Wellness' },
    { id: 'safety', icon: Shield, label: 'Safety' },
  ];

  const ProfileModal = () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowProfile(false)}>
      <div className="bg-white rounded-xl max-w-md w-full p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
          <button onClick={() => setShowProfile(false)} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-3">
            {userProfile.name[0]}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{userProfile.name}</h3>
          <p className="text-gray-600">{userProfile.major}</p>
          <p className="text-sm text-gray-500">{userProfile.year} • Syracuse University</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">{gpa.toFixed(2)}</p>
            <p className="text-xs text-gray-600">GPA</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">{userProfile.connections}</p>
            <p className="text-xs text-gray-600">Connections</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">{userProfile.groups}</p>
            <p className="text-xs text-gray-600">Groups</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800">Recent Connections</h4>
          {['Sarah Chen', 'Marcus Johnson', 'Emily Rodriguez', 'James Kim'].map((name, i) => (
            <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {name[0]}
              </div>
              <div>
                <p className="font-medium text-gray-800 text-sm">{name}</p>
                <p className="text-xs text-gray-500">IST Major • {userProfile.year}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600">
          Edit Profile
        </button>
      </div>
    </div>
  );

  const HomeView = () => (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Good Morning, Natee! 🌤️</h1>
          <p className="text-gray-600">Friday, November 14, 2025</p>
        </div>
        <div className="flex gap-3">
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
          <User className="w-6 h-6 text-gray-600 cursor-pointer" onClick={() => setShowProfile(true)} />
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
        <h2 className="text-lg font-semibold mb-2">Today's Schedule</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>IST 263 - Web Design</span>
            <span className="text-sm">9:30 AM - 10:50 AM</span>
          </div>
          <div className="flex justify-between items-center">
            <span>IST 346 - Information Technology</span>
            <span className="text-sm">2:00 PM - 3:20 PM</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-sm">Current GPA</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-800">{gpa.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600 text-sm">Budget Left</span>
            <DollarSign className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-800">${budget.limit - budget.spent}</p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">📢 Campus Events Today</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• Tech Career Fair - Schine Student Center - 1:00 PM</li>
          <li>• Basketball Game vs Duke - Dome - 7:00 PM</li>
          <li>• Study Group: Finals Prep - Bird Library - 8:00 PM</li>
        </ul>
      </div>

      <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
        <h3 className="font-semibold text-purple-900 mb-2">💡 Quick Actions</h3>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-white p-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            Check Dining Menu
          </button>
          <button className="bg-white p-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            Find Study Rooms
          </button>
        </div>
      </div>
    </div>
  );

  const AcademicsView = () => (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Academic Hub</h2>
      
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">Current GPA</h3>
        <p className="text-4xl font-bold">{gpa.toFixed(2)}</p>
        <p className="text-sm mt-2 opacity-90">Target: 3.60 | You're close! 🎯</p>
      </div>

      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-3">Current Courses (Fall 2025)</h3>
        <div className="space-y-3">
          {[
            { name: 'IST 263 - Web Design', grade: 'A-', credits: 3, progress: 85 },
            { name: 'IST 346 - Information Tech', grade: 'B+', credits: 3, progress: 78 },
            { name: 'IST 387 - Intro to Blockchain', grade: 'A', credits: 3, progress: 92 },
            { name: 'IST 411 - Information Security', grade: 'A-', credits: 3, progress: 88 }
          ].map((course, i) => (
            <div key={i} className="p-3 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-medium text-gray-800">{course.name}</p>
                  <p className="text-sm text-gray-600">{course.credits} Credits</p>
                </div>
                <span className="font-bold text-lg text-orange-600">{course.grade}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-500 rounded-full h-2 transition-all"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <span className="text-xs text-gray-600">{course.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
        <h3 className="font-semibold text-yellow-900 mb-2">📝 Upcoming Assignments</h3>
        <ul className="space-y-2 text-sm text-yellow-800">
          <li>• Database Project - Due Nov 18 (4 days)</li>
          <li>• Security Essay - Due Nov 21 (1 week)</li>
          <li>• Web Portfolio - Due Nov 25 (11 days)</li>
        </ul>
      </div>
    </div>
  );

  const SocialView = () => (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Social Hub</h2>
      
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Bell className="w-5 h-5 animate-pulse" />
          <h3 className="font-semibold">Live Campus Events</h3>
        </div>
        <p className="text-sm opacity-90">🔴 Happening Now: Tech Career Fair @ Schine Center</p>
        <p className="text-sm opacity-90">⏰ Starting in 2 hours: Basketball vs Duke @ Dome</p>
      </div>
      
      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">Campus Feed</h3>
          <Plus className="w-5 h-5 text-orange-500 cursor-pointer" />
        </div>
        <div className="space-y-4">
          {[
            { user: 'Tech Club', post: 'Hackathon this weekend! Sign up now 🚀', time: '2h ago', live: true },
            { user: 'Student Union', post: 'Free pizza at the Schine Center today!', time: '4h ago', live: false },
            { user: 'Basketball Team', post: 'Game tonight vs Duke. Let\'s go Orange! 🏀', time: '6h ago', live: false }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {item.user[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-gray-800">{item.user}</p>
                    {item.live && <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">LIVE</span>}
                  </div>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
              <p className="text-gray-700">{item.post}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-800">Your Groups ({userProfile.groups})</h3>
          <button className="text-sm text-orange-600 font-medium">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'Tech Club', members: 234, color: 'blue' },
            { name: 'IST Study Group', members: 45, color: 'green' },
            { name: 'Basketball Fans', members: 512, color: 'orange' },
            { name: 'Entrepreneurs', members: 89, color: 'purple' }
          ].map((group, i) => (
            <div key={i} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-medium text-gray-900 text-sm mb-1">{group.name}</p>
              <p className="text-xs text-gray-600">{group.members} members</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-3">Discover Groups</h3>
        <div className="space-y-3">
          {[
            { name: 'AI & Machine Learning Club', members: 178, category: 'Technology' },
            { name: 'Photography Society', members: 92, category: 'Arts' },
            { name: 'Debate Team', members: 56, category: 'Academics' }
          ].map((group, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800 text-sm">{group.name}</p>
                <p className="text-xs text-gray-600">{group.members} members • {group.category}</p>
              </div>
              <button className="bg-orange-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-orange-600">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">👥 Your Connections</h3>
        <p className="text-sm text-blue-800 mb-3">You have {userProfile.connections} connections</p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          Find More Connections
        </button>
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
        <div className="w-full bg-green-400 rounded-full h-3">
          <div 
            className="bg-white rounded-full h-3 transition-all"
            style={{ width: `${(budget.spent / budget.limit) * 100}%` }}
          />
        </div>
        <p className="text-sm mt-2 opacity-90">Budget Limit: ${budget.limit}/month</p>
      </div>

      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-3">Recent Transactions</h3>
        <div className="space-y-3">
          {[
            { name: 'Dining Hall', amount: 45, date: 'Nov 13' },
            { name: 'Textbooks', amount: 120, date: 'Nov 10' },
            { name: 'Coffee Shop', amount: 15, date: 'Nov 9' },
            { name: 'Groceries', amount: 65, date: 'Nov 7' }
          ].map((txn, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">{txn.name}</p>
                <p className="text-sm text-gray-600">{txn.date}</p>
              </div>
              <span className="font-bold text-red-600">-${txn.amount}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">💰 Scholarship Alerts</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• Tech Excellence Scholarship - Deadline: Dec 1 ($5,000)</li>
          <li>• Syracuse Merit Award - Deadline: Dec 15 ($3,000)</li>
        </ul>
      </div>
    </div>
  );

  const WellnessView = () => (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Wellness Hub</h2>
      
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-3">How are you feeling today?</h3>
        <div className="flex gap-3 justify-center mt-4">
          {['😊', '😌', '😐', '😔', '😢'].map((emoji, i) => (
            <button key={i} className="text-4xl hover:scale-110 transition-transform">
              {emoji}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <MessageCircle className="w-5 h-5 text-purple-500" />
          <h3 className="font-semibold text-gray-800">Anonymous Support Chat</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">Need someone to talk to? Our 24/7 chatbot is here for you, completely anonymous.</p>
        <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-medium hover:bg-purple-600">
          Start Chat
        </button>
      </div>

      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-3">Campus Resources</h3>
        <div className="space-y-2">
          {[
            'Counseling Center - 315-443-4715',
            'Health Services - 315-443-9005',
            'Crisis Support - 24/7 Hotline',
            'Peer Mentoring Program'
          ].map((resource, i) => (
            <div key={i} className="p-3 bg-purple-50 rounded-lg text-sm text-gray-700">
              {resource}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
        <h3 className="font-semibold text-green-900 mb-2">🏃 Fitness & Activities</h3>
        <ul className="space-y-2 text-sm text-green-800">
          <li>• Yoga Class - Rec Center - 6:00 PM</li>
          <li>• Basketball Pickup - Court 2 - 7:30 PM</li>
          <li>• Meditation Session - Online - 9:00 PM</li>
        </ul>
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
            <MapPin className="w-6 h-6" />
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

      <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
        <h3 className="font-semibold text-red-900 mb-3">🚨 Emergency Contacts</h3>
        <div className="space-y-2">
          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700">
            CALL 911
          </button>
          <button className="w-full bg-white text-red-600 py-3 rounded-lg font-medium border-2 border-red-600 hover:bg-red-50">
            Campus Police - 315-443-2224
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-3">Safety Features</h3>
        <div className="space-y-3">
          {[
            { icon: Shield, text: 'GPS Location Sharing', color: 'blue' },
            { icon: Bell, text: 'Emergency Alerts', color: 'orange' },
            { icon: Users, text: 'Trusted Contacts', color: 'green' },
            { icon: MapPin, text: 'Safe Routes', color: 'purple' }
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Icon className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">{feature.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <p className="text-sm text-blue-900">
          <strong>Safety Tip:</strong> Always let someone know where you're going, especially at night. Use SafeWalk for added security.
        </p>
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
      {showProfile && <ProfileModal />}
      
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Menu className="w-6 h-6" />
            <span className="text-xl font-bold">CampusOne</span>
          </div>
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Syracuse</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {renderView()}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around py-2">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                  isActive ? 'text-orange-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}