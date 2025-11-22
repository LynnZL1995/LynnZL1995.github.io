import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, X, Send, Bot, User as UserIcon, Sparkles } from 'lucide-react';
import { ChatMessage, Sender } from '../types';
import { sendMessageStream } from '../services/geminiService';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'intro',
      text: "Hello! I'm Aether's AI assistant. Ask me anything about UX, design systems, or Aether's portfolio.",
      sender: Sender.AI,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = useCallback(async () => {
    if (!inputText.trim() || isProcessing) return;

    const userText = inputText;
    setInputText('');
    
    // Add User Message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: userText,
      sender: Sender.User,
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setIsProcessing(true);

    // Prepare AI Message placeholder
    const aiMsgId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      { id: aiMsgId, text: '', sender: Sender.AI, isTyping: true },
    ]);

    let accumulatedText = '';

    await sendMessageStream(userText, (chunk) => {
      accumulatedText += chunk;
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMsgId ? { ...msg, text: accumulatedText, isTyping: false } : msg
        )
      );
    });

    setIsProcessing(false);
  }, [inputText, isProcessing]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <div
        className={`mb-4 w-80 sm:w-96 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-75 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-indigo-600/20 to-violet-600/20 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-semibold text-sm text-slate-200">Aether AI</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${
                msg.sender === Sender.User ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.sender === Sender.User ? 'bg-slate-700' : 'bg-primary/20 text-primary'
                }`}
              >
                {msg.sender === Sender.User ? <UserIcon size={14} /> : <Sparkles size={14} />}
              </div>
              <div
                className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                  msg.sender === Sender.User
                    ? 'bg-indigo-600 text-white rounded-tr-none'
                    : 'bg-slate-800 text-slate-300 rounded-tl-none border border-white/5'
                }`}
              >
                {msg.text}
                {msg.isTyping && (
                  <span className="inline-flex gap-1 ml-1 items-center">
                    <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-slate-950/50 border-t border-white/5 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about my design process..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={isProcessing || !inputText.trim()}
            className="bg-primary hover:bg-primary/80 disabled:bg-slate-700 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-14 h-14 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-gradient-to-r from-primary to-violet-600 text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <Bot size={28} className="group-hover:animate-bounce" />}
      </button>
    </div>
  );
};

export default ChatWidget;