'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function FloatingChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    return (
        <div className="fixed bottom-8 left-8 z-50">
            {isOpen ? (
                <div className="glass-card rounded-2xl shadow-2xl w-80 animate-scale-in">
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse" />
                            <span className="font-semibold text-white">Chat with us</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="p-4 h-64 overflow-y-auto">
                        <div className="bg-indigo-900/50 rounded-lg p-3 mb-3">
                            <p className="text-sm text-gray-300">
                                Hi! 👋 How can we help you learn better today?
                            </p>
                        </div>
                    </div>
                    <div className="p-4 border-t border-white/10">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 bg-indigo-900/30 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            <button className="p-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg hover:shadow-lg transition-all">
                                <Send className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-4 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 focus-visible-ring"
                    aria-label="Open chat"
                >
                    <MessageCircle className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}
