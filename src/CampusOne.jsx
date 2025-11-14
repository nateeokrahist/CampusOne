import React, { useState } from 'react';

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

export default function CampusOne() {
  const [activeTab, setActiveTab] = useState('home');
  const [gpa] = useState(3.45);
  const [budget] = useState({ spent: 320, limit: 500 });
  const [safeWalkActive, setSafeWalkActive] = useState(false);

  const tabs = [
    { id: 'home', label: 'Home', Icon: HomeIcon },
    { id: 'academics', label: 'Academics', Icon: HomeIcon },
    { id: 'social', label: 'Social', Icon: HomeIcon },
    { id: 'financial', label: 'Finance', Icon: HomeIcon },
    { id: 'wellness', label: 'Wellness', Icon: HomeIcon },
    { id: 'safety', label: 'Safety', Icon: HomeIcon },
  ];

  const HomeView = () => (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Good Morning, Natee! 🌤️</h1>
          <p className="text-gray-600">Friday, November 14, 2025</p>
        </div>
        <div className="flex gap-3">
          <BellIcon className="w-6 h-6 text-gray-600" />
          <UserIcon className="w-6 h-6 text-gray-600" />
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
          <li>Tech Career Fair - Schine Student Center - 1:00 PM</li>
          <li>Basketball Game vs Duke - Dome - 7:00 PM</li>
          <li>Study Group: Finals Prep - Bird Library - 8:00 PM</li>
        </ul>
      </div>

      <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
        <h3 className="font-semibold text-purple-900 mb-2">💡 Quick Actions</h3>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-white p-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Check Dining Menu</button>
          <button className="bg-white p-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Find Study Rooms</button>
        </div>
      </div>
    </div>
  );

  const PlaceholderView = ({ title, children }) => (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-200">{children}</div>
    </div>
  );

  const AcademicsView = () => (
    <PlaceholderView title="Academic Hub">
      <div className="space-y-3">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-3">Current GPA</h3>
          <p className="text-4xl font-bold">{gpa.toFixed(2)}</p>
          <p className="text-sm mt-2 opacity-90">Target: 3.60 | You're close! 🎯</p>
        </div>
      </div>
    </PlaceholderView>
  );

  const SocialView = () => (
    <PlaceholderView title="Social Hub">
      <div className="space-y-4">
        <p className="text-gray-700">Campus feed and groups will show here.</p>
      </div>
    </PlaceholderView>
  );

  const FinancialView = () => (
    <PlaceholderView title="Financial Center">
      <div className="space-y-3">
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
    </PlaceholderView>
  );

  const WellnessView = () => (
    <PlaceholderView title="Wellness Hub">
      <p className="text-gray-700">Wellness tools and resources.</p>
    </PlaceholderView>
  );

  const SafetyView = () => (
    <PlaceholderView title="Safety Center">
      <div className="space-y-4">
        <div className={"rounded-xl p-6 text-white " + (safeWalkActive ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-orange-500 to-orange-600')}>  
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <MapPinSVG />
              <h3 className="text-lg font-semibold">SafeWalk</h3>
            </div>
            <div className={"w-4 h-4 rounded-full " + (safeWalkActive ? 'bg-white animate-pulse' : 'bg-white/50')} />
          </div>
          {safeWalkActive ? (
            <div>
              <p className="text-sm mb-3">🟢 Active - Your location is being shared</p>
              <p className="text-sm mb-4">Emergency contacts notified. Estimated arrival: 15 min</p>
              <button onClick={() => setSafeWalkActive(false)} className="w-full bg-white text-green-600 py-3 rounded-lg font-medium hover:bg-gray-100">End SafeWalk</button>
            </div>
          ) : (
            <div>
              <p className="text-sm mb-4">Activate GPS tracking and share your location with trusted contacts for safe travel.</p>
              <button onClick={() => setSafeWalkActive(true)} className="w-full bg-white text-orange-600 py-3 rounded-lg font-medium hover:bg-gray-100">Start SafeWalk</button>
            </div>
          )}
        </div>
      </div>
    </PlaceholderView>
  );

  function MapPinSVG() {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    );
  }

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
            const IconComp = tab.Icon;
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={"flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors " + (isActive ? 'text-orange-600' : 'text-gray-500 hover:text-gray-700')}>  
                <IconComp className={"w-5 h-5 "} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}  
