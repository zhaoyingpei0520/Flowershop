import React, { useState } from 'react';
import { Camera, MessageSquare, Sprout, Store } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('chat'); // chat, inventory, care

  return (
    <div className="h-screen flex flex-col max-w-md mx-auto bg-white shadow-xl overflow-hidden">
      
      {/* 顶部栏 */}
      <header className="bg-pink-50 p-4 border-b border-pink-100 flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-700 flex items-center gap-2">
          <Sprout size={24} /> FloriAI
        </h1>
        <span className="text-xs bg-pink-200 text-pink-800 px-2 py-1 rounded-full">MVP v0.1</span>
      </header>

      {/* 主内容区 */}
      <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
        
        {/* 1. 智能客服 (Chat) */}
        {activeTab === 'chat' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600 mb-2">我是您的金牌花艺顾问，请问送给谁？</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-gray-100 rounded-full text-sm">送女友</button>
                <button className="px-3 py-1 bg-gray-100 rounded-full text-sm">探病</button>
                <button className="px-3 py-1 bg-gray-100 rounded-full text-sm">道歉</button>
              </div>
            </div>
            
            {/* 模拟聊天气泡 */}
            <div className="flex justify-end">
              <div className="bg-pink-500 text-white p-3 rounded-l-xl rounded-tr-xl max-w-[80%]">
                女朋友生气了，买什么花能哄好？
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white text-gray-800 p-3 rounded-r-xl rounded-tl-xl max-w-[80%] shadow-sm border">
                这题我熟！建议避开红玫瑰（太敷衍），试试<strong>“碎冰蓝”玫瑰</strong>，寓意“送给你的希望是星辰大海”，既浪漫又有诚意。店里刚到一批 A 级货，要不要看下图？
              </div>
            </div>
          </div>
        )}

        {/* 2. 拍照盘库 (Inventory) */}
        {activeTab === 'inventory' && (
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <Camera size={48} className="text-gray-400" />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg active:scale-95 transition">
              📸 拍摄烂花/库存
            </button>
            <p className="text-sm text-gray-500 text-center">
              AI 将自动识别花材种类和数量<br/>并生成损耗报告
            </p>
          </div>
        )}

        {/* 3. 智能养护 (Care) */}
        {activeTab === 'care' && (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
              <h3 className="font-bold text-green-800 mb-2">今日养护提醒</h3>
              <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                <li>绣球花：该喷水了（湿度 &lt; 40%）</li>
                <li>红玫瑰：建议剪根 2cm</li>
              </ul>
            </div>
          </div>
        )}

      </main>

      {/* 底部导航栏 */}
      <nav className="bg-white border-t border-gray-100 flex justify-around p-2 pb-4">
        <button 
          onClick={() => setActiveTab('chat')}
          className={`flex flex-col items-center p-2 ${activeTab === 'chat' ? 'text-pink-600' : 'text-gray-400'}`}
        >
          <MessageSquare size={24} />
          <span className="text-xs mt-1">顾问</span>
        </button>
        <button 
          onClick={() => setActiveTab('inventory')}
          className={`flex flex-col items-center p-2 ${activeTab === 'inventory' ? 'text-blue-600' : 'text-gray-400'}`}
        >
          <Store size={24} />
          <span className="text-xs mt-1">商家</span>
        </button>
        <button 
          onClick={() => setActiveTab('care')}
          className={`flex flex-col items-center p-2 ${activeTab === 'care' ? 'text-green-600' : 'text-gray-400'}`}
        >
          <Sprout size={24} />
          <span className="text-xs mt-1">养护</span>
        </button>
      </nav>
    </div>
  )
}
